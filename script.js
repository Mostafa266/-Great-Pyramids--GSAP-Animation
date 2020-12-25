 let siteTimeline = new TimelineMax({paused: true});

// Animate Pyramids
siteTimeline.fromTo('.floated-pyramids svg:nth-child(1)',.5,{
    opacity:'0',
    left:'0%',
    transform:'rotate(90deg)'
},{
    transform:'rotate(-90deg)',
    opacity:'1',
    left:'10%'
}).fromTo('.floated-pyramids svg:nth-child(2)',.5,{
    opacity:'0',
    left:'0%',
    transform:'rotate(-90deg)'
},{
    transform:'rotate(90deg)',
    opacity:'1',
    left:'10%'
},'-=.3').fromTo('.floated-pyramids svg:nth-child(3)',.5,{
    opacity:'0',
    left:'0%',
    transform:'rotate(-90deg)'
},{
    transform:'rotate(90deg)',
    opacity:'1',
    left:'10%'
},'-=.3').fromTo('.floated-pyramids svg:nth-child(4)',1.6,{
    opacity:'0',
    left:'0%',
    transform:'rotate(-90deg)'
},{
    transform:'rotate(40deg)',
    opacity:'1',
    left:'35%'
},'-=.3').fromTo('.floated-pyramids svg:nth-child(5)',1.2,{
    opacity:'0',
    right:'0%',
    transform:'rotate(-40deg)'
},{
    transform:'rotate(80deg)',
    opacity:'1',
    right:'35%'
},'-=.1.5').fromTo('.floated-pyramids svg:nth-child(6)',1.2,{
    opacity:'0',
    right:'0%',
    transform:'rotate(-40deg)'
},{
    transform:'rotate(20deg)',
    opacity:'1',
    right:'15%'
},'-=.1.5')


// nav btn
siteTimeline.fromTo('.nav-btn', .5, {
    opacity: '0',
    left: '-5rem',
    ease: Power3.easeInOut
}, {
    opacity: '1',
    left: '0rem',
    ease: Power3.easeInOut
},'-=1.5')

//social links
siteTimeline.fromTo('.social-links li a', .5, {
    opacity: '0',
    bottom: '-5rem',
    ease: Power3.easeInOut
}, {
    opacity: '1',
    bottom: '0rem',
    stagger:'.2',
    ease: Power3.easeInOut

    // primary text
},'-=1.8').fromTo('.primary-title h1:nth-child(1)', .5, {
    opacity: '0',
    bottom: '-5rem',
    ease: Power3.easeInOut
}, {
    opacity: '1',
    bottom: '0rem',
    stagger:'.2',
    ease: Power3.easeInOut
},'-=1.8').fromTo('.primary-title h1:nth-child(2)', .5, {
    opacity: '0',
    bottom: '-5rem',
    ease: Power3.easeInOut
}, {
    opacity: '1',
    bottom: '0rem',
    stagger:'.2',
    ease: Expo.out
},'-=1.5').fromTo('.secondary-title h4', .5, {
    opacity: '0',
    top: '2rem',
    ease: Power3.easeInOut
}, {
    opacity: '1',
    top: '-6rem',
    stagger:'.2',
    ease: Expo.out
},'-=1.4').fromTo('.secondary-title p', .5, {
    opacity: '0',
    top: '2rem',
    ease: Power3.easeInOut
}, {
    opacity: '1',
    top: '-9.2rem',
    stagger:'.2',
    ease: Expo.out
},'-=1.4')
//content bars
.fromTo('.content-left-bar .bar', .5, {
    opacity: '0',
    height: '0',
    ease: Power3.easeInOut
}, {
    opacity: '1',
    height: '80%',
    stagger:'.2',
    ease: Expo.in
},'-=1.4').fromTo('.content-left-bar .bar span', .5, {
    opacity: '0',
}, {
    opacity: '1',
},'-=1').fromTo('.content-right-bar .bar', .5, {
    opacity: '0',
    height: '0',
    ease: Power3.easeInOut
}, {
    opacity: '1',
    height: '74%',
    stagger:'.2',
    ease: Expo.out
},'-=1.4').fromTo('.content-right-bar .bar span', .5, {
    opacity: '0',
}, {
    opacity: '1',
},'-=1').fromTo('.btn-container', .8, {
    bottom:'0',
    opacity: '0',
}, {
    bottom:'20%',
    opacity: '1',
},'-=1').fromTo('.menu li a', 1, {
    opacity: '0',
    ease: Expo.easeInOut
}, {
    opacity: '1',
    stagger:'.3',
    ease: Expo.easeInOut
},'-=1.8')

siteTimeline.play()


// .content-left-bar .image-container