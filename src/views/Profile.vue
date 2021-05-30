<template>
  <div class="profile">
    <Header />

    <main class="container">
      <!-- page title-->
      <div class="page-title page-title--line">
        <h1 class="page-title__name">Hello, {{ userName }}</h1>
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
                  width="350" height="350"
                  src="https://i1.sndcdn.com/artworks-J2za3PLCmOxJpGhk-um7XQA-t500x500.jpg"
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
            <h3 class="heading--start">About me</h3>
            <ul class="list list--primary list--inside">
              <li>From: Turkey</li>
              <li>Joined in May 2021</li>
              <li>Cool reviews</li>
            </ul>
          </div>
        </div>
      </div>

      <section class="component">
        <!-- section heading-->

        <div class="row content-section d-md-flex books" id="quick-look">
          <div class="col-md-4">
            <!-- content heading-->
            <h3 class="page-segment heading-section">
              Books I Have Read<span class="heading-section__info"></span>
              <a
                class="heading-section__control section-toggle"
                href="#"
                data-target="#quick-look"
              >
                <svg
                  class="icon icon--regular icon--action control-start"
                  width="32"
                  height="32"
                >
                  <use xlink:href="#icon-plus"></use>
                </svg>
                <svg
                  class="icon icon--regular icon--action control-end"
                  width="32"
                  height="32"
                >
                  <use xlink:href="#icon-minus"></use>
                </svg>
              </a>
            </h3>
          </div>
          <div class="col-md-4">
            <!-- content heading-->
            <h3 class="page-segment heading-section">
              Books I Will Read<span class="heading-section__info"></span>
              <a
                class="heading-section__control section-toggle"
                href="#"
                data-target="#quick-look"
              >
                <svg
                  class="icon icon--regular icon--action control-start"
                  width="32"
                  height="32"
                >
                  <use xlink:href="#icon-plus"></use>
                </svg>
                <svg
                  class="icon icon--regular icon--action control-end"
                  width="32"
                  height="32"
                >
                  <use xlink:href="#icon-minus"></use>
                </svg>
              </a>
            </h3>
          </div>
          <div class="col-md-4">
            <!-- content heading-->
            <h3 class="page-segment heading-section">
              Favorite Books<span class="heading-section__info"></span>
              <a
                class="heading-section__control section-toggle"
                href="#"
                data-target="#quick-look"
              >
                <svg
                  class="icon icon--regular icon--action control-start"
                  width="32"
                  height="32"
                >
                  <use xlink:href="#icon-plus"></use>
                </svg>
                <svg
                  class="icon icon--regular icon--action control-end"
                  width="32"
                  height="32"
                >
                  <use xlink:href="#icon-minus"></use>
                </svg>
              </a>
            </h3>
          </div>
          <div class="col-md-4 content-section__body">
            <!-- target link list-->
            <ol class="content-list">
              <div v-for="book in favBooks" :key="book.id">
                <li class="content-list__item">
                  <a class="content-list__link" href="#">{{ book.title }}</a>
                </li>
              </div>
            </ol>
          </div>
          <div class="col-md-4 content-section__body">
            <!-- target link list-->
            <ol class="content-list">
              <div v-for="book in readBooks" :key="book.id">
                <li class="content-list__item">
                  <a class="content-list__link" href="#">{{ book.title }}</a>
                </li>
              </div>
            </ol>
          </div>
          <div class="col-md-4 content-section__body">
            <!-- target link list-->
            <ol class="content-list">
              <div v-for="book in willReadBooks" :key="book.id">
                <li class="content-list__item">
                  <a class="content-list__link" href="#">{{ book.title }}</a>
                </li>
              </div>
            </ol>
          </div>
        </div>

        <!-- <div class="heading">
          <h2 class="heading__name">Books I Have Read</h2>
        <span class="heading__info">Write what you know.</span>
        </div>
        <div class="card-wrapper card-wrapper--sm">
          <div class="row">
            <div class="one-col-clear col-6 col-lg-4">
              <div v-for="book in books" :key="book.id"> 
             <div class="card card--post card--post-small">
                <div class="media">
                  <svg class="image-placeholder" width="128" height="128">
                    <use xlink:href="#image-placeholder"></use>
                  </svg>
                  <a class="media__area">
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
                <div class="card__meta">
                  <a class="card__meta-value">{{book.title}}</a>
                </div>
                <a class="card__name" href="single_post.html"
                  >Special mood beverages: summer refreshing non-alcoholic
                  drinks</a
                >
              </div>
              </div>
            </div>
          </div>
        </div> -->
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import getCollection from "@/composables/getCollection.js";
import getUser from "@/composables/getUser.js";

export default {
  name: "Profile",
  components: {
    Header,
  },
  setup() {
    const { user } = getUser();
    const userName = user.value.displayName;

    const { documents: favBooks } = getCollection(
      "books",
      ["userId", "==", user.value.uid],
      ["isFav", "==", true]
    );

    const { documents: readBooks } = getCollection(
      "books",
      ["userId", "==", user.value.uid],
      ["isRead", "==", true]
    );

    const { documents: willReadBooks } = getCollection(
      "books",
      ["userId", "==", user.value.uid],
      ["isWillRead", "==", true]
    );

    console.log(favBooks);
    console.log(readBooks);
    console.log(willReadBooks);
    return { favBooks, readBooks, willReadBooks, userName };
  },
};
</script>

<style scoped>
.container {
  padding-top: 104px;
}

.media2 {
  width: 400px;
  height: 300px;
}

.books {
  margin-bottom: 50px;
}


@media screen and (max-width: 720px) {

}

@media screen and (max-width: 520px) {

  }
</style>
