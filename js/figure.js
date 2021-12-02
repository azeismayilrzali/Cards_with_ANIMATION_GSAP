document.addEventListener("DOMContentLoaded", function() {
    
  
    let container = document.getElementById("section__poster");
    container.onmouseover = container.onmouseout = handler;
    function handler(event) {
        function str(el) {
          if (!el) return "null";
          return el.className || el.tagName;
        }
        // let log;
        // log =
        //   event.type +
        //   ":  " +
        //   "target=" +
        //   str(event.target) +
        //   ",  relatedTarget=" +
        //   str(event.relatedTarget) +
        //   "\n";
        // console.log(log);
    
        if (event.type == "mouseover") {

          if (str(event.target) == "frame1") {
            let img = event.target.children[0];
            let video = event.target.children[1];
            let timeline1 = gsap.timeline({
                
            });
            timeline1
            .to(video,0.2,{opacity:1})
            .to(event.target,0.2,{scale:1.15,borderRadius:"10%"},"<")
            .to(event.target,0.2,{clipPath: "polygon(29% 0, 100% 0, 100% 58%, 73% 100%, 0 100%, 0 40%)"},"<+0.15")
            .to(img,0.2,{zIndex:-1},"<")

            video.children[0].play();

          }
        }
        if (event.type == "mouseout") {

          if (str(event.target) === "frame1") {
            
            let img = event.target.children[0];
            let video = event.target.children[1];
            let timeline1 = gsap.timeline({
            });
            timeline1
            .to(video,0.2,{opacity:0})
            .to(event.target,0.2,{scale:1,clipPath: "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)"},"<")
            .to(event.target,0.2,{clipPath: "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)"},">")
            .to(img,0.2,{zIndex:0},"<")

            

            video.children[0].pause();
          }
        }
      }
    
});