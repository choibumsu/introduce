<template>
  <section class="main">
    <div class="title-wrapper">
      <h1 class="title" :class="{ 'before-load': !isLoad }">
        <a :href="githubUrl" target="blank">{{ engName }}</a>
      </h1>
      <p class="description" :class="{ 'before-load': !isLoad }">Frontend Developer</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    githubUrl: String,
    engName: String,
  },
  data() {
    return {
      isLoad: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoad = true
    }, 30)
  },
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/package';

.main {
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
</style>
