<!--
  TODOS: 
  - Implement a button to the bottom right corner that takes you all the way back up
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


  <!--

    PROBLEMS TO FIX:
    - add company objectives. Take each accomplishment and listen again to recordings
  -->

<template>
  <section id="intro-section">
    <video class="video-background" autoplay muted loop>
      <source src="./assets/t2NC.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

    <scroll-parallax :speed="0.6">
      <!--
          <div class="img-title" style="display: flex; justify-content: flex-end; align-item: center;">
            <img src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="">
          </div> 
          -->


      <div class="intro-box expandable">
        <img id="smuckerLogo" src="./assets/Smucker2.png" />
        <h1>Nathan's Showcase</h1>
        <div>
          <button class="button" @click="scrollToSection('#getToKnowMe')">Get to Know Me</button>
          <button class="button" @click="scrollToSection('#seeWhatIHaveAccomplished')">See What I Have
            Accomplished</button>
        </div>
      </div>

      <!--
        <div class="img-title">
          <code>
              {{ scrollY }}
          </code>
        </div>
        -->

    </scroll-parallax>

  </section>

  <!--This div adds a space, in case you wante to add something in the middle. Could be another video.-->
  <div class="spacing"></div>

  <section class="horizontal-content" id="getToKnowMe">

    <scroll-parallax :speed="0.44" :left="true" direction="x">
      <div style="display: flex; justify-content: flex-start;">
        <!--<img class="horizontal_img" src="./assets/Smucker.jpg" />-->

        <img class="horizontal_img" src="./assets/ahli.jpg" />
        <img class="horizontal_img" src="./assets/OriPic(cropped2).jpg" />
        <img class="horizontal_img" src="./assets/karate.jpg" />
        <img class="horizontal_img" src="./assets/badger.jpg" />
      </div>
    </scroll-parallax>


    <div id="overlay-A">

      <div class="grid-item-A whoAmI-box">
        <h1>Who am I?</h1>
      </div>

      <div class="grid-item-A background-box horizontal-container reduce-opacity-on-hover">

        <div class="vertical-container">
          <img class="home-icon" src="./assets/Icons/Home.png" />
          <h1 class="icon-title">Home</h1>
        </div>

        <img class="partition" src="./assets/Icons/bline.png">

        <img src="./assets/sa-flag.png" style="height: 80px; width: 120px;" />
        <img src="./assets/Icons/airplane.png" style="height: 71px; width: 76px; margin: 0px 7px 0px 10px; transform: rotate(-45deg);" />
        <img class="UW-icon" src="./assets/UW-Madison.png" style="height: 150px; width: 228px;" />
        <!--<img src="./assets/wi-flag.png" style="height: 80px; width: 120px;"/>-->
        <!--<img src="./assets/Icons/USA-WI.png" style="height: 150px; width: 244px;">-->
        <!--<img class="pin" src="./assets/Icons/pin.png">-->
        <!--<img src="./assets/Icons/W.png" style="height: 120px; width: 128px;">-->

      </div>


      <!--
      <div class="grid-item-A school-box horizontal-container reduce-opacity-on-hover">

        <div class="vertical-container">
          <img class="school-icon" src="./assets/Icons/school.png" />
          <h1 class="icon-title">School</h1>
        </div>

        <img class="partition" src="./assets/Icons/bline.png">

        <img class="UW-icon" src="./assets/UW-Madison.png" style="height: 150px; width: 228px;" />

      </div>
      -->


      <div class="grid-item-A major-box horizontal-container reduce-opacity-on-hover">

        <div class="vertical-container">
          <img class="major-icon" src="./assets/Icons/fieldOfStudy.png" />
          <h1 class="icon-title">Major</h1>
        </div>

        <img class="partition" src="./assets/Icons/bline.png">

        <div class="major-info">

          <div>
            <img src="./assets/Icons/computer.png" style="height: 100px; width: 104px;">
            <img src="./assets/Icons/phone.png" style="height: 100px; width: 60px; margin: 0px 10px 0px 10px;">
            <img src="./assets/Icons/databases.png" style="height: 100px; width: 85px;">
          </div>

          <h1 style="font-family: 'Petrona'; font-size: 22px; margin: 0;"><b>Computer Science</b></h1>

        </div>

      </div>


      <div class="grid-item-A graduation-box horizontal-container reduce-opacity-on-hover">
        <div class="vertical-container">
          <img class="graduation-icon" src="./assets/Icons/grad.png" />
          <h1 class="icon-title">Graduation <br>Date</h1>
        </div>

        <img class="partition" src="./assets/Icons/bline.png">

        <h1 style="font-family: 'Petrona'; font-size: 36px;">December 2023</h1>

      </div>


      <div class="grid-item-A hobbies-box horizontal-container reduce-opacity-on-hover">

        <div class="vertical-container">
          <img class="hobbies-icon" src="./assets/Icons/hobbies.png" />
          <h1 class="icon-title">Hobbies</h1>
        </div>

        <img class="partition" src="./assets/Icons/bline.png">

        <div style="display: flex; flex-direction: row;">

          <img src="./assets/Icons/kick.png" style="height: 100px; width: 99px;" />
          <img src="./assets/Icons/punch.png" style="height: 100px; width: 113px;" />
          <img src="./assets/Icons/barbell.png" style="height: 100px; width: 197px;" />


        </div>

      </div>


      <div class="accomplishments-button">
        <button class="caret-button" @click="scrollToSection('#seeWhatIHaveAccomplished')">
          <i class="caret"></i>
        </button>

        <!--<button class="button" @click="scrollToSection('#seeWhatIHaveAccomplished')">Accomplishments at Smucker</button>-->
      </div>


    </div>

  </section>


  <!--VIDEO-->
  <section class="horizontal-content" id="seeWhatIHaveAccomplished">

    <video class="video-background" autoplay muted loop>
      <source src="./assets/droid.mp4" type="video/mp4">
    </video>

    <div id="overlay-B">

      <div class="grid-item-B smucker-accomplishments-box">
        <h1>Accomplishments at Smucker</h1>
      </div>

      <div class="grid-item-B droid-box expandable">
        <div class="vertical-container">
          <img class="droid-logo" src="./assets/droid-logo-black.svg" alt="Droid Logo" />
          <h1 class="icon-title">DROID: A Website Auditing Tool</h1>
        </div>
        <div class="droid-overlay"></div>
      </div>



      <div class="grid-item-B dunkin-box expandable">
        <div class="vertical-container">
          <img class="dunkin-logo" src="./assets/dunkin-style-guide.png" alt="Dunking Logo" />
          <h1 class="icon-title">Overhaul of Dunkin's Website Style</h1>
        </div>
        <div class="dunkin-overlay"></div>
      </div>


      <div class="grid-item-B onetrust-box expandable">
        <div class="vertical-container">
          <img class="onetrust-logo" src="./assets/onetrust-logo.png" alt="OneTrust logo">
          <h1 class="icon-title">OneTrust's CSS Banner Enhancements</h1>
        </div>
        <div class="onetrust-overlay"></div>
      </div>


    </div>

  </section>


  <section id="droid-overlay-section" style="height: 932px; background-color: grey;">

    <img class="background-image blur" src="./assets/droid-slideshow/droid-logo.png" alt="Full-sized Droid logo" />

    <div id="overlay-C">

      <div class="grid-item-C droid-section-title" style="width: 20%;">
        <h1>DROID</h1>
        <h3>A website Auditing Tool</h3>
      </div>

      <!--Parent-most div for the veProgress and the Deletion Video-->
      <div class="progress-and-deletion" style="display: flex; flex-direction: row; justify-content: space-around;">
        <div class="grid-item-C">
          <div class="vertical-container">

            <div ref="veProgressRef">
              <h1 class="icon-title">Optimized Runtime by 39.61%</h1>
              <ve-progress v-if="veProgressInView" :key="veProgressKey" :progress="39.61" animation="rs 3000 5000"
                line-mode="out" dot="10% blue" :size="400" :color="gradient">
                <template #legend>
                  <span>%</span>
                </template>
                <template #legend-caption>
                  <h1 class="icon-title" style="font-size: 26px;">Startup time: <s>8.14s</s> 4.91s</h1>
                </template>
              </ve-progress>
            </div>

          </div>
          <div class="droid-optimization-overlay"></div>
        </div>




        <!--Here's we're including a demo video of the deletion-->
        <div class="grid-item-C">
          <div class="vertical-container">
            <h1 class="icon-title">Implemented deletion of database records</h1>
            <video class="video-background" style="height: 370px; width: 658px;" autoplay muted loop>
              <source src="./assets/droid-deletion-demo.mp4" type="video/mp4">
            </video>
          </div>
          <div class="droid-deletion-overlay"></div>
        </div>
      </div>

      <div class="cont-button" style="width: 100%;">
        <button class="caret-button" @click="scrollToSection('#droid-overlay-section2')">
          <i class="caret"></i>
        </button>
        <!--<button class="button"
          @click="scrollToSection('#droid-overlay-section2')">Cont.</button> -->

      </div>


    </div>

  </section>


  <section id="droid-overlay-section2" style="height: 932px; background-color: grey;">

    <img class="background-image blur" src="./assets/droid-slideshow/droid-logo.png" alt="Full-sized Droid logo" />


    <div id="overlay-D">

      <div class="grid-item-D droid-setting-box" style="display: flex; flex-direction: column;">

        <h1 class="icon-title" style="margin-bottom: 20px;">Implemented a New "Settings" Page</h1>

        <div style="display: flex; flex-direction: row; align-items: center;">

          <div style="display: flex; flex-direction: column;">
            <h1 class="icon-title">Before</h1>
            <img class="droid-before-settings" src="./assets/droid-before-settings.png"
              alt="Droid before implemeting the setting page" />
          </div>

          <img class="arrow-right-icon" src="./assets/Icons/arrow-right.png" alt="Arrow down icon" />

          <div style="display: flex; flex-direction: column;">
            <h1 class="icon-title">After</h1>
            <img class="droid-after-settings" src="./assets/droid-after-settings.png"
              alt="Droid after implemeting the setting page" />
          </div>

        </div>

      </div>

      <div class="grid-item-D key-learnings-box" style="display: flex; flex-direction: column;">

        <h1 class="icon-title" style="margin-bottom: 20px;">Key Learnings & Skills Acquired</h1>
        <div style="display: flex; margin-top: 35px;">
          <img v-for="(skill, index) in keyLearningsIcons" :key="index" class="skills-list"
            :src="require(`@/assets/key-learnings/${skill}`)" />
        </div>

        <!--
          <Splide :options="options" >
            <SplideSlide v-for="(slide, index) in keyLearningsIcons" :key="index">
              <img :src="require(`@/assets/key-learnings/${slide}`)" class="splide-slideshow"/>
            </SplideSlide>
          </Splide>
          -->

      </div>

      <div class="cont-button" style="width: 100%;">
        <button class="caret-button" @click="scrollToSection('#dunkin-overlay-section')">
          <i class="caret"></i>
        </button>
      </div>

      <!--
        <div class="grid-item-D droid-periodic-deletion-box expandable">
          <div class="vertical-container">
            <h1 class="icon-title">Implemented periodic cleaning of the database</h1>
          </div>
          <div class="droid-periodic-deletion-overlay"></div>
        </div>
        -->

    </div>

  </section>


  <section id="dunkin-overlay-section">

    <img class="background-image blur" src="./assets/dunkin-background.png" alt="Dunkin Background"
      style="width: 1920px; height: 932px;" />

    <div id="overlay-E">

      <div class="dunkin-style-section-title" style="width: 30%;">
        <h1>Overhaul of Dunkin's Website Style</h1>
      </div>

      <div class="dunkin-sliders"
        style="display:flex; flex-direction: row; justify-content: space-around; align-items: center;"> <!--flex: 1;-->

        <div class="grid-item-E" style="display: flex; flex-direction: column;">
          <h1 class="icon-title" style="margin-bottom: 20px;">Home Page</h1>

          <img-comparison-slider style="width: 564px; height: 550px;">
            <!--eslint-disable-->
            <figure slot="first" class="before">
              <img slot="first" style="width: 100%;" src="./assets/dunkin-screenshots/dunkin-home-old.png" />
              <figcaption class="slider-label-before">Before</figcaption>
            </figure>
            <figure slot="second" class="after">
              <img slot="second" style="width: 100%;" src="./assets/dunkin-screenshots/dunkin-home-new.png" />
              <figcaption class="slider-label-after">After</figcaption>
            </figure>
            <!--eslint-enable-->
          </img-comparison-slider>
        </div>

        <div class="grid-item-E" style="display: flex; flex-direction: column;">
          <h1 class="icon-title" style="margin-bottom: 20px;">Coffee Recipes' Page</h1>
          <img-comparison-slider style="width: 564px; height: 550px;">
            <!--eslint-disable-->
            <figure slot="first" class="before">
              <img slot="first" style="width: 100%;" src="./assets/dunkin-screenshots/dunkin-coffee-old.png" />
              <figcaption class="slider-label-before">Before</figcaption>
            </figure>

            <figure slot="second" class="after">
              <img slot="second" style="width: 100%;" src="./assets/dunkin-screenshots/dunkin-coffee-new.png" />
              <figcaption class="slider-label-after">After</figcaption>
            </figure>
            <!--eslint-enable-->
          </img-comparison-slider>
        </div>

      </div>

      <div class="cont-button" style="width: 100%;">
        <button class="caret-button" @click="scrollToSection('#onetrust-overlay-section')">
          <i class="caret"></i>
        </button>
      </div>

    </div>

  </section>


  <section id="onetrust-overlay-section">

    <img class="background-image blur" src="./assets/onetrust-logo-background.png" alt="Onetrust Background"
      style="width: 1920px; height: 932px;" />

    <div id="overlay-F">

      <div class="grid-item-F onetrust-section-title" style="width: 30%;">
        <h1 style="margin: 0;">OneTrust's CSS Banner Enhancements</h1>
      </div>




      <div class="grid-item-F cookiebar-wide" style="display: flex; flex-direction: column;">
        <h1 class="icon-title" style="margin-bottom: 0px;">Desktop Width</h1>
        <img-comparison-slider>
          <!--eslint-disable-->
          <figure slot="first" class="before">
            <img slot="first" style="width: 100%;" src="./assets/cookie-bar/old-wide.png" />
            <figcaption class="slider-label-before">Before</figcaption>
          </figure>
          <figure slot="second" class="after">
            <img slot="second" style="width: 100%;" src="./assets/cookie-bar/new-wide.png" />
            <figcaption class="slider-label-after">After</figcaption>
          </figure>
          <!--eslint-enable-->
        </img-comparison-slider>
      </div>

      <!--<div style="display: flex; flex-direction: row; justify-content: space-around; align-items: center; width: 100%;"> -->
      <!--width: This div is in a grid, which means the width given to this div by the grid will be just enough to fit the content. This means that we won't have space to do justify-content: space-around. Therefore, we have to set width: 100% so that we take all the width that the grid can give us. Which will enable us to do space-around. ALIGN-ITEMS: we gave this one "center" so that divs don't get stretched to match each others' height. remember that justify is for "horizontal" alignment and align is for "vertical" alignment-->

      <div class="grid-item-F cookiebar-tablet" style="display: flex; flex-direction: column;">
        <h1 class="icon-title" style="margin-bottom: 0px;">Tablet Width</h1>
        <img-comparison-slider>
          <!--eslint-disable-->
          <figure slot="first" class="before">
            <img slot="first" style="width: 100%;" src="./assets/cookie-bar/old-mid.png" />
            <figcaption class="slider-label-before">Before</figcaption>
          </figure>
          <figure slot="second" class="after">
            <img slot="second" style="width: 100%;" src="./assets/cookie-bar/new-mid.png" />
            <figcaption class="slider-label-after">After</figcaption>
          </figure>
          <!--eslint-enable-->
        </img-comparison-slider>
      </div>

      <div class="grid-item-F cookiebar-mobile" style="display: flex; flex-direction: column;">
        <h1 class="icon-title" style="margin-bottom: 0px;">Mobile Width</h1>
        <img-comparison-slider>
          <!--eslint-disable-->
          <figure slot="first" class="before">
            <img slot="first" style="width: 100%;" src="./assets/cookie-bar/old-small.png" />
            <figcaption class="slider-label-before">Before</figcaption>
          </figure>
          <figure slot="second" class="after">
            <img slot="second" style="width: 100%;" src="./assets/cookie-bar/new-small.png" />
            <figcaption class="slider-label-after">After</figcaption>
          </figure>
          <!--eslint-enable-->
        </img-comparison-slider>
      </div>

      <div class="cont-button" style="grid-row: 4; position:absolute; width: 100%;">
        <button class="caret-button" @click="scrollToSection('#intro-section')">
          <i class="caret" style="transform: rotate(-135deg); -webkit-transform: rotate(-135deg);"></i>
        </button>
      </div>

    </div>
  </section>
