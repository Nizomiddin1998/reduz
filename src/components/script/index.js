import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('.sections');

sections.forEach((section,i)=>{
  
  const modules = gsap.utils.toArray('.module',section);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      end: "+=100%",
      scrub: 1,
      pin: true
    }
  });
  
  modules.forEach((module,i)=>{
    
    const figures = gsap.utils.toArray('.fig',module);
    tl.to(figures, {
      yPercent: -10,
      autoAlpha: 0,
      ease: "none",
      duration: 0.5,
      stagger: 0.5
    });
    
    // fade in the panels element
    tl.to(gsap.utils.toArray('.panels', module), {autoAlpha: 1}, "<")
    
    const panels = gsap.utils.toArray('.panel', module);
    
    // just for visualizing, randomize the background color of the panels.
    gsap.set(panels, {backgroundColor: "rgb(random(0,255), random(0,255), random(0,255))"});
    
    panels.forEach((panel,i)=>{
      // first panel should start already in place, and last panel should end in the center. 
      tl.fromTo(panel, { 
        yPercent: i ? 100 : 0
      },{
        yPercent: i === panels.length - 1 ? 0 : -100,
        duration: i === 0 || i === panels.length - 1 ? 0.5 : 1,
        ease: "none",
      }, "-=0.5");
    });
    tl.to({}, {duration: 1}); // add some extra space at the end so the last panel sits for a bit before unpinning.

  });
});