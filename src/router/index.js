import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/LoginArea')
  },
  {
    path: '/listagem-produtos',
    name: 'Listagem dos Produtos',
    component: () => import('@/pages/ListagemProdutos')
  },
  {
    path: '/visao-geral-produto',
    name: 'Visão Geral do Produto',
    component: () => import('@/pages/VisaoGeralProduto')
  },
  {
    path: '/inserir-produto',
    name: 'Inserir Produto',
    component: () => import('@/pages/InserirProduto')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
