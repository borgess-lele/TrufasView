<script>
import UsuariosApi from "@/api/usuarios";
const usuariosApi = new UsuariosApi();
import EnderecosApi from "@/api/enderecos";
const enderecosApi = new EnderecosApi();

export default {
  data() {
    return {
      usuarios: [],
      usuario: {},
      enderecos: [],
      endereco: {},
    };
  },
  async created() {
    this.usuarios = await usuariosApi.buscarTodosOsUsuarios();
    this.enderecos = await enderecosApi.buscarTodosOsEnderecos();
  },
  methods: {
    async salvar() {
      if (this.usuario.id) {
        await usuariosApi.atualizarUsuario(this.usuario);
      } else {
        await usuariosApi.adicionarUsuario(this.usuario);
      }
      this.usuario = {};
      this.usuarios = await usuariosApi.buscarTodosOsUsuarios();
    },
    editar(usuario) {
      Object.assign(this.usuario, usuario);
    },
    async excluir(usuario) {
      await usuariosApi.excluirUsuario(usuario.id);
      this.usuarios = await usuariosApi.buscarTodosOsUsuarios();
    },
  },
};
</script>

<template>
  <h1 class="page-title">Usuários</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="usuario.nome" placeholder="Nome" />
    <input type="text" v-model="usuario.email" placeholder="Email" />
    <input type="text" v-model="usuario.telefone" placeholder="Telefone" />
    <input type="text" v-model="usuario.senha" placeholder="Senha" />
    
    <select v-model="usuario.endereco_padrao">
      <option value="">Selecione um endereço</option>
      <option v-for="endereco of enderecos" :key="endereco.id" :value="endereco.id">
        {{ endereco.cep }}
      </option>
    </select>
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="usuario in usuarios" :key="usuario.id">
      <span @click="editar(usuario)">
        <li>
          Id: {{ usuario.id }} 
        </li>
        <li>
          Nome: {{ usuario.nome }} 
        </li>
        <li>
          Email: {{ usuario.email }} <button @click="excluir(usuario)">X</button>
        </li>
        <li>  
          Telefone: {{ usuario.telefone }} 
        </li>
        <li>
          Cep: {{ usuario.endereco_padrao }} 
        </li>
      </span>
      <hr>
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




