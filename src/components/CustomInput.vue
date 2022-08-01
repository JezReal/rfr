<script setup lang="ts">
import { ref, computed } from "@vue/reactivity";

const emit = defineEmits(["inputUpdate"]);
const props = defineProps<{
  inputStyle: string;
  type: string;
  placeholder?: string;
  validation: { required: boolean };
  label: string;
  labelStyle: string;
  id: string;
}>();

const value = ref("");
const errorMessage = computed(() => validate(value.value));
const isValid = computed(() => validate(value.value).length === 0);

function input($event: Event | null) {
  emit("inputUpdate", {
    id: props.id,
    value: ($event?.target as HTMLInputElement).value,
    valid: isValid,
  });
}

function validate(value: string) {
  if (props.validation.required && value.length == 0) {
    return "*This field is required";
  }

  return "";
}
</script>

<template>
  <p :class="props.labelStyle">{{ props.label }}</p>
  <input
    :class="props.inputStyle"
    :type="props.type"
    :placeholder="props.placeholder"
    @input="input"
    v-model="value"
  />
  <span class="text-sm text-red-600">{{ errorMessage }}</span>
</template>

<style scoped>
.animate {
  transition: 0.3s;
}
</style>
