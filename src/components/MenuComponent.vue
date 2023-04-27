<script>
export default{
    name:"MenuComponent"
}
</script>

<template>

<div class="container mb-5">
    <div class="row">
        <div class="col left">
            <h3 class="mb-5">HORS D'OEUVRES</h3>
            <ul class="p-0">
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">AHI SALMON NIGIRI</h6>
                        <div class="price">$48</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">UMII MASU SALAD</h6>
                        <div class="price">$21</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">TEMAKI WITH CRAB</h6>
                        <div class="price">$32</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">CALIFORNIA ROLLS</h6>
                        <div class="price">$22</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
            </ul>
        </div>
        <div class="col center text-white">
            <h3 class="mb-5">MAIN COURSE</h3>
            <ul class="p-0">
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">BRAISED ABALONE</h6>
                        <div class="price">$52</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">TWICE COOCKED PORK</h6>
                        <div class="price">$21</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">KUN PAO CHICKEN</h6>
                        <div class="price">$32</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">CHAR SIU & SUSHIS</h6>
                        <div class="price">$48</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
            </ul>
        </div>
        <div class="col left">
            <h3 class="mb-5">DESSERTS</h3>
            <ul class="p-0">
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">CHOCCOLATE BALL CAKE</h6>
                        <div class="price">$13</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">LIME PIE WITH CRUST</h6>
                        <div class="price">$14</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">RASPBERRY CREAM CAKE</h6>
                        <div class="price">$18</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
                <li class="mb-5">
                    <div class="name_price d-flex justify-content-between">
                        <h6 class="mb-4 fw-bold">CAFE' AU LAIT</h6>
                        <div class="price">$6</div>
                    </div>
                    <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum leo interdum consectetur libero.</p>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
    ul{
        list-style: none;
    }
    .container{
        margin-top: 8rem;
    }
    .price{
        font-size: 0.85rem;
    }
    p{
        font-weight: lighter;
        margin: 0;
    }
    .left{
        background-color: rgb(225, 225, 225);
        padding: 3rem 4rem;
    }
    .left:hover{
        transform: scaleY(1.05);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    }
    .center{
        padding: 3rem 4rem;
        background-image: url("../assets/img/misc22x.jpg");
        background-size: cover;
        box-shadow: inset 50px 250px 350px 150px rgba(0,0,0,0.92);
        transform: scaleY(1.05);
    }
    .center:hover{
        transform: scaleY(1.10);
        box-shadow: inset 50px 250px 350px 150px rgba(0,0,0,0.92);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        p{
            font-weight: bold;
        }
       
    }
</style>