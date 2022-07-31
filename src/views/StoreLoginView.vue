<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";

let email = ref("");
let password = ref("");
let emailErrorMessage = computed(() => validateEmail());
let passwordErrorMessage = computed(() => validatePassword());
let loginButtonDisabled = computed(
  () => email.value.length === 0 || password.value.length === 0
);

function saySike() {
  alert(`Email: ${email.value} Password: ${password.value}`);
}

function validateEmail() {
  if (email.value.length === 0) {
    return "*This field is required!";
  }
}

function validatePassword() {
  if (password.value.length === 0) {
    return "*This field is required";
  }
}
</script>

<template>
  <div class="flex flex-col justify-center h-screen items-center">
    <div
      class="flex flex-col flex-start w-2/5 h-5/6 rounded-xl shadow-md shadow-gray-500 p-12"
    >
      <div class="flex flex-col justify-start items-center h-full gap-5">
        <div class="w-full mb-20">
          <h3 class="text-4xl text-left mb-4">Login</h3>

          <p>Login as store</p>
        </div>
        <div class="flex flex-col justify-evenly h-28 mb-20 w-full gap-2">
          <p class="text-lg">Email Address</p>
          <input
            class="block p-3 border-solid border-2 rounded-md border-gray-400 focus:border-indigo-500 transition-colors outline-none animate"
            type="email"
            placeholder="you@example.com"
            v-model="email"
            @input="validateEmail"
          />
          <span class="text-sm text-red-600">{{ emailErrorMessage }}</span>

          <p class="text-lg">Password</p>
          <input
            class="block p-3 border-solid border-2 rounded-md border-gray-400 focus:border-indigo-500 outline-none animate"
            type="password"
            placeholder="Enter your password"
            v-model="password"
            @input="validatePassword"
          />
          <span class="text-sm text-red-600">{{ passwordErrorMessage }}</span>
        </div>

        <div class="w-full">
          <button
            class="bg-indigo-600 w-full rounded-md text-neutral-100 text-xl h-12 disabled:opacity-70"
            @click="saySike"
            :disabled="loginButtonDisabled"
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
