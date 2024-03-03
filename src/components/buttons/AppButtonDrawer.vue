<script setup>
  defineEmits(['toggle-sidebar'])
</script>

<template>
  <q-btn color="black" @click="$emit('toggle-sidebar')" label="open" />
</template>

<style scoped>
</style>