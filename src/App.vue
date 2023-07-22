<!--
  TODOS: 
  - Think of implementing scroll indicator: https://www.npmjs.com/package/vue-scroll-indicator
  0.5 - look at the doc with the required info and start making smaller boxes that fade in and are parallaxy. These floating boxes should have the required showcase info. 
  1- Implement the snap scrolls to the next sections with an indicator of where we're at (either circles to the right hand side or a progress bar to the top). See Rolls Royce site for illustration. 
    The way you're going to want to do this is as follows: 
    The website will be sectioned just like the rolls royce site. Once the user jumps to a new section, it will give the user 1 second before adding the shading. The shading will be added, along with the fading in parallax effects. If parallax items cause sluggish performance, consider making them normal and non-parallax. The flow is like this. Intro is as it is. Jump to new section, see images for 1.5 seconds, shade edges + fade in the parallax items, consider making them non-parallax. 
  3- Think of better design ideas, make it better than Ryan's
    A- See if there's a library that replaces the mouse with something that looks web-dev related. 
    B- Make items below appear when you scroll to them the first time and dissappear when scrolling away
    C- Look at A LOT of other websites, look up "Parallax websites examples" to get ideas from different sites. 
  4- When you get to a new section, popups should appear with the contents of the section. THEY SHOULD HAVE A PARALLAX EFFECT, use the original code we deleted, but also add to it a fade in and out using gsap
    - Last priority: Make sure the website works for mobile

    - Consider re-working your site with this library, this is a snap-scroll + parallax library and much more, it's a veryh beautiful library: https://github.com/alvarotrigo/fullPage.js/#options  https://codepen.io/alvarotrigo/pen/zpQmwq
    When truning this into a personal site, we'll follow a grey/dark color scheme
    Work on replacing the smucker logo with your own, the site: https://www.brandcrowd.com/ is excellent. We already got a logo from there. We'll have a copy in the assets file and in OneDrive
  
    Post Showcase notes: 

  
  -->


