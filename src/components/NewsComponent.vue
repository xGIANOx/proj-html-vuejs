<script>
export default{
    name:"NewsComponent"
}
</script>

<template>

  <h3 class="fw-lighter text-center"> <em>Latest news & promotions</em> </h3>  
  <div class="dash m-auto"></div>

  <div class="container mt-5">
    <div class="row justify-content-between">
        <div class="col-4 left">
        </div>
        <div class="col-4 center ">

        </div>
        <div class="col-4 right">

        </div>
    </div>
    <div class="row justify-content-between">
        <div class="col-4 text-center mt-4">
            <h4>THE BEST COFFEE IN TOWN</h4>
            <p>By admin | January 7th 2020 | Categories: News</p>
        </div>
        <div class="col-4 text-center mt-4">
            <h4>DISCOVER OUR NEW MENU</h4>
            <p>By admin | January 7th 2020 | Categories: News</p>
        </div>
        <div class="col-4 text-center mt-4">
            <h4>WE NOW ACCEPT SQUARE!</h4>
            <p>By admin | January 7th 2020 | Categories: News</p>
        </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
    h3{
        font-size: 2.5rem;
        margin-top: 5rem;
        margin-bottom: 3rem;
    }
    h4{
        font-size: 1.25rem;
    }
    .left{
        background-image: url("../assets/img/blog92x-800x916.jpg");
        background-size: cover;
        height: 600px;
    }
    .center{
        background-image: url("../assets/img/blog72x-800x916.jpg");
        background-size: cover;
        height: 600px;

    }
    .right{
        background-image: url("../assets/img/blog82x-600x687.jpg");
        background-size: cover;
        height: 600px;

    }
    .col-4{
        width: 32%;
    }
    p{
        font-size: 0.75rem;
        font-weight: lighter;
    }
    .dash{
        height: 1px;
        width: 80px;
        background-color: rgb(215, 214, 214);
        margin-bottom: 4rem;
       
    }
</style>