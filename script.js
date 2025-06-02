// Multiple tabcontents part(About part)
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        }

// Responsive navbar
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


setTimeout(() => {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}, 2500);
// Sticky navbar part

var header = document.querySelector(".nav")
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position < 300) {
        header.style.backgroundColor= 'transparent';
        header.style.color='#fff';

    } else {
        header.style.backgroundColor='#da2d28';  
        header.style.color='#000';
        header.style.zIndex='100';
    }
})

gsap.from("#header nav, nav li", { 
    opacity: 0, 
    y: -100, 
    duration: 1,
    stagger:0.2
});

gsap.from(".header-text h1,.header-text h2,.header-text a", { 
    opacity: 0, 
    y: 150, 
    duration: 1,
    stagger:0.5
});

gsap.from(".about-container", { 
    opacity: 0, 
    y: 100, 
    duration: 1,
    scrollTrigger:{
        trigger: ".about-container",
        scroller:"body",
    }
 });
 
gsap.from("#skill", { 
    opacity: 0, 
    scale:0, 
    duration: 1,
    scrollTrigger:{
        trigger: "#skill",
        scroller:"body",
    }
});

gsap.registerPlugin(ScrollTrigger);
gsap.set('.service i', {
    opacity: 0,
    y: 75,
    scale: 0.9,
  });
  gsap.set('.service h2', {
    opacity: 0,
    y: 50,
  });
  gsap.set('.service p', {
    opacity: 0,
    y: 40,
  });
  gsap.set('.service a', {
    opacity: 0,
    y: 30,
  });
  ScrollTrigger.batch('.service', {
    onEnter: batch => {
      batch.forEach((service, index) => gsap.to(service.children, {opacity: 1, y: 0, scale: 1, stagger: 0.5, delay: index * 0.3}))
    },
    once: true
  });

  gsap.set('.work', {
    opacity: 0,
    y: 50,
  });

  ScrollTrigger.batch('.work', {
    onEnter: batch => {
      batch.forEach((work, index) => gsap.to(work, {opacity: 1, y: 0, scale: 1, stagger: 0.5, delay: index * 0.3}))
    },
    once: true
  });

gsap.from("#contact",{
    opacity: 0, 
    y: 150, 
    duration: 1,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#contact",
        scroller:"body",
    }
})

function sendEmail() {
    let params = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value
    }
 
    emailjs.send("arpit267", "template_dbd0uwx", params).then(alert("Your message has been sent successfully!"))
}   