<template>
  <div>
    <header class="menu">
      <router-link class="menu-item" :to="{ name: 'home' }"> Home </router-link> 
      <router-link class="menu-item" to="/trufas"> Trufas </router-link>
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
  color: #000000;
}

.menu-item {
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  margin: 0 10px;
}

.menu-item:hover {
  text-decoration: underline;
}
</style>
