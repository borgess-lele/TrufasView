<script setup>
import NavBar from "@/components/NavBar.vue";
import CarouselComp from "@/components/CarouselComp.vue";
import { RouterLink } from "vue-router";
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <router-link :to="{ name: 'home' }"> Home </router-link> 
    <router-link to="/trufas"> Trufas </router-link>
    <router-link to="/enderecos"> Endereços </router-link>
    <router-link to="/produtos"> Produtos </router-link>
    <router-link to="/usuarios"> Usuários</router-link>
  </header>
  <NavBar />
  <RouterView />
  <CarouselComp />
</template>
<style>
</style>

