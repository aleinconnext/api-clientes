import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configuração do pool de conexões com o banco de dados MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log('Conectado ao pool de conexões do banco de dados MySQL.');

// Criação da tabela "clientes" caso ela não exista
async function criarTabela() {
  const query = `
    CREATE TABLE IF NOT EXISTS clientes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      cpf_cnpj VARCHAR(20) NOT NULL UNIQUE,
      nome VARCHAR(255) NOT NULL,
      telefone VARCHAR(20) NOT NULL,
      cep VARCHAR(10) NOT NULL,
      logradouro VARCHAR(255) NOT NULL,
      complemento VARCHAR(255),
      unidade VARCHAR(50),
      bairro VARCHAR(100) NOT NULL,
      localidade VARCHAR(100) NOT NULL,
      uf VARCHAR(2) NOT NULL,
      estado VARCHAR(100) NOT NULL,
      regiao VARCHAR(100),
      ibge VARCHAR(20),
      ddd VARCHAR(10),
      siafi VARCHAR(20),
      observacoes TEXT
    )
  `;

  try {
    const connection = await pool.getConnection(); // Obter uma conexão do pool
    await connection.execute(query);
    connection.release(); // Liberar a conexão de volta ao pool
    console.log('Tabela "clientes" criada/verificada com sucesso.');
  } catch (error) {
    console.error('Erro ao criar/verificar a tabela "clientes":', error.message);
  }
}

// Função para inicializar o banco
async function inicializarBanco() {
  await criarTabela();
}

inicializarBanco();

export default pool;
