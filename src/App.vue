<!--
  TODOS: 
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
      <video class="video__background" autoplay muted loop>
        <source src="./assets/t2NC.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    <!--</scroll-parallax>-->

    <scroll-parallax :speed="0.6">
    <!--
      <div class="img__title" style="display: flex; justify-content: flex-end; align-item: center;">
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
    <div class="img__title">
      <code>
          {{ scrollY }}
      </code>
    </div>
    -->

    </scroll-parallax>
  </section>

  <div class="spacing"></div>

  <section class="horizontal__content" id="getToKnowMe">
    <scroll-parallax :speed="0.40" :left="true" direction="x">
      <div style="display: flex; justify-content: flex-start;">
        <img
          class="horizontal__img"
          src="./assets/OriPic(cropped).jpg"
        />
        <img
          class="horizontal__img"
          src="./assets/Smucker.jpg"
        />
      </div>
    </scroll-parallax>

    <section class="horizontal__content" id="seeWhatIHaveAccomplished">
      <scroll-parallax :speed="0.15" :left="false" direction="x">
        <div style="display: flex; justify-content: flex-end;">
          <img
            class="img__background horizontal__img"
            src="./assets/GrpPic.jpg"
          />
          <img
            class="img__background horizontal__img"
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
        <div class="img__title">
          <img src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="">
        </div>
        <div class="img__title" style="">
          <code>
              {{ scrollX }}
          </code>
        </div>
      </div>
      
      </scroll-parallax>
    </div>
    -->

  </section>
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
    let horizontalSectionsObserver // This will be used for shading the images. 
    let videoObserver // This will be used for pausing the video when it's out of the viewport
    let autoScroll // This will be used for implementing the auto scrolling

    onMounted(() => {

      document.title = "Nathan's Showcase" // Setting the name of the tab title

      startAutoScroll()

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
      const videoElement = document.querySelector('.video__background')
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


      const horizontalSections = document.querySelector('.horizontal__content')      
      horizontalSectionsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.target === horizontalSections){
            document.body.classList.toggle('shaded', entry.isIntersecting)
          }
        })
      }, {threshold: 0.1}) // This means that the shading will appear when at least 30% of the horizontal__content section is visible
      horizontalSectionsObserver.observe(horizontalSections)

      
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
      // get the height of the document
      let documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight);

      autoScroll = setInterval(() => {
        // get current scroll position
        let currentScrollPosition = window.scrollY || document.documentElement.scrollTop
        console.log(currentScrollPosition)
        // Scrolling down by 100px
        window.scrollTo({
          top: currentScrollPosition + ((currentScrollPosition === 0) ? 1418 : 973), // Add 100px to our current scrolling position
          behavior: 'smooth'
        })

        // If we reach the bottom of the website, we are to scroll all the way up
        if (currentScrollPosition + window.innerHeight >= documentHeight)
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })

      }, 5000) // scroll every 5000milliseconds, every 5 seconds. 
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

  .video__background {
    /*width: 100%; */
    /*top: 0; */
  }

  .horizontal__img {
    height: 937px; 
  }

  .img__title {
    position: relative;
    bottom: 30em;
    color: white;
    text-shadow: 1px 2px 4px rgba(0,0,0,0.8);
    margin-right: 32px;
  }

  .img__title img {
    width: 350px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.8);
    border-radius: 30px;
  }

  .spacing {
    height: 0px;
  }

  .horizontal__content {
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

</style>


