<script>
export default {
  data() {
    return {
      cards: [
        {
          frontImg: '/img/1.webp',
          backImg: '/img/1b.webp',
          title: 'RELAXED FIT TEE UNISEX',
        },

        {
          frontImg: '/img/2.webp',
          backImg: '/img/2b.webp',
          title: 'ROSES TEE',
        },

        {
          frontImg: '/img/3.webp',
          backImg: '/img/3b.webp',
          title: 'VOGLIA DI COLORI PASTELLO'
        },

        {
          frontImg: '/img/4.webp',
          backImg: '/img/4b.webp',
          title: 'TEE UNISEX'
        },

        {
          frontImg: '/img/5.webp',
          backImg: '/img/5b.webp',
          title: 'STRIPE BODICE'
        },

        {
          frontImg: '/img/6.webp',
          backImg: '/img/6b.webp',
          title: 'MAGLIONE - BLACK'
        }
      ]
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
          <li class="col-4" v-for="(card, index) in cards" :key="index">
            <div class="card">
              <figure>
                <img class="front-img" :src=cards[index].frontImg>
                <img class="back-img" :src=cards[index].backImg>
                <div class="heart">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div class="label bg-red">
                  -50%
                </div>
                <div class="label bg-green">
                  Sostenibilità
                </div>
              </figure>
              <p class="gray">
                Levi's
              </p>
              <h4><a href="">{{ cards[index].title }}</a></h4>
              <p class="red">14,99 &euro; <span class="gray reduced"> 29,99 &euro;</span></p>
            </div>
          </li>
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
}
</style>