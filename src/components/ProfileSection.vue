<template>
  <section class="profile">
    <div class="profile-img">
      <img src="../assets/img/profile_main_cropped.jpeg" />
    </div>
    <div class="content-container">
      <h2 class="name">{{ profile.name.eng }}</h2>
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
  align-items: center;
  height: 100vh;
  padding: 0 calc((100% - #{$size-web-width}) / 2);

  @include mobile {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: {
      left: 5rem;
      right: 5rem;
    }
  }

  .profile-img {
    margin-right: 12rem;

    @include mobile {
      margin: {
        right: 0;
        bottom: 3rem;
      }
    }

    img {
      width: 24rem;
      height: 24rem;
      border-radius: 50%;

      @include mobile {
        width: 36rem;
        height: 36rem;
      }
    }
  }

  .content-container {
    padding-top: 2rem;

    @include mobile {
      font-size: 8px;
      text-align: center;
    }

    .name {
      font: {
        weight: 500;
        size: 3.2em;
      }
      color: $color-gray-900;
      margin-bottom: 2rem;
    }

    .content-item {
      font: {
        weight: 300;
        size: 1.8em;
      }
      color: $color-gray-600;
      margin-bottom: 1rem;

      &.sns {
        display: flex;
        align-items: center;
        padding-top: 2rem;

        @include mobile {
          justify-content: center;
        }

        .icon {
          width: 6rem;
          margin-right: 1.6rem;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }

          img {
            width: 100%;

            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
}
</style>
