<template>
  <div>
    <header class="menu">
      <router-link class="menu-item" :to="{ name: 'home' }"> Home </router-link> 
      <router-link class="menu-item" to="/enderecos"> Endereços </router-link>
      <router-link class="menu-item" to="/usuarios"> Usuários</router-link>
      <router-link class="menu-item" to="/categorias"> Categorias</router-link>
      <router-link class="menu-item" to="/carrinhos"> Carrinhos </router-link>
      <router-link class="menu-item" to="/produtos"> Produtos </router-link>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.menu {
  background-color: #836FFF;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  color: #fff;
}

.menu-item {
  text-decoration: none;
  color: #fdfdfd;
  font-weight: bold;
  margin: 0 10px;
}

.menu-item:hover {
  text-decoration: underline;
}
</style>
