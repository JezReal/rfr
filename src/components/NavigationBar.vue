<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-row h-1/6 shadow-2xl shadow-orange-700 justify-around items-center text-sm px-10 py-2"
  >
    <router-link class="flex flex-col items-center p-4" to="/pos" v-wave>
      <span class="material-symbols-outlined mb-1">receipt_long</span>
      <span>POS</span>
    </router-link>
    <router-link class="flex flex-col items-center p-4" to="/inventory" v-wave>
      <span class="material-symbols-outlined mb-1">inventory</span>
      <span>Inventory</span>
    </router-link>
    <router-link class="flex flex-col items-center p-4" to="/pricelist" v-wave>
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
