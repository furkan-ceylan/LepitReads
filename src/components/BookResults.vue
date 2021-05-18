<template>
  <div class="book-results">
    <div v-if="books.length > 0">
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
              <router-link
                :to="{
                  name: 'BookDetail',
                  params: {
                    id: book.id,
                    bookTitle: book.volumeInfo.title,
                    bookAuthor: book.volumeInfo.authors[0],
                    bookImage: book.volumeInfo.imageLinks.thumbnail,
                    bookDescription: book.volumeInfo.description,
                    bookPage: book.volumeInfo.pageCount,
                    bookDate: book.volumeInfo.publishedDate,
                    bookPublisher: book.volumeInfo.publisher,
                    bookLink: book.volumeInfo.canonicalVolumeLink
                  },
                }"
              >
                <a class="media__area">
                  <img
                    class="lazy"
                    v-if="book.volumeInfo.imageLinks"
                    :src="book.volumeInfo.imageLinks.thumbnail"
                    data-sizes="(min-width: 36rem) 35vw, 100vw"
                  />
                </a>
              </router-link>
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
            <a
              class="search-toggle--nested search-toggle switch"
              data-target=".search"
              data-related=".sidebar"
            >
              <svg class="icon icon--regular" width="32" height="32">
                <use xlink:href="#icon-search"></use></svg
              >Search
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
.book-results {
  padding-bottom: 30px;
}
</style>
