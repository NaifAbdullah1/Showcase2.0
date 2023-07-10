<!--
  TODOS: 
  0.4- There's a hovering problem with the intr-box, it keeps shaking when hovering over any of the child elements. 
  0.5- The mouse is very sluggish fix it or replace it
  1- Implement the swiping scrolls to the next sections with an indicator of where we're at to the right hand side. See Rolls Royce site for illustration. 
  2- See if there's a way to slow down the auto scrolling action. We want to scrolling to be a lot slower. 
  3- Think of better design ideas, make it better than Ryan's
    A- See if there's a library that replaces the mouse with something that looks web-dev related. 
    B- Make items below appear when you scroll to them the first time and dissappear when scrolling away
    C- Look at A LOT of other websites, look up "Parallax websites examples" to get ideas from different sites. 
  4- When you get to a new section, popups should appear with the contents of the section. THEY SHOULD HAVE A PARALLAX EFFECT, use the original code we deleted, but also add to it a fade in and out using gsap
    - Last priority: Make sure the website works for mobile

    When truning this into a personal site, we'll follow a grey/dark color scheme
    Work on replacing the smucker logo with your own, the site: https://www.brandcrowd.com/ is excellent. We already got a logo from there. We'll have a copy in the assets file and in OneDrive
  -->


<template>
  <section id = "intro_section">

    <!--<scroll-parallax :speed="0.65"> -->
      <video class="video_background" autoplay muted loop>
        <source src="./assets/t2NC.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    <!--</scroll-parallax>-->

    <scroll-parallax :speed="0.6">
    <!--
      <div class="img_title" style="display: flex; justify-content: flex-end; align-item: center;">
      <img src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="">
    </div>
    -->

      <div class="intro-box">
        <img id= "smuckerLogo" src="./assets/Smucker2.png"/>
        <h1>Nathan's Showcase</h1>
        <div>
          <button class="button" @click="scrollToGetToKnowMeSection">Get to Know Me</button>
          <button class="button" @click="scrollToSeeWhatIHaveAccomplished">See What I Have Accomplished</button>
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

  <div class="spacing"></div>

  <section class="horizontal_content" id="getToKnowMe">
    <scroll-parallax :speed="0.40" :left="true" direction="x">
      <div style="display: flex; justify-content: flex-start;">
        <img
          class="horizontal_img"
          src="./assets/OriPic(cropped).jpg"
        />
        <img
          class="horizontal_img"
          src="./assets/Smucker.jpg"
        />
      </div>
    </scroll-parallax>
  </section>

    <section class="horizontal_content" id="seeWhatIHaveAccomplished">
      <scroll-parallax :speed="0.15" :left="false" direction="x">
        <div style="display: flex; justify-content: flex-end;">
          <img
            class="img__background horizontal_img"
            src="./assets/GrpPic.jpg"
          />
          <img
            class="img__background horizontal_img"
            src="./assets/Orientation.jpg"
          />
        </div>
      </scroll-parallax>
    </section>

    <!--
    <div class="horizontal__elements">
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