<template>

    <section id="intro_section" >
      <video class="video_background" autoplay muted loop>
        <source src="./assets/t2NC.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>

      <scroll-parallax :speed="0.6">
        <!--
        <div class="img_title" style="display: flex; justify-content: flex-end; align-item: center;">
          <img src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="">
        </div> 
        -->
      

        <div class="intro-box">
          <img id="smuckerLogo" src="./assets/Smucker2.png" />
          <h1>Nathan's Showcase</h1>
          <div>
            <button class="button" @click="scrollToSection('#getToKnowMe')">Get to Know Me</button>
            <button class="button" @click="scrollToSection('#seeWhatIHaveAccomplished')">See What I Have Accomplished</button>
          </div>
        </div>

        <!--
      <div class="img_title">
        <code>
            {{ scrollY }}
        </code>
      </div>
      -->

      </scroll-parallax>
    
    </section>

    <!--This div adds a space, in case you wante to add something in the middle. Could be another video.-->
    <div class="spacing"></div> 


    
    
    <section class="horizontal_content" id="getToKnowMe">

      <scroll-parallax :speed="0.40" :left="true" direction="x">
        <div style="display: flex; justify-content: flex-start;">
          <img class="horizontal_img" src="./assets/OriPic(cropped).jpg" />
          <img class="horizontal_img" src="./assets/Smucker.jpg" />
        </div>
      </scroll-parallax>
    

      <div id="overlay-A">
        
        <div class="grid-item whoAmI-box">
          <h1>Who am I?</h1>
        </div>
      
        <div class="grid-item background-box horizontal-container">
          
          <div class="vertical-container">
            <img class="home-icon" src="./assets/Icons/Home.png"/>
            <h1 class="icon-title">Home</h1>
          </div>

          <img class="partition" src="./assets/Icons/bline.png">
           
          <img src="./assets/Icons/USA-WI.png" style="height: 150px; width: 244px;">
          <img class="pin" src="./assets/Icons/pin.png">
          <img src="./assets/Icons/W.png" style="height: 120px; width: 128px;">

        </div>


        <div class="grid-item school-box horizontal-container">

          <div class="vertical-container">
            <img class="school-icon" src="./assets/Icons/school.png" />
            <h1 class="icon-title">School</h1>
          </div>

          <img class="partition" src="./assets/Icons/bline.png">

          <img class="UW-icon" src="./assets/UW-Madison.png" style="height: 150px; width: 228px;"/>

        </div>


        <div class="grid-item major-box horizontal-container">

          <div class="vertical-container">
            <img class="major-icon" src="./assets/Icons/fieldOfStudy.png"/>
            <h1 class="icon-title">Major</h1>
          </div>

          <img class="partition" src="./assets/Icons/bline.png">

          <div class="major-info">

            <div>
              <img src="./assets/Icons/computer.png" style="height: 100px; width: 104px;">
              <img src="./assets/Icons/phone.png" style="height: 100px; width: 60px; margin: 0px 10px 0px 10px;">
              <img src="./assets/Icons/databases.png" style="height: 100px; width: 85px;">
            </div>

            <h1 style="font-family: 'Petrona'; font-size: 22px; margin: 0;">Computer Science</h1>

          </div>

        </div>


        <div class="grid-item graduation-box horizontal-container">
          <div class="vertical-container">
            <img class="graduation-icon" src="./assets/Icons/grad.png" />
            <h1 class="icon-title">Graduation <br>Date</h1>
          </div>

          <img class="partition" src="./assets/Icons/bline.png">

          <h1 style="font-family: 'Petrona'; font-size: 36px;">December 2023</h1>

        </div>


      </div>

    </section>




    <section class="horizontal_content" id="seeWhatIHaveAccomplished">
      <scroll-parallax :speed="0.15" :left="false" direction="x">
        <div style="display: flex; justify-content: flex-end;">
          <img class="img__background horizontal_img" src="./assets/GrpPic.jpg" />
          <img class="img__background horizontal_img" src="./assets/Orientation.jpg" />
        </div>
      </scroll-parallax>


      <div id="overlay-B">
        
        <div class="grid-item-B smucker-accomplishments-box">
          <h1>Accomplishments at Smucker</h1>
        </div>
      
        <div class="grid-item-B background-box horizontal-container">
          <div class="vertical-container">
            <img src="./assets/droid-logo-black.svg" alt="Droid Logo" style="height: 50px; width: 400px;"/> <!--MAKE SURE TO CHOOSE THE RIGHT DIMENTIONS-->
          </div>
        </div>


        <div class="grid-item-B school-box horizontal-container">
          <div class="vertical-container">
            <img src="./assets/dunkin-style-guide.png" alt="Dunking Logo" style="height: 225px; width: 400px;"/> <!--MAKE SURE TO CHOOSE THE RIGHT DIMENTIONS-->
          </div>
        </div>


        <div class="grid-item-B major-box horizontal-container"> <!--css fix-->

          <div class="vertical-container">
            <img class="major-icon" src="./assets/Icons/fieldOfStudy.png"/>
            <h1 class="icon-title">Major</h1>
          </div>

          <img class="partition" src="./assets/Icons/bline.png">

          <div class="major-info">

            <div>
              <img src="./assets/Icons/computer.png" style="height: 100px; width: 104px;">
              <img src="./assets/Icons/phone.png" style="height: 100px; width: 60px; margin: 0px 10px 0px 10px;">
              <img src="./assets/Icons/databases.png" style="height: 100px; width: 85px;">
            </div>

            <h1 style="font-family: 'Petrona'; font-size: 22px; margin: 0;">Computer Science</h1>

          </div>

        </div>


      </div>

    </section>

    <!--
    <div >
        <scroll-parallax
          :speed="0.15"
          direction="x"
        >
        
        <div style="display: flex; align-item: center;">
          <div class="img_title">
            <img src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="">
          </div>
          <div class="img_title" style="">
            <code>
                {{ scrollX }}
            </code>
          </div>
        </div>
        
        </scroll-parallax>
    </div>

  -->
      

</template>
  
<script>
import ScrollParallax from './components/ScrollParallax.vue';
import { onBeforeUnmount, onMounted } from 'vue'
import { gsap } from "gsap"

