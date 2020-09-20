<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './assets/scss/package';
@import './assets/scss/base';
@import './assets/scss/reset';
</style>
