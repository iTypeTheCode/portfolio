particlesJS("background", {
   
    particles: {
        number: {
            value: 15, //NUmber of particles(Count)
            density: {
                enable: true,
                value_area: 300, //area where particles will be distributed
            },
        },
        color: {
            value: "#2a2b32",
            opacity: 0.5, // particles color
        },
        shape: {
            type: "triangle", //shape type
        },
        opacity: {
            value: 0.8, //base opacity of particle
            random: true,
            anim:{
                enable: true,
                speed: 1,
                opacity_min: 0.05,
                sync: false,
            },
        },
        size: {
            value: 5, // base size of particles
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150, //maximum distance between linked particles
            color: "#2a2b32",
            opacity: 0.2,
            width: 5,

        },

        //Particle movement
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", //Behavior when particles move out of canvas
            bounce: false,
        },
    },
    //INteractivity
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, // Enable hover interactivity
                mode: "repulse",
            },
            onclick:
            {
                enable: true, //enable for click
                mode: "push", // push particles
            },
            resize: true, //resize animation on window resize
        },
    },
    //Detect retina displays
    retina_detect: true,
})

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});
