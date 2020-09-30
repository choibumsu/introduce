<template>
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
        <a :href="github" class="icon" target="blank">
          <img src="../assets/img/github.svg" />
        </a>
        <a :href="instagram" class="icon" target="blank">
          <img src="../assets/img/instagram.svg" />
        </a>
        <a :href="facebook" class="icon" target="blank">
          <img src="../assets/img/facebook.svg" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: Object,
    github: String,
    instagram: String,
    facebook: String,
  },
})
</script>

<style lang="scss">
@import '../assets/scss/package';

.profile {
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
</style>
