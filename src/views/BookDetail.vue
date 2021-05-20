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
                  <a class="card__meta-value" :href="bookLink">Buy this book</a>
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
        <div
          class="row content-section content-section--static"
          v-if="requireAuth"
        >
          <div class="col-md-3">
            <!-- content heading-->
            <h2 class="page-segment heading-section">
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
            </h2>
          </div>
          <div class="col-md-9 content-section__body">
            <!-- review item call to actions-->
            <div class="reference">
              <div
                class="reference__item d-lg-flex align-items-lg-center justify-content-lg-between"
              >
                <span class="reference__label">Add to favorites</span>
                <button class="flex-shrink-0 reference__btn" @click="handleFav">
                  Add
                </button>
                <svg class="icon icon--regular" width="32" height="32">
                  <use xlink:href="#icon-arrow"></use>
                </svg>
              </div>
              <div
                class="reference__item d-lg-flex align-items-lg-center justify-content-lg-between"
              >
                <span class="reference__label">Add to i want to read</span>
                <button
                  class="flex-shrink-0 reference__btn"
                  @click="handleWillRead"
                >
                  Add
                </button>
                <svg class="icon icon--regular" width="32" height="32">
                  <use xlink:href="#icon-arrow"></use>
                </svg>
              </div>
              <div
                class="reference__item d-lg-flex align-items-lg-center justify-content-lg-between"
              >
                <span class="reference__label">Add to a alread read</span>
                <button
                  class="flex-shrink-0 reference__btn"
                  @click="handleRead"
                >
                  Add
                </button>
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
import { projectAuth } from "../firebase/config";
import { ref, reactive } from "vue";
import useCollection from "@/composables/useCollection.js";
import getUser from "@/composables/getUser.js";
import { timestamp } from "@/firebase/config";
import createBookList from "@/firebase/config";

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

  setup(props) {
    const { user } = getUser();
    const { error, addDoc } = useCollection("books");
    const isPending = ref(false);

    const handleRead = async () => {
      isPending.value = true;
      await addDoc({
        title: props.bookTitle,
        author: props.bookAuthor,
        userId: user.value.uid,
        userName: user.value.displayName,
        isFav: false,
        isRead: true,
        isWillRead: false,
        createdAt: timestamp(),
      });
      isPending.value = false;
      if (!error.value) {
        console.log("book read added");
      } else {
        console.log("error");
      }
    };

    const handleFav = async () => {
      isPending.value = true;
      await addDoc({
        title: props.bookTitle,
        author: props.bookAuthor,
        userId: user.value.uid,
        userName: user.value.displayName,
        isFav: true,
        isRead: false,
        isWillRead: false,
        createdAt: timestamp(),
      });
      isPending.value = false;
      if (!error.value) {
        console.log("book read added");
      } else {
        console.log("error");
      }
    };

    const handleWillRead = async () => {
      isPending.value = true;
      await addDoc({
        title: props.bookTitle,
        author: props.bookAuthor,
        userId: user.value.uid,
        userName: user.value.displayName,
        isFav: false,
        isRead: false,
        isWillRead: true,
        createdAt: timestamp(),
      });
      isPending.value = false;
      if (!error.value) {
        console.log("book read added");
      } else {
        console.log("error");
      }
    };

    return { handleFav, handleWillRead, handleRead, isPending };
  },
  computed: {
    requireAuth() {
      let user = projectAuth.currentUser;
      if (!user) {
        // console.log("dont show");
        return false;
      } else {
        // console.log("show");
        return true;
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 94px;
}
</style>
