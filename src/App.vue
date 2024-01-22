<script setup>
  import SidebarView from './components/sidebar/AppSidebar.vue'
</script>

<template>
  <div class="row window-height window-width">
    <SidebarView />
    <main class="col-md-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
</style>
