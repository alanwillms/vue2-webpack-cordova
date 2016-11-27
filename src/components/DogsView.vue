<template>
  <div>
    <h1>Cachorros</h1>

    <!-- Para cada "dog" em "this.dogs"  -->
    <!-- Cria componente <dog-card /> -->
    <!-- Passa um atributo "dog" para ele -->
    <dog-card v-for="dog in dogs" :nome="dog.nome" :raca="dog.raca"></dog-card>
  </div>
</template>

<script>
import DogCard from './DogCard'

export default {
  components: {
    DogCard
  },
  data () {
    return {
      dogs: [
        { nome: 'Totó', raca: 'Guaipeca' },
        { nome: 'Beethoven', raca: 'São Bernardo' },
        { nome: 'Mr Peackles', raca: 'Border Collie' }
      ]
    }
  }
}
</script>
