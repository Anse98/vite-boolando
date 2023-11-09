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
      modalOpen: false,
      selectedItem: {},
    }
  },

  methods: {
    showModel(item) {
      this.modalOpen = true;
      this.selectedItem = item;
    },
    closeModal() {
      this.modalOpen = false;
    }
  }

}
</script>


<template>
  <main>
    <div class="main-content">
      <div class="container">
        <ul>
          <!-- CARDS -->
          <CardProduct v-for="(card) in store.products" :item="card" @show="showModel" />
        </ul>
      </div>
    </div>
    <!-- MODAL -->
    <div class="wrapper" v-if="modalOpen">
      <div class="modal">
        <div class="modal-content">
          <h4>{{ selectedItem.name }}</h4>
          <span class="close-icon" @click="closeModal()"><font-awesome-icon icon="fa-regular fa-circle-xmark" /></span>
        </div>

        <div class="brand">
          <p>Marca: {{ selectedItem.brand }}</p>
        </div>

        <div class="price">
          <p>Prezzo articolo: {{ selectedItem.price }} &euro;</p>
        </div>
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

  .wrapper::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 90;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 300px;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba($color: #000000, $alpha: .6);
    z-index: 100;

    .modal-content {
      display: flex;
      justify-content: space-between;

      .close-icon {
        cursor: pointer;
      }
    }

    .brand {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    p {
      padding-bottom: 10px;
      border-bottom: 1px solid lightgray;
    }
  }
}
</style>