  // Slide-in
$(document).ready(() => {
  
    $('.slide').addClass('slide-anim');

    // Progress
    gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});
// Progress




      //
    //   gsap.registerPlugin(ScrollTrigger);

    //   let panels = gsap.utils.toArray(".scroller");
    //   // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
    //   let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
      
    //   panels.forEach((panel, i) => {
    //     ScrollTrigger.create({
    //       trigger: panel,
    //       start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    //       pin: false, 
    //       pinSpacing: false 
    //     });
    //   });
      
    //   ScrollTrigger.create({
    //     snap: {
    //       snapTo: (progress, self) => {
    //         let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
    //             snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
    //         return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
    //       },
    //       duration: 0.5
    //     }
    //   });
      


    // document.querySelector('#burger-menu').addEventListener('click', () => {
     
    //   if($('.animate-link-burger').hasClass('down')){
    //     $('.animate-link-burger').removeClass('down');
    //     $('.animate-link-burger').addClass('up');
        
    //  }else{
    //   $('.animate-link-burger').removeClass('up');
    //   $('.animate-link-burger').addClass('down');
    //  }
      
      

      // element.classList.contains(class);
     });
  
