<script setup>
import { ref, onMounted } from 'vue'
import produtosApi from '@/api/produtos'

const produtos = ref([])

onMounted(async () => {
  await carregarProdutos()
})

const carregarProdutos = async () => {
  const data = await produtosApi.buscarTodosAsTrufas()
  produtos.value = data
}

const deletarProduto = async (id) => {
  // Adicione aqui a lógica para confirmar a exclusão com o usuário
  const confirmacao = window.confirm("Tem certeza que deseja deletar este produto?")

  if (confirmacao) {
    // Chame a função de exclusão da API
    await produtosApi.excluirTrufa(id)

    // Atualize a lista de produtos após a exclusão
    await carregarProdutos()
  }
}
</script>

<template>
  <div class="row wrap">
    <div v-for="produto in produtos" :key="produto.id" class="card">
      <img :src="produto.imagem?.url" :alt="produto.nome" />
      <div class="produto-detail">
        <h3>{{ produto.nome }}</h3>
        <div class="produto-year-rating">
          <p>{{ produto.preco }}</p>
        </div>
        <p>{{ produto.categoria }}</p>
        <button @click="deletarProduto(produto)">Deletar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos permanecem os mesmos */
</style>


<style scoped>
.card {
  width: 200px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.produto-detail p {
  margin: 0;
}

.produto-year-rating {
  display: flex;
  column-gap: 2rem;
}

.produto-detail h3 {
  margin: 0;
  font-size: 1.2rem;
}
</style>