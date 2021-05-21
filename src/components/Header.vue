<template>
  <header class="header--above header">
    <div class="container">
      <div class="header__inner">
        <!-- logo-->
        <router-link :to="{ name: 'Home' }">
          <a class="logo logo--primary">
            <h2 class="heading__name">LepitReads</h2>
          </a>
        </router-link>

        <!-- primary navigation-->
        <div class="d-none d-lg-block">
          <nav class="nav nav--primary">
            <!-- ~ navigation item-->
            <div class="nav__item">
              <router-link :to="{ name: 'Home' }">
                <a class="nav__link">Home</a>
              </router-link>
            </div>
            <div class="nav__item" v-if="user">
              <div class="nav__item">
                <router-link :to="{ name: 'Profile' }">
                  <a class="nav__link">Profile</a>
                </router-link>
              </div>
              <div class="nav__item">
                <a class="nav__link" @click="handleClick">Logout</a>
              </div>
            </div>
            <div class="nav__item" v-else>
              <div class="nav__item">
                <router-link :to="{ name: 'Login' }">
                  <a class="nav__link">Login</a>
                </router-link>
              </div>
              <div class="nav__item">
                <router-link :to="{ name: 'Signup' }">
                  <a class="nav__link">Signup</a>
                </router-link>
              </div>
            </div>
          </nav>
        </div>
        <!-- header controls-->
        <div class="controls">
          <!-- ~ burger menu toogle-->
          <div class="icon-holder">
            <a class="switch" data-target=".sidebar">
              <svg class="icon icon--regular" width="32" height="32">
                <use xlink:href="#icon-burger"></use>
              </svg>
              <div class="icon-state">
                <svg class="icon icon--regular" width="32" height="32">
                  <use xlink:href="#icon-burger"></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <aside class="sidebar">
      <div class="sidebar__wrapper">
        <!-- sidebar controls-->
        <div class="sidebar__controls">
          <!-- ~ search toggle-->
          <a
            class="search-toggle--nested search-toggle switch"
            data-target=".search"
            data-related=".sidebar"
          >
            <svg class="icon icon--regular" width="32" height="32">
              <use xlink:href="#icon-search"></use></svg
            >Find Book
          </a>
          <!-- ~ close sidebar button-->
          <a class="close icon-holder" data-target=".sidebar">
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
        <div class="sidebar__inner">
          <!-- primary menu layout for responsive purpose-->
          <div class="sidebar__section">
            <div class="d-block d-lg-none">
              <nav class="nav nav--primary">
                <!-- ~ navigation item-->
                <div class="nav__item">
                  <router-link :to="{ name: 'Home' }">
                    <a class="nav__link">Home</a>
                  </router-link>
                </div>
                <div v-if="user">
                  <div class="nav__item">
                    <router-link :to="{ name: 'Profile' }">
                      <a class="nav__link">Profile</a>
                    </router-link>
                  </div>
                  <div class="nav__item">
                    <a class="nav__link" @click="handleClick">Logout</a>
                  </div>
                </div>
                <div v-else>
                  <div class="nav__item">
                    <router-link :to="{ name: 'Login' }">
                      <a class="nav__link">Login</a>
                    </router-link>
                  </div>
                  <div class="nav__item">
                    <router-link :to="{ name: 'Signup' }">
                      <a class="nav__link">Signup</a>
                    </router-link>
                  </div>
                </div>

                <!-- ~ navigation item-->
              </nav>
            </div>
          </div>
          <!-- sidebar widget: categories-->
          <!-- <div class="sidebar__section">
            <nav class="categories categories--small">
              <div class="category category--count">
                <a class="category__name" href="#">Liquid</a
                ><span class="category__number">34</span>
              </div>
              <div class="category category--count">
                <a class="category__name" href="#">Drinks</a
                ><span class="category__number">12</span>
              </div>
              <div class="category category--count">
                <a class="category__name" href="#">Authentic</a
                ><span class="category__number">256</span>
              </div>
              <div class="category category--count">
                <a class="category__name" href="#">Cocktails</a
                ><span class="category__number">9</span>
              </div>
              <div class="category category--count">
                <a class="category__name" href="#">Colorful</a
                ><span class="category__number">144</span>
              </div>
            </nav>
          </div> -->
          <!-- sidebar widget: latest/popular articles-->
          <!-- <div class="sidebar__section">
            <div class="js-tabs">
         
              <ul class="js-tablist" data-hx="h2">
                <li class="js-tablist__item">
                  <a class="js-tablist__link" href="#popular-posts">Popular</a>
                </li>
                <li class="js-tablist__item">
                  <a class="js-tablist__link" href="#recent-posts">Recent</a>
                </li>
              </ul>
       
              <div class="js-tabcontent" id="popular-posts">
                <div class="post-list">
              
                  <div class="card card--post-tiny d-flex align-items-center">
        
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="#">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-2-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
           
                    <a class="card__name" href="#"
                      >Fast, delicious and easily prepared beverages to go</a
                    >
                  </div>
           
                  <div class="card card--post-tiny d-flex align-items-center">
                
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="#">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-4-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
         
                    <a class="card__name" href="#"
                      >Perfect beverages to boost your day and increase
                      productivity</a
                    >
                  </div>
         
                  <div class="card card--post-tiny d-flex align-items-center">
              
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="#">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-3-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
           
                    <a class="card__name" href="#"
                      >Special mood beverages: summer refreshing non-alcoholic
                      drinks</a
                    >
                  </div>
                </div>
              </div>
       
              <div class="js-tabcontent" id="recent-posts">
                <div class="post-list">
              
                  <div class="card card--post-tiny d-flex align-items-center">
          
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="#">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-4-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
              
                    <a class="card__name" href="#"
                      >Perfect beverages to boost your day and increase
                      productivity</a
                    >
                  </div>
               
                  <div class="card card--post-tiny d-flex align-items-center">
                 
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="#">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-3-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                
                    <a class="card__name" href="#"
                      >Special mood beverages: summer refreshing non-alcoholic
                      drinks</a
                    >
                  </div>
                 
                  <div class="card card--post-tiny d-flex align-items-center">
                  
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="#">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-2-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
            
                    <a class="card__name" href="#"
                      >Fast, delicious and easily prepared beverages to go</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- sidebar widget: tags-->
          <!-- <div class="sidebar__section">
            <div class="tags">
              <a class="tag" href="#">#Regular</a>
              <a class="tag" href="#">#Spicy</a>
              <a class="tag" href="#">#Liquid</a>
              <a class="tag" href="#">#ModernLook</a>
              <a class="tag" href="#">#BlackAndWhite</a>
              <a class="tag" href="#">#Eco</a>
              <a class="tag" href="#">#Smile</a>
              <a class="tag" href="#">#TopRating</a>
            </div>
          </div> -->
        </div>
      </div>
    </aside>
    <div class="overlay"></div>
  </header>
</template>

<script>
import useLogout from "@/composables/useLogout.js";
import getUser from "@/composables/getUser.js";
import { useRouter } from "vue-router";

export default {
  name: "Header",

  setup() {
    const { logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("current user logged out");
      router.push({ name: "Login" });
    };

    return { handleClick, user };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
a:visited {
  color: black;
}

.nav__link {
  cursor: pointer;
}
</style>