</template>
    
<script>
import ScrollParallax from './components/ScrollParallax.vue';
import { VeProgress } from "vue-ellipse-progress";
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from "gsap"
//import { Splide, SplideSlide } from '@splidejs/vue-splide'

// The following two will be used for fading in the pictures of horizontal_section s when scrolling. 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// The following two will be used for implementing GSAP's scrolling animation. Which is better because you can control the scrolling speed. 
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default {

  components: {
    ScrollParallax,
    VeProgress,
    ImgComparisonSlider
    //Splide, 
    //SplideSlide
  },
  setup() {
    let videoObserver // This will be used for pausing the video when it's out of the viewport
    let horizontalSectionsObserver;
    let backgroundImagesObserver;
    let veProgressObserver;
    let autoScroll // This will be used for implementing the auto scrolling
    let sectionsToScrollTo = ['#getToKnowMe', "#seeWhatIHaveAccomplished", "#droid-overlay-section", "#droid-overlay-section2", "#dunkin-overlay-section", "#onetrust-overlay-section", "#intro-section"] // These will be used for snap and auto scrolling, add more sections as needed
    let keyLearningsIcons = ref(["vue-icon.png", "quasar-logo.png", "php-logo.png", "laravel-logo.png", "js-logo.png", "html-logo.png", "css-logo.png"])
    const keyLearningsSlideshow = ref(null)
    const veProgressInView = ref(false) // Tracks whether the veProgress component is in view. We'll need to destroy it when not in view to force animation to re-run
    const veProgressKey = ref(0)
    const veProgressRef = ref(null) // We're observing the parent ref to determine if veProgress should be rendered or not. 
    const options = ref({
      type: 'fade',
      autoplay: true,
      interval: 3000,
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      rewind: true,

      // Other options if needed
    })

    const gradient = ref({
      radial: false,
      colors: [
        {
          color: '#6546f7',
          offset: "0",
          opacity: '1',
        },
        {
          color: 'lime',
          offset: "100",
          opacity: '0.6',
        },
      ]
    })
    let introBox

    let droidBox
    let dunkinBox
    let oneTrustBox

    onMounted(() => {

      // Defining values first:
      document.title = "Nathan's Showcase" // Setting the name of the tab title
      const videoElement = document.querySelector('.video-background') // Saving the element with class="video-background". We'll use it later to stop video when it's out of viewport
      introBox = document.querySelector('.intro-box') // Getting the component with class="intro-box"
      const horizontalSections = document.querySelectorAll('.horizontal-content'); // This will be used to apply shading on horizontal sections. 
      const backgroundImages = document.querySelectorAll('.background-image')
      const expandableBoxes = document.querySelectorAll('.expandable') // any div with this class will expand on hover
      const opacityReduction = document.querySelectorAll('.reduce-opacity-on-hover')
      droidBox = document.querySelector('.droid-box')
      dunkinBox = document.querySelector('.dunkin-box')
      oneTrustBox = document.querySelector('.onetrust-box')


      //startAutoScroll()

      // This makes the intro box fade in on page load
      gsap.from('.intro-box', {
        duration: 3, // Duration of fade in
        opacity: 0,  // Start from opacity of 0
        delay: 0.8 // Wait 0.8 seconds after the page loads before starting to fade in
      })


      // TODO: CONSIDER COMPACTING THOSE INTO ONLY ONE GSAP, We can compact the A-C, but not the D
      // Makes grid items fade in when they're in viewport
      gsap.fromTo(".grid-item-A",
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
          y: '0%',
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".grid-item-A",
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
              // Reset the animation to the start when re-entering the section
              gsap.set(".grid-item-A", { y: '-50%', opacity: 0 });
            },
            onLeave: () => {
              gsap.set(".grid-item-A", { y: '-50%', opacity: 0 })
            },
            onLeaveBack: () => {
              // Set the elements to the initial state when leaving the section
              gsap.set(".grid-item-A", { y: '-50%', opacity: 0 });
            },
            toggleActions: "restart pause reset reset"
          },
          duration: 2,
          ease: 'power1.out',
          overwrite: 'auto'
        })

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
          y: '0%',
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".grid-item-B",
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
              // Reset the animation to the start when re-entering the section
              gsap.set(".grid-item-B", { y: '-50%', opacity: 0 });
            },
            onLeave: () => {
              gsap.set(".grid-item-B", { y: '-50%', opacity: 0 })
            },
            onLeaveBack: () => {
              // Set the elements to the initial state when leaving the section
              gsap.set(".grid-item-B", { y: '-50%', opacity: 0 });
            },
            toggleActions: "restart pause reset reset"
          },
          duration: 2,
          ease: 'power1.out',
          overwrite: 'auto'
        })

      gsap.fromTo(".grid-item-C",
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
          y: '0%',
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".grid-item-C",
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
              // Reset the animation to the start when re-entering the section
              gsap.set(".grid-item-C", { y: '-50%', opacity: 0 });
            },
            onLeave: () => {
              gsap.set(".grid-item-C", { y: '-50%', opacity: 0 })
            },
            onLeaveBack: () => {
              // Set the elements to the initial state when leaving the section
              gsap.set(".grid-item-C", { y: '-50%', opacity: 0 });
            },
            toggleActions: "restart pause reset reset"
          },
          duration: 2,
          ease: 'power1.out',
          overwrite: 'auto'
        })

      gsap.fromTo(".grid-item-D",
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
          y: '0%',
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".grid-item-D",
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
              // Reset the animation to the start when re-entering the section
              gsap.set(".grid-item-D", { y: '-50%', opacity: 0 });
            },
            onLeave: () => {
              gsap.set(".grid-item-D", { y: '-50%', opacity: 0 })
            },
            onLeaveBack: () => {
              // Set the elements to the initial state when leaving the section
              gsap.set(".grid-item-D", { y: '-50%', opacity: 0 });
            },
            toggleActions: "restart pause reset reset"
          },
          duration: 2,
          ease: 'power1.out',
          overwrite: 'auto'
        })

      gsap.fromTo(".grid-item-E",
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
          y: '0%',
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".grid-item-E",
            start: "bottom bottom",
            end: "bottom top",
            onEnter: () => {
              // Reset the animation to the start when re-entering the section
              gsap.set(".grid-item-E", { y: '-50%', opacity: 0 });
            },
            onLeave: () => {
              gsap.set(".grid-item-E", { y: '-50%', opacity: 0 })
            },
            onLeaveBack: () => {
              // Set the elements to the initial state when leaving the section
              gsap.set(".grid-item-E", { y: '-50%', opacity: 0 });
            },
            toggleActions: "restart pause reset reset"
          },
          duration: 2,
          ease: 'power1.out',
          overwrite: 'auto'
        })

      gsap.fromTo(".dunkin-style-section-title",
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
          y: '0%',
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".dunkin-style-section-title",
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
              // Reset the animation to the start when re-entering the section
              gsap.set(".dunkin-style-section-title", { y: '-50%', opacity: 0 });
            },
            onLeave: () => {
              gsap.set(".dunkin-style-section-title", { y: '-50%', opacity: 0 })
            },
            onLeaveBack: () => {
              // Set the elements to the initial state when leaving the section
              gsap.set(".dunkin-style-section-title", { y: '-50%', opacity: 0 });
            },
            toggleActions: "restart pause reset reset"
          },
          duration: 2,
          ease: 'power1.out',
          overwrite: 'auto'
        })

      gsap.fromTo(".grid-item-F",
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
          y: '0%',
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".grid-item-F",
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
              // Reset the animation to the start when re-entering the section
              gsap.set(".grid-item-F", { y: '-50%', opacity: 0 });
            },
            onLeave: () => {
              gsap.set(".grid-item-F", { y: '-50%', opacity: 0 })
            },
            onLeaveBack: () => {
              // Set the elements to the initial state when leaving the section
              gsap.set(".grid-item-F", { y: '-50%', opacity: 0 });
            },
            toggleActions: "restart pause reset reset"
          },
          duration: 2,
          ease: 'power1.out',
          overwrite: 'auto'
        })


      /*
      gsap.to(".arrow-right-icon", {
        scale: 0.8, // Scale the image by 20%
        duration: 1, // How long it takes to complete one cycle of the animation, 1/2 seconds in this case
        repeat: -1, // num of times to repeat animation, -1 = infinitely
        yoyo: true, //Reverse the animation on alternate iterations, like a yoyo
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".arrow-right-icon",
          start: "top bottom", // Starts when the TOP of the component reaches the bottom of the screen
          end: "bottom top", //animation ends when the bottom of the component hits the top of the viewport. 
 
        }
      })
      */

      //Making the pin for the US map bounce up and down
      /*
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
      */


      /*
      // Enables Slideshow
      const keyLearningsSlides = Array.from(keyLearningsSlideshow.value.children)
      // Hide all slides initially
      gsap.set(keyLearningsSlides, { autoAlpha: 0 })
      // Show the first slide
      gsap.set(keyLearningsSlides[0], { autoAlpha: 1 })
      /// Start the slideshow
      let index = 0
      setInterval(() => {
        let prevIndex = index == 0 ? keyLearningsSlides.length - 1 : index - 1;
        //Fade out current slide
        gsap.to(keyLearningsSlides[prevIndex], { autoAlpha: 0, duration: 1 })
 
        //Fade in the next slide
        gsap.to(keyLearningsSlides[index], { autoAlpha: 1, duration: 1 })
 
        index = (index + 1) % keyLearningsSlides.length
      }, 3000)
      */


      window.addEventListener('mousedown', function (event) {
        if (event.button === 3) {
          stopAutoScroll()
          this.document.title= "Nathan's Showcase"
          //console.log('Back button clicked');
        } else if (event.button === 4) {
          //console.log('Forward button clicked');
          this.document.title= "Nathan's Showcase (SLIDESHOW MODE)"
          startAutoScroll()
        }
      })




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
        ;[droidBox, dunkinBox, oneTrustBox].forEach(element => {
          element.addEventListener('click', () => {
            //console.log(`section to scroll to: ${event.target.classList[0]}`)
            scrollToSection(`#${event.target.classList[0]}-section`) // You need to make the whole div as one, 
          })
        })

      expandableBoxes.forEach(box => {
        if (box != null) {
          box.addEventListener('mouseenter', () => {
            gsap.to(box, {
              duration: 0.3,
              scale: 1.1 // Multiply the dimensions of the intro-box by 1.1, increase by 10%
            })
          })

          box.addEventListener('mouseleave', () => {
            gsap.to(box, { duration: 0.3, scale: 1 });
          })
        }
      })

      opacityReduction.forEach(div => {
        div.addEventListener("mouseenter", (event) => {
          event.target.style.transition = 'opacity 0.5s ease';
          event.target.style.opacity = '0.2';
        })

        div.addEventListener("mouseleave", (event) => {
          event.target.style.opacity = '1';
        })
      })

      // Fade out intro box as user scrolls
      // TODO: Consider replacing this with GSAP
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
      const intersectingHorizontalSections = new Set();
      let shadingTimeout;
      horizontalSectionsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingHorizontalSections.add(entry.target);
            // Clear previous timeout, if it exists.
            clearTimeout(shadingTimeout);
            // Set new timeout to apply shading.
            shadingTimeout = setTimeout(() => {
              // Add or remove 'shaded' depending on whether any sections are intersecting.
              document.body.classList.toggle('shaded', intersectingHorizontalSections.size > 0);
            }, 1000); // change this to the shading delay you want.
          }
          else {
            intersectingHorizontalSections.delete(entry.target);
            // If no sections are intersecting, immediately remove shading and clear timeout.
            if (intersectingHorizontalSections.size === 0) {
              clearTimeout(shadingTimeout);
              document.body.classList.remove('shaded');
            }
          }
        });
      }, { threshold: 0.8 }); // The threshold: 0.8 means that 80% of the section must be within the viewport for the effect to take place. 

      horizontalSections.forEach(horizontalSection => {
        horizontalSectionsObserver.observe(horizontalSection);
      });

      // This blurs the background image
      const intersectingBackgroundImages = new Set();
      let blurringTimeout;
      backgroundImagesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingBackgroundImages.add(entry.target);
            // Clear previous timeout, if it exists.
            clearTimeout(blurringTimeout);
            // Set new timeout to apply shading.
            blurringTimeout = setTimeout(() => {
              // Add or remove 'shaded' depending on whether any sections are intersecting.
              entry.target.classList.toggle('blur', intersectingBackgroundImages.size > 0);
            }, 1000); // change this to the shading delay you want.
          }
          else {
            intersectingBackgroundImages.delete(entry.target);
            // If no sections are intersecting, immediately remove shading and clear timeout.
            if (intersectingBackgroundImages.size === 0) {
              clearTimeout(blurringTimeout);
              entry.target.classList.remove('blur');
            }
          }
        });
      }, { threshold: 0.8 }); // The threshold: 0.8 means that 80% of the section must be within the viewport for the effect to take place. 

      backgroundImages.forEach(backgroundImg => {
        backgroundImagesObserver.observe(backgroundImg);
      });


      veProgressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !veProgressInView.value) {
            veProgressInView.value = true
            veProgressKey.value++  // increment key to force component recreation. When the key changes, Vue treats it as a whole new component different from the previous one
          }
          else if (!entry.isIntersecting && veProgressInView.value) {
            veProgressInView.value = false
          }
        })
      }, { threshold: 0.8 })

      if (veProgressRef.value) { // We're observing the parent div that contains the veProgress. 
        veProgressObserver.observe(veProgressRef.value)
      }

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

    const scrollToSection = (sectionToScrollTo) => {
      stopAutoScroll()
      // Old code, replaced with GSAP
      //const getToKnowMeSection = document.getElementById("getToKnowMe");
      //getToKnowMeSection.scrollIntoView({ behavior: 'smooth' })
      gsap.to(window, { duration: 1.25, scrollTo: sectionToScrollTo })
    }


    const startAutoScroll = () => {
      let currentSectionNumber = 0; // The index of the current section we're on above.

      autoScroll = setInterval(() => {
        //console.log("Section Num:", currentSectionNumber)
        // Previous code. It was replaced by GSAP
        //const sectionToScrollTo = document.getElementById(sectionsToScrollTo[currentSectionNumber]) // Getting the specific section, look at the function scrollToGetToKnowMeSection and scrollToSeeWhatIHaveAccomplished for an example use case
        //sectionToScrollTo.scrollIntoView({ behavior: 'smooth' })
        gsap.to(window, { duration: 3, scrollTo: sectionsToScrollTo[currentSectionNumber] })

        currentSectionNumber = currentSectionNumber === sectionsToScrollTo.length - 1 ? 0 : currentSectionNumber + 1 // If we've reached the last element in that array of sections, we're resetting the index back to 0 to go back to the top of the site. Otherwise, we're incrementing by 1 to get to the next section. 
        //console.log("Now it's: ", currentSectionNumber)
      }, 11000) // Running sutoScroll once every 9000 Millisecond = 9 seconds. 
    }

    const stopAutoScroll = () => {
      clearInterval(autoScroll) // Almost like unmounting an event listener to cease its effect
    }

    onBeforeUnmount(() => {
      if (videoObserver)
        videoObserver.disconnect();

      if (horizontalSectionsObserver)
        horizontalSectionsObserver.disconnect()

      if (introBox) {
        introBox.removeEventListener('mouseenter')
        introBox.removeEventListener('mouseleave')
      }

      if (droidBox) {
        droidBox.removeEventListener('mouseenter')
        droidBox.removeEventListener('mouseleave')
        droidBox.removeEventListener('click')
      }

      if (dunkinBox) {
        dunkinBox.removeEventListener('mouseenter')
        dunkinBox.removeEventListener('mouseleave')
        dunkinBox.removeEventListener('click')
      }

      if (oneTrustBox) {
        oneTrustBox.removeEventListener('mouseenter')
        oneTrustBox.removeEventListener('mouseleave')
        oneTrustBox.removeEventListener('click')
      }

      if (window) {
        window.removeEventListener('keydown')
        window.removeEventListener('scroll')
      }

    })


    return {
      scrollToSection,
      keyLearningsIcons,
      keyLearningsSlideshow,
      veProgressInView,
      veProgressKey,
      veProgressRef,
      gradient,
      options
    }
  },
};
</script>
    
