<script>
import { main_menu } from "../assets/data/headerNavbar.js"
export default {
    name: "AppHeader",
    data() {
        return {
            main_menu,
        }
    }
}
</script>

<template>
<header>
    <div class="container_xl">
      <div class="row">

        <div class="col-5 bg-black">
          <img src="../assets/img/logo-restaurant.png" alt="" class="ms-5 mt-3">

          <div class="hero_text ms-5 text-white">
            <div class="pre_title d-flex align-items-center">
                <div class="dash"></div>
                <p class="m-0 ms-4 p-0 punch">THE BEST TABLE IN TOWN</p>
            </div>
            <h1>FINE DINING <br> EXPERIENCE</h1>
            <p class="hero_p">
                Avada (/a’va:da/,うま味) can be translated from Japanese as Deliciousness. It is also known as the fifth flavor after Sweet, Salty, Bitter, and Sour. Avada is a rich and savory deliciousness that evokes a sensory and emotional experience of taste, harmony, and satisfaction.
            </p>
            <button type="button" class="btn btn-outline-light rounded-0 px-4">EXPLORE THE MENU</button>
          </div>
        </div>

        <div class="col-7 position-relative">
          <ul class="mt_center d-flex justify-content-center">
            <li v-for="voice in main_menu" class="ms-3 me-3 d-flex align-items-center">
              <a href="#">{{ voice.item }}</a>
              <span v-if="voice.new_badge" class="badge rounded-0 ms-2">New</span>
            </li>
            <li>
                <a href="#"> <font-awesome-icon icon="shopping-cart" class="ms-3"/> </a>
            </li>
          </ul>

          <div class="side_badges position-absolute">
            <div class="demos my-2  d-flex align-items-center justify-content-center p-1 flex-column py-2 pt-3">
                <font-awesome-icon icon="folder-tree" class="mb-1"/>
                Demos
            </div>
            <div class="price  d-flex align-items-center justify-content-center p-1 flex-column py-2">
                <div class="green_price fw-bold">
                    <div class="dollar">
                        $
                    </div>
                    39
                </div>
                <div class="sale">
                    On Sale
                </div>
            </div>
          </div>
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
  height: 740px;
}
.mt_center{
  margin-top: 37px;
}
ul{
  list-style: none;
}
a{
    color: rgb(225, 222, 222);
    text-decoration: none;
}
a:hover{
    color: white;
    text-decoration:underline;
}
.badge{
    color: rgb(225, 222, 222);
    border: 1px solid white;
    font-weight: bold;
    font-size: 0.5rem;
}

.side_badges{
    top: 15%;
    right: 13px;
    /* transform: translateX(-50%); */
}
.demos,
.sale{
    font-size: 0.65rem;
}
.dollar{
    font-size: 0.65rem;
}
.green_price{
    color: rgb(0, 194, 0);
    display: flex;
}
.demos,
.price{
    background-color: white;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

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
        font-size: 4.5rem;
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