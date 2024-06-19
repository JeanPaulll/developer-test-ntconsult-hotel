<template>
  <header>
    <h1>Titulo: </h1>
  </header>
</template>

<script lang="ts">
import { Vue, Component, toNative } from 'vue-facing-decorator'

@Component({})
class HeaderComponent extends Vue {}
export default toNative(HeaderComponent)
</script>

<style scoped>
header {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
}
</style>
