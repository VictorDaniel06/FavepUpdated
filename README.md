=================================
[ 🎯 VISÃO GERAL DO PROJETO 🎯 ]
=================================
O FAVEP e uma aplicacao web 🌐 full-stack para gerenciamento agronomico. 🌾
A plataforma permite aos usuarios:

  -> Gerenciar suas propriedades. 🏡
  -> Controlar producoes e financas. 💰
  -> Visualizar estatisticas detalhadas para auxiliar na tomada de decisoes. 📊

  - Frontend: Angular 🅰️
  - Backend:  Node.js, Express, Prisma ⚙️
  - Banco de Dados: SQLite 💾


=====================================
[ 🚀 FUNCIONALIDADES PRINCIPAIS 🚀 ]
=====================================

  (*) Autenticacao de Usuarios: Sistema de registro e login seguro. 🔑
  (*) Gerenciamento de Propriedades: Cadastro, edicao e visualizacao. 🏡
  (*) Controle de Producao: Registro de safras, culturas e produtividade. 🌱
  (*) Gestao Financeira: Acompanhamento de receitas e despesas. 💵
  (*) Visualizacao de Dados: Graficos, estatisticas e relatorios. 📈
  (*) Interacao com Parceiros: Secao para exibir parceiros estrategicos. 🤝


=================================
[ 🛠️ TECNOLOGIAS UTILIZADAS 🛠️ ]
=================================

  --- FRONTEND (FAVEP/) --- 🎨
    - Framework:      Angular
    - Linguagem:      TypeScript
    - Estilizacao:    CSS
    - Graficos:       Chart.js
    - Componentes:    Angular Material

  --- BACKEND (ServerBackup/) --- ⚙️
    - Framework:      Express.js
    - Linguagem:      JavaScript (Node.js)
    - ORM:            Prisma
    - Banco de Dados: SQLite
    - Autenticacao:   JWT com bcrypt


=================================
[ 🖥️ COMANDOS PARA EXECUÇÃO 🖥️ ]
=================================

  --- FRONTEND (Aplicacao Angular) --- 🅰️

  Navegue ate o diretorio 'FAVEP/'

  1. Instalar dependencias:
     npm install

  2. Iniciar o servidor de desenvolvimento:
     ng serve
     (A aplicacao estara disponivel em http://localhost:4200/)


  --- BACKEND (Servidor Node.js) --- ⚙️

  Navegue ate o diretorio 'ServerBackup/'

  1. Instalar dependencias:
     npm install

  2. Garantir que o Prisma esta pronto:
     npx prisma generate

  3. Rodar em modo de desenvolvimento (recomendado):
     npx nodemon index.js
     (O servidor estara em execucao em http://localhost:5050)

  4. Rodar em modo de producao:
     node index.js
      (O servidor estara em execucao em http://localhost:5050)
