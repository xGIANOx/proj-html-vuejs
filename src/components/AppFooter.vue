<script>
import { footer_icons } from "../assets/data/footerIcons"
export default{
    name:"AppFooter",
    data() {
        return {
            footer_icons,
        }
    }
}
</script>

<template>

    <footer class="position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <img src="../assets/img/logo-restaurant-2x-400x77.png" alt="">
                </div>
            </div>
        </div>
        <p>
            Quam eu proin massa condimentum. Volutpat non pulvinar alliquet nune. Quam eu proin sit massa condimentum.
        </p>
        <ul class="d-flex justify-content-center">
            <li v-for="icon in footer_icons" class="text-black mx-2">
                <a href="#"><font-awesome-icon :icon="`fa-brands fa-${icon.icon}`"/></a>
            </li>
        </ul>
        <div class="copyright">
            Copyright 2023 Avada | All Rights Reserved | Powered by <strong>Enrico Gian</strong> | <strong>Boolean</strong>
        </div>
    </footer>

</template>

<style lang="scss" scoped>

    footer{
        background-image: url("../assets/img/footer2x.jpg");
        background-size: cover;
        height: 600px;
    }
    ul{
        list-style: none;
        margin-top: 3rem;
    }
    li{
        background-color: white;
        padding: 0.5rem;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        margin-top: 10rem;
        margin-bottom: 3rem;
        width: 300px;
    }
    p{
        text-align: center;
        color: white;
        width: 30%;
        margin: auto;
    }
    .copyright{
        position: absolute;
        bottom: 0;
        color: rgb(149, 149, 149);
        font-size: 0.75rem;
        font-style: italic;
        text-align: center;
        width: 100%;
        background-color: black;
        padding: 1.5rem;
    }
    a{
        text-decoration: none;
        color: black;
    }
</style>