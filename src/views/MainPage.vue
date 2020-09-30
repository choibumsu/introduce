<template>
  <div id="main-page">
    <section class="main">
      <div class="title-wrapper">
        <h1 class="title" :class="{ 'before-load': !isLoad }">
          <a :href="urls.github" target="blank">{{ profile.name.eng }}</a>
        </h1>
        <p class="description" :class="{ 'before-load': !isLoad }">Frontend Developer</p>
      </div>
    </section>
    <profile-section :name="profile.name" v-bind="urls"></profile-section>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileSection from '@/components/ProfileSection.vue'

export default defineComponent({
  components: {
    ProfileSection,
  },
  data() {
    return {
      isLoad: false,
      profile: {
        name: {
          kor: '최범수',
          eng: 'Choi Bumsu',
        },
        email: 'bumsu0211@gmail.com',
        phone: '010-7408-0064',
      },
      urls: {
        github: 'https://github.com/choibumsu',
        instagram: 'https://www.instagram.com/bbamsu211/?hl=ko',
        facebook: 'https://www.facebook.com/bum0211',
      },
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
  }
}
</style>