// The following two will be used for fading in the pictures of horizontal_section s when scrolling. 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// The following two will be used for implementing GSAP's scrolling animation. Which is better because you can control the scrolling speed. 
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default {

  components: {
    ScrollParallax
  },
  setup() {
    let videoObserver // This will be used for pausing the video when it's out of the viewport
    let horizontalSectionsObserver;
    let autoScroll // This will be used for implementing the auto scrolling
    let sectionsToScrollTo = ['#getToKnowMe', "#seeWhatIHaveAccomplished", "#intro_section"] // These will be used for snap and auto scrolling, add more sections as needed
    let introBox

    onMounted(() => {

      // Defining values first:
      document.title = "Nathan's Showcase" // Setting the name of the tab title
      const videoElement = document.querySelector('.video_background') // Saving the element with class="video_background". We'll use it later to stop video when it's out of viewport
      introBox = document.querySelector('.intro-box') // Getting the component with class="intro-box"
      const horizontalSections = document.querySelectorAll('.horizontal_content'); // This will be used to apply shading on horizontal sections. 


      //startAutoScroll()

      // This makes the intro box fade in on page load
      gsap.from('.intro-box', {
        duration: 3, // Duration of fade in
        opacity: 0,  // Start from opacity of 0
        delay: 0.8 // Wait 0.8 seconds after the page loads before starting to fade in
      })


      // Makes grid items fade in when they're in viewport
      gsap.fromTo(".grid-item",
      // Because the grid items are going from point A to point B, you'd have to use GSAP's 'fromTo' instead of just 'to' or just 'from'. Additionally, you'd have to specify two JSON's, one for the 'from' and another for the 'to'
      // From 
      {
        y: '-50%',
        opacity: 0
      }, 
      // To
      {
        delay: 3,
        opacity: 1,
        y:'0%',
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".grid-item",
          start: "top bottom",
          end: "bottom middle",
          toggleActions: "restart none restart none"
        },
        duration: 2,
        ease: 'power1.out',
        overwrite: 'auto'
      })


      //----------------------------------
      gsap.fromTo(".grid-item-B",
      // Because the grid items are going from point A to point B, you'd have to use GSAP's 'fromTo' instead of just 'to' or just 'from'. Additionally, you'd have to specify two JSON's, one for the 'from' and another for the 'to'
      // From 
      {
        y: '-50%',
        opacity: 0
      }, 
      // To
      {
        delay: 3,
        opacity: 1,
        y:'0%',
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".grid-item-B",
          start: "top bottom",
          end: "bottom middle",
          toggleActions: "restart none restart none"
        },
        duration: 2,
        ease: 'power1.out',
        overwrite: 'auto'
      })

      //----------------------------



      //Making the pin for the US map bounce up and down
      gsap.to(".pin", {
        y: "-55px", // Move the item up 20px (it would be moving it up and down 20px if yoyo:true)
        repeat: -1, // infinite repitions
        duration: 2, // The time it takes to complete each up and down cycle
        yoyo: true, // Make the animation reverse direction in each cylce, like a yoyo, giving it the bouncing effect
        ease: 'power1.inOut', //applies easing to the animation, making the movement more natural. 
        scrollTrigger: {
          trigger: '.pin', 
          start: "top bottom", 
          end: "bottom top", 
          toggleActions: "restart pause resume pause"
        }
      })

      // Unnecessary animation, deleted
      //Using GSAP, we'll use the horizontalSections above so we can fade the pictures in as they come into view 
      /*
      horizontalSections.forEach(section => {
        gsap.from(section, {
          opacity: 0.2, // Starting from opacity of 0.2, we don't want to start from a black screen
          delay: 2,
          scrollTrigger: {
            trigger: section,
            start: "top bottom", // Animation starts with the top of the section is at the bottom of viewport.
            end: "bottom top", // Animation ends with the bottom of the sections is at the top of the viewport.
            scrub: true, // Makes animation progress keep up with scrollbar
          }
        });
      });
      */


      // Event Listeners:

      /* Slightly expands the intro box on mouse hover. We're using 
      mouseenter and mouseleave INSTEAD OF mouseover and mouseout 
      because mouseenter and mouseleave work when entering or leaving the 
      bounds of the intro-box. Making the animation and everything within it have
      the same animation. On the other hand, the mouseover event is triggered 
      when you enter the intro box, but the mouseout event is triggered when 
      you leave the intro box OR when you hover over a child element of the 
      intro box (the buttons). This can cause the animation to rapidly 
      switch between scaling up and down when you move your mouse over the 
      buttons.*/
      introBox.addEventListener('mouseenter', () => {
        gsap.to('.intro-box', {
          duration: 0.3,
          scale: 1.1 // Multiply the dimensions of the intro-box by 1.1, increase by 10%
        })
      })

      // Revert the intro box to its original size after the mouse is off the intro box.
      introBox.addEventListener('mouseleave', () => {
        gsap.to('.intro-box', { duration: 0.3, scale: 1 });
      });

      // Fade out intro box as user scrolls
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Adjust opacity based on scroll position. Adjust the constants if needed.
        const newOpacity = 1 - (scrollPosition / windowHeight);

        introBox.style.opacity = Math.max(newOpacity, 0);
      });

      // Adding a keyboard event listener for stopping auto scroll when the user presses 's' on their keyboard
      document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 's')
          stopAutoScroll()
        else if (event.key.toLowerCase() === 'a')
          startAutoScroll()
      })

      
      // Observers:

      // Pausing the video when the video becomes out of viewport to reduce workload and make the site smoother when scrolling
      videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.target === videoElement) {
            if (entry.isIntersecting)
              videoElement.play()
            else
              videoElement.pause()
          }
        })
      }, {})

      videoObserver.observe(videoElement)

      // Using observers to apply shading to horizontal sections. 
      const intersectingSections = new Set();
      let shadingTimeout;
      horizontalSectionsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingSections.add(entry.target);
            // Clear previous timeout, if it exists.
            clearTimeout(shadingTimeout);
            // Set new timeout to apply shading.
            shadingTimeout = setTimeout(() => {
              // Add or remove 'shaded' depending on whether any sections are intersecting.
              document.body.classList.toggle('shaded', intersectingSections.size > 0);
            }, 1000); // change this to the shading delay you want.
          } 
          else {
            intersectingSections.delete(entry.target);
            // If no sections are intersecting, immediately remove shading and clear timeout.
            if (intersectingSections.size === 0) {
              clearTimeout(shadingTimeout);
              document.body.classList.remove('shaded');
            }
          }
        });
      }, { threshold: 0.8 }); // The threshold: 0.8 means that 80% of the section must be within the viewport for the effect to take place. 

      horizontalSections.forEach(horizontalSection => {
        horizontalSectionsObserver.observe(horizontalSection);
      });

      /*
      Regarding the observer above, that observer work if you had multiple sections with the same class name. 
      If you look at the template, every sliding section is in its own horizontal section. 
 
      But if you put them all under the same section with the same class name, you could use the following, simpler, code. It works when you have only one element with the horiontal_content class:
 
      const horizontalSections = document.querySelector('.horizontal__content')      
      horizontalSectionsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.target === horizontalSections){
            document.body.classList.toggle('shaded', entry.isIntersecting)
          }
        })
      }, {threshold: 0.1}) // This means that the shading will appear when at least 30% of the horizontal__content section is visible
      horizontalSectionsObserver.observe(horizontalSections)
 
      */
    
    })

    // A JS function that runs when you click the "Get to Know Me" button that scrolls you down to the right section. 
    const scrollToSection = (sectionToScrollTo) => {
      stopAutoScroll()
      // Old code, replaced with GSAP
      //const getToKnowMeSection = document.getElementById("getToKnowMe");
      //getToKnowMeSection.scrollIntoView({ behavior: 'smooth' })
      gsap.to(window, {duration: 1.25, scrollTo: sectionToScrollTo})
    }


    const startAutoScroll = () => {
      let currentSectionNumber = 0; // The index of the current section we're on above.

      autoScroll = setInterval(() => {
        console.log("Section Num:", currentSectionNumber)
        // Previous code. It was replaced by GSAP
        //const sectionToScrollTo = document.getElementById(sectionsToScrollTo[currentSectionNumber]) // Getting the specific section, look at the function scrollToGetToKnowMeSection and scrollToSeeWhatIHaveAccomplished for an example use case
        //sectionToScrollTo.scrollIntoView({ behavior: 'smooth' })
        gsap.to(window, {duration: 3, scrollTo: sectionsToScrollTo[currentSectionNumber]})

        currentSectionNumber = currentSectionNumber === sectionsToScrollTo.length - 1 ? 0 : currentSectionNumber + 1 // If we've reached the last element in that array of sections, we're resetting the index back to 0 to go back to the top of the site. Otherwise, we're incrementing by 1 to get to the next section. 
        console.log("Now it's: ", currentSectionNumber)
      }, 9000) // Running sutoScroll once every 9000 Millisecond = 9 seconds. 
    }

    const stopAutoScroll = () => {
      clearInterval(autoScroll) // Almost like unmounting an event listener to cease its effect
    }



    onBeforeUnmount(() => {
      if (videoObserver)
        videoObserver.disconnect();
    
      if (horizontalSectionsObserver)
        horizontalSectionsObserver.disconnect()

      if (introBox){
        introBox.removeEventListener('mouseenter')
        introBox.removeEventListener('mouseleave')
      }

      if (window){
        window.removeEventListener('keydown')
        window.removeEventListener('scroll')
      }
      
    })
    

    return {
      scrollToSection, 
    }
  },
};
</script>
  
