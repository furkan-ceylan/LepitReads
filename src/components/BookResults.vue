<template>
  <div class="book-results">
    <div v-if="books.length > 0">
    <!-- <div v-else class="had-container">
      <div class="carousel">
        <div
          class="carousel-item card large animated fadeIn"
          v-for="book in books"
          :key="book.id"
        >
          <div class="card-image waves-effect waves-block waves-light">
            <img
              v-if="book.volumeInfo.imageLinks"
              :src="book.volumeInfo.imageLinks.thumbnail"
              class="activator"
            />
          </div>
          <div class="card-content">
            <span v-if="book.volumeInfo.title" class="card-title truncate">{{
              book.volumeInfo.title
            }}</span>
            <p class="authors" v-if="book.volumeInfo.authors">
              {{ book.volumeInfo.authors[0] }}
            </p>
            <p><a class="activator">See More</a></p>
          </div>
          <div class="card-action">
            <span class="card-title grey-text text-darken-4"
              ><a
                :style="{ color: 'black' }"
                :href="book.volumeInfo.infoLink"
                target="_blank"
                ><i class="material-icons right">info_outline</i></a
              ></span
            >
          </div>
          <div class="card-reveal">
            <span
              v-if="book.volumeInfo.title"
              class="card-title grey-text text-darken-4"
              >{{ book.volumeInfo.title
              }}<i class="material-icons right">close</i></span
            >
            <p v-if="book.volumeInfo.description">
              {{ book.volumeInfo.description }}
            </p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- search title-->
    <div class="page-title page-title--thin page-title--search">
      <h1>
        <span class="page-title__name">Search results:</span>
      </h1>
    </div>
    <!-- search info-->
    <!-- search result-->
    <div class="row">
      <div
        class="one-col-clear col-6 col-lg-4"
        v-for="book in books"
        :key="book.id"
      >
        <!-- small article preview-->
        <div class="card card--post card--post-small">
          <!-- ~ article media-->
          <div class="media">
            <svg class="image-placeholder" width="128" height="128">
              <use xlink:href="#image-placeholder"></use>
            </svg>
            <a class="media__area" href="#">
              <img
                class="lazy"
                v-if="book.volumeInfo.imageLinks"
                :src="book.volumeInfo.imageLinks.thumbnail"
                data-sizes="(min-width: 36rem) 35vw, 100vw"
              />
            </a>
          </div>
          <!-- ~ article attributes-->
          <div class="card__meta">
            <p class="card__meta-value" v-if="book.volumeInfo.authors">
              {{ book.volumeInfo.authors[0] }}
            </p>
          </div>
          <!-- ~ article name-->
          <span v-if="book.volumeInfo.title" class="card__name">{{
            book.volumeInfo.title
          }}</span>
        </div>
      </div>
    </div>
    <!-- pagination-->
    <nav class="pagination--top pagination">
      <a class="pagination__link pagination__link--active" href="#">prev</a>
      <a class="pagination__link" href="#">1</a>
      <a class="pagination__link pagination__link" href="#">2</a>
      <a class="pagination__link" href="#">3</a>
      <a class="pagination__link" href="#">...</a>
      <a class="pagination__link" href="#">47</a>
      <a class="pagination__link pagination__link--next" href="#">next</a>
    </nav>
    <!-- search call to action-->
    <div
      class="search-control d-md-flex justify-content-md-between align-items-md-end"
    >
      <div class="search-control__content">
        <h2 class="search-control__title">Need a new search?</h2>
        <span class="search-control__text"
          >If you didn't find what you were looking for, try another
          search!</span
        >
      </div>
      <div class="sidebar__controls">
      <div class="search-control__action flex-shrink-0">
                  <a class="search-toggle--nested search-toggle switch" data-target=".search" data-related=".sidebar">
            <svg class="icon icon--regular" width="32" height="32">
              <use xlink:href="#icon-search"></use>
            </svg>Search
          </a>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookResults",
  props: ["input", "books"],
};
</script>

<style>
.book-results{
  padding-bottom:30px;
}
</style>