<style>
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
  background: radial-gradient(ellipse at center, transparent 50%, black 90%);
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.5s;
}

body.shaded::before {
  opacity: 1;
}

#intro-section {
  height: 1080px;
}

.horizontal_img {
  height: 937px;
}

.img-title {
  position: relative;
  bottom: 30em;
  color: white;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-right: 32px;
}

.img-title img {
  width: 350px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  border-radius: 30px;
}

.spacing {
  height: 0px;
}

.horizontal-content {
  overflow: hidden;
}

.button {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background: rgba(50, 50, 50, 1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-family: 'Petrona';
  font-size: 18px;
  position: relative;
  z-index: 3;
}

.button:hover {
  background: #646464;
}

.intro-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -790px;
  color: black;
  /*text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);*/
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 600px;
  left: 35%;
}


/*
.intro-box:hover {
  transform: scale(1.1);
}
*/

.intro-box h1 {
  margin-bottom: 10px;
  font-size: 42px;
  font-family: 'Petrona';
}

#smuckerLogo {
  height: 141px;
  width: 281px;
}

.home-icon {
  height: 108px;
  width: 111px;
}

.UW-icon {
  height: 100px;
  width: 100px;
}

.major-icon {
  height: 108px;
  width: 113px;
}

.hobbies-icon {
  height: 100px;
  width: 103px;
}