<style>
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  height:3000px;
  background-color: black;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(ellipse at center, transparent 40%, black 90%);
  pointer-events: none;
  z-index: 2; 
  opacity: 0;
  transition: opacity 0.5s;
}

body.shaded::before {
  opacity: 1;
}

#intro_section {
  height: 1080px;
}

.horizontal_img {
  height: 937px;
}

.img_title {
  position: relative;
  bottom: 30em;
  color: white;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-right: 32px;
}

.img_title img {
  width: 350px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  border-radius: 30px;
}

.spacing {
  height: 0px;
}

.horizontal_content {
  overflow: hidden;
}

.button {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-family: 'Petrona';
  font-size: 18px;
}

.button:hover {
  background: #2980b9;
}

.intro-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -790px;
  color: black;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 600px;
  left: 35%;
}



.intro-box:hover {
  transform: scale(1.1);
}

.intro-box h1 {
  margin-bottom: 10px;
  font-size: 42px;
  font-family: 'Petrona';
}

#smuckerLogo {
  height: 141px;
  width: 281px;
}

.home-icon{
  height: 108px;
  width: 111px;
}

.UW-icon{
  height: 100px;
  width: 100px;
}

.major-icon{
  height: 108px;
  width: 113px;
}

.graduation-icon{
  height: 100px;
  width: 100px;
}

