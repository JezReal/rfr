<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-row h-1/6 shadow-2xl shadow-orange-700 justify-around items-center text-sm px-10"
  >
    <router-link class="flex flex-col items-center" to="/pos">
      <span class="material-symbols-outlined mb-1">receipt_long</span>
      <span>POS</span>
    </router-link>
    <router-link class="flex flex-col items-center" to="/">
      <span class="material-symbols-outlined mb-1">inventory</span>
      <span>Inventory</span>
    </router-link>
    <router-link class="flex flex-col items-center" to="/pricelist">
      <span class="material-symbols-outlined mb-1">price_check</span>
      <span>Pricelist</span>
    </router-link>
  </div>
</template>

<style scoped>
.router-link-active {
  color: blue;
}
</style>
