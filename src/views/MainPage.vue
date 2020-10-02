<template>
  <div id="main-page">
    <main-section :eng-name="profile.name.eng" :github-url="urls.github"></main-section>
    <profile-section :profile="profile" :urls="urls"></profile-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Profile, Urls } from '@/types.d.ts'
import MainSection from '@/components/MainSection.vue'
import ProfileSection from '@/components/ProfileSection.vue'

export default defineComponent({
  components: {
    MainSection,
    ProfileSection,
  },
  computed: {
    profile(): Profile {
      return useStore().state.profile
    },
    urls(): Urls {
      return useStore().state.urls
    },
  },
})
</script>

<style lang="scss" scoped></style>
