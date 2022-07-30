<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <router-view> </router-view>
    <NavigationBar v-if="!$route.meta.hideNavbar"/>
  </div>
</template>

<style></style>
