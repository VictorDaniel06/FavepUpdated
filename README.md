🎯 VISÃO GERAL DO PROJETO
==========================

FAVEP é uma aplicação web 🌐 full-stack para gerenciamento agrícola. 🌾

A plataforma permite aos usuários:

  - Gerenciar suas propriedades. 🏡
  - Controlar produções e finanças. 💰
  - Visualizar estatísticas detalhadas para auxiliar na tomada de decisões. 📊

Tecnologias principais:
  - Frontend: Angular 🅰️
  - Backend:  Node.js, Express, Prisma ⚙️
  - Banco de Dados: SQLite 💾



🚀 FUNCIONALIDADES PRINCIPAIS
=============================

  ✅ Autenticação de Usuários: Sistema de registro e login seguro. 🔑
  
  ✅ Gerenciamento de Propriedades: Cadastro, edição e visualização. 🏡
  
  ✅ Controle de Produção: Registro de safras, culturas e produtividade. 🌱
  
  ✅ Gestão Financeira: Acompanhamento de receitas e despesas. 💵
  
  ✅ Visualização de Dados: Gráficos, estatísticas e relatórios. 📈
  
  ✅ Interação com Parceiros: Seção para exibir parceiros estratégicos. 🤝
  



🛠️ TECNOLOGIAS UTILIZADAS
==========================

--- FRONTEND (FAVEP/) --- 🎨
  - Framework:      Angular
  - Linguagem:      TypeScript
  - Estilização:    CSS
  - Gráficos:       Chart.js
  - Componentes:    Angular Material

--- BACKEND (ServerBackup/) --- ⚙️
  - Framework:      Express.js
  - Linguagem:      JavaScript (Node.js)
  - ORM:            Prisma
  - Banco de Dados: SQLite
  - Autenticação:   JWT com bcrypt



🖥️ COMANDOS PARA EXECUÇÃO
==========================



--- FRONTEND (Aplicação Angular) --- 🅰️
=======================================

Navegue até o diretório 'FAVEP/'

1. Instalar dependências:
   
   npm install

3. Iniciar o servidor de desenvolvimento: 🚀
   
   ng serve
   --> A aplicação estará disponível em http://localhost:4200/

4. Build para produção:
   
   ng build




--- BACKEND (Servidor Node.js) --- ⚙️
======================================

Navegue até o diretório 'ServerBackup/'

1. Instalar dependências:
   
   npm install

3. Gerar o Prisma:
   
   npx nodemon index.js

5. Verificar a conexão com o banco:
   
   npx prisma db pull

7. Iniciar o servidor de maneira simples: 🚀
   
   node index.js

   Ou

   Rodar em ambiente de desenvolvimento (Recomendado): 🚀
   
   npx nodemon index.js
   
   --> O servidor estará em execução em http://localhost:5050
