<script>

</script>


<template>
  <main>
    <div class="main-content">
      <div class="container">
        <ul>
          <!-- PRIMA CARD -->
          <li class="col-4">
            <div class="card">
              <figure>
                <img class="front-img" src="/img/1.webp">
                <img class="back-img" src="/img/1b.webp">
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
              <h4><a href="">RELAXED FIT TEE UNISEX</a></h4>
              <p class="red">14,99 &euro; <span class="gray reduced"> 29,99 &euro;</span></p>
            </div>
          </li>

          <!-- SECONDA CARD -->
          <li class="col-4">
            <div class="card">
              <figure>
                <img class="front-img" src="/img/2.webp">
                <img class="back-img" src="/img/2b.webp">
                <div class="heart">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div class="label bg-red">
                  -30%
                </div>
              </figure>
              <p class="gray">
                Guess
              </p>
              <h4><a href="">ROSES TEE</a></h4>
              <p class="red">20,99 &euro; <span class="gray reduced"> 29,99 &euro;</span></p>
            </div>
          </li>
          <!-- TERZA CARD -->
          <li class="col-4">
            <div class="card">
              <figure>
                <img class="front-img" src="/img/3.webp">
                <img class="back-img" src="/img/3b.webp">
                <div class="heart">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div class="label bg-red">
                  -30%
                </div>
              </figure>
              <p class="gray">
                Come Zucchero Filato
              </p>
              <h4><a href="">VOGLIA DI COLORI PASTELLO</a></h4>
              <p class="red">129,99 &euro; <span class="gray reduced"> 184,99 &euro;</span></p>
            </div>
          </li>
          <!-- QUARTA CARD -->
          <li class="col-4">
            <div class="card">
              <figure>
                <img class="front-img" src="/img/4.webp">
                <img class="back-img" src="/img/4b.webp">
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
              <h4><a href="">TEE UNISEX</a></h4>
              <p class="red">14,99 &euro; <span class="gray reduced"> 29,99 &euro;</span></p>
            </div>
          </li>
          <!-- QUINTA CARD -->
          <li class="col-4">
            <div class="card">
              <figure>
                <img class="front-img" src="/img/5.webp">
                <img class="back-img" src="/img/5b.webp">
                <div class="heart">
                  <i class="fa-solid fa-heart"></i>
                </div>
              </figure>
              <p class="gray">
                Maya Deluxe
              </p>
              <h4><a href="">STRIPE BODICE</a></h4>
              <p class="red">99,99 &euro;</p>
            </div>
          </li>
          <!-- SESTA CARD -->
          <li class="col-4">
            <div class="card">
              <figure>
                <img class="front-img" src="/img/6.webp">
                <img class="back-img" src="/img/6b.webp">
                <div class="heart">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div class="label green-label-only">
                  Sostenibilità
                </div>
              </figure>
              <p class="gray">
                Espirit
              </p>
              <h4><a href="">MAGLIONE - BLACK</a></h4>
              <p class="red">29,99 &euro;</p>
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