.graduation-icon {
  height: 100px;
  width: 100px;
}

.school-icon {
  height: 108px;
  width: 133px;
}

.vertical-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  /*Prevents the container from taking up the entire box and only giving the size of the biggest element in it. */
}

.icon-title {
  font-family: 'Petrona';
  margin: 8px;
  text-align: center;
}

/*We're using KursorJS for the website's cursor. But there was 
      a problem where when you hover over a button, the normal cursor would
      reappear in addition to the Kursor cursor. The following CSS
      ensures that the defaults cursor always remains hidden when 
      hovering over any of the items below. 
  */
/*
a,
button,
input,
textarea {
  cursor: none !important;
}
*/

#getToKnowMe,
#seeWhatIHaveAccomplished,
#droid-overlay-section,
#droid-overlay-section2,
#dunkin-overlay-section,
#onetrust-overlay-section,
#onetrust-overlay-section2 {
  position: relative;
  width: 100vw;
  height: 100vh;
}


.droid-overlay,
.dunkin-overlay,
.onetrust-overlay,
.droid-optimization-overlay,
.droid-settings-overlay,
.droid-deletion-overlay,
.droid-periodic-deletion-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 5;
  width: 100%;
  height: 100%;
}

#overlay-A {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /*"Make 3 colums with width of 1fr (equal widths)" */
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
  grid-template-columns: repeat(3, 1fr);
  /*"Make 3 colums with width of 1fr (equal widths)" */
  justify-items: center;
  gap: 10px;
  align-items: center;
}

