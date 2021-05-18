<template>
  <div class="bookdetail">
    <Header />

    <main class="container">
      <!-- page title-->
      <div class="page-title">
        <div class="row">
          <div class="col-md-12">
            <h1 class="page-title__name">{{ bookTitle }}</h1>
          </div>
        </div>
      </div>
      <!-- articles flow-->
      <!-- info article-->
      <div class="card card--post card--post-info">
        <div class="card__preview">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <!-- ~ article media-->
              <div class="media">
                <svg class="image-placeholder" width="128" height="128">
                  <use xlink:href="#image-placeholder"></use>
                </svg>
                <a class="media__area">
                  <img
                    :src="bookImage"
                    alt=""
                    data-sizes="(min-width: 36rem) 80vw, 100vw"
                  />
                </a>
                <!-- ~ article details-->
                <div class="card__detail d-md-flex align-items-center">
                  <div class="card__reference">
                    <span class="card__reference-value">{{ bookTitle }}</span>
                  </div>
                  <a class="link link--cta" :href="bookLink">more</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 d-lg-flex align-items-lg-center meta-overlay">
              <!-- ~ article attributes-->
              <ul class="card__metas list-unstyled">
                <li class="card__meta">
                  <span class="card__meta-title">Author</span>
                  <span class="card__meta-value">{{ bookAuthor }}</span>
                </li>
                <li class="card__meta">
                  <span class="card__meta-title">Published Date</span>
                  <span class="card__meta-value">{{ bookDate }}</span>
                </li>
                <li class="card__meta">
                  <span class="card__meta-title">Publisher</span>
                  <span class="card__meta-value">{{ bookPublisher }}</span>
                </li>
                <li class="card__meta">
                  <span class="card__meta-title">pageCount</span>
                  <span class="card__meta-value">{{ bookPage }}</span>
                </li>
                <li class="card__meta">
                  <a class="card__meta-value" :href="bookLink"
                    >Go to book page</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- ~ article content-->
        <div class="row">
          <div class="col-lg-6">
            <h2 class="card__name">Description</h2>
          </div>
          <div class="col-lg-6">
            <p class="card__info">
              {{ bookDescription }}
            </p>
          </div>
        </div>
        <div class="row content-section content-section--static">
          <div class="col-md-3">
            <!-- content heading-->
            <h3 class="page-segment heading-section">
              Add this book<span class="heading-section__info"></span>
              <a
                class="heading-section__control section-toggle"
                href="#"
                data-target=".introduction"
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
          <div class="col-md-9 content-section__body">
            <!-- review item call to actions-->
            <div class="reference">
              <div
                class="reference__item d-lg-flex align-items-lg-center justify-content-lg-between"
              >
                <span class="reference__label">add to favorites</span>
                <a class="flex-shrink-0 reference__btn" target="_blank">add</a>
                <svg class="icon icon--regular" width="32" height="32">
                  <use xlink:href="#icon-arrow"></use>
                </svg>
              </div>
              <div
                class="reference__item d-lg-flex align-items-lg-center justify-content-lg-between"
              >
                <span class="reference__label">add to i want to read</span>
                <a class="flex-shrink-0 reference__btn" target="_blank">add</a>
                <svg class="icon icon--regular" width="32" height="32">
                  <use xlink:href="#icon-arrow"></use>
                </svg>
              </div>
              <div
                class="reference__item d-lg-flex align-items-lg-center justify-content-lg-between"
              >
                <span class="reference__label">add to a alread read</span>
                <a class="flex-shrink-0 reference__btn" target="_blank">add</a>
                <svg class="icon icon--regular" width="32" height="32">
                  <use xlink:href="#icon-arrow"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "BookDetail",
  components: {
    Header,
  },
  props: [
    "id",
    "bookTitle",
    "bookAuthor",
    "bookDescription",
    "bookDate",
    "bookPage",
    "bookPublisher",
    "bookImage",
    "bookLink",
  ],
};
</script>

<style scoped>
.container {
  padding-top: 94px;
}
</style>
