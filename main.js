(function(){
  var S=window.STUDENT||{};
  document.querySelectorAll("[data-s]").forEach(function(e){e.textContent=S[e.dataset.s]||""});
  var bar=document.getElementById("progress");
  function prog(){var h=document.documentElement;var p=h.scrollTop/(h.scrollHeight-h.clientHeight);bar.style.width=(p*100)+"%"}
  addEventListener("scroll",prog,{passive:true});prog();
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("in")})},{threshold:.12});
  document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
  var links=document.querySelectorAll("nav a");
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})}})},{rootMargin:"-45% 0px -50% 0px"});
  document.querySelectorAll("section[id]").forEach(function(s){so.observe(s)});
  document.querySelectorAll(".tabs").forEach(function(t){
    t.querySelectorAll("button").forEach(function(b){b.addEventListener("click",function(){
      var root=t.parentElement;
      t.querySelectorAll("button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");
      root.querySelectorAll(".pane").forEach(function(p){p.classList.toggle("on",p.id===b.dataset.t)});
    })});
  });
  var slot=document.getElementById("khamis");
  if(slot&&window.KHAMIS_VIDEO){slot.outerHTML='<video class="vid" controls preload="metadata" playsinline poster="'+window.KHAMIS_POSTER+'" src="'+window.KHAMIS_VIDEO+'"></video>'}

  var T={a:"التشريح الجنائي: لمعرفة سبب الوفاة وإثبات الجناية. يجوز عند ابن باز وابن عثيمين وهيئة كبار العلماء ومجمع الفقه الإسلامي.",b:"التشريح المرضي والوبائي: لمعرفة سبب المرض ومنع انتشار الأوبئة، وهو من الأغراض التي نُقل جوازها في الجهات المذكورة.",c:"التشريح التعليمي: موضع الخلاف؛ فابن باز يمنعه في جثة المعصوم، وهيئة كبار العلماء ومجمع الفقه الإسلامي يجيزان عند عدم وجود غير المعصومين بإذن الميت أو ورثته."};
  document.querySelectorAll(".pick").forEach(function(b){b.addEventListener("click",function(){document.querySelectorAll(".pick").forEach(function(x){x.classList.remove("on")});b.classList.add("on");document.getElementById("pickOut").textContent=T[b.dataset.k]})});
  var Q=[["ما النوع الأكثر خلافًا بين العلماء؟",["الجنائي","التعليمي","الوبائي"],1],["أي حديث يُستدل به في حرمة الميت؟",["النهي عن كسر عظم الميت","حديث النية","حديث الجبريل"],0],["ماذا يُشترط عند من يجيز؟",["لا شرط","إذن الميت أو ورثته وعدم الإهانة","الإكثار من الجثث"],1]];
  var qz=document.getElementById("quiz");
  Q.forEach(function(q){var d=document.createElement("div");d.className="q";d.innerHTML="<b>"+q[0]+"</b>";q[1].forEach(function(o,i){var b=document.createElement("button");b.textContent=o;b.onclick=function(){d.querySelectorAll("button").forEach(function(x){x.disabled=true});b.classList.add(i===q[2]?"ok":"no");if(i!==q[2])d.querySelectorAll("button")[q[2]].classList.add("ok")};d.appendChild(b)});qz.appendChild(d)});

  var bs=document.getElementById("bism"),bt=bs.dataset.t,bi=0;
  (function ty(){if(bi<=bt.length){bs.textContent=bt.slice(0,bi++);setTimeout(ty,90)}})();
  var dd=document.getElementById("dots");
  for(var i=0;i<28;i++){var s=document.createElement("span");s.style.left=Math.random()*100+"%";s.style.animationDuration=(8+Math.random()*10)+"s";s.style.animationDelay=(-Math.random()*12)+"s";dd.appendChild(s)}
  document.addEventListener("pointermove",function(e){var c=e.target.closest&&e.target.closest(".card");if(c){var r=c.getBoundingClientRect();c.style.setProperty("--x",(e.clientX-r.left)+"px");c.style.setProperty("--y",(e.clientY-r.top)+"px")}});
  var rg=document.getElementById("rng"),bm=document.getElementById("beam"),mo=document.getElementById("mzOut");
  var M=[["ترجيح المصلحة: يرى المجيزون أن مصالح التشريح كبيرة، منها وقاية المجتمع من الأمراض الوبائية وتحقيق العدالة، فتُقدَّم على حرمة الميت."],["الجمع بينهما: يجوز التشريح لغير المعصومين أولًا، فإن لم يوجدوا فمن المسلمين بإذنهم أو إذن ورثتهم، وبقدر الحاجة."],["ترجيح الحرمة: يرى ابن باز أن جثة المعصوم لا تُشرَّح للتعلم، لأن كسر عظم الميت ككسره حيًا، ويُتعلَّم على جثث غير معصومة."]];
  function mz(){var v=+rg.value,a=(v-50)*0.18;bm.style.transform="rotate("+a+"deg)";bm.querySelectorAll(".pan").forEach(function(p){p.style.transform="rotate("+(-a)+"deg)"});mo.textContent=M[v<34?0:v<67?1:2][0]}
  rg.addEventListener("input",mz);mz();
  document.addEventListener("click",function(e){if(e.target.matches(".q button.ok,.pick")||(e.target.matches(".q button")&&e.target.classList.contains("ok"))){for(var k=0;k<12;k++){var s=document.createElement("span");s.className="spark";s.textContent="✦";s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";s.style.setProperty("--dx",(Math.random()*160-80)+"px");s.style.setProperty("--dy",(Math.random()*160-80)+"px");document.body.appendChild(s);setTimeout(function(x){x.remove()},900,s)}}});

  var W={s0:{q:"ما غرض التشريح؟",o:[["التحقيق الجنائي (الطب الشرعي)","r1"],["معرفة الأمراض والأوبئة","r2"],["التعليم في كليات الطب","s1"]]},
   s1:{q:"ما حال الميت؟",o:[["غير معصوم (كالمرتد والحربي)","r3"],["معصوم دون إذن","r4"],["معصوم مع إذنه أو إذن ورثته","r5"]]}};
  var R={r1:["yes","جائز","يجوز التشريح للتحقيق الجنائي، وبه قال ابن باز وابن عثيمين وصدر به قرار هيئة كبار العلماء."],
   r2:["yes","جائز بالمصلحة","من مصالح التشريح وقاية المجتمع من الأمراض الوبائية، وقد أُجيز لما يترتب عليه من مصالح."],
   r3:["yes","لا حرج","قال ابن باز: لا حرج في تشريح غير المعصوم للمصلحة الطبية."],
   r4:["no","لا يجوز","قال ابن باز: لا يجوز تشريح الميت المعصوم لما فيه من انتهاك حرمته."],
   r5:["mid","جائز عند من يجيز","أُجيز عند عدم وجود غير المعصومين، بإذن الميت أو ورثته، وبحسب الحاجة."]};
  var wz=document.getElementById("wz"),dots=document.querySelectorAll(".steps i");
  function step(k){var d=W[k];dots.forEach(function(x,i){x.classList.toggle("on",i===(k==="s0"?0:1))});
   wz.innerHTML="<h3>"+d.q+"</h3>";d.o.forEach(function(o){var b=document.createElement("button");b.className="wz-o";b.textContent=o[0];b.onclick=function(){o[1].charAt(0)==="s"?step(o[1]):done(o[1])};wz.appendChild(b)})}
  function done(r){dots.forEach(function(x,i){x.classList.toggle("on",i===2)});var v=R[r];wz.innerHTML='<div class="res '+v[0]+'"><b>'+v[1]+'</b>'+v[2]+'</div>';var b=document.createElement("button");b.className="wz-o";b.textContent="ابدئي من جديد";b.onclick=function(){step("s0")};wz.appendChild(b)}
  step("s0");
})();
var _fs=19;function fz(d){_fs=Math.max(15,Math.min(26,_fs+d*2));document.body.style.fontSize=_fs+"px"}
