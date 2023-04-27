<script>
import UniversalExperience from './UniversalExperience.vue'
import HeroComponent from './HeroComponent.vue'
import CriticsComponent from './CriticsComponent.vue'
import SponsoredPlate from './SponsoredPlate.vue'
import TakeoutComponent from './TakeoutComponent.vue'





export default {
    name: "AppMain",
    components : {
        UniversalExperience,
        HeroComponent,
        CriticsComponent,
        SponsoredPlate,
        TakeoutComponent,
    }
}
</script>

<template>

    <UniversalExperience></UniversalExperience>
    <HeroComponent></HeroComponent>
    <CriticsComponent></CriticsComponent>
    <SponsoredPlate></SponsoredPlate>
    <TakeoutComponent></TakeoutComponent>

</template>

<style scoped lang="scss">
    

</style>