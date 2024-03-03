<script setup>
  import { ref } from 'vue'
  import AppSidebarNote from './components/sidebar/notes/AppSidebarNote.vue'
  import AppSidebarTag from './components/sidebar/tags/AppSidebarTag.vue';
  import AppButtonDrawer from './components/buttons/AppButtonDrawer.vue';

  const drawer = ref(true);
</script>

<template>
  <q-layout
    view="lhh LpR lff"
    container
    style="height: 100vh"
  >
    <q-header class="bg-white" reveal>
      <q-toolbar class="q-pl-lg">
        <AppButtonDrawer class="absolute q-mt-lg q-ml-xs" @toggle-sidebar="drawer = !drawer" />
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>
    
    <q-drawer
    v-model="drawer"
    :width="500"
    class="row"
    >
      <AppSidebarNote />
      <AppSidebarTag />
    </q-drawer>
    
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view></router-view>
      </q-page>
    </q-page-container>
    
    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style scoped>
</style>
