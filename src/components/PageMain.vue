<script>
import CardProduct from './CardProduct.vue';
import { store } from '../store.js';

export default {
  components: {
    CardProduct,
  },

  data() {
    return {
      store: store,
    }
  },

}
</script>


<template>
  <main>
    <div class="main-content">
      <div class="container">
        <ul>
          <!-- CARDS -->
          <CardProduct v-for="(card) in store.products" :item="card" />
        </ul>
      </div>
    </div>
  </main>
</template>


<style scoped lang="scss">
main {
  .container {
    position: relative;
    padding-top: 50px;
  }
}
</style>