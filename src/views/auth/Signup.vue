<template>
  <div class="signup-page">
    <Header />
    <form
      class="form signup-form"
      id="contact-form"
      @submit.prevent="handleSubmit"
    >
      <fieldset class="signup-title">
        <h3 class="form__heading">
          <div class="heading-bold">
            Sign Up
          </div>
          and enjoy organizing your books
        </h3>
      </fieldset>
      <fieldset class="form__group">
        <div class="row">
          <div class="col-md-3">
            <label class="form__input-label" for="contact-name">e-mail</label>
          </div>
          <div class="col-md-6 col-lg-7">
            <input
              class="form__input"
              id="contact-name"
              type="email"
              placeholder="e.g. lepitreads@gmail.com"
              v-model="email"
            />
          </div>
          <div class="col-md-3 col-lg-2" v-if="error">
            <small class="form__input-desctiption"
              >The email address is already in use by another account.</small
            >
          </div>
        </div>
      </fieldset>
      <fieldset class="form__group">
        <div class="row">
          <div class="col-md-3">
            <label class="form__input-label" for="contact-email"
              >password</label
            >
          </div>
          <div class="col-md-6 col-lg-7">
            <input
              class="form__input"
              id="contact-email"
              type="password"
              placeholder="password"
              v-model="password"
            />
          </div>
        </div>
      </fieldset>
      <fieldset class="form__group">
        <div class="row">
          <div class="col-md-3">
            <label class="form__input-label" for="contact-name"
              >display name</label
            >
          </div>
          <div class="col-md-6 col-lg-7">
            <input
              class="form__input"
              id="contact-name"
              type="text"
              placeholder="e.g. lepitreads"
              v-model="displayName"
            />
          </div>
          <!-- <div class="col-md-3 col-lg-2">
            <small class="form__input-desctiption"
              >please enter your e-mail</small
            >
          </div> -->
        </div>
      </fieldset>
      <fieldset class="form__action signup-button">
        <button v-if="!isPending" class="btn btn--primary" type="submit">
          Sign Up
        </button>
        <button
          v-if="isPending"
          class="btn btn--secondary isPendingButton"
          disabled
        >
          Loading
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import useSignup from "@/composables/useSignup.js";
import { ref } from "vue";

export default {
  name: "Signup",
  components: {
    Header,
  },
  setup() {
    const { error, signup, isPending } = useSignup();

    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("user signed up");
      }
    };
    return { email, password, displayName, handleSubmit, error, isPending };
  },
};
</script>

<style scoped>
.signup-title {
  padding-top: 20px;
}

.heading-bold {
  font-weight: 1000;
  color: #4ab0f0;
  font-size: 2rem;
  padding-bottom: 10px;
}

.signup-form {
  padding-top: 50px;
  margin: auto;
  width: 600px;
  padding-bottom: 50px;
}

.form__input-label {
  width: 180px;
  color: #4ab0f0;
  font-size: 1.6rem;
}

.form__input {
  padding-left: 50px;
}

.form__input-desctiption {
  opacity: 1;
  color: red;
}

.isPendingButton {
  width: 280px;
  max-width: 100%;
  padding-top: 0.875rem;
  padding-bottom: 0.75rem;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.875rem;
}

@media screen and (max-width: 720px) {
  .signup-form {
    padding-left: 25px;
  }
  .form__input-label {
    width: 180px;
  }
  .signup-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form__input {
    padding-left: 0;
  }
}

@media screen and (max-width: 520px) {
  .signup-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 50px;
  }
}
</style>
