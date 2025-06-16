const prisma = require('../lib/prisma');
const { PrismaClient } = require('@prisma/client');

module.exports = {
  // # getAllProductions
  async getAllProductions(req, res) {
    console.log('➡️ Requisição recebida para listar todas as produções');
    try {
      const productions = await prisma.producao.findMany({
        include: {
          propriedade: true,
        },
      });
      console.log('✅ Produções listadas com sucesso:', productions.length);
      res.status(200).json(productions);
    } catch (error) {
      console.error('❌ Erro ao listar produções:', error);
      res.status(500).json({ error: 'Ops! Ocorreu um erro ao buscar as produções.' });
    }
  },

  // # getProductionById
  async getProductionById(req, res) {
    const { id } = req.params;
    console.log(`➡️ Requisição recebida para buscar produção com ID: "${id}"`);
    try {
      const productionIdNum = parseInt(id, 10); 
      if (isNaN(productionIdNum)) {
        console.warn(`⚠️ ID de produção inválido: "${id}".`);
        return res.status(400).json({ error: 'ID de produção inválido. Deve ser um número.' });
      }

      const production = await prisma.producao.findUnique({
        where: {
          id: productionIdNum, 
        },
        include: {
          propriedade: true,
        },
      });

      if (!production) {
        console.warn(`⚠️ Produção com ID "${id}" não encontrada.`);
        return res.status(404).json({ error: `Produção com ID "${id}" não encontrada.` });
      }
      console.log('✅ Produção encontrada com sucesso:', production.id);
      res.status(200).json(production);
    } catch (error) {
      console.error('❌ Erro ao buscar produção:', error);
      res.status(500).json({ error: 'Ops! Ocorreu um erro ao buscar esta produção.' });
    }
  },

  // # createProduction (Atualizado)
  async createProduction(req, res) {
    // Adicionado 'quantidade' na desestruturação
    const { safra, areaproducao, data, nomepropriedade, cultura, quantidade } = req.body; 
    console.log('➡️ Requisição recebida para criar uma nova produção');
    console.log('📦 Dados recebidos:', req.body);

    // Validação para incluir 'quantidade'
    if (!safra || areaproducao === undefined || !data || !nomepropriedade || !cultura || quantidade === undefined) {
      console.warn('⚠️ Campos obrigatórios para criar produção ausentes.');
      return res.status(400).json({ error: 'Por favor, preencha todos os campos obrigatórios: safra, areaproducao, quantidade, data, nomepropriedade e cultura.' });
    }

    try {
      const newProduction = await prisma.producao.create({
        data: {
          safra,
          areaproducao,
          quantidade, // <-- Adicionado o campo quantidade
          data: new Date(data),
          cultura,
          propriedade: {
            connect: { nomepropriedade: nomepropriedade },
          },
        },
        include: {
          propriedade: true,
        },
      });
      console.log('✅ Produção criada com sucesso:', newProduction.id);
      res.status(201).json({
        message: 'Produção cadastrada com sucesso!',
        production: newProduction
      });
    } catch (error) {
      console.error('❌ Erro ao criar produção:', error);
      if (error.code === 'P2025') {
        return res.status(400).json({ error: `A propriedade "${nomepropriedade}" não existe.` });
      }
      res.status(500).json({ error: 'Ops! Não foi possível cadastrar a produção.' });
    }
  },

  // # updateProduction (Atualizado)
  async updateProduction(req, res) {
    const { id } = req.params;
    // Adicionado 'quantidade' na desestruturação
    const { safra, areaproducao, data, nomepropriedade, cultura, quantidade } = req.body;
    console.log(`➡️ Requisição recebida para atualizar produção com ID: "${id}"`);
    console.log('📦 Dados de atualização:', req.body);

    try {
      const productionIdNum = parseInt(id, 10);
      if (isNaN(productionIdNum)) {
        return res.status(400).json({ error: 'ID de produção inválido.' });
      }

      const updatedProduction = await prisma.producao.update({
        where: { id: productionIdNum },
        data: {
          safra,
          areaproducao,
          quantidade, // <-- Adicionado o campo quantidade
          ...(data && { data: new Date(data) }),
          cultura,
          ...(nomepropriedade && { propriedade: { connect: { nomepropriedade: nomepropriedade } } }),
        },
        include: { propriedade: true },
      });
      console.log('🔄 Produção atualizada com sucesso:', updatedProduction.id);
      res.status(200).json({
        message: 'Produção atualizada com sucesso!',
        production: updatedProduction
      });
    } catch (error) {
      // ... (o restante do tratamento de erro continua o mesmo) ...
       console.error('❌ Erro ao atualizar produção:', error);
      if (error.code === 'P2025') {
        if (error.meta?.modelName === 'producao') {
            return res.status(404).json({ error: `Não foi possível encontrar a produção com ID "${id}" para atualizar.` });
        }
        if (error.meta?.cause?.includes('No \'propriedade\' record(s)')) {
            return res.status(400).json({ error: `A propriedade "${nomepropriedade}" não existe.` });
        }
      }
      res.status(500).json({ error: 'Ops! Ocorreu um erro ao atualizar a produção.' });
    }
  },

  // # deleteProduction
  async deleteProduction(req, res) {
    const { id } = req.params;
    console.log(`➡️ Requisição recebida para deletar produção com ID: "${id}"`);
    try {
      const productionIdNum = parseInt(id, 10);
      if (isNaN(productionIdNum)) {
        console.warn(`⚠️ ID de produção inválido: "${id}".`);
        return res.status(400).json({ error: 'ID de produção inválido. Deve ser um número.' });
      }

      await prisma.producao.delete({
        where: {
          id: productionIdNum, 
        },
      });
      console.log('🗑️ Produção deletada com sucesso:', id);
      res.status(204).send();
    } catch (error) {
      console.error('❌ Erro ao deletar produção:', error);
      if (error.code === 'P2025') {
        console.warn(`⚠️ Produção com ID "${id}" não encontrada para deleção.`);
        return res.status(404).json({ error: `Não foi possível encontrar a produção com ID "${id}" para deletar.` });
      }
      res.status(500).json({ error: 'Ops! Ocorreu um erro ao deletar a produção. Verifique se não há registros associados.' });
    }
  },
};