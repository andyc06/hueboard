<script setup lang="ts">
const { status, data: lights } = await useFetch("/api/lights");
</script>
<template>
  <h1>hueboard</h1>
  <h3>light list</h3>
  <div>
    <div v-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">Error loading posts</div>
    <div v-else>
      <div v-for="light in lights">
        name: {{ light.name }} | on: {{ light.isOn }}
      </div>
    </div>
  </div>
</template>
