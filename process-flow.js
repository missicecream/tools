/* Copyright © 2026 Miss Icecream Co., Ltd. All Rights Reserved.
   Source: 04_Production.docx, embedded แผนผังที่ 4 (pages 2–3),
   and ProcessSelector-ChangeSpec-2026-10-03.md. Shared by screen and A4 views. */
(function () {
  'use strict';
  const bases = {icecream:'เบสทั่วไป', sherbet:'เชอร์เบท (มีนม)', sorbet:'ซอร์เบต์ (ไม่มีนม)'};
  const dex = 'แนะนำน้ำตาลทราย <b>5 เท่าของ S/E</b> ถ้าไม่พอ แบ่งเดกซ์โทรสในสูตรมาคลุกเพิ่มจนครบ แล้วรีบทำละลายทันที เพราะเดกซ์โทรสดูดความชื้นได้ดี';
  const se = 'คลุก S/E กับน้ำตาลทราย ทำละลายตามเกรด: <b>SER 85 °C · SEP 65 °C</b> หรือตามที่ผู้ผลิตระบุ';
  const acid = 'ถ้ามีนมในเบส ให้เทเป็นสายเล็กๆ ลงตรงจุดที่กำลังคน · ของเปรี้ยวจัดเจือจางกับมิกซ์เย็น <b>3–4 เท่า</b> ก่อน';
  const fruitStir = 'ไม่ทำ PBT ใช้ตะกร้อมือหรือไม้พายคนให้ทั่วทั้งหม้อ หากของแห้งยังละลายไม่ทั่ว ใช้เครื่องปั่นมือถือหรือโถช่วยผสมสั้นๆ ราว <b>30 วินาที</b> ได้ โดยเฉพาะเชอร์เบทที่มีนมผง';
  const shortAging = 'บ่มสั้นราว <b>30 นาทีเป็นหลัก</b> ที่ <b>0–4 °C</b> ไม่ขึ้นกับเงื่อนไขอินูลิน เพื่อให้สารทำให้คงตัวดูดน้ำจนมิกซ์หนืดพอ · บ่มนานได้ แต่ไม่เกิน <b>24 ชั่วโมง</b>';
  const steps = [
    {n:1,title:'การเตรียมความพร้อม',tone:'prep',common:['สถานที่ · อุปกรณ์ · ผู้ผลิต พร้อมก่อนเริ่ม · ล้างและฆ่าเชื้อให้สะอาด']},
    {n:2,title:'การชั่งตวงวัด',tone:'prep',common:['ชั่งให้แม่นตามสูตรเป็นกรัม · ร่อนของแห้งที่จับก้อน · เตรียมผลไม้บดละเอียด ปรับ/เทียบ Brix']},
    {n:3,title:'การผสมและให้ความร้อน',tone:'warm',common:[se,dex],
      home:['ฆ่าเชื้อวัตถุดิบเสี่ยงแยกก่อน · เก็บครีมและของสดไว้เติมในขั้นที่ 5'],
      sell:['รวมทุกอย่าง <b>รวมครีมและผลไม้</b> · เก็บกรดซิตริกไว้เติมในขั้นที่ 7','พาสเจอร์ไรส์ LTLT <b>ไม่ต่ำกว่า 68.5 °C นานไม่น้อยกว่า 30 นาที</b>','คนตลอด วัดจุดเย็นที่สุด <b>2–3 จุด</b> ยึดค่าต่ำสุด · เทอร์โมมิเตอร์สอบเทียบแล้ว','เริ่มจับเวลาเมื่อถึงเกณฑ์ ถ้าตกต่ำกว่าเกณฑ์ <b>เริ่มนับใหม่</b> · จดบันทึกอุณหภูมิและเวลาทุกครั้ง เก็บไว้ตรวจสอบทวนกลับได้'],
      mixing:{
        icecream:'รวม S/E ที่แยกทำละลายแล้วกับของแห้งและของเหลวอื่น ยกเว้นครีมและกลิ่นรสไวต่อความร้อน · อุ่นมิกซ์ถึงราว <b>55 °C</b> เพื่อทำละลาย ไม่ใช่การพาสเจอร์ไรส์',
        sherbet:'ละลาย S/E กับน้ำตาลทรายและน้ำ · คลุกของแห้งที่เหลือกับนมผงแล้วละลายด้วยนมสด · รวมกันแล้วอุ่นถึงราว <b>55 °C</b> · ผลไม้สดไม่ต้มรวม เก็บไว้เติมในขั้นที่ 5',
        sorbet:'คลุก S/E กับน้ำตาลทราย เติมของแห้งที่เหลือและน้ำ · ต้มส่วนน้ำเชื่อมตามอุณหภูมิทำละลายของ S/E ที่เลือก · ยกลง เติมน้ำที่ระเหยคืนให้ครบน้ำหนัก <b>ไม่ต้องอุ่นซ้ำ</b> · ผลไม้สดไม่ต้มรวม เก็บไว้เติมในขั้นที่ 5'
      }},
    {n:4,title:'การปั่นแบบ PBT',tone:'blend',common:[],
      generalHome:['เทลงโถขณะมิกซ์ราว <b>55 °C</b> · ก่อนเริ่มปั่น ตรวจมิกซ์ในโถต้อง <b>≥45 °C</b>'],
      generalSell:['เทลงโถขณะมิกซ์ <b>ไม่ต่ำกว่า 68.5 °C</b> · ก่อนเริ่มปั่น ตรวจมิกซ์ในโถต้อง <b>≥45 °C</b>'],
      general:['ปั่นสลับพักตามรอบของเครื่อง เพื่อลดขนาดเม็ดไขมัน · เมื่อปั่นจบต้อง <b>ไม่ต่ำกว่า 40 °C</b>'],
      fruit:[fruitStir,'การปั่นหลายรอบตีอากาศเข้าไปมาก ทำให้ฟูเป็นโฟม รสผลไม้จาง สีซีด · เชอร์เบทฟูกว่าซอร์เบต์บ้างจากโปรตีนนม']},
    {n:5,title:'การลดความร้อน',tone:'cool',common:['ลดอุณหภูมิที่ใจกลางมิกซ์ถึง <b>4 °C หรือต่ำกว่า</b> เร็วที่สุด ไม่เกิน <b>60 นาที</b> · อ่างน้ำแข็งคนต่อเนื่อง ถุงแบนฝังน้ำแข็ง หรือ Blast Freezer โหมด chill','<b>ห้ามแช่ช่องแช่แข็งโดยตรง</b> เพราะผิวอาจเป็นน้ำแข็งก่อนใจกลางเย็นถึง 4 °C'],
      home:['ของเปรี้ยว ข้น หรือกลิ่นรสไวต่อความร้อน เช่น ผลไม้ ค่อยๆ เติมได้ตั้งแต่ราว <b>20 °C</b> พร้อมคนให้กระจายทั่ว',acid,'<b>ครีมแช่เย็นเติมที่ไม่เกิน 10 °C เท่านั้น</b> เพื่อรักษาผลึกไขมัน · คนต่อจนมิกซ์สมบูรณ์ทั้งสูตรถึง <b>≤4 °C</b> แล้วจึงเริ่มบ่ม'],
      sell:['ส่วนผสมหลักผ่านพาสเจอร์ไรส์มาแล้ว · ลดถึง <b>4 °C ทันที</b> ตาม ป.สธ. 354 · ไม่เติมอะไรเพิ่มในขั้นนี้']},
    {n:6,title:'การบ่ม',tone:'cool',common:['เริ่มนับเมื่อมิกซ์สมบูรณ์ทั้งสูตรเย็นถึง <b>≤4 °C</b> · บ่มในภาชนะปิดสนิท'],
      general:['บ่มที่ <b>0–4 °C นาน 4–8 ชั่วโมง</b> ไม่เกิน <b>24 ชั่วโมง</b>','บ่มด่วน <b>30 นาที</b> เฉพาะสูตรที่มีอินูลิน (INL) <b>ตั้งแต่ 2%</b>'],fruit:[shortAging]},
    {n:7,title:'เติมส่วนผสมก่อนปั่น',tone:'cool',common:['ชิมก่อน แล้วปรับกลิ่น สี ความเปรี้ยวด้วย <b>C20 (สารละลายกรดซิตริก 20%)</b> และความหวานด้วย SYR เพียงเล็กน้อย','เบสที่มีนม ค่อยๆ เทกรดพร้อมคน','ส่วนผสมที่เติมต้องปลอดภัยพอจะกินได้โดยไม่ผ่านความร้อน เพราะหลังจากนี้ <b>ไม่มีขั้นฆ่าเชื้ออีก</b> · ใช้อุปกรณ์สะอาด']},
    {n:8,title:'ปั่นด้วยเครื่องปั่นไอศกรีม',tone:'finish',common:['ปั่นตามคู่มือเครื่อง · ดูเนื้อ เนียน ฟูพอดี ผิวแห้ง','ระวังปั่นนานเกินจนเกิดเนื้อเนย']},
    {n:9,title:'ตักใส่ภาชนะ เติม inclusion หรือราด swirl',tone:'finish',common:['ทำเร็วและเบามือ รักษาความสะอาด','inclusion โรย ไม่คลุก · swirl ราดเป็นชั้น ไม่ลาก ไม่กวน · รีบเข้าแช่แข็ง']},
    {n:10,title:'การแช่แข็ง (Hardening)',tone:'finish',common:['แช่ให้แข็งเร็วที่สุด · Blast Freezer ดีที่สุด','สำหรับเก็บ ให้แกนกลางถึง <b>−18 °C</b>']},
    {n:11,title:'การเก็บรักษา',tone:'finish',common:['<b>−25 °C</b> สำหรับเก็บระยะยาว (เพดาน <b>−18 °C</b>) · อุณหภูมินิ่ง','ปิดฟิล์มแนบผิว · เข้าก่อนออกก่อน (FIFO)']},
    {n:12,title:'การเสิร์ฟ',tone:'finish',common:['ปรับเนื้อ (tempering) ช้าๆ ถึงราว <b>−14 °C</b>','ตู้ตัก (dipping cabinet) <b>−12 ถึง −16 °C</b>']}
  ];
  const list = items => '<ul>'+items.map(t=>'<li>'+t+'</li>').join('')+'</ul>';
  function mixing(step,route,base){
    if(route==='home')return list([step.mixing[base]]);
    if(base==='icecream')return '';
    return '<div class="base-note"><strong>'+bases[base]+'</strong><p>เตรียมส่วนน้ำเชื่อม S/E'+(base==='sherbet'?' และส่วนนม':'')+' แบบเดียวกับทำทาน แล้วรวมผลไม้ลงไปพาสเจอร์ไรส์พร้อมกัน</p></div>';
  }
  function readingBody(step,route,base){
    let content=list(step.common);
    if(step.n===3)content+=list(step[route])+mixing(step,route,base);
    if(step.n===4)content=base==='icecream'?list(step[route==='home'?'generalHome':'generalSell'].concat(step.general)):list(step.fruit.concat(route==='sell'?['ทำหลังพาสเจอร์ไรส์ ขณะมิกซ์ยังร้อน']:[]));
    if(step.n===5)content='<p class="start-note">หลังจบ'+(base==='icecream'?' PBT':'ขั้นผสม')+'</p>'+content+list(step[route]);
    if(step.n===6)content+=list(step[base==='icecream'?'general':'fruit']);
    if(step.n===7&&base==='sorbet')content=list(step.common.filter(t=>!t.startsWith('เบสที่มีนม')));
    return content;
  }
  function notes(route){
    return '<details class="ingredient-notes"><summary>อ่านเพิ่ม: เบอร์รีและผลไม้ IQF</summary><p><b>เบอร์รี (สดและแช่แข็ง):</b> ความเสี่ยงหลักคือไวรัส (โนโรไวรัส · ไวรัสตับอักเสบเอ) การล้างช่วยได้จำกัด และ 70–75 °C / 2 นาทีแบบผลไม้ทั่วไปไม่พอ · เลือกแหล่งที่เชื่อถือได้ ล้างเบอร์รีสดโดยผ่านน้ำมากๆ</p><p>ถ้าไม่มั่นใจในแหล่งที่มา หรือมีกลุ่มเปราะบาง ปรับ/เทียบ Brix ก่อน แล้วต้มจนเดือดราว <b>1 นาที</b> เป็นทางเลือกเสริม ไม่บังคับ · ลด &lt;4 °C ทันที · ชั่งก่อน–หลัง เติมน้ำต้มสุกคืนส่วนที่ระเหย</p>'+(route==='sell'?'<p>ทำขาย: แนะนำต้มเบอร์รีก่อนรวมมิกซ์เป็นทางเลือกเสริม ยกเว้นเมื่อมั่นใจในแหล่งที่มา เพราะเกณฑ์พาสเจอร์ไรส์ตามประกาศกระทรวงสาธารณสุขออกแบบมาเพื่อควบคุมแบคทีเรีย และยังไม่มีข้อมูลยืนยันว่าลดไวรัสในผลไม้ได้เพียงพอ</p>':'')+'<p><b>ผลไม้ IQF:</b> เลือกแหล่งที่เชื่อถือได้ ละลายในตู้เย็น <b>0–4 °C</b> ไม่ละลายที่อุณหภูมิห้อง ไม่แช่น้ำ · เบอร์รีใช้คำแนะนำเฉพาะด้านบน</p></details>';
  }
  function article(step,body,print){
    return '<article class="flow-step '+step.tone+'"'+(print?'':' id="step-'+step.n+'"')+'><div class="step-number" aria-hidden="true">'+step.n+'</div><div class="step-card"><h3><span class="sr-only">ขั้นที่ '+step.n+' </span>'+step.title+'</h3>'+body+'</div></article>';
  }
  function renderReading(route,base){
    const phases=[{range:[1,4],name:'เตรียมและผสม'},{range:[5,7],name:'ลดความร้อนและเตรียมก่อนปั่น'},{range:[8,12],name:'ปั่น แช่แข็ง เก็บ และเสิร์ฟ'}];
    document.getElementById('flow-content').innerHTML=phases.map((phase,i)=>'<section class="flow-phase" id="phase-'+(i+1)+'"><h2 class="phase-title"><span>ช่วงที่ '+(i+1)+'</span>'+phase.name+'</h2><div class="flow-track">'+steps.filter(s=>s.n>=phase.range[0]&&s.n<=phase.range[1]).map(s=>article({...s,title:s.n===4&&base!=='icecream'?'ผสมให้เข้ากัน (ไม่ทำ PBT)':s.title},readingBody(s,route,base),false)).join('')+'</div>'+(i===0?notes(route):'')+'</section>').join('');
    document.getElementById('base-status').textContent=(route==='home'?'ทำทานเอง':'ทำขาย')+' · '+bases[base]+(base==='icecream'?' · ใช้ PBT':' · ไม่ทำ PBT');
    document.querySelectorAll('[data-base]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.base===base)));
    const switchLink=document.querySelector('.route-link');const url=new URL(switchLink.href);url.searchParams.set('base',base);switchLink.href=url.href;
  }
  function branch(label,body,extra){return '<div class="route-branch '+(extra||'')+'"><h4>'+label+'</h4>'+body+'</div>';}
  function printBody(s){
    let out=list(s.common);
    if(s.n===3){
      out=list([se]);
      out+='<div class="route-columns">'+branch('ทำขาย · พาสเจอร์ไรส์',list(s.sell)+ '<p class="small-note">เชอร์เบท/ซอร์เบต์: เตรียมส่วนน้ำเชื่อม S/E (และส่วนนมสำหรับเชอร์เบท) แบบเดียวกับทำทาน แล้วรวมผลไม้พาสเจอร์ไรส์พร้อมกัน</p>')+branch('ทำทาน · ให้ความร้อนเพื่อละลาย',list(['ฆ่าเชื้อวัตถุดิบเสี่ยงแยกก่อน','อุ่นมิกซ์ถึงราว <b>55 °C</b> · เก็บครีมและของสดไว้เติมทีหลัง'])+'<div class="base-note"><strong>เชอร์เบท · ซอร์เบต์</strong>'+list(['เชอร์เบททำเหมือนเบสนม: ละลาย S/E แยก · ผสมส่วนนมแล้วรวมกันอุ่น <b>55 °C</b>','ซอร์เบต์ต้มเฉพาะส่วนน้ำเชื่อมตามอุณหภูมิ S/E · เติมน้ำระเหยคืน · <b>ไม่อุ่นซ้ำ</b>','ผลไม้ไม่ต้มรวม เติมในขั้นที่ 5'])+'</div>')+'</div>';
      out+='<p class="small-note">'+dex+'</p>';
    }
    if(s.n===4)out=list(['ปั่นสลับพักตามเครื่อง เพื่อลดขนาดเม็ดไขมัน · เทลงโถทำทานราว <b>55 °C</b> / ทำขาย <b>≥68.5 °C</b>','ตรวจมิกซ์ในโถก่อนปั่น <b>≥45 °C</b> · เมื่อปั่นจบ <b>≥40 °C</b>'])+'<div class="base-note"><strong>เชอร์เบท · ซอร์เบต์</strong><p>'+fruitStir+' · ทำขาย: ทำหลังพาสเจอร์ไรส์ ขณะยังร้อน</p></div>';
    if(s.n===5)out=list([s.common[0]])+'<div class="route-columns">'+branch('ทำขาย · ลดความร้อนอย่างเดียว',list(s.sell))+branch('ทำทาน · เติมระหว่างลดความร้อน',list([s.home[0],'ครีมแช่เย็นเติมที่ <b>ไม่เกิน 10 °C</b> เท่านั้น · คนต่อจนถึง <b>≤4 °C</b>']))+'</div><p class="small-note">'+acid+' · ห้ามแช่ช่องแช่แข็งโดยตรง</p>';
    if(s.n===6)out=list(s.common.concat(s.general))+'<div class="base-note"><strong>เชอร์เบท · ซอร์เบต์</strong><p>'+shortAging+'</p></div>';
    return out;
  }
  function renderPrint(){
    const groups=[steps.slice(0,5),steps.slice(5)];
    document.getElementById('print-content').innerHTML=groups.map((group,i)=>'<section class="paper" aria-label="ผังหน้า '+(i+1)+'"><header class="paper-heading"><div><span>Miss Icecream · แผนผังที่ 4</span><h1>ขั้นตอนการผลิตไอศกรีม</h1></div><p>หน้า '+(i+1)+' / 2<br>ขั้นที่ '+(i===0?'1–5':'6–12')+'</p></header><div class="flow-track">'+group.map(s=>article(s,printBody(s),true)).join('')+'</div>'+(i===0?'<p class="continuation">↓ ต่อขั้นที่ 6 ในหน้าถัดไป</p>':'<div class="legend"><b>อ่านผังนี้:</b> กล่องทำขาย / ทำทาน คือขั้นที่สองแนวทางทำต่างกัน · กรอบเส้นประ คือข้อแตกต่างของเชอร์เบทและซอร์เบต์</div>')+'<footer class="paper-footer">อ้างอิงบทที่ 4 ฉบับ 3 ตุลาคม 2026 · Miss Icecream</footer></section>').join('');
  }
  if(document.getElementById('print-content')){renderPrint();return;}
  const route=document.body.dataset.route;
  if(!['home','sell'].includes(route))return;
  const params=new URLSearchParams(location.search);const requested=params.get('base');
  renderReading(route,Object.hasOwn(bases,requested)?requested:'icecream');
  document.querySelectorAll('[data-base]').forEach(b=>b.addEventListener('click',()=>{
    const base=b.dataset.base;if(!Object.hasOwn(bases,base))return;
    renderReading(route,base);
    const url=new URL(location.href);url.searchParams.set('base',base);history.replaceState(null,'',url.href);
  }));
})();
