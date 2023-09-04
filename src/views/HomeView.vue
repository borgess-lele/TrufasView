<script setup>
// import TheWelcome from "../components/TheWelcome.vue";

import NavBar from "@/components/NavBar.vue";
import CarouselComp from "@/components/CarouselComp.vue";
import { RouterLink } from "vue-router";
import { RouterView } from "vue-router";
</script>

<template>
  <CarouselComp />

  <div class="container text-light" id="produto">
    <h2>Adicionar Produtos</h2>
  </div>

  <div class="container">
    <div class="row">
      <div class="columns">
        <img src="https://www.giromt.com.br/wp-content/uploads/2021/09/trufass.jpg" alt="combos" class="combos" />
        <RouterLink to="/combo">Combos</RouterLink>
      </div>
      <div class="columns">
        <img src="https://img.cybercook.com.br/imagens/receitas/517/trufas-sem-lactose.jpg" alt="lactose"
          class="lactose" />
        <RouterLink to="/sem lactose">Sem Lactose</RouterLink>
      </div>
      <div class="columns">
        <img src="https://blog.agenciadosite.com.br/wp-content/uploads/2017/02/logo-para-trufas.jpg" alt="sabores"
          class="sabores" />
        <RouterLink to="/sabores">Sabores</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  justify-content: center;
  align-content: space-around;
}

.img-wrap {
  display: flex;
  flex-direction: column;
  width: 5%;
}

.wrap {
  flex-wrap: wrap;
}

.columns {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.combos {
  width: 113%;
}

.lactose {

  width: 100%;
}

.sabores {
  width: 110%;
}
</style>

