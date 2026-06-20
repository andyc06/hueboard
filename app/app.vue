<script setup lang="ts">
const { data } = await useFetch("/api/hello");
</script>
<template>
  <div>
    <h1>hueboard</h1>
    <pre>{{ data }}</pre>
  </div>
</template>
