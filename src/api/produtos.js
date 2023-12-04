// import axios from 'axios';
import api from "../plugins/api";

class TrufaApi {
  async buscarTodosAsTrufas() {
    const response = await api.get("trufas/");
    return response.data;

    // const { data } = await axios.get('/produto/');
    // return data;
  }
  async adicionarTrufa(trufa, image) {
    let response;
    trufa.capa_attachment_key = image.attachment_key
    if (trufa.id) {
      response = await api.put(`/trufas/${trufa.id}/`, trufa);
    } else {
      response = await api.post("/trufas/", trufa);
    }
    // const { data } = await axios.post('/produto/', produto);
    return response;
  }
  // async atualizarProduto(produto) {
  //   const { data } = await axios.put(`/produto/${produto.id}/`, produto);
  //   return data;
  // }
  async excluirTrufa(trufa) {
    const response = await api.delete(`/trufas/${trufa.id}/`);
    return response.data;
  }
}

export default new TrufaApi();
