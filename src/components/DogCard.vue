<template>
  <div class="mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">{{ nome }}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenan convallis.
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        {{ raca }}
      </a>
    </div>
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
.mdl-card
  margin-bottom: 1em
  width: 90%
  height: 120px

  .mdl-card__title
    color: #fff
    background: #46B6AC
</style>
