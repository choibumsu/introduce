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
  }

  mounted() {
    setTimeout(() => {
      this.isLoad = true
    }, 50)
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
        flex-direction: column;
        position: relative;
        width: 100%;

        .title {
          transition: ease-in-out $title-duration;
          position: absolute;
          top: -11rem;
          opacity: 1;
          width: 100%;

          font: {
            size: 8rem;
            weight: 400;
          }
          color: $color-gray-900;
          text-align: center;
          line-height: 9rem;
          margin-bottom: 2rem;

          &.before-load {
            top: 8rem;
            opacity: 0;
          }
        }

        .description {
          transition: ease 1.2s;
          transition-delay: $title-duration;
          font: {
            size: 3rem;
            weight: 300;
          }
          color: $color-main;
          text-align: center;

          &.before-load {
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>
