<template>
  <div class="login-page">
    <Header />
    <form
      class="form login-form"
      id="contact-form"
      @submit.prevent="handleSubmit"
    >
      <fieldset class="login-title">
        <h3 class="form__heading">
          <div class="heading-bold">
            Log In
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
          <!-- <div class="col-md-3 col-lg-2">
            <small class="form__input-desctiption"
              >please enter your password</small
            >
          </div> -->
        </div>
      </fieldset>
      <fieldset class="form__action login-button">
        <button v-if="!isPending" class="btn btn--primary" type="submit">
          Log In
        </button>
        <button
          v-if="isPending"
          class="btn btn--secondary isPendingButton"
          disabled
        >
          Loading
        </button>
      </fieldset>
      <div class="col-md-8 col-lg-6" v-if="error">
        <small class="form__input-desctiption">
          e-mail or password is wrong</small
        >
      </div>
      <div class="col-md-8 col-lg-6" v-if="user">
        <small class="form__input-desctiption">
          You have logged in</small
        >
      </div>
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import useLogin from "@/composables/useLogin.js";
import { ref } from "vue";
import getUser from "@/composables/getUser.js";
import { useRouter } from "vue-router";


export default {
  name: "Login",
  components: {
    Header,
  },
  setup() {
    const { error, login, isPending } = useLogin();

    const email = ref("");
    const password = ref("");
    const { user } = getUser();
    const router = useRouter()

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("logged in");
        router.push({ name: 'Profile' });
      } else {
        console.log("login error");
      }
    };
    return { email, password, handleSubmit, error, isPending, user };
  },
};
</script>

<style scoped>
.login-title {
  padding-top: 20px;
}

.heading-bold {
  font-weight: 1000;
  color: #4ab0f0;
  font-size: 2rem;
  padding-bottom: 10px;
}

.login-form {
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
  .login-form {
    padding-left: 25px;
  }
  .form__input-label {
    width: 180px;
  }
  .login-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form__input {
    padding-left: 0;
  }
}

@media screen and (max-width: 520px) {
  .login-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 50px;
  }
}
</style>
