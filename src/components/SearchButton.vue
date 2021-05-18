<template>
  <div>
    <form class="search__form" id="search-form" v-on:submit.prevent>
      <fieldset>
        <input
          class="search__input"
          type="search"
          name="search"
          placeholder="Find Book..."
          autocomplete="on"
          autocapitalize="off"
          spellcheck="false"
          id="search-field"
          :value="userInput"
          @input="valueChange"
          @clear="clearInput"
          @keyup.enter="submitValue"

        />
        <label class="search__input-desctiption" for="search-field"
          >Please, type a book you want find</label
        >
      </fieldset>

      <button
        class="close icon-holder"
        data-target=".search"
        type="submit"
        @click="submitValue(); scroll();"
      >
        <svg class="icon icon--regular3">
          <use xlink:href="#icon-search"></use>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchButton",
  props: ["userInput"],
  data: function () {
    return {
      input: "",
    };
  },
  methods: {
    valueChange: function (event) {
      this.input = event.target.value;
      this.$emit("changedValue", this.input);
    },
    submitValue: function (event) {
      if (this.input == "") {
        console.log("nothing to search");
        return;
      } else {
        this.$emit("submitValue");
        this.input = "";
      }
    },
    clearInput: function (event) {
      this.input = "";
      this.$emit("inputCleared", this.input);
    },
    scroll() {
      const element = document.getElementById("bookresults");
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style></style>
