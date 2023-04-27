<script>
import UniversalExperience from './UniversalExperience.vue'
import HeroComponent from './HeroComponent.vue'
import CriticsComponent from './CriticsComponent.vue'
import SponsoredPlate from './SponsoredPlate.vue'
import NewsComponent from './NewsComponent.vue'
import TakeoutComponent from './TakeoutComponent.vue'





export default {
    name: "AppMain",
    components : {
        UniversalExperience,
        HeroComponent,
        CriticsComponent,
        SponsoredPlate,
        NewsComponent,
        TakeoutComponent,
    }
}
</script>

<template>

    <UniversalExperience></UniversalExperience>
    <HeroComponent></HeroComponent>
    <CriticsComponent></CriticsComponent>
    <SponsoredPlate></SponsoredPlate>
    <NewsComponent></NewsComponent>
    <TakeoutComponent></TakeoutComponent>

</template>

<style scoped lang="scss">
    

</style>