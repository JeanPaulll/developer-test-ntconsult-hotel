<template>
  <header>
    <h1>Titulo: {{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  props: {
    title: {
      type: String,
      default: 'Default Title',
    },
  },
})
export default class HeaderComponent extends Vue {}
</script>

<style scoped>
header {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
}
</style>
