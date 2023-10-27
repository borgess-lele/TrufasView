<script>
import EnderecosApi from "@/api/enderecos";
const enderecosApi = new EnderecosApi();
export default {
  data() {
    return {
      enderecos: [],
      endereco: {},
    };
  },
  async created() {
    this.enderecos = await enderecosApi.buscarTodosOsEnderecos();
  },
  methods: {
    async salvar() {
      if (this.endereco.id) {
        await enderecosApi.atualizarEndereco(this.endereco);
      } else {
        await enderecosApi.adicionarEndereco(this.endereco);
      }
      this.endereco = {};
      this.enderecos = await enderecosApi.buscarTodosOsEnderecos();
    },
    editar(endereco) {
      Object.assign(this.endereco, endereco);
    },
    async excluir(endereco) {
      await enderecosApi.excluirEndereco(endereco.id);
      this.enderecos = await enderecosApi.buscarTodosOsEnderecos();
    },
  },
};
</script>

<template>
  <h1 class="page-title">Endereços</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="endereco.numero" placeholder="Número" />
    <input type="text" v-model="endereco.complemento" placeholder="Complemento" />
    <input type="text" v-model="endereco.cep" placeholder="Cep" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="endereco in enderecos" :key="endereco.id">
      <span @click="editar(endereco)">
        <li>
         ID: {{ endereco.id }} 
        </li>
        <li>
          Número: {{ endereco.numero }}
        </li>
        <li>
          Complemento: {{ endereco.complemento }}
        </li>
        <li>
          Cep: {{ endereco.cep }}
        </li>
      </span>
      <button @click="excluir(endereco)">X</button>
    </li>
  </ul>
</template>

<style scoped>
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

.carrinho-list {
  list-style: none;
  padding: 0;
}

.carrinho-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px 0;
}

.carrinho-info {
  flex: 1;
}

.carrinho-actions {
  display: flex;
  align-items: center;
}

.page-title {
  color: #000; 
}
</style>