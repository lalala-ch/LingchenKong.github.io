const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function safe(s){if(!s)return '';try{const u=new URL(s,location.href);return ['http:','https:'].includes(u.protocol)?esc(s):''}catch{return ''}}
const link=(url,label)=>safe(url)?`<a href="${safe(url)}" target="_blank" rel="noreferrer">${label}</a>`:'';
const formatNews=s=>esc(s).replace(/\*([^*\n]+)\*/g,'<em>$1</em>').replace(/^(\[[^\]\n]+\])/,'<strong>$1</strong>');
const icons={
 linkedin:'<path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>',
 scholar:'<path fill="currentColor" d="M 343.75868,106.66243 V 79.430205 L 363.52365,63.999997 H 149.63354 L 20.476345,176.2736 h 85.656075 c -0.15534,2.12494 -0.21914,4.04644 -0.21914,6.22563 0,20.84472 7.2192,38.08662 21.67203,51.86089 14.45284,13.79702 32.25124,20.64784 53.32651,20.64784 4.92319,0 9.75059,-0.36794 14.43842,-1.02419 -2.90722,6.50082 -4.37457,12.52302 -4.37457,18.14228 0,9.87526 4.49924,20.4304 13.46715,31.6418 -39.23377,2.6705 -68.06112,9.73264 -86.43702,21.16322 -10.53108,6.49907 -19.000207,14.70396 -25.390349,24.5311 -6.390569,9.89933 -9.577754,20.51525 -9.577754,31.9616 0,9.64822 2.062375,18.33611 6.21907,26.06233 4.156694,7.7263 9.577757,14.07047 16.312223,18.98408 6.71825,4.96781 14.46899,9.10088 23.219,12.46874 8.73429,3.34378 17.40643,5.71858 26.06106,7.06258 8.62707,1.34222 17.20471,1.9985 25.70579,1.9985 13.46887,0 26.95353,-1.73428 40.54711,-5.18707 13.56165,-3.48461 26.28022,-8.64143 38.17105,-15.4927 11.85935,-6.80488 21.51545,-16.0865 28.9219,-27.7183 7.39024,-11.67998 11.09457,-24.80499 11.09457,-39.33613 0,-11.01584 -2.24964,-21.03852 -6.7502,-30.14073 -4.46864,-9.07202 -9.93785,-16.54102 -16.45271,-22.34403 -6.5008,-5.81263 -12.99987,-11.15539 -19.51512,-15.9679 -6.50083,-4.84488 -12.00021,-9.75058 -16.46884,-14.8129 -4.4848,-5.04657 -6.73444,-10.05419 -6.73444,-14.98395 0,-4.92145 1.73422,-9.67183 5.21588,-14.26559 3.45451,-4.6095 7.67376,-9.04795 12.60967,-13.30571 4.93756,-4.24944 9.87523,-8.96788 14.79665,-14.13302 4.92147,-5.14719 9.14072,-11.82739 12.60971,-20.00822 3.48467,-8.17907 5.20318,-17.44489 5.20318,-27.75679 0,-13.4527 -2.54714,-24.46065 -7.54735,-33.31348 -0.59369,-1.02243 -1.21757,-1.80338 -1.87511,-3.02225 l 56.90745,-46.672136 v 17.118526 c -7.39373,0.92969 -6.62422,5.34582 -6.62422,10.6352 v 128.66719 c 0,5.95832 4.8751,10.83382 10.83386,10.83382 h 3.98869 c 5.95835,0 10.83386,-4.87506 10.83386,-10.83382 V 117.29282 c 0,-5.27669 0.77741,-9.68801 -6.56167,-10.63039 z M 236.39865,329.14114 c 1.14099,0.7503 3.7039,2.78075 7.7184,6.03838 4.0495,3.24319 6.797,5.69582 8.26567,7.41432 1.43851,1.66381 3.5792,4.16501 6.37617,7.54734 2.81268,3.3744 4.7184,6.30394 5.71853,8.73425 1.00016,2.4767 2.01603,5.46089 3.04636,8.94556 0.98567,3.44488 1.48486,6.97595 1.48486,10.56169 0,17.04813 -6.56338,29.68007 -19.65604,37.85915 -13.125,8.18083 -28.76651,12.27368 -46.93767,12.27368 -9.18709,0 -18.2031,-1.09289 -27.06247,-3.1951 -8.84322,-2.11665 -17.31192,-5.3362 -25.39035,-9.60185 -8.07846,-4.25771 -14.57754,-10.20337 -19.50072,-17.79659 -4.93764,-7.64012 -7.40645,-16.41464 -7.40645,-26.24962 0,-10.32022 2.79692,-19.28987 8.42233,-26.90588 5.59343,-7.62564 12.93774,-13.3919 22.03208,-17.3154 9.0624,-3.94582 18.24946,-6.74232 27.56166,-8.39827 9.31221,-1.7023 18.79679,-2.555 28.43842,-2.555 4.46862,0 7.93582,0.25115 10.40465,0.69607 0.45456,0.21918 3.03188,2.07025 7.73456,5.56326 4.70401,3.46237 7.62565,5.59519 8.75047,6.38401 z m -3.35823,-100.5779 c -7.40648,8.85938 -17.73454,13.2882 -30.95363,13.2882 -11.85933,0 -22.29766,-4.76482 -31.26554,-14.31195 -8.99984,-9.52309 -15.42235,-20.32803 -19.34408,-32.43061 -3.93752,-12.10871 -5.90585,-23.98423 -5.90585,-35.648 0,-13.6942 3.59542,-25.35184 10.7809,-34.97598 7.18727,-9.64952 17.49915,-14.48477 30.93786,-14.48477 11.87507,0 22.37423,5.03825 31.43704,15.15677 9.09434,10.08482 15.60961,21.41303 19.5169,33.96799 3.92176,12.5392 5.87345,24.52979 5.87345,35.98399 0,13.44658 -3.70256,24.60984 -11.07663,33.45436 z"/>',
 github:'<path fill="currentColor" d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"/>',
 cv:'<path d="M5 2h9l5 5v15H5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M14 2v5h5M8 12h8M8 16h8" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="9" cy="8" r="1.3" fill="currentColor"/>'
};
function iconLink(url,label,key){if(!safe(url))return '';const viewBox=key==='scholar'?'20 64 344 384':key==='linkedin'?'0 32 448 448':'0 0 24 24';return `<a class="social-icon ${key}" href="${safe(url)}" aria-label="${esc(label)}" title="${esc(label)}" target="_blank" rel="noreferrer"><svg viewBox="${viewBox}" aria-hidden="true" focusable="false">${icons[key]}</svg></a>`}
function socialLinks(p){return [iconLink(p.scholar,'Google Scholar','scholar'),iconLink(p.linkedin,'LinkedIn','linkedin'),iconLink(p.github,'GitHub','github'),iconLink(p.cv,'Curriculum vitae (PDF)','cv')].join('')}

