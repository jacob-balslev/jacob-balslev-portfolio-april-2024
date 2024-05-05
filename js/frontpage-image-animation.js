document.addEventListener("DOMContentLoaded", function () {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    };
  
    // IMAGE ANIMATION Polygon Reveal
  
    let revealCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
  
        if (entry.isIntersecting) {
          console.log(container);
          container.classList.add("animating");
          return;
        }
  
        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("animating");
        }
      });
    };
  
    let revealObserver = new IntersectionObserver(revealCallback, options);
  
    document.querySelectorAll(".frontpage-projects-images-container-container").forEach((reveal) => {
      revealObserver.observe(reveal);
    });

     // IMAGE ANIMATION Opacity
  
     let opacityCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
  
        if (entry.isIntersecting) {
          console.log(container);
          container.classList.add("animating");
          return;
        }
  
        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("animating");
        }
      });
    };
  
    let opacityObserver = new IntersectionObserver(opacityCallback, options);
  
    document.querySelectorAll("#project .images").forEach((opacity) => {
      opacityObserver.observe(opacity);
    });
    
  
    // TEXT ANIMATION UP
  
    let fadeupCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
        container.classList.add("not-fading-up");
  
        if (entry.isIntersecting) {
          container.classList.add("fading-up");
          return;
        }
  
        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("fading-up");
        }
      });
    };

     // TEXT ANIMATION DOWN
  
     let fadedownCallback = (entries) => {
        entries.forEach((entry) => {
          let container = entry.target;
          container.classList.add("not-fading-down");
    
          if (entry.isIntersecting) {
            container.classList.add("fading-down");
            return;
          }
    
          if (entry.boundingClientRect.top > 0) {
            container.classList.remove("fading-down");
          }
        });
      };

    
  
    let fadeupObserver = new IntersectionObserver(fadeupCallback, options);
    let fadedownObserver = new IntersectionObserver(fadedownCallback, options);
  
    document.querySelectorAll(".fadeup").forEach((fadeup) => {
      fadeupObserver.observe(fadeup);
    });
    document.querySelectorAll(".fadedown").forEach((fadedown) => {
        fadedownObserver.observe(fadedown);
      });
  });