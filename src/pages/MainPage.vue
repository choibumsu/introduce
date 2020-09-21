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
          transition: all $title-duration ease-in-out, color, transform 0.2s ease;
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
  }
}
</style>
