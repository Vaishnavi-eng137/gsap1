let tl = gsap.timeline();

tl.from('#nav',{
    opacity:0,
    delay:0.3
})

tl.from('#nav h1,#nav h3',{
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

tl.from('#left h1',{
    x:-100,
    opacity:0,
    duration:0.5,
    stagger:0.2
})

tl.from('#right img',{
    opacity:0,
    scale:0.5,
    duration:0.5
})

tl.from("#page2 .box",{
    opacity:0,
    scale:0,
    duration:0.8,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:body,
        markers:true,
        start:"top 70%" 
    }
})