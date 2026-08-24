I want you to recreate and improve the following website from top to bottom:

**Reference website:**
[https://healthbilling.us/](https://healthbilling.us/)

The goal is **not just to copy it visually**. I want a more polished, professional, production-ready version with improved color grading, typography, spacing, responsiveness, visual hierarchy, and overall UX while keeping the original website's functionality and content structure intact.

## 1. Explore the Entire Website First

Before writing any code, thoroughly inspect the complete reference website.

Use **Headless Mode/browser exploration** and go through the website carefully from top to bottom.

Important:

* Do not rely only on visible navigation routes.
* Some sections/components may appear dynamically without route changes.
* Some components may use lazy loading or delayed rendering.
* Wait for content to fully load before assuming a section is empty or missing.
* Scroll through the entire website.
* Interact with buttons, tabs, forms, accordions, dropdowns, calculators, CTAs, and any other interactive elements.
* Check desktop, tablet, and mobile behavior.
* Do not ignore small sections, footer content, forms, animations, states, or secondary UI.
* Check loading, hover, active, error, success, empty, and validation states where applicable.

I want a **complete audit of the reference site before implementation begins**.

## 2. Calculator

The website contains a calculator.

The calculator is part of the project and must be fully recreated.

Study:

* Inputs
* Calculations
* Formulas/logic
* Validation
* Results
* Formatting
* Responsive behavior
* Reset/recalculate behavior
* Any related CTA or supporting content

Do not create a visually similar fake calculator. Its actual functionality must work.

## 3. Technology Stack

Build the project using:

* **Next.js**
* **TypeScript**
* **Tailwind CSS**

Use a clean, maintainable, scalable component architecture.

Avoid unnecessary dependencies.

## 4. Improve the Design

The new website should feel more premium and professionally designed than the current reference.

Improve things such as:

* Color palette and color grading
* Typography
* Spacing
* Section hierarchy
* Cards
* Buttons
* Forms
* Icons
* Shadows
* Borders
* Background treatments
* Responsive layouts
* Mobile UX
* CTA visibility
* Visual consistency

Do not over-design it. It should remain suitable for a professional healthcare/billing-related business.

## 5. Performance Is Extremely Important

The current implementation must **not feel slow or heavy**.

Optimize aggressively for fast loading.

Pay attention to:

* Next.js Image optimization
* Font optimization
* Proper image sizing
* Lazy loading only where appropriate
* Code splitting
* Minimal JavaScript shipped to the browser
* Avoiding unnecessary client components
* Server Components where appropriate
* Preventing layout shifts
* Avoiding huge third-party libraries
* Efficient animations
* Optimized assets
* Good Core Web Vitals

Do not lazy-load important above-the-fold content just for the sake of lazy loading.

The homepage should feel almost instant.

## 6. SEO

Build this project with SEO in mind from the beginning, not as an afterthought.

Implement proper:

* Semantic HTML
* Heading hierarchy
* Page titles
* Meta descriptions
* Open Graph metadata
* Twitter metadata where useful
* Canonical URLs
* Sitemap
* robots.txt
* Structured data/schema where relevant
* Image alt text
* Accessible links and buttons
* Server-rendered/indexable important content
* Clean URLs
* Internal linking
* Good Core Web Vitals

Avoid making important SEO content dependent entirely on client-side JavaScript.

## 7. Audit / Contact Email Functionality

The audit-related page/form must be able to send an email.

For now, **we are not building a separate backend server just for this functionality**.

Implement the simplest secure production-ready solution available within the Next.js/frontend architecture.

If a third-party frontend-safe email/form service is required, use one that does **not expose private API keys or credentials in browser code**.

Never hard-code sensitive API keys, SMTP passwords, or private credentials in the client bundle.

In the future, we may introduce a dedicated backend if the requirements grow.

Include proper:

* Form validation
* Loading state
* Success state
* Error state
* Spam/basic abuse protection where practical
* User feedback after submission

## 8. Responsive Design

The entire website must work properly across:

* Large desktop
* Laptop
* Tablet
* Mobile

Do not simply shrink the desktop layout.

Sections should be intentionally redesigned where necessary for smaller screens.

Pay particular attention to:

* Navigation
* Forms
* Calculator
* Tables/data
* Cards
* CTA sections
* Footer
* Typography
* Spacing

## 9. Code Quality

Keep the implementation clean and production-ready.

Use:

* Reusable components
* Clear folder structure
* Strong TypeScript typing
* Proper separation of concerns
* Consistent naming
* Centralized design tokens where appropriate
* Reusable UI primitives
* Minimal duplicated code

Do not create one huge page component containing everything.

## 10. Accessibility

Maintain good accessibility practices:

* Semantic elements
* Keyboard navigation
* Proper labels
* Focus states
* Good contrast
* Accessible forms
* ARIA only where necessary
* Meaningful alt text
* Proper button/link usage

## 11. Do Not Assume Requirements

This is important.

**Do not start coding immediately.**

First explore and understand the entire reference website.

After completing your investigation, if anything is unclear, missing, contradictory, technically questionable, or requires a product/design decision, **ask me before making assumptions**.

I would rather answer questions upfront than have you implement something based on a guess.

## 12. Production Quality

Treat this as the **final implementation intended to go to production**.

Do not approach it as:

* A prototype
* A rough clone
* A temporary mockup
* A first draft
* An MVP that will be rewritten later

The result should be something we can confidently review, test, and deploy.

Before considering the work complete, verify:

* Every reference section has been accounted for.
* All interactive functionality works.
* Calculator logic works correctly.
* Forms work correctly.
* Email submission works.
* Mobile responsiveness is correct.
* No obvious console errors exist.
* No broken links exist.
* No missing images/assets exist.
* No accidental horizontal scrolling exists.
* Lighthouse/Core Web Vitals are reasonable.
* SEO essentials are implemented.
* Accessibility basics are covered.
* There are no exposed secrets.
* Production build succeeds.

### Your first task

**Do not write code yet.**

First, launch the reference website in Headless Mode and perform a complete inspection of:

[https://healthbilling.us/](https://healthbilling.us/)

Understand its pages, sections, functionality, calculator, forms, interactions, responsive behavior, and overall structure.

Once the investigation is complete, report back with your understanding and ask any questions you need answered before implementation begins.
