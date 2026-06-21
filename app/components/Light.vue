<script setup lang="ts">
const props = defineProps<{
  id: number;
  name: string;
  isOn: boolean;
}>();

// This replaces BOTH modelValue + update:modelValue
const checked = defineModel<boolean>();
</script>

<template>
  <div>
    <input type="checkbox" v-model="checked" />
    name: {{ name }} | on: {{ isOn }}
  </div>
</template>
