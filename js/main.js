document.addEventListener('DOMContentLoaded', function() {
	console.log("loaded....")

	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems,{});
	var skimgs = document.querySelectorAll('#skills .skimg')
	skimgs[0].style.transform = "translate(-200%,-100%)"
	skimgs[1].style.transform = "translate(-550%,-200%)"
	skimgs[2].style.transform = "translate(-100%,-250%)"
	skimgs[3].style.transform = "translate(10%,-200%)"
	skimgs[4].style.transform = "translate(180%,-150%)"
	skimgs[5].style.transform = "translate(300%,-30%)"
	skimgs[6].style.transform = "translate(-150%,50%)"
	skimgs[7].style.transform = "translate(-170%,200%)"
	skimgs[8].style.transform = "translate(100%,200%)"
	skimgs[9].style.transform = "translate(-40%,250%)"
	skimgs[10].style.transform = "translate(340%,60%)"
	skimgs[11].style.transform = "translate(0%,70%)"
	skimgs[12].style.transform = "translate(-140%,-150%)"
});
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin);



//---------------------------------- navbar --------------------------------------
gsap.to("nav",{
	scrollTrigger:{
		trigger:"#project",
		start : "top center",
		toggleActions : "play none none reset"
	},
	duration : 1,
	position:"fixed",
	opacity:1,
	zIndex:2

})

// navbar scrollTo Section

// Scroll to the element in the URL's hash on load

gsap.to(window, {scrollTo: window.location.hash ,duration: 1})

document.querySelectorAll('nav ul a').forEach(a => {
	hash = a.hash
	// add the scroll to href option
	a.addEventListener('click', e => {
		e.preventDefault()
		gsap.to(window, {scrollTo: a.hash ,duration: 1})
	});
	// add the scrollspy option
	gsap.to(a.parentNode , {
		scrollTrigger :{
			trigger : a.hash,
			onToggle: self => { a.parentNode.classList.toggle('active')},
			start : "top center",
			end : "bottom center"
		},		
	})
	
});


//----------------------------------------------------- heading introduction text

heading_timeline = gsap.timeline()
heading_timeline
.from(".heading img",{ duration: 1,y:-40,opacity :0 , ease : "bounce",delay:1})
.to(".heading h1",{duration: 2,text: "I am Abhishek Vaish"})
.to(".heading h1",{duration: 2,text: "A Developer"})
.to(".heading h1",{duration: 2,text: "An Engineer"})
.to(".heading h1",{duration: 2,text: "I am Abhishek Vaish"})
gsap.from(".box", {
	duration: 2,
	scale: 0.5, 
	opacity: 0, 
	delay: 0.5, 
	stagger: 0.2,
	ease: "elastic", 
	force3D: true
});



//-----------------------------------------------------------projects animations
gsap.set("#project .card",{opacity:0,y:100})
ScrollTrigger.batch("#project .card", {
	interval: 0.1,
	batchMax: 3, 
	onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.2}),
	onLeave: batch => gsap.to(batch, {opacity: 0, y: -100,stagger: 0.2}),
	onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.2}),
	onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 100}),
	start: 'top center+=300',
	end: 'bottom top',
	// markers:true
});
// ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".card", {y: 0,opacity:1}));





//--------------------------------------------------------CONTACT
gsap.from("#contact i.large",{
	scrollTrigger:{
		trigger:"#contact",
		// markers : true,
		start : 'top center+=200',
		end : 'bottom top',
	},
	opacity :0,
	y:100,
	duration : .5,
	ease :'power1.inOut'
}) 


// --------------------------------------------EXPERIENCE

ScrollTrigger.create({
	trigger : "#experience",
	start : 'top center+=200',
	end : "bottom top",
	// markers : true,
	onEnter : () => gsap.from('.experience .card-panel',{y:100,opacity :0 ,duration : 1 , ease: "power1.inOut" ,stagger : 0.4}),
	onEnterBack : () => gsap.from('.experience .card-panel',{y:-100,opacity :0 ,duration : .5 , ease: "power1.inOut" ,stagger : { each: 0.4 , from : 'end'}}),

})


// ----------------------------------------------EDUCATION
ScrollTrigger.create({
	trigger : "#education",
	start : 'top center+=200',
	end : "bottom top",
	// markers : true,
	onEnter : () => gsap.from('.education .card-panel',{y:100,opacity :0 ,duration : .5 , ease: "power1.inOut" ,stagger : 0.4}),
	onEnterBack : () => gsap.from('.education .card-panel',{y:-100,opacity :0 ,duration : .5 , ease: "power1.inOut" ,stagger : { each: 0.4 , from : 'end'}}),

})

//---------------------------------------------------SKILLS
gsap.set('.skimg-container',{y:300})
gsap.to('.skimg-container',{
	scrollTrigger : {
		trigger : '#skills',
		scrub : 1,
		// markers : true,
		start :'center-=200 center+=200',
		end : 'center center',

	},
	y : -100,
	duration : 3
})
