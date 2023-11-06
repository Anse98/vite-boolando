<script>

</script>


<template>
  <header>
    <nav>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <ul>
              <li><a href="">Donna</a></li>
              <li><a href="">Uomo</a></li>
              <li><a href="">Bambini</a></li>
            </ul>
          </div>

          <figure class="col-4">
            <img src="/img/boolean-logo.png">
          </figure>

          <div class="col-4">
            <ul>
              <li><a href="">icon</a></li>
              <li><a href="">icon</a></li>
              <li><a href="">icon</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
header {
  background-color: #FF6900;
  color: whitesmoke;
  font-weight: 500;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;

  a:hover {
    font-size: 20px;
  }

  .container {
    padding: 10px 0;
  }

  .row {
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  figure img {
    width: 150px;
  }
}
</style>