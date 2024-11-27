import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import clienteRoutes from './routes/clienteRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API - Cadastro de Clientes',
      version: '1.0.0',
      description: 'API para cadastro, consulta e alteração de clientes',
      contact: {
        name: 'Alessandro Gonçalves',
        email: 'ale.inconnext@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        // url: 'https://api-clientes-olive.vercel.app',
        description: 'Servidor de Produção',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
app.use('/clientes', clienteRoutes);

// Página inicial
app.use(express.static('public'));

export default app;
