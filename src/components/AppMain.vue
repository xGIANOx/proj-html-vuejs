<script>
export default {
    name: "AppMain",
}
</script>

<template>

    <section id="universal_experience">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-5 mt_3 me-5">
                    <p class="fw-light">
                        <strong class="fw-bold">HAC TELLUS, FELIS RISUS AT</strong> mattis mattis. Eget lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam neque atque nesciunt, consectetur dolor a, ipsum laborum quae, minima optio quia corporis aperiam molestiae odio voluptates rem expedita repudiandae impedit.
                    </p>

                    <h2 class="my-5 ">
                        FOOD IS OUR COMMON GROUND, A UNIVERSAL EXPERIENCE.
                    </h2>

                    <p>
                        Debitis laudantium iure sit dolor aut cum quae voluptatibus distinctio dolorum ut magni consequuntur, dolorem delectus eum.
                        Tempora commodi earum expedita, quasi maxime blanditiis ex ad nesciunt dignissimos viverra dui.
                    </p>

                    <img src="../assets/img/signature.jpg" alt="" class="signature">
                </div>

                <div class="col-5 experience_right mt-5 ms-5 position-relative california_rolls">
                    <div class="product position-absolute text-white">
                        CALIFORNIA ROLLS - $22
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
    h2{
        font-size: 2.3rem;
        width: 80%;
    }
    .experience_right{
        background-image: url("../assets/img/info22x.jpg");
        background-size: cover;
        height: 700px;
    }
    .mt_3{
        margin-top: 6rem; 
    }
    .signature{
        width: 200px;
        margin-top: 3rem;
    }
    .product{
        bottom: 1%;
        left: 50%;
        transform: translateX(-50%);
    }
    .california_rolls:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }


</style>