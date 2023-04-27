<script>
export default{
    name:"SponsoredPlate"
}
</script>

<template>

    <div class="sponsored_plate position-relative">
        <div class="plate_name position-absolute">KUNG PAO CHIKEN - $32</div>
    </div>

</template>

<style lang="scss" scoped>

    .plate_name{
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 0.85rem;
    }
    .sponsored_plate{
        box-shadow: inset 0px -35px 50px 12px #000000;
        height: 490px;
        background-image: url("../assets/img/page52x.jpg");
        background-size: cover;
    }

</style>