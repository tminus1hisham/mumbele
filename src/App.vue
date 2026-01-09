<script setup lang="ts">
import Footer from './components/footer.vue';
import Navbar from './components/navbar.vue';



</script>

<template>  
  <v-app>
    <Navbar/>
      <v-main>
        <RouterView />
      </v-main>
    
  </v-app>
</template>
