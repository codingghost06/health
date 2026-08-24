
function go(id){
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  const p=document.getElementById(id);
  if(p){p.classList.add('on');window.scrollTo({top:0,behavior:'smooth'});}
  // close mobile nav
  const nl=document.getElementById('navLinks');
  nl.classList.remove('nav-open');
}
function toggleNav(){
  const nl=document.getElementById('navLinks');
  nl.classList.toggle('nav-open');
}
function faq(el){
  const item=el.parentElement;
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!wasOpen)item.classList.add('open');
}
// animate metric bars
function animateBars(){
  document.querySelectorAll('.mr-fill').forEach(bar=>{
    const w=bar.dataset.w||'80';
    bar.style.width='0%';
    setTimeout(()=>{bar.style.width=w+'%';},200);
  });
}
window.addEventListener('load',animateBars);
document.addEventListener('click',e=>{
  if(e.target.closest('#home'))setTimeout(animateBars,100);
});

function money(n){return '$'+Math.round(n).toLocaleString('en-US');}
async function submitLead(e){
  e.preventDefault();
  const form=e.target;
  const btn=document.getElementById('leadSubmit');
  const status=document.getElementById('leadStatus');
  const key=form.querySelector('[name=access_key]').value;
  if(!key || key==='YOUR_WEB3FORMS_ACCESS_KEY'){
    status.style.display='block';
    status.style.color='#b91c1c';
    status.textContent='Form not configured yet. Please email hello@healthbilling.us or call +1 (415) 939-6721.';
    return false;
  }
  const data=Object.fromEntries(new FormData(form).entries());
  btn.disabled=true; const orig=btn.textContent; btn.textContent='Sending...';
  status.style.display='block'; status.style.color='var(--muted)'; status.textContent='Submitting your request...';
  try{
    const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)});
    const j=await r.json();
    if(j.success){
      status.style.color='#047857';
      status.textContent='✓ Thank you! A revenue cycle specialist will reach out within 4 business hours.';
      form.reset();
    } else {
      status.style.color='#b91c1c';
      status.textContent='Something went wrong: '+(j.message||'Please try again or email hello@healthbilling.us');
    }
  }catch(err){
    status.style.color='#b91c1c';
    status.textContent='Network error. Please email hello@healthbilling.us or call +1 (415) 939-6721.';
  }finally{
    btn.disabled=false; btn.textContent=orig;
  }
  return false;
}
function updateCalc(){
  const visits=Number(document.getElementById('calcVisits')?.value||0);
  const allowed=Number(document.getElementById('calcAllowed')?.value||0);
  const currentNcr=Number(document.getElementById('calcCurrentNcr')?.value||0)/100;
  const improvedNcr=Number(document.getElementById('calcImprovedNcr')?.value||0)/100;
  const ar=Number(document.getElementById('calcAr')?.value||0);
  const arRecovery=Number(document.getElementById('calcArRecovery')?.value||0)/100;
  const specialty=Number(document.getElementById('calcSpecialty')?.value||1);
  const gross=visits*allowed;
  const current=gross*currentNcr;
  const projected=gross*improvedNcr*specialty;
  const arGain=ar*arRecovery;
  const monthly=Math.max(0,(projected-current)+arGain);
  const yearly=monthly*12;
  const gap=Math.max(0,(improvedNcr-currentNcr)*100);
  if(document.getElementById('visitsLabel'))document.getElementById('visitsLabel').textContent=visits.toLocaleString('en-US');
  if(document.getElementById('calcCurrent'))document.getElementById('calcCurrent').textContent=money(current);
  if(document.getElementById('calcProjected'))document.getElementById('calcProjected').textContent=money(projected);
  if(document.getElementById('calcArGain'))document.getElementById('calcArGain').textContent=money(arGain);
  if(document.getElementById('calcMonthly'))document.getElementById('calcMonthly').textContent=money(monthly);
  if(document.getElementById('calcYearly'))document.getElementById('calcYearly').textContent=money(yearly);
  if(document.getElementById('calcGap'))document.getElementById('calcGap').textContent=gap.toFixed(0)+'%';
}
window.addEventListener('load',updateCalc);

// mobile nav style
const style=document.createElement('style');
style.textContent=`
  @media(max-width:900px){
    #navLinks.nav-open{
      display:flex!important;flex-direction:column;
      position:fixed;top:68px;left:0;right:0;
      background:white;padding:16px 24px 24px;
      box-shadow:0 8px 32px rgba(0,0,0,.1);
      z-index:998;border-top:1px solid #dde6ef;gap:4px;
    }
    #navLinks.nav-open a{padding:12px 16px;font-size:15px;border-radius:8px}
    #navLinks.nav-open .nav-cta-btn{margin-top:8px;text-align:center}
  }
`;
document.head.appendChild(style);
