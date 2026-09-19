import { createFileRoute } from "@tanstack/react-router";
import {
  Activity, AlertTriangle, ArrowDown, ArrowRight, BarChart3, BrainCircuit, Camera,
  Check, ChevronRight, CircleDot, Cpu, Database, Eye, FileText, Fingerprint,
  Gauge, GraduationCap, Layers3, LockKeyhole, Menu, MonitorUp, MoveRight,
  Network, Play, ScanFace, ShieldCheck, Smartphone, Sparkles, Target, Users,
  Video, X, Zap,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intelligent Real-Time Classroom Monitoring System — FYP" },
      { name: "description", content: "An FYP prototype exploring computer vision and deep learning for attendance, engagement analysis, anomaly detection, and classroom insights." },
      { property: "og:title", content: "Intelligent Real-Time Classroom Monitoring System" },
      { property: "og:description", content: "A university FYP prototype exploring AI-powered, real-time classroom monitoring." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["overview", "Overview"], ["architecture", "Architecture"], ["modules", "AI Modules"],
  ["dashboard", "Dashboard"], ["technology", "Technology"], ["timeline", "Timeline"], ["privacy", "Privacy"],
] as const;

function useActiveSection() {
  const [active, setActive] = useState("overview");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-28% 0px -62%", threshold: 0 },
    );
    navItems.forEach(([id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return active;
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Navbar active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Overview />
      <Problem />
      <Objectives />
      <Architecture />
      <Modules />
      <Dashboard />
      <Technology />
      <Targets />
      <Scope />
      <Timeline />
      <Methodology />
      <Privacy />
      <Research />
      <Outcomes />
      <Closing />
      <Footer />
    </main>
  );
}

function Navbar({ active, menuOpen, setMenuOpen }: { active: string; menuOpen: boolean; setMenuOpen: (value: boolean) => void }) {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
      <a href="#top" className="flex items-center gap-3" aria-label="Go to top">
        <span className="grid size-9 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary"><ScanFace size={19}/></span>
        <span className="hidden font-display text-sm font-semibold sm:block">ICMS <span className="text-muted-foreground">/ FYP</span></span>
      </a>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
        {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors ${active === id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{label}</a>)}
      </nav>
      <div className="flex items-center gap-3">
        <span className="hidden items-center gap-2 text-xs text-muted-foreground md:flex"><span className="size-1.5 rounded-full bg-warning"/>In development</span>
        <button className="grid size-10 place-items-center rounded-md border border-border text-foreground lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
    </div>
    {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">{navItems.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border py-3 text-sm text-muted-foreground last:border-0">{label}<ChevronRight size={16}/></a>)}</nav>}
  </header>;
}

function Hero() {
  return <section id="top" className="relative flex min-h-[min(940px,100svh)] items-center overflow-hidden border-b border-border pt-24">
    <div className="tech-grid pointer-events-none absolute inset-0 opacity-45"/>
    <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"/>
    <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div className="max-w-3xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 text-xs font-semibold text-primary"><GraduationCap size={14}/> FINAL YEAR PROJECT <span className="h-3 w-px bg-primary/30"/> PROTOTYPE</div>
        <h1 className="font-display text-4xl font-semibold leading-[1.08] text-sheen sm:text-6xl lg:text-7xl">Intelligent Real-Time Classroom Monitoring System</h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-primary sm:text-xl">AI-Powered Computer Vision for Smarter Classroom Monitoring</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">An FYP project under development exploring how computer vision and deep learning can provide real-time attendance, engagement, anomaly, and instructor insights.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#overview" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_28px_color-mix(in_oklab,var(--primary)_25%,transparent)] transition-transform hover:-translate-y-0.5">Explore Project <ArrowDown size={17}/></a>
          <a href="#architecture" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary">View System Architecture <ArrowRight size={17}/></a>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground"><span className="flex items-center gap-2"><CircleDot size={13} className="text-cyan"/>Computer Vision</span><span className="flex items-center gap-2"><CircleDot size={13} className="text-cyan"/>Deep Learning</span><span className="flex items-center gap-2"><CircleDot size={13} className="text-cyan"/>Real-Time Analytics</span></div>
      </div>
      <ClassroomVisual />
    </div>
  </section>;
}

