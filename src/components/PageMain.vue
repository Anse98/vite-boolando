<script>
import CardProduct from './CardProduct.vue';
import productCards from '../db.json';
export default {
  components: {
    CardProduct,
  },

  data() {
    return {
      cards: productCards.products
    }
  },

  created() {
    console.log(this.cards)
  }
}
</script>


<template>
  <main>
    <div class="main-content">
      <div class="container">
        <ul>
          <!-- CARDS -->
          <CardProduct v-for="(card) in cards" :item="card" />
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