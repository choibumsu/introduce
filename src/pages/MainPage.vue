<template>
  <div id="main-page">
    <section class="main">
      <div class="title-wrapper">
        <h1 class="title">
          <a :href="urls.github" target="blank">{{ name.eng }}</a>
        </h1>
        <p class="description">Frontend Developer</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class MainPage extends Vue {
  name = {
    kor: '최범수',
    eng: 'Choi Bumsu',
  }
  urls = {
    github: 'https://github.com/choibumsu',
  }

  mounted() {
    setTimeout(() => {
      const $title = this.$el.querySelector('.title')
      $title.style.top = '-10rem'
    }, 100)
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
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        width: 100%;

        .title {
          transition: 0.5s;
          position: absolute;
          top: 9rem;
          width: 100%;
          color: $color-gray-900;
          font: {
            size: 8rem;
            weight: 400;
          }
          text-align: center;
          line-height: 9rem;
          margin-bottom: 2rem;
        }

        .description {
          color: $color-main;
          font: {
            size: 3rem;
            weight: 300;
          }
          text-align: center;
        }
      }
    }
  }
}
</style>