function ClassroomVisual() {
  const seats = [[15,27],[37,24],[61,29],[81,23],[21,53],[43,50],[68,54],[86,49],[13,76],[35,73],[59,78],[80,72]];
  return <div className="float-soft relative mx-auto w-full max-w-[580px]">
    <div className="absolute -inset-5 rounded-xl border border-primary/10" style={{animation:"pulse-ring 3s ease-in-out infinite"}}/>
    <div className="glass-panel relative aspect-[1.12] overflow-hidden rounded-lg p-3">
      <div className="flex h-9 items-center justify-between border-b border-border px-2 text-[10px] text-muted-foreground"><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-success"/>CAM 01 / LIVE FEED MOCKUP</span><span>09:42:18</span></div>
      <div className="relative mt-3 h-[calc(100%-48px)] overflow-hidden rounded-md border border-border bg-muted">
        <div className="absolute inset-0 opacity-20 tech-grid"/><div className="scan-line absolute inset-x-0 top-0 h-px bg-cyan glow-line"/>
        <div className="absolute inset-x-[12%] top-[8%] h-[16%] rounded-sm border border-border bg-panel-strong"><div className="mx-auto mt-4 h-px w-1/2 bg-primary/30"/><div className="mx-auto mt-2 h-px w-1/3 bg-primary/20"/></div>
        {seats.map(([x,y],i) => <div key={i} className="absolute" style={{left:`${x}%`,top:`${y}%`}}><div className={`relative h-10 w-8 rounded-sm border ${i===6 ? "border-warning" : "border-primary/60"} bg-card`}><div className="absolute left-1/2 top-1 size-3 -translate-x-1/2 rounded-full border border-current"/><div className="absolute inset-x-1 bottom-1 h-4 rounded-sm border border-current"/></div><span className={`mt-1 block text-center text-[7px] ${i===6 ? "text-warning" : "text-primary"}`}>{i===6 ? "DISTRACTED" : `ID ${String(i+1).padStart(2,"0")}`}</span></div>)}
        <div className="absolute bottom-3 left-3 rounded-sm border border-primary/30 bg-background/80 px-2 py-1 text-[9px] text-primary">12 FACES TRACKED</div>
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-sm border border-warning/30 bg-background/80 px-2 py-1 text-[9px] text-warning"><AlertTriangle size={9}/> 1 EVENT</div>
      </div>
    </div>
    <div className="absolute -right-4 top-12 glass-panel rounded-md px-3 py-2 text-[10px] text-muted-foreground"><span className="mr-2 inline-block size-1.5 rounded-full bg-success"/>Processing stream</div>
  </div>;
}

