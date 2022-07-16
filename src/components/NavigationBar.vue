<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-row h-1/6 shadow-2xl shadow-orange-700 justify-around items-center text-sm px-10"
  >
    <router-link class="flex flex-col items-center" to="/pos">
      <span class="material-symbols-outlined mb-1">receipt_long</span>
      POS
    </router-link>
    <router-link class="flex flex-col items-center" to="/">
      <span class="material-symbols-outlined mb-1">inventory</span>
      Inventory
    </router-link>
    <router-link class="flex flex-col items-center" to="/pricelist">
      <span class="material-symbols-outlined mb-1">price_check</span>
      Pricelist
    </router-link>
  </div>
</template>
