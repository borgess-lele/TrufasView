<template>
  <div class="welcome-page">
    <div class="background-image"></div>
    <div class="content">
      <h1>Bem Vindo ao Nosso Estoque !!!</h1>
    </div>
  </div>
</template>

<style scoped>
.welcome-page {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  background-image: url('https://www.academiaassai.com.br/sites/default/files/trufas_capa.jpg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(8px);
}

.content {
  position: absolute;
  top: 30%; /* Altere esta linha para ajustar a posição vertical */
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #000000;
  z-index: 1;
}

h1 {
  font-size: 36px;
  margin: 10px 0;
}

p {
  font-size: 18px;
}
</style>
