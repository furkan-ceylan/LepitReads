<template>
  <div class="home">
    <Header />
    <section
      class="hero hero--focus d-flex align-items-center justify-content-center"
    >
      <div class="container">
        <!-- hero decoration elements-->
        <div class="hero__decoration">
          <div class="decor decor--tiny"></div>
          <div class="decor decor--small"></div>
          <div class="decor decor--medium"></div>
          <div class="decor decor--large"></div>
        </div>
        <!-- hero content wrapper-->
        <div class="hero__content">
          <div class="iconMargin">
            <a
              class="search-toggle--nested search-toggle switch"
              data-scroll=""
              data-target=".search"
              data-related=".sidebar"
            >
              <div class="hero__title">
                <svg class="icon icon--boldd">
                  <use xlink:href="#icon-search"></use>
                </svg>
                <h4 class="hero__title1">Find Book</h4>
              </div>
            </a>
          </div>
          <h1 class="hero__title3">
            Easily find the <mark>books</mark><br />you are looking for
          </h1>
        </div>
      </div>
    </section>
    <section class="container">
      <section class="component">
        <!-- section heading-->

        <!-- slider with last featured articles-->
        <div
          class="featured-slider-wrapper featured-slider--basic"
          id="bookresults"
        >
          <div class="swiper-container featured-slider">
            <BookResults :input="input" :books="books" />
          </div>
          <div class="swiper-container featured-slider">
            <div class="swiper-wrapper">
              <!-- slide with featured article-->
              <div class="swiper-slide" data-title="Oscar Wilde">
                <div
                  class="card--light card card--post card--absolute card--post-featured"
                >
                  <!-- ~ article media-->

                  <div class="media">
                    <svg class="image-placeholder" width="128" height="128">
                      <use xlink:href="#image-placeholder"></use>
                    </svg>
                    <div class="media__area">
                      <img
                        src="images/blog/ph1.jpg"
                        alt=""
                        srcset="
                          images/blog/ph1.jpg  380w,
                          images/blog/ph1.jpg  510w,
                          images/blog/ph1.jpg  690w,
                          images/blog/ph1.jpg  930w,
                          images/blog/ph1.jpg 1140w
                        "
                        sizes="(min-width: 36rem) 80vw, 100vw"
                      />
                    </div>
                  </div>
                  <!-- ~ article content-->
                  <div class="card__content">
                    <div class="card__name">
                      <a class="card__link"
                        >“Be yourself; everyone else is already taken.”</a
                      >
                    </div>
                    <h1 class="hero__title2">Oscar Wilde</h1>
                  </div>
                </div>
              </div>
              <!-- slide with featured article-->
              <div class="swiper-slide" data-title="Victor Hugo">
                <div
                  class="card--light card card--post card--absolute card--post-featured"
                >
                  <!-- ~ article media-->
                  <div class="media">
                    <svg class="image-placeholder" width="128" height="128">
                      <use xlink:href="#image-placeholder"></use>
                    </svg>
                    <div class="media__area">
                      <img
                        src="images/blog/ph2.jpg"
                        alt=""
                        srcset="
                          images/blog/ph2.jpg  380w,
                          images/blog/ph2.jpg  510w,
                          images/blog/ph2.jpg  690w,
                          images/blog/ph2.jpg  930w,
                          images/blog/ph2.jpg 1140w
                        "
                        sizes="(min-width: 36rem) 80vw, 100vw"
                      />
                    </div>
                  </div>
                  <!-- ~ article content-->
                  <div class="card__content">
                    <div class="card__name">
                      <a class="card__link"
                        >“To learn to read is to light a fire; every syllable
                        that is spelled out is a spark.”</a
                      >
                    </div>
                    <h1 class="hero__title2">Victor Hugo</h1>
                  </div>
                </div>
              </div>
              <!-- slide with featured article-->
              <div class="swiper-slide" data-title="Mahatma Gandhi">
                <div
                  class="card--light card card--post card--absolute card--post-featured"
                >
                  <!-- ~ article media-->
                  <div class="media">
                    <svg class="image-placeholder" width="128" height="128">
                      <use xlink:href="#image-placeholder"></use>
                    </svg>
                    <div class="media__area">
                      <img
                        src="images/blog/ph3.jpg"
                        alt=""
                        srcset="
                          images/blog/ph3.jpg  380w,
                          images/blog/ph3.jpg  510w,
                          images/blog/ph3.jpg  690w,
                          images/blog/ph3.jpg  930w,
                          images/blog/ph3.jpg 1140w
                        "
                        sizes="(min-width: 36rem) 80vw, 100vw"
                      />
                    </div>
                  </div>
                  <!-- ~ article content-->
                  <div class="card__content">
                    <div class="card__name">
                      <a class="card__link">
                        “Be the change that you wish to see in the world.”</a
                      >
                    </div>
                    <h1 class="hero__title2">Mahatma Gandhi</h1>
                  </div>
                </div>
              </div>
              <!-- slide with featured article-->
              <div class="swiper-slide" data-title="Albert Camus">
                <div
                  class="card--light card card--post card--absolute card--post-featured"
                >
                  <!-- ~ article media-->
                  <div class="media">
                    <svg class="image-placeholder" width="128" height="128">
                      <use xlink:href="#image-placeholder"></use>
                    </svg>
                    <div class="media__area">
                      <img
                        src="images/blog/ph4.jpg"
                        alt=""
                        srcset="
                          images/blog/ph4.jpg  380w,
                          images/blog/ph4.jpg  510w,
                          images/blog/ph4.jpg  690w,
                          images/blog/ph4.jpg  930w,
                          images/blog/ph4.jpg 1140w
                        "
                        sizes="(min-width: 36rem) 80vw, 100vw"
                      />
                    </div>
                  </div>
                  <!-- ~ article content-->
                  <div class="card__content">
                    <div class="card__name">
                      <a class="card__link"
                        >“Don’t walk in front of me… I may not follow Don’t walk
                        behind me… I may not lead Walk beside me… just be my
                        friend”</a
                      >
                    </div>
                    <h1 class="hero__title2">Albert Camus</h1>
                  </div>
                </div>
              </div>
            </div>
            <!-- slider pagination holder-->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section class="categories categories--large">
        <h3 class="hidden-heading">Suggestions</h3>
        <a class="category category--standart">#Brandon Sanderson</a>
        <a class="category category--standart">#Dostoyevski</a>
        <a class="category category--standart">#Anna Karenina</a>
        <a class="category category--standart">#War and Peace</a>
        <a class="category category--standart">#George Orwell</a>
        <a class="category category--standart">#Umberto Eco</a>
        <a class="category category--standart">#Faust</a>
      </section>

      <section class="component">
        <!-- section heading-->

        <!-- section call to action-->
      </section>
      <FooterSection />
    </section>
    <div class="search d-flex align-items-center justify-content-center">
      <div class="search__content">
        <!-- search form-->
        <SearchButton
          :userInput="input"
          @changedValue="input = $event"
          @submitValue="fetchBooks"
          @inputCleared="input = $event"
        />
        <!-- search information-->
        <div class="search__related">
          <h3>May we suggest?</h3>
          <p>Follow good rules of writing and type specific word or phrase.</p>
          <div class="tags tags--follow">
            <a class="tag">#Brandon Sanderson</a>
            <a class="tag">#Dostoyevski</a>
            <a class="tag">#Anna Karenina</a>
            <a class="tag">#War and Peace</a>
            <a class="tag">#George Orwell</a>
            <a class="tag">#Umberto Eco</a>
            <a class="tag">#Faust</a>
          </div>
        </div>
      </div>
      <!-- dialog box close-->
      <a class="close icon-holder" data-target=".search">
        <svg class="icon icon--regular" width="32" height="32">
          <use xlink:href="#icon-cross"></use>
        </svg>
        <div class="icon-state">
          <svg class="icon icon--regular" width="32" height="32">
            <use xlink:href="#icon-cross"></use>
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import SearchButton from "../components/SearchButton.vue";
import BookResults from "../components/BookResults.vue";
import FooterSection from "../components/FooterSection.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    SearchButton,
    BookResults,
    FooterSection,
  },
  props: ["userInput"],
  data: function () {
    return {
      input: "",
      books: [],
      title: "",
    };
  },
  methods: {
    fetchBooks() {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.input}`)
        .then((response) => {
          console.log(response.data.items);
          this.books = response.data.items;
          this.results = true;
        });
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .iconMargin {
    margin-top: 1.2rem;
    margin-left: 10%;
    text-align: center;
    align-content: center;
    justify-items: space-around;
  }
  .hero__content:hover a:hover {
    color: #6fb1f4;
    cursor: pointer;
  }
}
</style>
