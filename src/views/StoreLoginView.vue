<script setup lang="ts">
import { computed, ref } from "vue";
import CustomInput from "../components/CustomInput.vue";

const email = ref({
  id: "",
  value: "",
  valid: false,
});
const password = ref({
  id: "",
  value: "",
  valid: false,
});

const loginButtonDisabled = computed(
  () => !email.value.valid || !password.value.valid
);

function saySike() {
  alert(`Email: ${email.value.value} Password: ${password.value.value}`);
}

function foo(form_item: { id: string; value: string; valid: boolean }) {
  if (form_item.id === "email") {
    email.value = form_item;
  } else if (form_item.id === "password") {
    password.value = form_item;
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
          <CustomInput
            id="email"
            input-style="block p-3 border-solid border-2 rounded-md border-gray-400 focus:border-indigo-500 outline-none animate"
            type="email"
            placeholder="you@example.com"
            :validation="{ required: true }"
            @input-update="foo"
            label="Email Address"
            label-style="text-lg"
          />

          <CustomInput
            id="password"
            input-style="block p-3 border-solid border-2 rounded-md border-gray-400 focus:border-indigo-500 outline-none animate"
            type="email"
            placeholder="you@example.com"
            :validation="{ required: true }"
            @input-update="foo"
            label="Password"
            label-style="text-lg"
          />
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