.school-icon{
  height: 108px;
  width: 133px;
}

.vertical-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content; /*Prevents the container from taking up the entire box and only giving the size of the biggest element in it. */
}

.icon-title{
  font-family:'Petrona';
  margin: 2px;
  text-align: center;
}

/*We're using KursorJS for the website's cursor. But there was 
    a problem where when you hover over a button, the normal cursor would
    reappear in addition to the Kursor cursor. The following CSS
    ensures that the defaults cursor always remains hidden when 
    hovering over any of the items below. */
a,
button,
input,
textarea {
  cursor: none !important;
}

#getToKnowMe{
  position: relative; 
  width: 100vw;
  height: 100vh;
}

#seeWhatIHaveAccomplished{
  position: relative; 
  width: 100vw;
  height: 100vh;
}

#overlay-A {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /*"Make 3 colums with width of 1fr (equal widths)" */
  justify-items: center;
  gap: 10px;
  align-items: center;
}

#overlay-B {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /*"Make 3 colums with width of 1fr (equal widths)" */
  justify-items: center;
  gap: 10px;
  align-items: center;
}

.whoAmI-box {
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 300px;
}

.whoAmI-box h1{
  margin-bottom: 10px; /*Replace those two margin options with the margin: # # # # */
  margin-top: 10px;
  font-size: 42px;
  font-family: 'Petrona';
}

.smucker-accomplishments-box{
  grid-row: 1;
  grid-column: 2;
}

.smucker-accomplishments-box h1{
  margin-bottom: 10px; /*Replace those two margin options with the margin: # # # # */
  margin-top: 10px;
  font-size: 42px;
  font-family: 'Petrona';
}

.grid-item, .grid-item-B {
  /* Styling for each grid item */
  background: rgba(255, 255, 255, 0.85);;
  padding: 20px;
  border-radius: 5px;
  position: relative; /* Add this line */
  z-index: 3;
}

.horizontal-container{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.background-box{
  grid-row: 2;
  grid-column: 1;
}

.pin{
  height: 50px; 
  width: 39px;
  transform: translate(-114px, -75px);
}

.school-box{
  grid-row: 2;
  grid-column: 2;
}

.major-box{
  grid-row: 2;
  grid-column: 3;
}

.major-info{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.graduation-box{
  grid-row: 3;
  grid-column: 2;
}

.partition{
  height: 100px;
  width: 12px;
  margin: 0px 35px 0px 5px;
}




/*
How to target a specific child
.grid-item:nth-child(6) {
  grid-column: 5;
}

*/
</style>
  
  
