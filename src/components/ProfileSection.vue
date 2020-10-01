<template>
  <section class="profile">
    <div class="profile-img">
      <img src="../assets/img/profile_main_cropped.jpeg" />
    </div>
    <div class="content-container">
      <h2 class="name">{{ profile.name.eng }} ({{ profile.name.kor }})</h2>
      <div class="content-item">
        <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
      </div>
      <div class="content-item">
        <a :href="'tel:' + numPhone">{{ profile.phone }}</a>
      </div>
      <div class="content-item sns">
        <a :href="urls.github" class="icon" target="blank">
          <img src="../assets/img/github.svg" />
        </a>
        <a :href="urls.instagram" class="icon" target="blank">
          <img src="../assets/img/instagram.svg" />
        </a>
        <a :href="urls.facebook" class="icon" target="blank">
          <img src="../assets/img/facebook.svg" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Profile, Urls } from '@/types.d.ts'

export default defineComponent({
  props: {
    profile: {
      type: Object as PropType<Profile>,
      required: true,
      validator(profile: Profile) {
        return !!profile.phone
      },
    },
    urls: Object as PropType<Urls>,
  },
  computed: {
    numPhone(): string {
      return this.profile.phone.replace(/-/gi, '')
    },
  },
})
</script>

<style lang="scss" scoped>
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

    @include mobile {
      margin-right: 5rem;
    }

    img {
      width: 24rem;
      height: 24rem;
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
        weight: 300;
        size: 1.8rem;
      }
      color: $color-gray-600;
      margin-bottom: 1rem;

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
