<script setup lang="ts">
import { computed, watch } from "vue";
import Light from "./components/Light.vue";

const { status, data } = await useFetch("/api/light");

// Create a new deeply reactive array
const lights = ref([]);

watchEffect(() => {
  if (!data.value) return;

  // Replace with a fresh reactive array
  lights.value = data.value.map((light) => ({
    ...light,
    name: light.name ?? "",
    isOn: light.isOn ?? false,
    checked: false,
  }));
});

const checkedItems = computed(() =>
  (lights.value ?? []).filter((i) => i.checked).map((i) => i.id),
);
</script>

<template>
  <h1>hueboard</h1>
  <div v-if="status === 'pending'">Loading lights...</div>
  <div v-else-if="status === 'error'">Error loading lights</div>

  <div v-else>
    <h3>lights:</h3>
    <Light
      v-for="light in lights"
      :key="light.id"
      :id="light.id"
      :name="light.name"
      :isOn="light.isOn"
      v-model="light.checked"
    />
    <div>
      <h3>tray:</h3>
      {{ checkedItems }}
    </div>
  </div>
</template>
