<template>
  <header class="header--above header">
    <div class="container">
      <div class="header__inner">
        <!-- logo-->
        <a class="logo logo--primary">
          <h2 class="heading__name">LepitReads</h2>
        </a>

        <!-- primary navigation-->
        <div class="d-none d-lg-block">
          <nav class="nav nav--primary">
            <!-- ~ navigation item-->
            <div class="nav__item">
              <router-link :to="{ name: 'Home' }">
                <a class="nav__link">Home</a>
              </router-link>
            </div>
            <div class="nav__item">
              <router-link :to="{ name: 'About' }">
                <a class="nav__link">Books</a>
              </router-link>
            </div>
            <div class="nav__item">
              <a class="nav__link" href="index.html">Profile</a>
            </div>
          </nav>
        </div>

        <!-- header controls-->
        <div class="controls">
          <!-- ~ burger menu toogle-->
          <div class="icon-holder">
            <a class="switch" href="#" data-target=".sidebar">
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
            href="#"
            data-target=".search"
            data-related=".sidebar"
          >
            <svg class="icon icon--regular" width="32" height="32">
              <use xlink:href="#icon-search"></use></svg
            >Find Book
          </a>
          <!-- ~ close sidebar button-->
          <a class="close icon-holder" href="#" data-target=".sidebar">
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
                <!-- ~ navigation item-->
              </nav>
            </div>
          </div>
          <!-- sidebar widget: categories-->
          <div class="sidebar__section">
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
          </div>
          <!-- sidebar widget: latest/popular articles-->
          <div class="sidebar__section">
            <div class="js-tabs">
              <!-- tabs header-->
              <ul class="js-tablist" data-hx="h2">
                <li class="js-tablist__item">
                  <a class="js-tablist__link" href="#popular-posts">Popular</a>
                </li>
                <li class="js-tablist__item">
                  <a class="js-tablist__link" href="#recent-posts">Recent</a>
                </li>
              </ul>
              <!-- tabs content-->
              <div class="js-tabcontent" id="popular-posts">
                <div class="post-list">
                  <!-- tiny article preview-->
                  <div class="card card--post-tiny d-flex align-items-center">
                    <!-- ~ article media-->
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="single_post.html">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-2-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <!-- ~ article name-->
                    <a class="card__name" href="single_post.html"
                      >Fast, delicious and easily prepared beverages to go</a
                    >
                  </div>
                  <!-- tiny article preview-->
                  <div class="card card--post-tiny d-flex align-items-center">
                    <!-- ~ article media-->
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="single_post.html">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-4-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <!-- ~ article name-->
                    <a class="card__name" href="single_post.html"
                      >Perfect beverages to boost your day and increase
                      productivity</a
                    >
                  </div>
                  <!-- tiny article preview-->
                  <div class="card card--post-tiny d-flex align-items-center">
                    <!-- ~ article media-->
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="single_post.html">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-3-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <!-- ~ article name-->
                    <a class="card__name" href="single_post.html"
                      >Special mood beverages: summer refreshing non-alcoholic
                      drinks</a
                    >
                  </div>
                </div>
              </div>
              <!-- tabs content-->
              <div class="js-tabcontent" id="recent-posts">
                <div class="post-list">
                  <!-- tiny article preview-->
                  <div class="card card--post-tiny d-flex align-items-center">
                    <!-- ~ article media-->
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="single_post.html">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-4-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <!-- ~ article name-->
                    <a class="card__name" href="single_post.html"
                      >Perfect beverages to boost your day and increase
                      productivity</a
                    >
                  </div>
                  <!-- tiny article preview-->
                  <div class="card card--post-tiny d-flex align-items-center">
                    <!-- ~ article media-->
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="single_post.html">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-3-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <!-- ~ article name-->
                    <a class="card__name" href="single_post.html"
                      >Special mood beverages: summer refreshing non-alcoholic
                      drinks</a
                    >
                  </div>
                  <!-- tiny article preview-->
                  <div class="card card--post-tiny d-flex align-items-center">
                    <!-- ~ article media-->
                    <div class="media flex-shrink-0">
                      <svg class="image-placeholder" width="128" height="128">
                        <use xlink:href="#image-placeholder"></use>
                      </svg>
                      <a class="media__area" href="single_post.html">
                        <img
                          class="lazy-sidebar"
                          src="images/assets/placeholder.png"
                          data-src="images/blog/post-2-tiny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <!-- ~ article name-->
                    <a class="card__name" href="single_post.html"
                      >Fast, delicious and easily prepared beverages to go</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar widget: tags-->
          <div class="sidebar__section">
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
          </div>
        </div>
      </div>
    </aside>
    <div class="overlay"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>