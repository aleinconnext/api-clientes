import { Router } from 'express';
import ClienteController from '../controllers/clienteController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Gerenciamento de clientes (cadastro, consulta, atualização)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - cpf_cnpj
 *         - nome
 *         - telefone
 *         - cep
 *         - logradouro
 *         - bairro
 *         - localidade
 *         - uf
 *         - estado
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true
 *           description: ID único do cliente (gerado automaticamente)
 *         cpf_cnpj:
 *           type: string
 *           description: CPF ou CNPJ do cliente
 *         nome:
 *           type: string
 *           description: Nome do cliente
 *         telefone:
 *           type: string
 *           description: Telefone do cliente
 *         cep:
 *           type: string
 *           description: CEP do endereço do cliente
 *         logradouro:
 *           type: string
 *           description: Logradouro do endereço do cliente
 *         complemento:
 *           type: string
 *           description: Complemento do endereço do cliente
 *         unidade:
 *           type: string
 *           description: Unidade do cliente
 *         bairro:
 *           type: string
 *           description: Bairro do cliente
 *         localidade:
 *           type: string
 *           description: Cidade do cliente
 *         uf:
 *           type: string
 *           description: UF (estado) do cliente
 *         estado:
 *           type: string
 *           description: Nome do estado do cliente
 *         regiao:
 *           type: string
 *           description: Região do cliente
 *         ibge:
 *           type: string
 *           description: Código IBGE do cliente
 *         ddd:
 *           type: string
 *           description: DDD do cliente
 *         siafi:
 *           type: string
 *           description: Código SIAFI do cliente
 *         observacoes:
 *           type: string
 *           description: Observações adicionais sobre o cliente
 */

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cadastrar um cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID gerado automaticamente do cliente
 *       400:
 *         description: Erro no cadastro
 */
router.post('/', ClienteController.cadastrar);

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Consultar clientes
 *     tags: [Clientes]
 *     parameters:
 *       - in: query
 *         name: cpf_cnpj
 *         schema:
 *           type: string
 *         description: CPF ou CNPJ para consulta
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *         description: Nome do cliente para consulta
 *       - in: query
 *         name: cep
 *         schema:
 *           type: string
 *         description: CEP do cliente para consulta
 *     responses:
 *       200:
 *         description: Lista de clientes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Nenhum cliente encontrado
 *       400:
 *         description: Erro na consulta
 */
router.get('/', ClienteController.consultar);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualizar um cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome atualizado do cliente
 *               telefone:
 *                 type: string
 *                 description: Telefone atualizado do cliente
 *               cep:
 *                 type: string
 *                 description: CEP atualizado do cliente
 *               logradouro:
 *                 type: string
 *                 description: Logradouro atualizado do cliente
 *               complemento:
 *                 type: string
 *                 description: Complemento atualizado do cliente
 *               unidade:
 *                 type: string
 *                 description: Unidade atualizada do cliente
 *               bairro:
 *                 type: string
 *                 description: Bairro atualizado do cliente
 *               localidade:
 *                 type: string
 *                 description: Cidade atualizada do cliente
 *               uf:
 *                 type: string
 *                 description: UF atualizado do cliente
 *               estado:
 *                 type: string
 *                 description: Nome do estado atualizado do cliente
 *               regiao:
 *                 type: string
 *                 description: Região atualizada do cliente
 *               ibge:
 *                 type: string
 *                 description: Código IBGE atualizado do cliente
 *               ddd:
 *                 type: string
 *                 description: DDD atualizado do cliente
 *               siafi:
 *                 type: string
 *                 description: Código SIAFI atualizado do cliente
 *               observacoes:
 *                 type: string
 *                 description: Observações atualizadas do cliente
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       404:
 *         description: Cliente não encontrado
 *       400:
 *         description: Erro na atualização
 */
router.put('/:id', ClienteController.atualizar);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Deletar um cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do cliente a ser deletado
 *     responses:
 *       200:
 *         description: Cliente deletado com sucesso
 *       404:
 *         description: Cliente não encontrado
 *       400:
 *         description: Erro na exclusão
 */
router.delete('/:id', ClienteController.deletar);

export default router;
