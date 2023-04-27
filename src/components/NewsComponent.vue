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
        <div class="col-4 left position-relative">
            <div class="card_text text-center mt-4 position-absolute">
                <h4>THE BEST COFFEE IN TOWN</h4>
                <p>By admin | January 7th 2020 | Categories: News</p>
            </div>
            <div class="hidden_text text-white text-center">
                <font-awesome-icon icon="link" class=""/>
                <h5 class="mt-2">THE BEST COFFEE IN TOWN</h5>
                <p class="fw-light"><em>News</em></p>
            </div>
        </div>
        <div class="col-4 center position-relative">
            <div class="card_text text-center mt-4 position-absolute">
                <h4>DISCOVER OUR NEW MENU</h4>
                <p>By admin | January 7th 2020 | Categories: News</p>
            </div>
            <div class="hidden_text text-white text-center">
                <font-awesome-icon icon="link" class=""/>
                <h5 class="mt-2">DISCOVER OUR NEW MENU</h5>
                <p class="fw-light"><em>News</em></p>
            </div>
        </div>
        <div class="col-4 right position-relative">
            <div class="card_text text-center mt-4 position-absolute">
                <h4>WE NOW ACCEPT SQUARE!</h4>
                <p>By admin | January 7th 2020 | Categories: News</p>
            </div>
            <div class="hidden_text text-white text-center">
                <font-awesome-icon icon="link" class=""/>
                <h5 class="mt-2">WE NOW ACCEPT SQUARE!</h5>
                <p class="fw-light"><em>News</em></p>
            </div>
        </div>
    </div>
    
  </div>

</template>


<style lang="scss" scoped>
.hidden_text{
    display: none;
}
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
    .left:hover,
    .center:hover,
    .right:hover{
        height: 700px;
        box-shadow: inset 50px 250px 350px 150px rgba(0,0,0,0.75);
        .card_text{
            display: none;
        }
        .hidden_text{
            display: inline-block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }
    }

    .card_text{
        left: 50%;
        bottom: -120px;
        transform: translateX(-50%);
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