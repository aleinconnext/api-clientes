
# Cadastro de Clientes - Backend

Este é o backend do projeto **Cadastro de Clientes**, desenvolvido com **Node.js** e banco de dados **MySQL**, fornecendo a API para operações de CRUD (Create, Read, Update, Delete).

## 🚀 Funcionalidades
- **Cadastro de clientes**: Garante a integridade dos dados com validações.
- **Consulta de clientes**: Busca com filtros como CPF/CNPJ, nome e CEP.
- **Atualização e exclusão**: Permite gerenciar os registros existentes.
- **Documentação Swagger**: Facilita a integração com o frontend.

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criação da API REST.
- **MySQL**: Banco de dados relacional.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Swagger**: Documentação interativa da API.

## 📦 Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/aleinconnext/api-clientes.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd api-clientes
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=clientes
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```
6. A API estará disponível em:
   ```
   http://localhost:3000
   ```

## 🌐 Demonstração
O backend está publicado e pode ser acessado em:  
[https://api-clientes-olive.vercel.app](https://api-clientes-olive.vercel.app)

## 📖 Endpoints da API
A documentação completa está disponível em:  
`/api-docs` via Swagger.

- **POST /clientes**: Cadastrar um cliente.
- **GET /clientes**: Consultar clientes.
- **PUT /clientes/:id**: Atualizar cliente.
- **DELETE /clientes/:id**: Excluir cliente.

## 📜 Licença
Este projeto é licenciado sob a MIT License.
