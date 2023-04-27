<script>
export default{
    name:"CriticsComponent",
    data(){
        return{
            stars: 5,
        }
    }
    
}
</script>

<template>

<h3 class="fw-lighter text-center mb-5"> <em>What critics are saying about us</em> </h3>

<div class="container mb-5">
    <div class="row">
        <div class="col-6 left">

        </div>

        <div class="col-6 right">
            <div class="container_small">
                <div class="critic_card">
                    <div class="critic">
                    MEGGY STEWART
                </div>
                <h2 class="mt-4">NEW YORK TIMES</h2>
                <div class="stars mt-5">
                    <svg v-for="star in stars" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="ms-1 me-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div class="dash"></div>
                <p class="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum voluptatibus quia nisi harum. Laudantium vero harum quo quidem facilis placeat ipsum.
                </p>

                <p>
                    Ex itaque veniam vero? Dolorem aliquam earum nobis numquam quo corporis temporibus qui.
                </p>
                <button type="button" class="btn btn-outline-light rounded-0 px-4 mt-5">READ FULL ARTICLE</button>
                </div>
            </div>
        </div>
    </div>

    <div class="row d-flex justify-content-between mt-5">
        <div class="col-6 guardian">
            <div class="container_small mt-5">
                <div class="critic_card">
                    <div class="critic">
                    MARY MAXEY
                </div>
                <h2 class="mt-4">THE GUARDIAN</h2>
                <div class="stars mt-5">
                    <svg v-for="star in stars" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="ms-1 me-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div class="dash"></div>
                <p class="mt-5">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                </p>
                <button type="button" class="btn btn-outline-light rounded-0 px-4 mt-5">READ FULL ARTICLE</button>
            </div>
            </div>
        </div>

        <div class="col-6 globe">
            <div class="container_small mt-5">
                <div class="critic_card">
                    <div class="critic">
                    PATRICK MONROE
                </div>
                <h2 class="mt-4">GLOBE AND MAIL</h2>
                <div class="stars mt-5">
                    <svg v-for="star in stars" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="ms-1 me-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div class="dash"></div>
                <p class="mt-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi.
                </p>
                <button type="button" class="btn btn-outline-light rounded-0 px-4 mt-5">READ FULL ARTICLE</button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
    h3{
        font-size: 2.5rem;
        margin-top: 5rem;
    }

    .left{
        background-image: url("../assets/img/blog72x-800x916.jpg");
        height: 756px;
        background-size: contain;
        background-repeat: no-repeat;
        
    }
    .right{
        background-color: black;
        
    }
    .right:hover,
    .guardian:hover,
    .globe:hover{
        transform: scaleY(1.05);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }
    .container{
        margin-top: 4rem;
    }
    .container_small{
        width: 70%;
        margin: auto;
        margin-top: 7rem;
        color: white;
    }
    .critic{
        color: rgb(179, 179, 179);

    }
    .dash{
        height: 1px;
        width: 80px;
        background-color: rgb(179, 179, 179);
        margin-top: 3rem; 
       
    }
    button{
        font-size: 0.85rem
    }
    .guardian{
        background-image: url("../assets/img/info52x.jpg");
        background-size: cover;
        height: 650px;
        width: 48%;
        box-shadow: inset 50px 250px 350px 150px rgba(0,0,0,0.92);
    }
    .globe{
        background-image: url("../assets/img/info12x.jpg");
        background-size: cover;
        width: 48%;
        box-shadow: inset 50px 250px 350px 150px rgba(0,0,0,0.92);

    }
    .stars{
        margin-left: -5px;
    }
</style>