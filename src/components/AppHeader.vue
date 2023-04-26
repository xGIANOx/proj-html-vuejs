<script>
export default {
    name: "AppHeader",
}
</script>

<template>
<header>
    <div class="container_xl">
      <div class="row">

        <div class="col-5 bg-black">
          <img src="../assets/img/logo-restaurant.png" alt="" class="ms-5 mt-3">
        </div>

        <div class="col-7">
          <ul class="mt_center">
            <li>
              <a href="#" class="text-decoration-none text-white">Home</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </header>
  
</template>


<style lang="scss" scoped>
.col-7{
  background-image: url('../assets/img/slider52x.jpg');
  background-size: cover;
  background-position: -10px;
  height: 800px;
}
.mt_center{
  margin-top: 37px;
}
ul{
  list-style: none;
}
</style>