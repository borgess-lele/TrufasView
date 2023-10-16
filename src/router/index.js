import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import EnderecoView from '../views/EnderecoView.vue';
import ProdutosView from '../views/ProdutoView.vue';
import TrufasView from '../views/TrufaView.vue';
import UsuarioView from '../views/UsuarioView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/trufas',
      name: 'trufas',
      component: TrufasView,
    },
    {
      path: '/enderecos',
      name: 'enderecos',
      component: EnderecoView,
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: ProdutosView,
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UsuarioView,
    },
  ]
})

export default router
