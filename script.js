// Decipher Shirts Landing — script.js

const $ = (sel) => document.querySelector(sel);

// Countdown
(function countdown(){
  const target = window.__LAUNCH_TS__ || (Date.now() + 30*24*60*60*1000);
  function tick(){
    const now = Date.now();
    let diff = Math.max(0, target - now);

    const d = Math.floor(diff / (1000*60*60*24));
    diff -= d * 24*60*60*1000;
    const h = Math.floor(diff / (1000*60*60));
    diff -= h * 60*60*1000;
    const m = Math.floor(diff / (1000*60));
    diff -= m * 60*1000;
    const s = Math.floor(diff / 1000);

    $('#dd').textContent = String(d).padStart(2,'0');
    $('#hh').textContent = String(h).padStart(2,'0');
    $('#mm').textContent = String(m).padStart(2,'0');
    $('#ss').textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
})();

// Year
(function(){ const y = new Date().getFullYear(); const el = document.getElementById('year'); if(el) el.textContent = y; })();

// Copy email
(function(){
  const btn = document.querySelector('button.copy');
  const status = document.getElementById('copied');
  if(!btn) return;
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try{
      await navigator.clipboard.writeText(text);
      status.textContent = 'Copied!';
      setTimeout(()=> status.textContent = '', 2000);
    }catch(e){
      status.textContent = 'Copy failed';
      setTimeout(()=> status.textContent = '', 2000);
    }
  })
})();

// Form — mailto fallback
(function(){
  const form = document.getElementById('notify-form');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if(!email) return;
    const subject = encodeURIComponent('Notify me about Decipher Shirts');
    const body = encodeURIComponent(`Add me to your launch list.\n\nEmail: ${email}`);
    const mailto = `mailto:deciphershirts@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  })
})();

// Reveal on scroll
(function(){
  const cards = document.querySelectorAll('.card.reveal');
  const io = new IntersectionObserver((entries) => {
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    }
  }, {threshold:.25});
  cards.forEach(c => io.observe(c));
})();

// Subtle parallax on hero
(function(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  let raf = null;
  hero.addEventListener('pointermove', (ev) => {
    const rect = hero.getBoundingClientRect();
    const x = (ev.clientX - rect.left) / rect.width - .5;
    const y = (ev.clientY - rect.top) / rect.height - .5;
    if(raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--parx', x.toFixed(3));
      document.documentElement.style.setProperty('--pary', y.toFixed(3));
      hero.style.transform = `perspective(1200px) rotateX(${y*-2}deg) rotateY(${x*2}deg)`;
    });
  });
  hero.addEventListener('pointerleave', ()=> {
    hero.style.transform = 'none';
  });
})();
