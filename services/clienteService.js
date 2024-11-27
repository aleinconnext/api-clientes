import pool from "../db/database.js";

export async function cadastrarCliente(cliente, callback) {
  const {
    cpf_cnpj,
    nome,
    telefone,
    cep,
    logradouro,
    complemento,
    unidade,
    bairro,
    localidade,
    uf,
    estado,
    regiao,
    ibge,
    ddd,
    siafi,
    observacoes,
  } = cliente;

  const query = `
    INSERT INTO clientes (
      cpf_cnpj, nome, telefone, cep, logradouro, complemento, unidade, bairro,
      localidade, uf, estado, regiao, ibge, ddd, siafi, observacoes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    const [result] = await pool.execute(query, [
      cpf_cnpj,
      nome,
      telefone,
      cep,
      logradouro,
      complemento,
      unidade,
      bairro,
      localidade,
      uf,
      estado,
      regiao,
      ibge,
      ddd,
      siafi,
      observacoes,
    ]);
    callback(null, result.insertId);
  } catch (err) {
    callback(err);
  }
}

export async function consultarClientes(filtros, callback) {
  let query = `SELECT * FROM clientes WHERE 1=1`;
  const params = [];

  if (filtros.id) {
    query += ` AND id = ?`;
    params.push(filtros.id);
  }

  if (filtros.cpf_cnpj) {
    query += ` AND cpf_cnpj = ?`;
    params.push(filtros.cpf_cnpj);
  }

  if (filtros.nome) {
    query += ` AND nome LIKE ?`;
    params.push(`%${filtros.nome}%`);
  }

  if (filtros.cep) {
    query += ` AND cep = ?`;
    params.push(filtros.cep);
  }

  try {
    const [rows] = await pool.execute(query, params);
    callback(null, rows);
  } catch (err) {
    callback(err);
  }
}

export async function atualizarCliente(id, cliente, callback) {
  const {
    nome,
    telefone,
    cep,
    logradouro,
    complemento,
    unidade,
    bairro,
    localidade,
    uf,
    estado,
    regiao,
    ibge,
    ddd,
    siafi,
    observacoes,
  } = cliente;

  const query = `
    UPDATE clientes
    SET
      nome = ?, telefone = ?, cep = ?, logradouro = ?, complemento = ?,
      unidade = ?, bairro = ?, localidade = ?, uf = ?, estado = ?,
      regiao = ?, ibge = ?, ddd = ?, siafi = ?, observacoes = ?
    WHERE id = ?
  `;

  const params = [
    nome,
    telefone,
    cep,
    logradouro,
    complemento,
    unidade,
    bairro,
    localidade,
    uf,
    estado,
    regiao,
    ibge,
    ddd,
    siafi,
    observacoes,
    id,
  ];

  try {
    const [result] = await pool.execute(query, params);
    callback(null, result.affectedRows);
  } catch (err) {
    callback(err);
  }
}

export async function deletarCliente(id, callback) {
  const query = `DELETE FROM clientes WHERE id = ?`;

  try {
    const [result] = await pool.execute(query, [id]);
    callback(null, result.affectedRows);
  } catch (err) {
    callback(err);
  }
}
