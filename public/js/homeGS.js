// import {init} from './coffeCupInt';

const tl = gsap.timeline();

tl.from("#animation_container", {duration:1, x:-2000 ,y:+1});
tl.from(".header-name", {duration:1, x:-1000}, "-=1");
tl.from('.pretend-border', {duration:3, backgroundImage: 'radial-gradient(at 70% top, rgb(230,250,252) 1%, rgb(230,250,252) 30%)'}, "-=.1");
tl.from('.nav-item', {duration:1, y:15, opacity:0, stagger:.3}, "-=2.6");
tl.from('.forgeBy', { duration:2, y:-20, opacity:0}, '-=2.0');
tl.from('.fuelBy', {duration:2, y:-20, opacity:0, }, '-=1.5');
tl.from('main', {duration:1, opacity:0}, '-=2')