function repositorySection(p){const projects=Array.isArray(p.repositories)?p.repositories.filter(r=>r&&safe(r.url)):[];if(!projects.length)return '';return `<section id="repository"><h2>Repository</h2><ul class="repositories">${projects.map(r=>`<li><h3>${link(r.url,esc(r.name||r.url))}</h3>${r.description?`<p>${esc(r.description)}</p>`:''}<div class="repository-url">${link(r.url,esc(r.url))}</div></li>`).join('')}</ul></section>`}

fetch('profile.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(p=>{
 const repository=repositorySection(p);
 document.title=p.name+' | Research';
 document.getElementById('content').innerHTML=`
  <header class="site-header">
   <a class="brand" href="#top"><span class="brand-mark" aria-hidden="true">LK</span><span>${esc(p.name)}</span></a>
   <span class="site-label">Academic Homepage</span>
   <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation" aria-controls="site-navigation" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span>Menu</span></button>
  </header>
  <aside class="site-sidebar">
   <nav id="site-navigation" aria-label="Page sections">
    <a href="#about">About Me</a><a href="#research">Research Interests</a>${p.news?'<a href="#news">News</a>':''}<a href="#publications">Publications</a>${repository?'<a href="#repository">Repository</a>':''}
   </nav>
  </aside>
  <button class="nav-backdrop" id="nav-backdrop" type="button" aria-label="Close navigation" tabindex="-1" aria-hidden="true"></button>
  <section class="hero" id="top">
   <div class="photo">${safe(p.photo)?`<img src="${safe(p.photo)}" alt="${esc(p.name)}">`:`<div class="placeholder">${esc(p.chineseName||'LK')}</div>`}</div>
   <div>
    <h1>${esc(p.name)} ${p.chineseName?`<span>(${esc(p.chineseName)})</span>`:''}</h1>
    <p class="headline">${esc(p.headline)}</p>
    <p class="affiliation">${esc(p.affiliation)}</p>
    ${p.email?`<p class="contact-email">E-mail: ${esc(p.email)}</p>`:''}
    <div class="social-links" aria-label="Professional profiles">${socialLinks(p)}</div>
   </div>
  </section>
  <section id="about"><h2>About Me</h2><p class="bio">${esc(p.bio)}</p></section>
  <section id="research"><h2>Research Interests</h2><ul>${String(p.interests||'').split('\n').filter(Boolean).map(s=>`<li>${esc(s)}</li>`).join('')}</ul></section>
  ${p.news?`<section id="news"><h2>News</h2><ul class="news-list">${p.news.split('\n').filter(Boolean).map(s=>`<li>${formatNews(s)}</li>`).join('')}</ul></section>`:''}
  <section id="publications">
   <h2>Publications</h2>
   ${p.publications?.length?`<ol class="papers">${p.publications.map((raw,i)=>{
    const x=BibtexIEEE.fromPaper(raw);
    return `<li><span class="refNumber">[${i+1}]</span><div class="reference">${BibtexIEEE.format(x).map(part=>{
     let t=esc(part.text);
     if(part.link&&safe(part.link))t=link(part.link,t);
     if(part.italic)t='<em>'+t+'</em>';
     return t;
    }).join('')}${x.bibtex?`<details><summary>BibTeX</summary><pre>${esc(x.bibtex)}</pre></details>`:''}</div></li>`;
   }).join('')}</ol>`:'<p class="muted">Publication details will be added soon.</p>'}
  </section>
  ${repository}
  <footer><span>© ${new Date().getFullYear()} ${esc(p.name)}</span><a href="#top">Back to top ↑</a></footer>`;

 const toggle=document.getElementById('menu-toggle');
 const closeNav=(returnFocus=false)=>{
  document.body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Open navigation');
  if(returnFocus)toggle.focus();
 };
 toggle.addEventListener('click',()=>{
  const open=toggle.getAttribute('aria-expanded')!=='true';
  document.body.classList.toggle('nav-open',open);
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
 });
 document.getElementById('nav-backdrop').addEventListener('click',()=>closeNav(true));
 document.getElementById('site-navigation').addEventListener('click',e=>{if(e.target.closest('a'))closeNav()});
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')closeNav(true);
 });
 window.matchMedia('(max-width:1024px)').addEventListener('change',()=>closeNav());
}).catch(()=>document.getElementById('content').innerHTML='<p>Could not load profile.json. Please refresh.</p>');
