
<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import productsJson from '/db.json';
import axios from 'axios';
import { store } from './store.js';


export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },

  data() {
    return {
      store: store,
      products: productsJson.products,
      productsUrl: 'http://localhost:3000/products',
    }
  },

  created() {
    axios.get(this.productsUrl).then(res => {
      const products = res.data;
      this.store.products = products;
    })
  }
}


</script>


<template>
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>


<style lang="scss">
@use './styles/general.scss';
</style>
