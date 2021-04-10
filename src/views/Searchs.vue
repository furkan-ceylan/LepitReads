<template>
  <div class="searchs">
    <Header />
    <SearchButton
      :userInput="input"
      @changedValue="input = $event"
      @submitValue="searchBooks"
      @inputCleared="input = $event"
    />

    <BookResults :input="input" :books="books" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import SearchButton from "../components/SearchButton.vue";
import BookResults from "../components/BookResults.vue";

export default {
  name: "Searchs",
  components: {
    Header,
    SearchButton,
    BookResults,
  },
  props: ["userInput"],
  data: function () {
    return {
      input: "",
      books: [],
      loading: false,
      isTyping: false,
      title: "",
    };
  },
  watch: {
    input: function () {
      this.isTyping = true;
      let self = this;
      setTimeout(function () {
        self.isTyping = false;
      }, 500);
    },
  },
  methods: {
    searchBooks: function (event) {
      this.loading = true;
      let search = this.input;
      let queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + search;
      this.$http
        .get(queryURL)
        .then((data) => {
          this.books = data.body.items;
        })
        .then(() => {
          let elems = document.querySelectorAll(".carousel");
          let instances = M.Carousel.init(elems);
          this.loading = false;
          this.results = true;
          console.log(this.results);
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
          M.toast({
            html: "Oops! Something went wrong!",
          });
        });
    },
  },
};
</script>
