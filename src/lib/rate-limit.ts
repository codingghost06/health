/**
 * Minimal in-memory sliding-window rate limiter.
 *
 * Good enough as a first line of abuse protection for a low-volume lead form
 * without adding infrastructure. Note: state is per server instance, so on
 * serverless platforms the limit is per warm instance rather than global —
 * swap for Upstash/Redis if the form ever needs a hard global cap.
 */

interface Bucket {
  hits: number[];
}

const buckets = new Map<string, Bucket>();
const MAX_KEYS = 5000;

export interface RateLimitOptions {
  /** Max requests per window. */
  limit: number;
  /** Window length in ms. */
  windowMs: number;
}

export function rateLimit(key: string, { limit, windowMs }: RateLimitOptions): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const bucket = buckets.get(key) ?? { hits: [] };
  bucket.hits = bucket.hits.filter((t) => now - t < windowMs);

  if (bucket.hits.length >= limit) {
    const retryAfterSec = Math.ceil((windowMs - (now - bucket.hits[0])) / 1000);
    return { ok: false, retryAfterSec };
  }

  bucket.hits.push(now);
  buckets.set(key, bucket);

  // Crude memory bound: drop the oldest entries if the map grows too large.
  if (buckets.size > MAX_KEYS) {
    const oldest = buckets.keys().next().value;
    if (oldest) buckets.delete(oldest);
  }
  return { ok: true, retryAfterSec: 0 };
}
