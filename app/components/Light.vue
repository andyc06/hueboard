<script setup lang="ts">
const props = defineProps<{
  id: number;
  name: string;
  isOn: boolean;
}>();

const checked = defineModel<boolean>();
</script>

<template>
  <input type="checkbox" v-model="checked" />
  <div>name: {{ name }} | on: {{ isOn }}</div>
</template>
