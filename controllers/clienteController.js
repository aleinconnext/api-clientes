import { cadastrarCliente, consultarClientes, atualizarCliente, deletarCliente } from '../services/clienteService.js';

class ClienteController {
  static cadastrar(req, res) {
    const cliente = req.body;

    if (!cliente.cpf_cnpj || !cliente.nome || !cliente.telefone || !cliente.cep || !cliente.logradouro || !cliente.bairro || !cliente.localidade || !cliente.uf || !cliente.estado) {
      return res.status(400).json({ error: 'Campos obrigatórios estão faltando. Verifique CPF/CNPJ, Nome, Telefone, CEP, Logradouro, Bairro, Cidade, UF e Estado.' });
    }

    cadastrarCliente(cliente, (err, id) => {
      if (err) return res.status(400).json({ error: err.message });

      res.status(200).json({ id, message: 'Cliente cadastrado com sucesso' });
    });
  }

  static consultar(req, res) {
    const filtros = req.query;

    consultarClientes(filtros, (err, rows) => {
      if (err) return res.status(400).json({ error: err.message });

      if (rows.length === 0) {
        return res.status(404).json({ message: 'Nenhum cliente foi encontrado' });
      }

      res.status(200).json(rows);
    });
  }

  static atualizar(req, res) {
    const { id } = req.params;
    const cliente = req.body;

    if (cliente.cpf_cnpj) {
      delete cliente.cpf_cnpj; 
    }

    if (
      !cliente.nome &&
      !cliente.telefone &&
      !cliente.cep &&
      !cliente.logradouro &&
      !cliente.complemento &&
      !cliente.unidade &&
      !cliente.bairro &&
      !cliente.localidade &&
      !cliente.uf &&
      !cliente.estado &&
      !cliente.regiao &&
      !cliente.ibge &&
      !cliente.ddd &&
      !cliente.siafi &&
      !cliente.observacoes
    ) {
      return res.status(400).json({ error: 'Pelo menos um campo deve ser fornecido para atualização' });
    }

    atualizarCliente(id, cliente, (err, changes) => {
      if (err) return res.status(400).json({ error: err.message });

      if (changes === 0) {
        return res.status(404).json({ message: 'O Cliente que você está procurando não encontrado.' });
      }

      res.status(200).json({ message: 'Cadastro do Cliente atualizado com sucesso' });
    });
  }

  static deletar(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'O ID do cliente é obrigatório para exclusão' });
    }

    deletarCliente(id, (err, changes) => {
      if (err) return res.status(400).json({ error: err.message });

      if (changes === 0) {
        return res.status(404).json({ message: 'Cliente não encontrado para exclusão' });
      }

      res.status(200).json({ message: 'Cliente excluído com sucesso' });
    });
  }
}

export default ClienteController;