#overlay-E {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  /*"Make 3 colums with width of 1fr (equal widths)" */
  justify-items: center;
  align-items: center;
}

#overlay-D {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  /*"Make 3 colums with width of 1fr (equal widths)" */
  justify-items: center;
  align-items: center;
}

#overlay-F {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto;
  /*OR, grid-template-rows: repeat(4, auto); */
  /*"Make 3 colums with width of 1fr (equal widths)" */
  justify-items: center;
  align-items: center;
}

#overlay-C,
#overlay-G {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  /*OR, grid-template-rows: repeat(4, auto); */
  /*"Make 3 colums with width of 1fr (equal widths)" */
  justify-items: center;
  align-items: center;
}

.whoAmI-box {
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

.whoAmI-box h1 {
  margin-bottom: 10px;
  /*Replace those two margin options with the margin: # # # # */
  margin-top: 10px;
  font-size: 42px;
  font-family: 'Petrona';
}

.whoAmI-box,
.smucker-accomplishments-box {
  grid-row: 1;
  grid-column: 2;
}

.droid-section-title {
  grid-row: 1;
}

.progress-and-deletion,
.dunkin-sliders {
  grid-row: 2;
}

.cont-button {
  grid-row: 3;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
}



.smucker-accomplishments-box h1 {
  margin-bottom: 10px;
  /*Replace those two margin options with the margin: # # # # */
  margin-top: 10px;
  font-size: 42px;
  font-family: 'Petrona';
}

.dunkin-style-section-title,
.onetrust-section-title {
  background: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 5px;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 22px;
  font-family: 'Petrona';
  width: auto;

  grid-row: 1;
}

.dunkin-style-section-title h1 {
  margin: 0;
  /*Replace those two margin options with the margin: # # # # */
  font-size: 32px;
  font-family: 'Petrona';
}

.grid-item-A,
.grid-item-B,
.grid-item-C,
.grid-item-D,
.grid-item-E,
.grid-item-F {
  /* Styling for each grid item */
  background: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 5px;
  position: relative;
  z-index: 3;
}

.horizontal-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.onetrust-logo {
  height: 225px;
  width: 400px;
  border-radius: 10px;
}

.droid-section-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px
}

