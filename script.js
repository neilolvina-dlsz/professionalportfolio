const projects = [
  {
    id:"illumin8", filter:["design","sustainability"], kicker:"INTERDISCIPLINARY PERFORMANCE TASK",
    title:"Project Illumin8", subtitle:"Designing Light, Learning, and Hope",
    excerpt:"A solar-powered design experience connecting electronics, empathy, sustainability, communication, and real-world problem solving.",
    challenge:"Students were challenged to move beyond purely technical outputs and create solutions grounded in human needs and authentic contexts.",
    design:"The project combined hands-on design, empathy mapping, research, communication, and prototyping. Students explored light as a symbol of hope and considered communities with limited access to electricity.",
    tools:"Google Workspace, blended learning, learning playlists, design thinking, hands-on electronics",
    output:"Students developed solar-powered lantern concepts and related documentary, empathy, research, and presentation outputs.",
    impact:"The documented work describes stronger perspective-taking, more purposeful design decisions, and deeper connections between technical solutions and human needs."
  },
  {
    id:"zadvoc8", filter:["design","sustainability"], kicker:"SUSTAINABILITY + RESILIENCY",
    title:"Z Advoc8", subtitle:"Designing for Sustainability and Resiliency",
    excerpt:"An interdisciplinary disaster-resilience masterplan where students designed a typhoon-resilient house and functional solar-powered systems.",
    challenge:"Students needed to connect climate adaptation, community needs, structural design, and electrical systems in a meaningful real-world challenge.",
    design:"Teams worked as human-centered designers and innovation consultants through investigation, community analysis, prototyping, testing, and systems integration.",
    tools:"Science + TLE, solar panels, digital research, prototyping, testing, design thinking",
    output:"Typhoon-resilient house models, solar-powered circuits, disaster preparedness and recovery plans, and integrated design solutions.",
    impact:"Documented before/after measures showed Idea Fluency 3.82→4.20, Flexibility 4.26→4.38, Originality 4.13→4.31, Creative Confidence 4.10→4.28, and overall CSE 4.08→4.26."
  },
  {
    id:"spark", filter:["games","design"], kicker:"GAME-BASED LEARNING",
    title:"Project Build the Spark", subtitle:"From Planning to Play",
    excerpt:"Minecraft Education used as a purposeful interdisciplinary environment for Mathematics, TLE, design, measurement, and problem solving.",
    challenge:"Students needed meaningful opportunities to apply abstract mathematical and technical concepts through authentic design tasks.",
    design:"Students planned, built, collaborated, tested, and refined designs in Minecraft. Microsoft Copilot Teach supported lesson planning while Microsoft Forms enabled live formative assessment.",
    tools:"Minecraft Education, Microsoft Copilot Teach, Microsoft Forms, 21CLD, TIM",
    output:"Digital builds requiring accurate measurement, spatial reasoning, collaborative planning, and iterative problem solving.",
    impact:"The Impact Report describes the technology integration as reaching the Transformation level of the Technology Integration Matrix, enabling learning experiences difficult to achieve through traditional methods."
  },
  {
    id:"ai-scamper", filter:["ai","design"], kicker:"AI + CREATIVE DESIGN",
    title:"Gemini, Gemi-YAY!", subtitle:"AI as a Cognitive Booster",
    excerpt:"AI-supported ideation with Gemini, Google AI Overview, and SCAMPER to help students generate, expand, and refine creative concepts.",
    challenge:"Students often struggled to begin design tasks and generated limited ideas, making early-stage ideation time-consuming.",
    design:"AI was positioned as a thinking partner alongside SCAMPER. Students brainstormed, explored alternatives, refined concepts, and iterated outputs.",
    tools:"Gemini, Google AI Overview, SCAMPER, formative feedback",
    output:"Multiple packaging design concepts with expanded and refined ideas.",
    impact:"The documented experience reports more ideas in less time, greater variety, and increased creative confidence—while also identifying over-reliance on AI as a risk that can produce less original, surface-level work."
  },
  {
    id:"empathy", filter:["ai","design","sustainability"], kicker:"HUMAN-CENTERED INNOVATION",
    title:"Designing with Empathy", subtitle:"Reflective Technology + Human-Centered Innovation",
    excerpt:"Microsoft Reflect and empathy mapping used to make learning more responsive and design decisions more human-centered.",
    challenge:"The goal was to better understand students' confidence, emotional state, understanding, and user perspectives during complex design work.",
    design:"Short reflective check-ins informed instructional adjustments, while empathy mapping helped students examine what users say, think, feel, and do.",
    tools:"Microsoft Reflect, Design Thinking, empathy mapping, Project Illumin8",
    output:"More context-responsive design decisions alongside documentary and empathy-focused outputs.",
    impact:"The Impact Report describes increased emotional awareness, perspective-taking, clearer problem framing, and more intentional user-centered design choices."
  }
];

const list = document.getElementById("projectList");
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function renderProjects(filter="all"){
  const visible = projects.filter(p => filter==="all" || p.filter.includes(filter));
  list.innerHTML = visible.map((p,i)=>`
    <article class="project-card reveal visible" data-id="${p.id}">
      <div class="project-art art-${p.id === "illumin8" ? "illumin8" : p.id === "zadvoc8" ? "zadvoc8" : p.id === "spark" ? "spark" : p.id === "ai-scamper" ? "ai" : "empathy"}"></div>
      <div class="project-overlay"></div>
      <div class="project-content">
        <div class="mono">${p.kicker}</div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="project-arrow">↗</div>
      </div>
    </article>
  `).join("");
  document.querySelectorAll(".project-card").forEach(card=>{
    card.addEventListener("click",()=>openProject(card.dataset.id));
  });
}

function openProject(id){
  const p = projects.find(x=>x.id===id);
  if(!p) return;
  modalContent.innerHTML = `
    <div class="modal-kicker">${p.kicker}</div>
    <h2>${p.title}<br><em>${p.subtitle}</em></h2>
    <p class="modal-sub">${p.excerpt}</p>
    <div class="modal-section"><h4>THE CHALLENGE</h4><p>${p.challenge}</p></div>
    <div class="modal-section"><h4>THE DESIGN</h4><p>${p.design}</p></div>
    <div class="modal-section"><h4>TECHNOLOGY / FRAMEWORKS</h4><div class="modal-tools">${p.tools.split(", ").map(t=>`<span>${t}</span>`).join("")}</div></div>
    <div class="modal-section"><h4>STUDENT OUTPUT</h4><p>${p.output}</p></div>
    <div class="modal-section"><h4>DOCUMENTED IMPACT</h4><p>${p.impact}</p></div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}
modalClose.addEventListener("click",closeModal);
document.querySelector("[data-close-modal]").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape" && modal.classList.contains("open")) closeModal()});

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max>0?(window.scrollY/max)*100:0)+"%";
},{passive:true});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

renderProjects();
