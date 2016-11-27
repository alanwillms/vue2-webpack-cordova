<template>
  <div>
    <h3>{{ nome }}</h3>
    <p>{{ raca }}</p>
  </div>
</template>

<script>
export default {
  props: {
    nome: String,
    raca: String
  }
}
</script>

<!-- Lang quer dizer o tipo de pré-processador usado (SASS) -->
<!-- Scoped quer dizer que os estilos aplicado aqui não vão "vazar" pra outros elementos -->
<style lang="sass" scoped>
div
  border: 1px solid #999
  padding: 1em
  margin-bottom: 1em

  h3
    color: blue
    margin-top: 0

  p
    color: #999
    margin-bottom: 0
</style>