.droid-section-title h1 {
  margin: 0;
  /*Replace those two margin options with the margin: # # # # */
  font-size: 42px;
  font-family: 'Petrona';
}

.droid-section-title h3 {
  margin: 0px;
  font-size: 22px;
  font-family: 'Petrona';
}


.background-box,
.droid-box,
.droid-runtime-box {
  grid-row: 2;
  grid-column: 1;
}

.pin {
  height: 50px;
  width: 39px;
  transform: translate(-114px, -75px);
}

.school-box,
.dunkin-box {
  grid-row: 2;
  grid-column: 2;
}

.droid-deletion-box {
  grid-row: 3;
  grid-column: 1;
}

.hobbies-box {
  grid-row: 3;
  grid-column: 2;
}

.accomplishments-button {
  grid-row: 3;
  grid-column: 3;
  align-self: end;
  justify-self: end;
}

.major-box,
.droid-deletion-box {
  grid-row: 2;
  grid-column: 2;
}

.droid-setting-box {
  grid-row: 1;
}

.cookiebar-wide {
  grid-row: 4;
}

.cookiebar-tablet {
  grid-row: 3;
}


.cookiebar-mobile,
.key-learnings-box {
  grid-row: 2;
}

.droid-logo {
  height: 225px;
  width: 400px;
}

