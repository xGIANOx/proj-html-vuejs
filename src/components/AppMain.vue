<script>
import UniversalExperience from './UniversalExperience.vue'
import HeroComponent from './HeroComponent.vue'
import CriticsComponent from './CriticsComponent.vue'
import SponsoredPlate from './SponsoredPlate.vue'
import NewsComponent from './NewsComponent.vue'
import TakeoutComponent from './TakeoutComponent.vue'
import MenuComponent from './MenuComponent.vue'
import SponsoredMenu from './SponsoredMenu.vue'







export default {
    name: "AppMain",
    components : {
        UniversalExperience,
        HeroComponent,
        CriticsComponent,
        SponsoredPlate,
        NewsComponent,
        TakeoutComponent,
        MenuComponent,
        SponsoredMenu,
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
    <MenuComponent></MenuComponent>
    <SponsoredMenu></SponsoredMenu>

</template>

<style scoped lang="scss">
    

</style>