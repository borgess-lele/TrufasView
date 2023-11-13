<script setup>
import { ref, reactive } from 'vue';

import ProdutoList from '@/components/ProdutoList.vue';
import Modal from '@/components/template/Modal.vue'

import TrufasApi from "@/api/produtos.js";
import imageService from "@/api/imagem.js";

const coverUrl = ref('')
const file = ref(null)
const trufasAtual = reactive({
  nome: '',
  descricao: '',
  preco: 0,
  quantidade: '',
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

async function salvar() {
  const image = await imageService.uploadImage(file.value)
  trufasAtual.cover_attachment_key = image.attachment_key
  await TrufasApi.adicionarTrufa(trufasAtual)
  Object.assign(trufasAtual, {
    id: '',
    nome: '',
    descricao: '',
    preco: 0,
    categoria: '',
    cover_attachment_key: ''
  })
  showForm.value = false
}

const showForm = ref(false)
</script>

<template>
  <h1 class="page-title">Trufas</h1>
  <button @click="showForm = true">
    Add
  </button>
  <modal :visible="showForm" @close="showForm = false">
    <template #header>
      <h1>Cadastro de Trufas</h1>
    </template>
    <template #body>
      <form>
        <div>
          <div>
            <input type="file" @change="onFileChange">
            <div>
              <img v-if="coverUrl" src="coverUrl">
            </div>
          </div>
          <div>
            <input type="text" id="nome" v-model="trufasAtual.nome" placeholder="Nome">
          </div>
          <div>
            <input type="text" id="descricao" v-model="trufasAtual.descricao" placeholder="Descrição">
          </div>
          <div>
            <input type="text" id="preco" v-model="trufasAtual.preco" placeholder="Preço">
          </div>
          <div>
            <input type="text" id="quantidade" v-model="trufasAtual.quantidade" placeholder="quantidade">
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <div>
        <button @click="showForm = false"> Cancelar </button>
        <button @click="salvar">Salvar</button>
      </div>
    </template>
  </modal>
  <ProdutoList />
</template>


<style scoped>

img {
  max-width: 100px;
}
.form {
  width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

select, button {
  width: 100%;
  padding: 5px;
}

.page-title {
  color: #000; 
}
</style>