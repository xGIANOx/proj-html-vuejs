<script>
import UniversalExperience from './UniversalExperience.vue'
import HeroComponent from './HeroComponent.vue'
import CriticsComponent from './CriticsComponent.vue'
import SponsoredPlate from './SponsoredPlate.vue'




export default {
    name: "AppMain",
    components : {
        UniversalExperience,
        HeroComponent,
        CriticsComponent,
        SponsoredPlate,
    }
}
</script>

<template>

    <UniversalExperience></UniversalExperience>
    <HeroComponent></HeroComponent>
    <CriticsComponent></CriticsComponent>
    <SponsoredPlate></SponsoredPlate>

</template>

<style scoped lang="scss">
    

</style>