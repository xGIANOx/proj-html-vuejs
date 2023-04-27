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
                <p class="m-0 ms-4 p-0 punch">FINE DINING EXPEWRIENCE</p>
            </div>
            <h1>THE BEST TABLE IN <br> TOWN</h1>
            <p class="hero_p">
                Avada (/a’va:da/,うま味) can be translated from Japanese as Deliciousness. It is also known as the fifth flavor after Sweet, Salty, Bitter, and Sour. Avada is a rich and savory deliciousness that evokes a sensory and emotional experience of taste, harmony, and satisfaction.
            </p>
            <button type="button" class="btn btn-outline-light rounded-0 px-4">EXPLORE THE MENU</button>
          </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>

    .container_xl{
        margin-top: 7rem;
    }
    .col-7{
        background-image: url("../assets/img/slider32x.jpg");
        height: 750px;
        background-size: cover;
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