.dunkin-logo {
  height: 225px;
  width: 400px;
  border-radius: 10px;
}

.major-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.graduation-box,
.onetrust-box {
  grid-row: 2;
  grid-column: 3;
}

.droid-periodic-deletion-box {
  grid-row: 3;
  grid-column: 3;
}



.partition {
  height: 100px;
  width: 12px;
  margin: 0px 35px 0px 5px;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  transition: filter 1s ease-in-out;
}

.blur {
  filter: blur(25px);
}

.droid-before-settings {
  height: 300px;
  width: 534px;
}

.arrow-right-icon {
  height: 100px;
  width: 269px;
  margin: 15px;
}

.droid-after-settings {
  height: 300px;
  width: 534px;
}

/*Expands the max width to allow horizontal spacing in the DROID page.*/
#overlay-C>div,
#overlay-E>div {
  width: 80%;
  /* adjust this percentage as needed */
  margin: auto;
}

.key-learning-slide {
  max-height: 200px;
  width: auto;
  /*The following setup is intented to make the image replace each other by taking up the same spot in the div. This is also why the parent div for the icon is positioned relaitvely.*/
  position: absolute;
  top: 0;
  left: 0;
}

.key-learnings-box {
  position: relative;

  /*The following numbers were chose to match the div above it. We need them to be the smae size */
  height: 343px;
  width: 1367px;
}

