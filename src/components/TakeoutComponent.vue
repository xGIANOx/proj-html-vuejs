<script>
export default{
    name:"HeroComponent"
}
</script>
<template>

    <div class="container_xl">
        <div class="row">
            <div class="col-7">
                
            </div>

            <div class="col-5">
                <div class="hero_text ms-5 text-white">
            <div class="pre_title d-flex align-items-center">
                <div class="dash"></div>
                <p class="m-0 ms-4 p-0 punch">ENJOY YOUR MEAL AT HOME</p>
            </div>
            <h1>TAKEOUT NOW<br> AVAIABLE</h1>
            <p class="hero_p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button type="button" class="btn btn-outline-light rounded-0 px-4"><font-awesome-icon icon="car" class="me-2"/>VIEW TAKEOUT MENU</button>
          </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>

    .container_xl{
        margin-top: 13rem;

    }
    .col-7{
        background-image: url("../assets/img/slider72x-scaled.jpg");
        height: 750px;
        background-size: 100%;
        background-position: 0px -100px;
    }
    .col-5{
        background-color: black;
    }

    .hero_text{
    margin-top: 8rem;
    .punch{
        font-size: 0.75rem;
        font-weight: 500;
        color: rgb(213, 212, 212);
    }
    h1{
        margin-left: 74px;
        margin-top: 50px;
        font-size: 3rem;
    }
}
.hero_p{
    margin-left: 74px;
    margin-top: 50px;
    font-size: 0.85rem;
    color: rgb(213, 212, 212);

}
.dash{
   height: 1px;
   width: 50px;
   background-color: white; 
}
button{
    margin-left: 74px;
    margin-top: 50px;
    font-size: 0.75rem;
}
</style>