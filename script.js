tl=gsap.timeline()

tl.from(".page1 h1",{
    opacity:0,
    stagger:1,
    scale:0,

})
tl.from(".page1 .box1",{
    opacity:0,
    scale:0,
    rotate:360,
    duration:1,
    stagger:1,
})

gsap.from(".page2>.divh1",{
    opacity:0,
    y:-200,
    stagger:1,
    scale:0,
    scrollTrigger:{              
        trigger:".page2 .divh1",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end:"top 40%",
        scrub:2,
    }
})

gsap.from(".page2 .box2",{
    scale:0,
    rotate:60,
    duration:1,
    scrollTrigger:{              
        trigger:".page2 .box2",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end:"top 40%",
        scrub:2,
    }
})
gsap.from(".page3 .box3",{
    scale:0,
    rotate:10,
    duration:1,
    scrollTrigger:{              
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start: "top 0",
        end:"top -100%",
        scrub:1,
        pin:true,
    }
})
gsap.from(".page4 h1",{
    // scale:0,
    // rotate:10,
    // duration:1,
    transform:"translateX(-150%)",
    scrollTrigger:{              
        trigger:".page4",
        scroller:"body",
        // markers:true,
        start: "top 0",
        end:"top -100%",
        scrub:1,
        pin:true,
    }
})









const body= document.querySelector("body");
        const point= document.querySelector(".point");

        body.addEventListener("mousemove",function(e){
            point.style.left = e.x+"px";
            point.style.top = e.y+"px";
        });