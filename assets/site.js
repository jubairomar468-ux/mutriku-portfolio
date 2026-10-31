"use strict";
const menu=document.querySelector('.menu-btn');
menu?.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));document.querySelector('.nav-links').classList.toggle('open',!expanded)});
document.querySelectorAll('[data-phase]').forEach(button=>button.addEventListener('click',()=>{
  const falling=button.dataset.phase==='fall';
  document.querySelector('#owc-diagram')?.classList.toggle('phase-b',falling);
  document.querySelectorAll('[data-phase]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  document.querySelector('#phase-text').textContent=falling?'Water falls: the air pressure in the chamber drops. Outside air is drawn through the turbine into the chamber. The Wells rotor continues in the same direction.':'Water rises: the water column compresses the air above it. Air exits through the turbine, transferring power to the generator. The rotor is above the seawater.';
}));
document.querySelectorAll('[data-impact]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-impact]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  document.querySelectorAll('.impact-group').forEach(group=>group.hidden=button.dataset.impact!=='all'&&group.dataset.kind!==button.dataset.impact);
}));
function payback(output,life,embodied){return{years:26.2*embodied/output,required:(26.2*embodied/life-1)*100}}
function updateCalculator(){
  const q=Number(document.querySelector('#output-factor').value),life=Number(document.querySelector('#life').value),e=Number(document.querySelector('#embodied').value),r=payback(q,life,e);
  document.querySelector('#output-value').textContent=q.toFixed(2)+'×';document.querySelector('#life-value').textContent=life+' years';document.querySelector('#embodied-value').textContent=e.toFixed(2)+'×';
  document.querySelector('#payback-value').textContent=r.years.toFixed(1)+' years';
  document.querySelector('#payback-description').textContent=r.years<=life?'Energy payback occurs within the selected service life in this illustrative model.':'Energy payback exceeds the selected service life in this illustrative model.';
  document.querySelector('#required-output').textContent=r.required>=0?r.required.toFixed(1)+'% more annual output than the baseline is needed to reach payback by year '+life+'.':'The selected life and embodied-energy assumptions permit '+Math.abs(r.required).toFixed(1)+'% less output than the baseline at the payback threshold.';
  const W=700,H=310,left=58,right=20,top=20,bottom=55,ymax=70;
  const X=x=>left+(x-.6)/1.2*(W-left-right),Y=y=>top+(ymax-y)/ymax*(H-top-bottom);
  let svg='<svg viewBox="0 0 700 310" role="img" aria-labelledby="payback-title payback-desc"><title id="payback-title">Energy payback sensitivity</title><desc id="payback-desc">Payback falls as annual output rises, assuming the selected embodied energy. The dashed line is the selected service life.</desc>';
  for(let y=0;y<=70;y+=10)svg+=`<line x1="${left}" y1="${Y(y)}" x2="680" y2="${Y(y)}" stroke="#dbe4df"/><text x="47" y="${Y(y)+4}" text-anchor="end" font-size="12">${y}</text>`;
  for(let x=.6;x<=1.81;x+=.2)svg+=`<text x="${X(x)}" y="278" text-anchor="middle" font-size="12">${x.toFixed(1)}×</text>`;
  let d='';for(let i=0;i<=120;i++){let x=.6+i*.01;d+=(i?' L':'M')+X(x).toFixed(2)+' '+Y(26.2*e/x).toFixed(2)}
  svg+=`<path d="${d}" fill="none" stroke="#087f83" stroke-width="3"/><line x1="${left}" y1="${Y(life)}" x2="680" y2="${Y(life)}" stroke="#ac5c18" stroke-width="2" stroke-dasharray="7 5"/><circle cx="${X(q)}" cy="${Y(r.years)}" r="6" fill="#102b3d" stroke="white" stroke-width="2"/><text x="677" y="${Y(life)-8}" text-anchor="end" font-size="12">Selected life: ${life} y</text><text x="350" y="306" text-anchor="middle" font-size="13">Annual net output relative to baseline</text><text x="16" y="145" transform="rotate(-90 16 145)" text-anchor="middle" font-size="13">Energy payback (years)</text></svg>`;
  document.querySelector('#payback-chart').innerHTML=svg;
}
if(document.querySelector('#output-factor')){['output-factor','life','embodied'].forEach(id=>document.querySelector('#'+id).addEventListener('input',updateCalculator));updateCalculator();document.querySelector('#reset-calc').addEventListener('click',()=>{document.querySelector('#output-factor').value=1;document.querySelector('#life').value=20;document.querySelector('#embodied').value=1;updateCalculator()})}
const dialog=document.querySelector('#share-dialog');
let qrSvg='';
function saveBlob(blob,name){const a=document.createElement('a');const u=URL.createObjectURL(blob);a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500)}
function generateQR(){
  const error=document.querySelector('#qr-error');error.textContent='';
  try{const input=document.querySelector('#qr-url').value.trim();const url=new URL(input);if(url.protocol!=='https:')throw new Error('Enter the complete public HTTPS address.');if(/localhost|127\.0\.0\.1|preview|sandbox/.test(url.hostname))throw new Error('Use the published public address rather than a temporary preview address.');
    const qr=qrcodegen.QrCode.encodeText(url.href,qrcodegen.QrCode.Ecc.MEDIUM),border=4,size=qr.size+border*2;let parts=[];for(let y=0;y<qr.size;y++)for(let x=0;x<qr.size;x++)if(qr.getModule(x,y))parts.push(`M${x+border},${y+border}h1v1h-1z`);
    qrSvg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="1024" height="1024" role="img" aria-label="QR code for the project website"><rect width="100%" height="100%" fill="white"/><path d="${parts.join(' ')}" fill="black"/></svg>`;
    document.querySelector('#qr-preview').innerHTML=qrSvg;document.querySelector('#qr-actions').hidden=false;document.querySelector('#qr-target').textContent=url.href;
  }catch(err){error.textContent=err.message||'Enter a valid public HTTPS address.';document.querySelector('#qr-preview').replaceChildren();document.querySelector('#qr-actions').hidden=true;document.querySelector('#qr-target').textContent=''}
}
document.querySelectorAll('[data-share]').forEach(b=>b.addEventListener('click',()=>{
  const config=window.PORTFOLIO_CONFIG?.publicProjectUrl;let address=config||'';if(!address&&location.hostname.endsWith('.github.io'))address=new URL('./',location.href).href;
  document.querySelector('#qr-url').value=address;dialog.showModal();if(address)generateQR();
}));
document.querySelector('#close-share')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelector('#qr-form')?.addEventListener('submit',e=>{e.preventDefault();generateQR()});
document.querySelector('#download-svg')?.addEventListener('click',()=>saveBlob(new Blob([qrSvg],{type:'image/svg+xml'}),'Mutriku_Website_QR.svg'));
document.querySelector('#download-png')?.addEventListener('click',()=>{const img=new Image();const url=URL.createObjectURL(new Blob([qrSvg],{type:'image/svg+xml'}));img.onload=()=>{const canvas=document.createElement('canvas');canvas.width=canvas.height=1024;canvas.getContext('2d').drawImage(img,0,0,1024,1024);canvas.toBlob(blob=>saveBlob(blob,'Mutriku_Website_QR.png'));URL.revokeObjectURL(url)};img.src=url});
