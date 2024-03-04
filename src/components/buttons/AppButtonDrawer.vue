<script setup>
  defineEmits(['toggle-sidebar'])
</script>

<template>
  <q-btn  @click="$emit('toggle-sidebar')" outline round color="primary" icon="menu" />
</template>

<style scoped>
</style>