<template>
  <div id="main-page">
    <section class="main">
      <div class="title-wrapper">
        <h1 class="title" :class="{ 'before-load': !isLoad }">
          <a :href="urls.github" target="blank">{{ name.eng }}</a>
        </h1>
        <p class="description" :class="{ 'before-load': !isLoad }">Frontend Developer</p>
      </div>
    </section>
    <section class="profile">
      <div class="profile-img">
        <img src="../assets/img/profile_main_cropped.jpeg" />
      </div>
      <div class="content-container">
        <h2 class="name">{{ name.eng }} ({{ name.kor }})</h2>
        <div class="content-item">
          <a href="mailto:bumsu0211@gmail.com">bumsu0211@gmail.com</a>
        </div>
        <div class="content-item">
          <a href="tel:01074080064">010-7408-0064</a>
        </div>
        <div class="content-item sns">
          <a :href="urls.github" class="icon" target="blank">
            <img src="../assets/img/github.svg" />
          </a>
          <a :href="urls.instagrem" class="icon" target="blank">
            <img src="../assets/img/instagram.svg" />
          </a>
          <a :href="urls.facebook" class="icon" target="blank">
            <img src="../assets/img/facebook.svg" />
          </a>
        </div>
      </div>
    </section>

    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class MainPage extends Vue {
  isLoad = false
  name = {
    kor: '최범수',
    eng: 'Choi Bumsu',
  }
  urls = {
    github: 'https://github.com/choibumsu',
    instagram: 'https://www.instagram.com/bbamsu211/?hl=ko',
    facebook: 'https://www.facebook.com/bum0211',
  }

  mounted() {
    setTimeout(() => {
      this.isLoad = true
    }, 30)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/package';

#main-page {
  section {
    &.main {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      background-color: $color-gray-50;

      .title-wrapper {
        $title-duration: 0.5s;

        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;

        .title {
          transition: all $title-duration ease-in-out, color, transform 0.2s ease;
          position: absolute;
          top: -9rem;
          opacity: 1;

          font: {
            size: 8rem;
            weight: 400;
          }
          color: $color-gray-900;
          text-align: center;
          line-height: 8rem;

          &.before-load {
            top: 0rem;
            opacity: 0;
          }

          &:hover {
            color: $color-gray-700;
            transform: scale(1.03);
          }
        }

        .description {
          transition: opacity 1.2s ease $title-duration, color ease 0.5s;
          font: {
            size: 4rem;
            weight: 300;
          }
          color: $color-secondary;
          text-align: center;

          &.before-load {
            opacity: 0;
          }

          &:hover {
            color: $color-secondary-variant;
          }
        }
      }
    }

    &.profile {
      display: flex;
      align-items: start;
      padding: 8rem calc((100% - #{$size-web-width}) / 2);

      @include mobile {
        justify-content: center;
        padding: {
          left: 2;
          right: 2rem;
        }
      }

      .profile-img {
        margin-right: 12rem;

        img {
          width: 25rem;
          height: 25rem;
          border-radius: 50%;
        }
      }

      .content-container {
        padding-top: 2rem;

        .name {
          font: {
            weight: 500;
            size: 2.8rem;
          }
          color: $color-gray-900;
          margin-bottom: 2rem;
        }

        .content-item {
          font: {
            weight: 400;
            size: 1.8rem;
          }
          color: $color-gray-600;
          margin-bottom: 0.8rem;

          &.sns {
            display: flex;
            align-content: center;
            padding-top: 2rem;

            .icon {
              width: 6rem;
              margin-right: 1.6rem;
              cursor: pointer;

              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