.skills-list {
  width: auto;
  /* or any other value */
  height: 184px;
  /* or any other value */
}

.before,
.after {
  margin: 0;
}

.before figcaption,
.after figcaption {
  background: #fff;
  border: 1px solid #c0c0c0;
  border-radius: 12px;
  color: black;
  font-weight: bolder;

  opacity: 1;
  padding: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 100%;
}

.before figcaption {
  left: 12px;
}

.after figcaption {
  right: 12px;
}

img-comparison-slider {
  --divider-width: 5px;
  --divider-color: black;
  --default-handle-opacity: 1;
  --default-handle-color: black;
  --default-handle-width: clamp(40px, 10vw, 200px);
  border-radius: 10px;
}

img-comparison-slider:hover .slider-label-before,
img-comparison-slider:hover .slider-label-after {
  visibility: hidden;
}

img-comparison-slider:focus {
  outline: none;
}

.caret-button {
  background-color: #000;
  /* Dark background */
  color: #fff;
  /* White caret */
  border: none;
  border-radius: 50%;
  /* Makes the button circular */
  width: 50px;
  /* Size of the button */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 3;
  margin: 0px 10px 10px 0px;
}

.caret {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
    
    
  
  
  
  
  
  
  
  
  <!--Code graveyard -->
  
  <!--
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
  
    
      <section class="horizontal-content" id="seeWhatIHaveAccomplished">
        <scroll-parallax :speed="0.15" :left="false" direction="x">
          <div style="display: flex; justify-content: flex-end;">
            <img class="img__background horizontal_img" src="./assets/css.jpg" />
            <video autoplay muted loop>
              <source src="./assets/droidcropped.mp4" type="video/mp4">
            </video>
            <img class="img__background horizontal_img" src="./assets/Orientation.jpg" />
          </div>
        </scroll-parallax>
  
  
        <div id="overlay-B">
          
          <div class="grid-item-B smucker-accomplishments-box">
            <h1>Accomplishments at Smucker</h1>
          </div>
        
          <div class="grid-item-B background-box horizontal-container">
            <div class="vertical-container">
              <img src="./assets/droid-logo-black.svg" alt="Droid Logo" style="height: 50px; width: 400px;"/> 
            </div>
          </div>
  
  
          <div class="grid-item-B dunkin-box horizontal-container">
            <div class="vertical-container">
              <img src="./assets/dunkin-style-guide.png" alt="Dunking Logo" style="height: 225px; width: 400px;"/> 
            </div>
          </div>
  
  
          <div class="grid-item-B major-box horizontal-container"> 
  
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
  
      -->
  
  
    <!--
      <div >
          <scroll-parallax
            :speed="0.15"
            direction="x"
          >
          
          <div style="display: flex; align-item: center;">
            <div class="img-title">
              <img src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="">
            </div>
            <div class="img-title" style="">
              <code>
                  {{ scrollX }}
              </code>
            </div>
          </div>
          
          </scroll-parallax>
      </div>
  
  
  /*
  How to target a specific child
  .grid-item:nth-child(6) {
    grid-column: 5;
  }
  
  */
  
    -->
  