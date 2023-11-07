<script>

</script>


<template>
  <footer>
    <section class="section-1">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h4>Boolando s.r.l</h4>
            <ul>
              <li><a href="">Informazioni legali</a></li>
              <li><a href="">Informativa sulla privacy</a></li>
              <li><a href="">Diritto di recesso</a></li>
            </ul>
          </div>
          <div class="col-6">
            <h5>Trovaci anche su</h5>
            <ul class="socials">
              <li><a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
              <li><a href=""><font-awesome-icon icon="fa-brands fa-facebook" /></a></li>
              <li><a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
              <li><a href=""><font-awesome-icon icon="fa-brands fa-square-pinterest" /></a></li>
              <li><a href=""><font-awesome-icon icon="fa-brands fa-youtube" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section-2">
      <div>

      </div>
    </section>
  </footer>
</template>


<style scoped lang="scss">
footer {
  min-height: 150px;
  background-color: #1A1A1A;
  color: white;
  padding: 0 12px;

  .container {
    padding-top: 30px;
  }

  ul {
    gap: 10px;
    margin-top: 10px;
  }

  .row {
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    text-align: center;
  }

  .socials {
    a {
      background-color: white;
      padding: 3px;
      color: #1A1A1A;
    }
  }

  .section-1 {
    min-height: 120px;
    border-bottom: #92958F solid 2px;
  }

  .section-2 {
    min-height: 150px;
  }
}
</style>