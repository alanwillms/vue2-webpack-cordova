<template>
  <div class="hello">
    <h2>Menu</h2>
    <ul>
      <li><router-link :to=" { name: 'root' }">Home</router-link></li>
      <li><router-link :to=" { name: 'dogs' }">Cães</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