function SectionHeading({ eyebrow, title, copy, center=false }: { eyebrow:string; title:string; copy?:string; center?:boolean }) {
  return <div className={`reveal mb-12 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}><p className="mb-3 font-display text-xs font-bold uppercase text-primary">{eyebrow}</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>{copy && <p className="mt-5 leading-7 text-muted-foreground">{copy}</p>}</div>;
}
const sectionClass = "mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8";

const overviewCards = [
  {icon:ScanFace,title:"Automated Attendance",text:"A proposed facial-recognition workflow for identity verification and attendance logging."},
  {icon:Eye,title:"Engagement Analysis",text:"Planned pose and behavior analysis to classify attention across a classroom session."},
  {icon:AlertTriangle,title:"Anomaly Detection",text:"Real-time identification of selected classroom events requiring instructor awareness."},
  {icon:BarChart3,title:"Instructor Analytics",text:"A unified view of attendance, attention levels, alerts, and session-level reporting."},
];
function Overview() { return <section id="overview" className={sectionClass}><SectionHeading eyebrow="01 / Project Overview" title="A unified vision for intelligent classroom insight" copy="The proposed system aims to automate classroom monitoring through computer vision and deep learning—turning a standard camera stream into structured, actionable information for instructors."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{overviewCards.map(({icon:Icon,title,text},i)=><article key={title} className="reveal glass-panel group rounded-lg p-6 transition-all hover:-translate-y-1 hover:border-primary/50" style={{transitionDelay:`${i*70}ms`}}><span className="grid size-11 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary"><Icon size={21}/></span><h3 className="mt-6 font-display text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></section> }

const problems = ["Manual attendance can be slow, error-prone, and vulnerable to proxy attendance.","Instructors often lack real-time visibility into engagement and attention.","Sleeping, phone usage, and unauthorized movement are difficult to monitor at scale.","Traditional surveillance is passive and does not provide actionable intelligence.","Affordable, scalable AI-assisted monitoring solutions remain a practical need."];
function Problem() { return <section className="border-y border-border bg-panel/30"><div className={sectionClass}><SectionHeading eyebrow="02 / Problem Statement" title="From passive observation to actionable classroom signals"/><div className="grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]"> <div className="reveal rounded-lg border border-danger/20 bg-danger/5 p-7"><p className="mb-6 text-xs font-bold uppercase text-danger">Current challenges</p><div className="space-y-4">{problems.map((p,i)=><div key={p} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-1 font-display text-xs text-danger">0{i+1}</span><p>{p}</p></div>)}</div></div><div className="hidden items-center text-primary lg:flex"><MoveRight size={32}/></div><div className="reveal rounded-lg border border-primary/25 bg-primary/5 p-7"><p className="mb-6 text-xs font-bold uppercase text-primary">Proposed direction</p><div className="flex h-[calc(100%-40px)] flex-col justify-center"><BrainCircuit size={42} className="text-primary"/><h3 className="mt-6 font-display text-2xl font-semibold">One real-time intelligence layer</h3><p className="mt-4 leading-7 text-muted-foreground">Combine attendance, attention classification, anomaly detection, and session analytics into a coherent instructor-facing prototype.</p><div className="mt-7 flex flex-wrap gap-2">{["Observe","Interpret","Alert","Report"].map(x=><span key={x} className="rounded-sm border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs text-primary">{x}</span>)}</div></div></div></div></div></section> }

const objectives = [
  [Fingerprint,"Automated attendance","Facial-recognition-based identity verification"],[Target,"≥95% target","Minimum face-recognition accuracy target"],[Eye,"Attention states","Attentive, distracted, and sleeping classification"],[AlertTriangle,"Behavior detection","Phone usage and unauthorized movement"],[MonitorUp,"Unified dashboard","Real-time instructor monitoring and alerts"],[GraduationCap,"Classroom evaluation","Testing in a controlled real classroom environment"],
] as const;
function Objectives(){return <section className={sectionClass}><SectionHeading eyebrow="03 / Project Objectives" title="Defined research and engineering objectives"/><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{objectives.map(([Icon,t,d],i)=><div key={t} className="reveal bg-background p-6 transition-colors hover:bg-card" style={{transitionDelay:`${i*50}ms`}}><Icon size={20} className="text-primary"/><h3 className="mt-5 font-display font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p></div>)}</div></section>}

function Node({icon:Icon,label,sub,accent=false}:{icon:typeof Camera;label:string;sub?:string;accent?:boolean}){return <div className={`relative rounded-md border p-4 text-center ${accent?"border-primary/45 bg-primary/10":"border-border bg-panel"}`}><Icon size={19} className={`mx-auto ${accent?"text-primary":"text-muted-foreground"}`}/><p className="mt-2 font-display text-xs font-semibold">{label}</p>{sub&&<p className="mt-1 text-[10px] text-muted-foreground">{sub}</p>}</div>}
function Connector(){return <div className="relative mx-auto h-8 w-px bg-line"><span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_10px_var(--cyan)] animate-pulse"/></div>}
function Architecture(){return <section id="architecture" className="border-y border-border bg-panel/30"><div className={sectionClass}><SectionHeading eyebrow="04 / System Architecture" title="One camera feed. Three parallel intelligence paths." copy="A proposed modular pipeline separates identity, engagement, and anomaly processing before combining their outputs for analytics and instructor review." center/><div className="reveal glass-panel mx-auto max-w-6xl rounded-lg p-5 sm:p-8"><div className="mx-auto max-w-xs"><Node icon={Camera} label="Camera Feed" sub="Single classroom stream" accent/><Connector/><Node icon={Cpu} label="OpenCV Pre-processing" sub="Frames • resize • normalization"/></div><div className="mx-auto h-8 w-px bg-line"/><div className="mx-auto mb-4 max-w-sm rounded-md border border-primary/30 bg-primary/8 px-4 py-2 text-center text-xs font-bold text-primary">PARALLEL AI PROCESSING</div><div className="relative grid gap-4 lg:grid-cols-3"><div className="absolute left-[16.5%] right-[16.5%] top-0 hidden h-px bg-line lg:block"/>{[[ScanFace,"MTCNN","ArcFace / Face Recognition","Attendance"],[Activity,"MediaPipe + CNN","Pose & behavior features","Attention Level"],[AlertTriangle,"YOLOv8","Object & behavior detection","Anomaly Events"]].map(([I,a,b,c])=><div key={String(a)} className="rounded-md border border-border bg-background/45 p-3"><Node icon={I as typeof Camera} label={String(a)} sub={String(b)} /><Connector/><div className="rounded-md border border-primary/20 bg-primary/5 p-3 text-center text-xs font-semibold text-primary">{String(c)}</div></div>)}</div><div className="mx-auto h-8 w-px bg-line"/><div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]"><Node icon={BrainCircuit} label="Behavior Analytics Engine" sub="Fused event interpretation" accent/><ArrowRight className="mx-auto hidden text-primary md:block"/><Node icon={Database} label="Database" sub="SQLite / PostgreSQL"/><ArrowRight className="mx-auto hidden text-primary md:block"/><div className="rounded-md border border-primary/40 bg-primary/10 p-4"><MonitorUp size={19} className="mx-auto text-primary"/><p className="mt-2 text-center font-display text-xs font-semibold">Instructor Dashboard</p><div className="mt-3 grid grid-cols-2 gap-1 text-[9px] text-muted-foreground"><span>Live Monitoring</span><span>Session Reports</span><span>Attendance</span><span>Alerts</span></div></div></div><div className="mt-5 flex flex-wrap justify-center gap-2">{["OpenCV","MTCNN","ArcFace","MediaPipe","CNN","YOLOv8"].map(x=><span key={x} className="rounded-sm border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground">{x}</span>)}</div></div></div></section>}

const moduleData=[
  {n:"01",icon:ScanFace,title:"Face Recognition",tech:"MTCNN + ArcFace / FaceNet",purpose:"Face detection, identity verification, and proposed automated attendance.",tags:["Detection","Embedding","Verification"]},
  {n:"02",icon:Activity,title:"Engagement Analysis",tech:"MediaPipe + CNN",purpose:"Head and body pose analysis for attention-state classification.",tags:["Attentive","Distracted","Sleeping"]},
  {n:"03",icon:AlertTriangle,title:"Anomaly Detection",tech:"YOLOv8",purpose:"Real-time detection of selected classroom objects and behaviors.",tags:["Mobile phones","Sleeping behavior","Unauthorized movement"]},
];
function Modules(){return <section id="modules" className={sectionClass}><SectionHeading eyebrow="05 / AI & Computer Vision Modules" title="Specialized models. Coordinated insight."/><div className="grid gap-5 lg:grid-cols-3">{moduleData.map(({n,icon:Icon,title,tech,purpose,tags},i)=><article key={title} className="reveal glass-panel group relative overflow-hidden rounded-lg p-7" style={{transitionDelay:`${i*80}ms`}}><span className="absolute right-5 top-4 font-display text-5xl font-bold text-primary/8">{n}</span><div className="grid size-12 place-items-center rounded-md bg-primary/10 text-primary"><Icon size={24}/></div><h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3><p className="mt-2 text-xs font-bold text-primary">{tech}</p><p className="mt-5 min-h-14 text-sm leading-6 text-muted-foreground">{purpose}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map(t=><span key={t} className="rounded-sm border border-border bg-background/50 px-2 py-1 text-[10px] text-muted-foreground">{t}</span>)}</div></article>)}</div></section>}

const metricData=[[Users,"42","Total students","text-foreground"],[Check,"38","Present students","text-success"],[Gauge,"90.5%","Attendance","text-primary"],[Eye,"31","Attentive","text-cyan"],[Activity,"5","Distracted","text-warning"],[Zap,"2","Sleeping","text-danger"]] as const;
function Dashboard(){return <section id="dashboard" className="border-y border-border bg-panel/30"><div className={sectionClass}><SectionHeading eyebrow="06 / Live Monitoring" title="Instructor dashboard concept" copy="A realistic interface concept showing how session intelligence could be organized for rapid classroom awareness."/><div className="reveal overflow-hidden rounded-lg border border-border bg-background shadow-2xl"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-5 py-4"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><MonitorUp size={18}/></span><div><p className="font-display text-sm font-semibold">Prototype Dashboard</p><p className="text-[10px] text-muted-foreground">Classroom Monitoring Console</p></div></div><span className="rounded-sm border border-warning/35 bg-warning/10 px-2 py-1 text-[10px] font-bold text-warning">DEMO DATA</span></div><div className="grid lg:grid-cols-[1.55fr_.95fr]"><div className="border-b border-border p-4 lg:border-b-0 lg:border-r"><div className="relative aspect-video overflow-hidden rounded-md border border-border bg-muted"><div className="tech-grid absolute inset-0 opacity-25"/><div className="absolute left-4 top-4 flex items-center gap-2 rounded-sm bg-background/80 px-2 py-1 text-[9px] text-success"><span className="size-1.5 rounded-full bg-success"/>CAM 01 • DEMO</div><div className="absolute inset-x-[18%] top-[10%] h-[22%] border border-border bg-panel-strong"/>{[[22,43],[43,39],[65,44],[78,37],[29,67],[53,64],[73,69]].map(([x,y],i)=><div key={i} className={`absolute h-12 w-9 rounded-sm border ${i===4?"border-warning":"border-primary/55"} bg-card/70`} style={{left:`${x}%`,top:`${y}%`}}><span className={`absolute -top-4 text-[7px] ${i===4?"text-warning":"text-primary"}`}>{i===4?"PHONE":"TRACKED"}</span></div>)}<div className="absolute bottom-3 left-3 text-[9px] text-muted-foreground">CS-401 • Session 08</div></div><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">{metricData.map(([Icon,v,l,c])=><div key={l} className="rounded-md border border-border bg-card p-3"><div className="flex items-center justify-between"><Icon size={14} className={c}/><span className={`font-display text-xl font-semibold ${c}`}>{v}</span></div><p className="mt-2 text-[10px] text-muted-foreground">{l}</p></div>)}</div></div><aside className="p-5"><div className="flex items-center justify-between"><h3 className="font-display text-sm font-semibold">Active alerts</h3><span className="rounded-full bg-danger/15 px-2 py-0.5 text-[10px] text-danger">2 ACTIVE</span></div><div className="mt-4 space-y-3">{[[Smartphone,"Phone detected","Row 3 • Seat 05","09:41:24"],[AlertTriangle,"Attention warning","Row 2 • Seat 08","09:39:02"],[Eye,"Low engagement","Class average below threshold","09:35:48"]].map(([Icon,t,d,time])=><div key={String(t)} className="rounded-md border border-border bg-card p-3"><div className="flex gap-3"><Icon size={15} className="mt-0.5 text-warning"/><div className="min-w-0 flex-1"><p className="text-xs font-semibold">{String(t)}</p><p className="mt-1 truncate text-[10px] text-muted-foreground">{String(d)}</p></div><time className="text-[9px] text-muted-foreground">{String(time)}</time></div></div>)}</div><div className="mt-6 border-t border-border pt-5"><p className="text-[10px] font-bold uppercase text-muted-foreground">Session information</p><dl className="mt-3 grid grid-cols-2 gap-y-3 text-xs"><dt className="text-muted-foreground">Course</dt><dd className="text-right">AI-402</dd><dt className="text-muted-foreground">Duration</dt><dd className="text-right">42 min</dd><dt className="text-muted-foreground">Room</dt><dd className="text-right">Lab A</dd></dl></div></aside></div></div><p className="mt-4 text-center text-xs text-muted-foreground">All values and events shown above are illustrative demo data for the proposed interface.</p></div></section>}

const stacks={Programming:["Python 3.10+"],"Deep Learning":["TensorFlow","PyTorch"],"Computer Vision":["OpenCV","MediaPipe"],"Face Detection":["MTCNN"],"Face Recognition":["ArcFace","DeepFace"],"Object Detection":["YOLOv8","Ultralytics"],"Web Backend":["Flask","Django"],Database:["SQLite","PostgreSQL"],Hardware:["IP Camera","GPU / CPU"]};
function Technology(){return <section id="technology" className={sectionClass}><SectionHeading eyebrow="07 / Technology Stack" title="A focused stack for vision, inference, and reporting"/><div className="reveal grid overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{Object.entries(stacks).map(([k,v])=><div key={k} className="bg-background p-5"><p className="text-[10px] font-bold uppercase text-primary">{k}</p><div className="mt-3 flex flex-wrap gap-2">{v.map(x=><span key={x} className="rounded-sm border border-border bg-card px-3 py-2 font-display text-sm font-medium">{x}</span>)}</div></div>)}</div></section>}

const targets=[["≥ 15","FPS","Video Processing"],["≥ 95","%","Face Recognition Accuracy"],["≥ 85","%","Engagement Classification Accuracy"],["≥ 80","%","Phone Detection Precision"],["≥ 80","%","Sleep Detection Precision"]];
function Targets(){return <section className="border-y border-border bg-panel/30"><div className={sectionClass}><SectionHeading eyebrow="08 / Performance Targets" title="Evaluation benchmarks—not achieved results" copy="These metrics define intended project targets for testing and evaluation. They do not represent validated system performance."/><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{targets.map(([n,u,l],i)=><div key={l} className="reveal rounded-lg border border-primary/20 bg-primary/5 p-5" style={{transitionDelay:`${i*60}ms`}}><span className="rounded-sm bg-warning/10 px-2 py-1 text-[9px] font-bold text-warning">TARGET</span><p className="mt-6 font-display text-3xl font-semibold text-primary">{n}<span className="ml-1 text-base">{u}</span></p><p className="mt-2 text-xs leading-5 text-muted-foreground">{l}</p></div>)}</div></div></section>}

const included=["Single classroom camera","Real-time video processing","Facial recognition attendance","Attention and engagement classification","Phone and sleeping detection","Web-based instructor dashboard","Session reports","Controlled testing with approximately 30–50 students"];
const future=["Multi-camera setups","Outdoor environments","Advanced emotion recognition","University ERP/LMS integration","Mobile application"];
function Scope(){return <section className={sectionClass}><SectionHeading eyebrow="09 / Project Scope" title="A deliberate, testable project boundary"/><div className="grid gap-5 lg:grid-cols-2"><ScopeBox title="Included in FYP scope" items={included} icon={Check} accent/><ScopeBox title="Excluded / future work" items={future} icon={ArrowRight}/></div></section>}
function ScopeBox({title,items,icon:Icon,accent=false}:{title:string;items:string[];icon:typeof Check;accent?:boolean}){return <div className={`reveal rounded-lg border p-7 ${accent?"border-primary/25 bg-primary/5":"border-border bg-card"}`}><h3 className={`font-display text-xl font-semibold ${accent?"text-primary":""}`}>{title}</h3><ul className="mt-6 grid gap-3 sm:grid-cols-2">{items.map(x=><li key={x} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Icon size={15} className={`mt-1 shrink-0 ${accent?"text-primary":"text-muted-foreground"}`}/>{x}</li>)}</ul></div>}

const months=["Literature Review & Requirement Analysis","Dataset Collection & Preparation","Face Recognition Module Development & Testing","Engagement & Pose Estimation Module","Anomaly Detection Module","System Integration & Dashboard Development","Testing, Evaluation & Performance Tuning","Documentation & Final Report Writing"];
function Timeline(){return <section id="timeline" className="border-y border-border bg-panel/30"><div className={sectionClass}><SectionHeading eyebrow="10 / Development Timeline" title="An eight-month path from research to evaluation"/><div className="relative ml-3 border-l border-line sm:ml-7">{months.map((x,i)=><div key={x} className="reveal relative pb-8 pl-8 last:pb-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-5"><span className="absolute -left-2 top-1 grid size-4 place-items-center rounded-full border border-primary bg-background"><span className="size-1.5 rounded-full bg-primary"/></span><p className="mb-1 font-display text-xs font-bold text-primary">MONTH {i+1}</p><p className="font-display text-base font-medium">{x}</p></div>)}</div></div></section>}

function Methodology(){return <section className={sectionClass}><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><SectionHeading eyebrow="11 / Data & Methodology" title="A planned evidence pipeline" copy="Dataset collection and model evaluation form part of the proposed work. No dataset is represented here as already collected."/><div className="reveal grid gap-3 sm:grid-cols-2">{[[Users,"Custom student image dataset","Planned minimum of 50 images per student"],[Eye,"Visual variation","Different lighting conditions and poses"],[Video,"Behavior recordings","Planned classroom video for analysis"],[Layers3,"Supplementary sources","DAiSEE and COCO public datasets"],[Cpu,"Pre-processing","Cleaning, normalization, and preparation"],[Sparkles,"Augmentation","Variation to improve robustness and balance"]].map(([Icon,t,d])=><div key={String(t)} className="rounded-md border border-border bg-card p-5"><Icon size={18} className="text-primary"/><p className="mt-4 font-display text-sm font-semibold">{String(t)}</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{String(d)}</p></div>)}</div></div></section>}

function Privacy(){return <section id="privacy" className="border-y border-border bg-panel/30"><div className={sectionClass}><div className="reveal rounded-lg border border-primary/25 bg-primary/5 p-7 sm:p-10"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><span className="grid size-12 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary"><ShieldCheck size={25}/></span><p className="mt-6 font-display text-xs font-bold uppercase text-primary">12 / Privacy & Risk Management</p><h2 className="mt-3 font-display text-3xl font-semibold">Responsible by design</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">The prototype approach prioritizes controlled access, local handling, and technical safeguards.</p></div><div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">{[[LockKeyhole,"Institutional privacy","Facial data handled according to institutional privacy policies."],[Database,"Local storage","Data intended to be stored locally and not shared externally."],[Eye,"Lighting variability","Diverse training data planned to address changing conditions."],[Cpu,"Processing capacity","GPU acceleration considered for real-time processing."],[Layers3,"Dataset imbalance","Data augmentation planned to improve class balance."]].map(([Icon,t,d])=><div key={String(t)} className="bg-background p-5"><Icon size={17} className="text-primary"/><p className="mt-3 text-sm font-semibold">{String(t)}</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{String(d)}</p></div>)}</div></div></div></div></section>}

const research=[["ArcFace","Discriminative face embeddings for identity recognition."],["OpenPose / Pose Estimation","Body keypoint analysis for posture and behavioral cues."],["YOLO","Single-stage real-time object detection architecture."],["MediaPipe / BlazePose","Efficient landmark estimation for body and head pose."],["Automated Engagement Detection","Research methods for classifying observable attention states."]];
function Research(){return <section className={sectionClass}><SectionHeading eyebrow="13 / Research Foundation" title="Grounded in established vision research"/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">{research.map(([t,d],i)=><div key={t} className="reveal rounded-lg border border-border bg-card p-5" style={{transitionDelay:`${i*50}ms`}}><p className="font-display text-sm font-semibold text-primary">{t}</p><p className="mt-3 text-xs leading-5 text-muted-foreground">{d}</p></div>)}</div></section>}
function Outcomes(){const xs=["Real-time classroom monitoring","Automated attendance","Engagement analysis","Anomaly detection","Instructor dashboard","Historical session reports","Technical documentation / research report"];return <section className="border-y border-border bg-panel/30"><div className={sectionClass}><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><SectionHeading eyebrow="14 / Expected Outcomes" title="What the project aims to produce" copy="These are intended deliverables and research outputs, not claims of completed implementation."/><div className="reveal grid gap-3 sm:grid-cols-2">{xs.map((x,i)=><div key={x} className="flex items-center gap-3 rounded-md border border-border bg-background p-4"><span className="grid size-7 shrink-0 place-items-center rounded-sm bg-primary/10 font-display text-[10px] text-primary">{String(i+1).padStart(2,"0")}</span><p className="text-sm">{x}</p></div>)}</div></div></div></section>}
function Closing(){return <section className="relative overflow-hidden"><div className="tech-grid absolute inset-0 opacity-30"/><div className="relative mx-auto max-w-5xl px-5 py-28 text-center"><p className="font-display text-xs font-bold uppercase text-primary">Final Year Project</p><h2 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">Building Smarter Classrooms with AI</h2><p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">An intelligent computer-vision approach designed to transform classroom monitoring from manual observation into real-time, data-driven insight.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="#architecture" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">Explore Architecture <Network size={17}/></a><a href="#technology" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-bold text-foreground">View Technologies <Cpu size={17}/></a></div></div></section>}
function Footer(){return <footer className="border-t border-border"><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><ScanFace size={18}/></span><p className="max-w-md font-display text-sm font-semibold">Intelligent Real-Time Classroom Monitoring System</p></div><p className="mt-4 text-xs text-muted-foreground">Final Year Project <span className="mx-2">•</span> AI <span className="mx-2">•</span> Computer Vision <span className="mx-2">•</span> Deep Learning</p></div><nav className="flex flex-wrap gap-x-5 gap-y-3">{navItems.map(([id,l])=><a key={id} href={`#${id}`} className="text-xs text-muted-foreground transition-colors hover:text-primary">{l}</a>)}</nav></div><div className="mt-8 h-px section-rule"/><p className="mt-6 text-[10px] text-muted-foreground">PROJECT PROTOTYPE • UNDER DEVELOPMENT</p></div></footer>}
