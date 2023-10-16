import axios from 'axios';
export default class TrufasApi {
  async buscarTodasAsTrufas() {
    const { data } = await axios.get('/trufa/');
    return data;
  }
  async adicionarTrufa(trufa) {
    const { data } = await axios.post('/trufa/', trufa);
    return data;
  }
  async atualizarTrufa(trufa) {
    const { data } = await axios.put(`/trufa/${trufa.id}/`, trufa);
    return data;
  }
  async excluirTrufa(id) {
    const { data } = await axios.delete(`/trufa/${id}/`);
    return data;
  }
}
