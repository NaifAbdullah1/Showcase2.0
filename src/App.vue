<!--
  TODOS: 
  1- Implement the auto scroll upon clicking the buttons. Ask ChatGPT how to translate the href button from <a> to <button>. 
  2- Implement the auto scroll using intervals (scroll down automatically for the purposes of the showcase.)
  3- Think of better design ideas, make it better than Ryan's
    A- See if there's a library that replaces the mouse with something that looks web-dev related. 
    B- Make items below appear when you scroll to them the first time and dissappear when scrolling away
    C- Look at A LOT of other websites, look up "Parallax websites examples" to get ideas from different sites. 
  4- Last priority: Make sure the website works for mobile
  -->


<template>
  <section>
    <scroll-parallax :speed="0.65">
      <!--
      <img
        class="img__background"
        src="./assets/Smucker.jpg"
      />
    -->

      <video class="img__background" autoplay muted loop>
        <source src="./assets/Smucker-Headquarters-(Slowed-to-0.8).mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>

    </scroll-parallax>

    <scroll-parallax :speed="0.2">
    <!--
      <div class="img__title" style="display: flex; justify-content: flex-end; align-item: center;">
      <img src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="">
    </div>
    -->

      <div class="intro-box">
        <h1>Nathan Abdullah</h1>
        <div>
          <button class="button" @click="scrollToGetToKnowMeSection">Get to Know Me</button>
          <button class="button">See What I Have Accomplished</button>
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
    <scroll-parallax :speed="0.58" :left="true" direction="x">
      <div style="display: flex; justify-content: flex-start;">
        <img
          class="img__background"
          src="./assets/Smucker.jpg"
        />
        <img
          class="img__background"
          src="./assets/OriPic.jpg"
        />
      </div>
    </scroll-parallax>

    <div class="horizontal__elements">
      <scroll-parallax
        :speed="0.15"
        direction="x"
      >
      <div style="display: flex; align-item: center;">
        
        <!--
        <div class="img__title">
          <img src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="">
        </div>
        -->

        <!--
        <div class="img__title" style="">
          <code>
              {{ scrollX }}
          </code>
        </div>
        -->


      </div>
      </scroll-parallax>
    </div>

  </section>
</template>

<script>
import ScrollParallax from './components/ScrollParallax.vue';
import { onMounted, ref } from 'vue'

export default {

  components: {
    ScrollParallax
  },
  setup(){
    const scrollY = ref("")
    const scrollX = ref("")

    onMounted(() => {
      scrollY.value = '<scroll-parallax direction="y"></scroll-parallax>'
      scrollX.value = '<scroll-parallax :left="true" direction="x"></scroll-parallax>'
    })

    const scrollToGetToKnowMeSection = () => {
      const getToKnowMeSection = document.getElementById("getToKnowMe");
      getToKnowMeSection.scrollIntoView({behavior: 'smooth'})
    }

    return {
      scrollY,
      scrollX,
      scrollToGetToKnowMeSection 
    }
  },
};
</script>

<style >
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
  }

  .img__background {
    width: 100%;
    top: 0;
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

  code {
    color: orange;
    background-color: rgba(0,0,0,1);
    padding: 5px 15px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.8);
    text-shadow: none;
    margin-left: 30px;
    font-size: 16px;
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
    top: -700px;
    color: black;
    text-shadow: 1px 2px 4px rgba(0,0,0,0.8);
    margin-right: 32px;
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    width: 600px;
    left: 35%;
    transition: all 0.3s ease-in-out;
  }

  .intro-box:hover {
    transform: scale(1.1);
  }

  .intro-box h1 {
    margin-bottom: 10px;
    font-size: 42px;
    font-family: 'Petrona';
}

</style>