export default {

  components: {
    ScrollParallax
  },
  setup(){
    let videoObserver // This will be used for pausing the video when it's out of the viewport
    let autoScroll // This will be used for implementing the auto scrolling

    onMounted(() => {

      document.title = "Nathan's Showcase" // Setting the name of the tab title

      //startAutoScroll()

      // This makes the intro box fade in on page load
      gsap.from ('.intro-box', { 
        duration: 3, // Duration of fade in
        opacity:0,  // Start from opacity of 0
        delay:0.8 // Wait 0.8 seconds after the page loads before starting to fade in
      })      

      const introBox = document.querySelector('.intro-box')

      // Slightly expands the intro box on mouse hover. 
      introBox.addEventListener('mouseover', () => {
        gsap.to('.intro-box', {
          duration: 0.3, 
          scale: 1.1 // Multiply the dimensions of the intro-box by 1.1, increase by 10%
        })
      })

      // Revert the intro box to its original size after the mouse is off the intro box.
      introBox.addEventListener('mouseout', () => {
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

      // Pausing the video when the video becomes out of viewport to reduce workload and make the site smoother when scrolling
      const videoElement = document.querySelector('.video_background')
      videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.target === videoElement){
            if (entry.isIntersecting)
              videoElement.play()
            else 
              videoElement.pause()
          }
        })
      }, {}) 
      videoObserver.observe(videoElement)


      const horizontalSections = document.querySelectorAll('.horizontal_content');

      // Keep track of which sections are currently intersecting.
      const intersectingSections = new Set();

      const horizontalSectionsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingSections.add(entry.target);
          } else {
            intersectingSections.delete(entry.target);
          }
        });
  
      // Add or remove 'shaded' depending on whether any sections are intersecting.
      document.body.classList.toggle('shaded', intersectingSections.size > 0);
      }, {threshold: 0.1});

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
      
      // Adding a keyboard event listener for stopping auto scroll when the user presses 's' on their keyboard
      document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 's')
          stopAutoScroll()
        else if(event.key.toLowerCase() === 'a')
          startAutoScroll()
      })


    })

    // A JS function that runs when you click the "Get to Know Me" button that scrolls you down to the right section. 
    const scrollToGetToKnowMeSection = () => {
      stopAutoScroll()
      const getToKnowMeSection = document.getElementById("getToKnowMe");
      getToKnowMeSection.scrollIntoView({behavior: 'smooth'})
    }

    const scrollToSeeWhatIHaveAccomplished = () => {
      stopAutoScroll()
      const seeWhatIHaveAccomplished = document.getElementById("seeWhatIHaveAccomplished")
      seeWhatIHaveAccomplished.scrollIntoView({behavior: 'smooth'})
    }

    const startAutoScroll = () => {
      let sectionsToScrollTo = ['getToKnowMe', "seeWhatIHaveAccomplished", "intro_section"] // Sections to scroll to, add more sections as needed
      let currentSectionNumber = 0; // The index of the current section we're on above.

      autoScroll = setInterval(() => {
        const sectionToScrollTo = document.getElementById(sectionsToScrollTo[currentSectionNumber]) // Getting the specific section, look at the function scrollToGetToKnowMeSection and scrollToSeeWhatIHaveAccomplished for an example use case
        sectionToScrollTo.scrollIntoView({behavior: 'smooth'})
        currentSectionNumber = currentSectionNumber === sectionsToScrollTo.length - 1 ? 0 : currentSectionNumber + 1 // If we've reached the last element in that array of sections, we're resetting the index back to 0 to go back to the top of the site. Otherwise, we're incrementing by 1 to get to the next section. 
      }, 5000) // Running sutoScroll once every 5000 Millisecond = 5 seconds. 
    }

    const stopAutoScroll = () => {
      clearInterval(autoScroll) // Almost like unmounting an event listener to cease its effect
    }



    onBeforeUnmount(() => {
      if (videoObserver)
        videoObserver.disconnect();
    })

    return {
      scrollToGetToKnowMeSection, 
      scrollToSeeWhatIHaveAccomplished
    }
  },
};
</script>

<style >
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
    height: 3000px;
    background-color: black;
  }

  body::before {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(ellipse at center, transparent 20%, black 90%);
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.5s;
}

body.shaded::before {
  opacity: 1;
}

 #intro_section{
  height: 1080px;
 }

  .video_background {
    /*width: 100%; */
    /*top: 0; */
  }

  .horizontal_img {
    height: 937px; 
  }

  .img_title {
    position: relative;
    bottom: 30em;
    color: white;
    text-shadow: 1px 2px 4px rgba(0,0,0,0.8);
    margin-right: 32px;
  }

  .img_title img {
    width: 350px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.8);
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

  .intro-box{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    position: relative;
    top: -790px;
    color: black;
    text-shadow: 1px 2px 4px rgba(0,0,0,0.8);
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
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

  #smuckerLogo{
    height: 141px;
    width: 281px;
  }

  /*We're using KursorJS for the website's cursor. But there was 
  a problem where when you hover over a button, the normal cursor would
  reappear in addition to the Kursor cursor. The following CSS
  ensures that the defaults cursor always remains hidden when 
  hovering over any of the items below. */
  a, button, input, textarea {
    cursor: none !important;
  }

  .intro-box * {
  pointer-events: none;
}

.intro-box button {
  pointer-events: auto;
}

</style>


