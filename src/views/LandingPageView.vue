<template>
  <div>
    <Landing />
    <router-view />
  </div>
</template>

<script>
import Landing from "../components/Landing";
// import Landing from "@/components/Landing.vue";


export default {
    name: "LandingPageView",
    components: { Landing }
}
</script>

<style>

</style>
