<script>
export default{
    name:"SponsoredMenu"
}
</script>

<template>
<div class="sponsored_menu">
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="hero_text ms-5 text-white">
                    
                    <div class="plate_name d-flex justify-content-between">
                        <h1>BRAISED<br>ABALONE</h1>
                        <div class="price mt-2">$52</div>
                    </div>
                    <div class="dash mt-5 mb-4"></div>
                    <p class="hero_p mb-5">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <button type="button" class="btn btn-outline-light rounded-0 px-4">VIEW IN THE MENU</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<style lang="scss" scoped>
    .col-4{
        background-color: black;
        margin-left: 10rem;
        padding: 6rem 2rem;
        
        
    }
    .sponsored_menu{
        margin-top: 10rem;
        background-image: url("../assets/img/hero42x.jpg");
        background-size: cover;
        height: 700px;
        display: flex;
        align-items: center;
        
    }
    .dash{
        height: 1px;
        width: 50px;
        background-color: white; 
    }
    button{
        font-size: 0.85rem;
    }
    p{
        color: rgb(201, 201, 201);
    }
</style>