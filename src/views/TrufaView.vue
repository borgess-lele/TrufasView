<script>

import TrufasApi from "@/api/trufas";
const trufasApi = new TrufasApi();

import UsuariosApi from "@/api/usuarios";
const usuariosApi = new UsuariosApi();

import ProdutosApi from "@/api/produtos";
const produtosApi = new ProdutosApi();

import EnderecosApi from "@/api/enderecos";
const enderecosApi = new EnderecosApi();

export default {
  data() {
    return {
      trufas: [],
      trufa: {},
      usuarios: [],
      usuario: {},
      produtos: [],
      produto: {},
      enderecos: [],
      endereco: {},
    };
  },
  async created() {
    this.trufas = await trufasApi.buscarTodasAsTrufas();
    this.usuarios = await usuariosApi.buscarTodosOsUsuarios();
    this.produtos = await produtosApi.buscarTodosOsProdutos();
    this.enderecos = await enderecosApi.buscarTodosOsEnderecos();
  },
  methods: {
    async salvar() {
      if (this.trufa.id) {
        await trufasApi.atualizarTrufa(this.trufa);
      } else {
        await trufasApi.adicionarTrufa(this.trufa);
      }
      this.trufa = {};
      this.trufas = await trufasApi.buscarTodasAsTrufas();
    },
    editar(trufa) {
      Object.assign(this.trufa, trufa);
    },
    async excluir(trufa) {
      await trufasApi.excluirTrufa(trufa.id);
      this.trufas = await trufasApi.buscarTodasAsTrufas();
    },
  },
};
</script>

<template>
  <h1>trufa</h1>
  <hr />
  <div class="form">
    <select v-model="trufa.usuario">
      <option value="">Selecione um usuario</option>
      <option v-for="usuario of usuarios" :key="usuario.id" :value="usuario.id">
        {{ usuario.nome }}
      </option>
    </select>
    <select v-model="trufa.produto">
      <option value="">Selecione um produto</option>
      <option v-for="produto of produtos" :key="produto.id" :value="produto.id">
        {{ produto.nome }}
      </option>
    </select>
    <select v-model="trufa.endereco">
      <option value="">Selecione um endereco</option>
      <option v-for="endereco of enderecos" :key="endereco.id" :value="endereco.id">
        {{ endereco.cep }}
      </option>
    </select>
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="trufa in trufas" :key="trufa.id">
      <span @click="editar(trufa)">
        <li>
          ID: {{ trufa.id }}
        </li>
        <li>
          Número: {{ trufa.numero }}
        </li>
        <li>
          Complemento: {{ trufa.complemento }} 
        </li>
        <li>
          Rua: {{ trufa.rua }} 
        </li>
        <li>
          Bairro: {{ trufa.bairro }}
        </li>
        <li>
          Cidade: {{ trufa.cidade }}
        </li>
        <li>
          Cep :{{ trufa.cep }}
        </li>
        <hr>
        <li>
          testes: {{ trufa.id }} - {{ trufa.usuario }} - {{ trufa.produto }}
        </li>
      </span>
      <button @click="excluir(trufa)">X</button>
    </li>
  </ul>
</template>

<style></style>
