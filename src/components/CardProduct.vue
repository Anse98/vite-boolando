<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <li class="col-4">
    <div class="card">
      <figure>
        <img class="front-img" :src="'/img/' + item.frontImage">
        <img class="back-img" :src="'/img/' + item.backImage">
        <div class="heart" v-if="item.isInFavorites">
          <font-awesome-icon icon="fa-solid fa-heart" />
        </div>
        <div class="heart" v-else>
          <font-awesome-icon icon="fa-regular fa-heart" />
        </div>

        <div class="label bgRed" v-for="(badge, i) in item.badges " :class="{ bgGreen: badge.value === 'Sostenibilità' }">
          {{ badge.value }}
        </div>


      </figure>
      <h4 @click="$emit('show', item)"><a href="#">{{ item.name }}</a></h4>
      <p class="brand">{{ item.brand }}</p>
      <p class="red">{{ item.price }} &euro;</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.col-4 {
  flex-basis: calc((100% / 12) * 4);
}

li {
  &.col-4 {
    margin-bottom: 30px;
    padding: 0 10px;
  }
}

figure {
  position: relative;
}

.card {
  h4 {
    font-weight: 600;
  }
}

.heart:hover {
  font-size: 30px;
  color: #FF0D0B;
}

a {
  color: black;
}

.front-img {
  position: absolute;
  inset: 0;
}

.front-img:hover {
  opacity: 0;
}

.brand {
  color: gray;
}
</style>