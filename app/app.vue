<script setup lang="ts">
import { useLightsStore } from "../stores/lights";
import Light from "./components/Light.vue";

const store = useLightsStore();

await store.loadLights();
</script>

<template>
  <h1>hueboard</h1>

  <div>
    <h3>lights:</h3>
    <Light
      v-for="light in store.lights"
      :key="light.id"
      :id="light.id"
      :name="light.name"
      :isOn="light.isOn"
      v-model="light.checked"
    />
    <div>
      <h3>tray:</h3>
      {{ store.checkedItems }}
      <h3>actions:</h3>
      <div><i>placeholder for lighting controls</i></div>
      <br />
      <button>GO</button>
    </div>
  </div>
</template>
