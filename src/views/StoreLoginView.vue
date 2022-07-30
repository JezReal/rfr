<script setup lang="ts">
import { ref } from "vue";

let email = ref();
let password = ref();

function saySike() {
  alert(`Email: ${email.value} Password: ${password.value}`);
}
</script>

<template>
  <div class="flex flex-col justify-center h-screen items-center">
    <div
      class="flex flex-col flex-start w-2/5 h-4/5 rounded-xl shadow-md shadow-gray-500 p-12"
    >
      <div class="flex flex-col justify-start items-center h-full">
        <div class="w-full mb-20">
          <h3 class="text-4xl text-left mb-4">Login</h3>

          <p>Login as store</p>
        </div>
        <div class="flex flex-col justify-evenly h-28 mb-20 w-full">
          <p class="text-lg">Email Address</p>
          <input
            class="block p-3 border-solid border-2 rounded-md mb-6 border-gray-400 focus:border-indigo-500 transition-colors outline-none animate"
            type="email"
            placeholder="you@example.com"
            v-model="email"
            required
          />

          <p class="text-lg">Password</p>
          <input
            class="block p-3 border-solid border-2 rounded-md border-gray-400 focus:border-indigo-500 outline-none animate"
            type="password"
            placeholder="Enter your password"
            v-model="password"
            required
          />
        </div>

        <div class="w-full">
          <button
            class="bg-indigo-600 w-full rounded-md text-neutral-100 text-xl h-12"
            v-on:click="saySike"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate {
  transition: 0.3s;
}
</style>
