<template>
  <div class="wrapper">
    <router-view></router-view>
    <!-- Overlay-->

    <!-- Scroll top button-->
    <a class="scroll-top" href="#" data-scroll="">
      <span class="scroll-top__text">top</span>
      <svg class="icon icon--regular scroll-top__icon" width="32" height="32">
        <use xlink:href="#icon-arrow"></use>
      </svg>
    </a>
  </div>
</template>

<script>
import '../public/css/style-min.css';
import '../public/gtag/swiper/dist/css/swiper.min.css';
import '../public/gtag/bootstrap/dist/css/bootstrap-grid.min.css';

import '../public/css-1.css?family=Josefin+Sans:300,400,600,700';
import '../public/css.css?family=Arapey';

import '../public/gtag/js.js?id=UA-126654847-1';
import '../public/gtag/smooth-scroll/dist/smooth-scroll.polyfills.min.js';
//import '../public/gtag/masonry-layout/dist/masonry.pkgd.min.js';
import '../public/gtag/vanilla-lazyload/dist/lazyload.min.js';
import '../public/gtag/swiper/dist/js/swiper.min.js';
import '../public/gtag/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js';
import '../public/gtag/van11y-accessible-tab-panel-aria/dist/van11y-accessible-tab-panel-aria.min.js';
import '../public/gtag/vanilla-lazyload/dist/lazyload.min.js';
import '../public/gtag/swiper/dist/js/swiper.min.js';
import '../public/gtag/js.js';
import '../public/js/generic-min.js';
import '../public/js/home-min.js';
import '../public/js/blog-masonry-min.js';
import '../public/js/categories-min.js';
import '../public/js/home-min.js';
import '../public/js/contact-min.js';
import '../public/css-1.css';
import '../public/css.css';
import '../public/js/page-post-min.js';


export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
