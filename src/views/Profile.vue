<template>
  <div class="profile">
    <Header />

    <main class="container">
      <!-- page title-->
      <div class="page-title page-title--line">
        <h1 class="page-title__name">Hello, Lucinda Byrd</h1>
        <!-- <span class="page-title__status">Creative director</span> -->
      </div>
      <div class="row">
        <div class="col-md-7 col-xl-8">
          <!-- person media-->
          <div class="card card--person card--person-open">
            <div class="media media2">
              <svg class="image-placeholder" width="128" height="128">
                <use xlink:href="#image-placeholder"></use>
              </svg>
              <div class="media__area">
                <img
                  class="lazy"
                  src="images/assets/placeholder.png"
                  data-src="images/team/person-2-default.jpg"
                  data-srcset="images/team/person-2-default-milli.jpg"
                />
              </div>
            </div>
          </div>
          <!-- person social-->
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
          </ul>
        </div>
        <div class="col-md-5 col-xl-4">
          <!-- person information-->
          <div class="content-plain">
            <h3 class="heading--start">Biography</h3>
            <ul class="list list--primary list--inside">
              <li>From: Turkey</li>
              <li>Joined in May 2021</li>
              <li>Authentic beverages review</li>
              <li>Marvel comics movies</li>
            </ul>
          </div>
        </div>
      </div>

      <section class="component">
        <!-- section heading-->
        <div class="info info--faq">
          <div class="row">
            <div class="col-md-3">
              <div class="info__heading">
                <h3>General</h3>
              </div>
            </div>
            <div class="col-md-9">
              <!-- accordions-->
              <div
                class="js-accordion rod-accordion"
                data-accordion-prefix-classes="rod"
                aria-multiselectable="true"
                role="tablist"
              >
                <!-- accordion header-->
                <button
                  class="js-accordion__header rod-accordion__header"
                  role="tab"
                  id="accordiongg11gcn21d_tab1"
                  aria-controls="accordiongg11gcn21d_panel1"
                  aria-selected="true"
                  type="button"
                  aria-expanded="false"
                  @click="ariaHidden"
                  v-if="aria-hidden"
                >
                  Lorem ipsum dolor sit amet
                </button>
                <!-- accordion body-->
                <div
                  class="js-accordion__panel rod-accordion__panel"
                  role="tabpanel"
                  aria-labelledby="accordiongg11gcn21d_tab1"
                  id="accordiongg11gcn21d_panel1"
                  aria-hidden="true"
                >
                  <h2 class="rod-accordion__title">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p>
                    Phasellus iaculis pharetra auctor. Phasellus sollicitudin et
                    diam nec faucibus. Aliquam efficitur arcu eget nulla
                    consectetur efficitur. Nullam mollis velit mi, quis posuere
                    purus pellentesque eu. Phasellus iaculis pharetra auctor.
                    Phasellus sollicitudin et diam nec faucibus. Aliquam
                    efficitur arcu eget nulla consectetur efficitur. Nullam
                    mollis velit mi, quis posuere purus pellentesque eu.
                  </p>
                </div>
                <!-- accordion header-->
                <button
                  class="js-accordion__header rod-accordion__header"
                  role="tab"
                  id="accordiongg11gcn21d_tab2"
                  aria-controls="accordiongg11gcn21d_panel2"
                  aria-selected="false"
                  type="button"
                  aria-expanded="false"
                  tabindex="-1"
                >
                  Viverra aliquet eget sit amet
                </button>
                <!-- accordion body-->
                <div
                  class="js-accordion__panel rod-accordion__panel"
                  role="tabpanel"
                  aria-labelledby="accordiongg11gcn21d_tab2"
                  id="accordiongg11gcn21d_panel2"
                  aria-hidden="true"
                >
                  <h2 class="rod-accordion__title">
                    Viverra aliquet eget sit amet
                  </h2>
                  <p>
                    Phasellus iaculis pharetra auctor. Phasellus sollicitudin et
                    diam nec faucibus. Aliquam efficitur arcu eget nulla
                    consectetur efficitur. Nullam mollis velit mi, quis posuere
                    purus pellentesque eu. Phasellus iaculis pharetra auctor.
                    Phasellus sollicitudin et diam nec faucibus. Aliquam
                    efficitur arcu eget nulla consectetur efficitur. Nullam
                    mollis velit mi, quis posuere purus pellentesque eu.
                  </p>
                </div>
                <!-- accordion header-->
                <button
                  class="js-accordion__header rod-accordion__header"
                  role="tab"
                  id="accordiongg11gcn21d_tab3"
                  aria-controls="accordiongg11gcn21d_panel3"
                  aria-selected="false"
                  type="button"
                  aria-expanded="false"
                  tabindex="-1"
                >
                  Etiam non quam lacus suspendisse faucibus interdum
                </button>
                <!-- accordion body-->
                <div
                  class="js-accordion__panel rod-accordion__panel"
                  role="tabpanel"
                  aria-labelledby="accordiongg11gcn21d_tab3"
                  id="accordiongg11gcn21d_panel3"
                  aria-hidden="true"
                >
                  <h2 class="rod-accordion__title">
                    Etiam non quam lacus suspendisse faucibus interdum
                  </h2>
                  <p>
                    Phasellus iaculis pharetra auctor. Phasellus sollicitudin et
                    diam nec faucibus. Aliquam efficitur arcu eget nulla
                    consectetur efficitur. Nullam mollis velit mi, quis posuere
                    purus pellentesque eu. Phasellus iaculis pharetra auctor.
                    Phasellus sollicitudin et diam nec faucibus. Aliquam
                    efficitur arcu eget nulla consectetur efficitur. Nullam
                    mollis velit mi, quis posuere purus pellentesque eu.
                  </p>
                </div>
                <!-- accordion header-->
                <button
                  class="js-accordion__header rod-accordion__header"
                  role="tab"
                  id="accordiongg11gcn21d_tab4"
                  aria-controls="accordiongg11gcn21d_panel4"
                  aria-selected="false"
                  type="button"
                  aria-expanded="false"
                  tabindex="-1"
                >
                  Mollis nunc sed id semper
                </button>
                <!-- accordion body-->
                <div
                  class="js-accordion__panel rod-accordion__panel"
                  role="tabpanel"
                  aria-labelledby="accordiongg11gcn21d_tab4"
                  id="accordiongg11gcn21d_panel4"
                  aria-hidden="true"
                >
                  <h2 class="rod-accordion__title">
                    Mollis nunc sed id semper
                  </h2>
                  <p>
                    Phasellus iaculis pharetra auctor. Phasellus sollicitudin et
                    diam nec faucibus. Aliquam efficitur arcu eget nulla
                    consectetur efficitur. Nullam mollis velit mi, quis posuere
                    purus pellentesque eu. Phasellus iaculis pharetra auctor.
                    Phasellus sollicitudin et diam nec faucibus. Aliquam
                    efficitur arcu eget nulla consectetur efficitur. Nullam
                    mollis velit mi, quis posuere purus pellentesque eu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="heading">
          <h2 class="heading__name">Books I Have Read</h2>
          <!-- <span class="heading__info">Write what you know.</span> -->
        </div>
        <!-- section articles grid-->
        <div class="card-wrapper card-wrapper--sm">
          <div class="row">
            <div class="one-col-clear col-6 col-lg-4">
              <!-- small article preview-->
              <div class="card card--post card--post-small">
                <!-- ~ article media-->
                <div class="media">
                  <svg class="image-placeholder" width="128" height="128">
                    <use xlink:href="#image-placeholder"></use>
                  </svg>
                  <a class="media__area" href="single_post.html">
                    <img
                      class="lazy"
                      src="images/assets/placeholder.png"
                      data-src="images/blog/post-3-default-centi.jpg"
                      alt=""
                      data-srcset="images/blog/post-3-default-micro.jpg 237w, images/blog/post-3-default-milli.jpg 332w, images/blog/post-3-default-centi.jpg 429w"
                      data-sizes="(min-width: 36rem) 35vw, 100vw"
                    />
                  </a>
                </div>
                <!-- ~ article attributes-->
                <div class="card__meta">
                  <a class="card__meta-value" href="#">cocktails</a>
                </div>
                <!-- ~ article name-->
                <a class="card__name" href="single_post.html"
                  >Special mood beverages: summer refreshing non-alcoholic
                  drinks</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- pagination-->
        <nav class="pagination--space pagination">
          <a class="pagination__link pagination__link--prev" href="#">prev</a>
          <a class="pagination__link" href="#">1</a>
          <a class="pagination__link pagination__link--active" href="#">2</a>
          <a class="pagination__link" href="#">3</a>
          <a class="pagination__link" href="#">...</a>
          <a class="pagination__link" href="#">47</a>
          <a class="pagination__link pagination__link--next" href="#">next</a>
        </nav>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Profile",
  components: {
    Header,
  },
  data() {
    return {
      ariahidden: false,
    };
  },
    methods: {
  ariaHidden() {
    this.ariahidden= true;
  }
    },
};
</script>

<style scoped>
.container {
  padding-top: 74px;
}

.media2 {
  width: 600px;
  height: 300px;
}
</style>
