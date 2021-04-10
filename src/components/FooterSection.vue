<template>
      <footer class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-7 col-xl-6 order-md-last">
            <!-- footer widget: link list-->
            <div class="widget">
            </div>
            <!-- footer widget: social-->
            <div class="widget">
              <h4 class="heading-widget">Our social groups</h4>
              <ul class="social">
                <li class="social__item">
                  <a class="social__link" href="#">facebook</a>
                  <i class="fa-facebook-f social__icon fab"></i>
                </li>
                <li class="social__item">
                  <a class="social__link" href="#">instagram</a>
                  <i class="fa-instagram social__icon fab"></i>
                </li>
                <li class="social__item">
                  <a class="social__link" href="#">twitter</a>
                  <i class="fa-twitter social__icon fab"></i>
                </li>
                <li class="social__item">
                  <a class="social__link" href="#">youtube</a>
                  <i class="fa-youtube social__icon fab"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-5 col-xl-6 order-md-first align-center">
            <!-- footer widget: brand-->
            
          <a class="flogo" >
              <h2 class="heading__name" >LepitReads</h2>
          </a>
          <p class="copy">&copy; 2021. LepitReads. All rights reserved.</p>
          </div>
            <!-- copyright text-->
           
          </div>
        </div>
      
    </footer>
</template>

<script>
export default {
    name: 'FooterSection',

}
</script>

<style scoped>
.flogo{

  align-items: center;
  display:grid;
}
</style>