<template>
  <div class="wrapper">
    <router-view></router-view>
    <!-- Overlay-->
   
    <!-- Scroll top button-->
    <a class="scroll-top" href="#" data-scroll=""> <span class="scroll-top__text">top</span>
      <svg class="icon icon--regular scroll-top__icon" width="32" height="32">
        <use xlink:href="#icon-arrow"></use>
      </svg>
    </a>


  </div>
</template>

<script>


export default {
  name: 'App',

  components: {
    
    
  },

  data: () => ({
    //
  }),
};
</script>
