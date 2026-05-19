gsap.to('#heading', {
    transform: 'translateX(-240vw)',
    scrollTrigger: {
        // markers: true,
        start: 'top 0%',
        end: 'top -120%',
        scrub: 5,
        pin: "#page2",
        scroller: 'body'
    }
})