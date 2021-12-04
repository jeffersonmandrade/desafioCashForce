const propostaService = require('../services/proposta')

const getAllOrders = async(req,res)=> {
const result = await propostaService.getAllOrders();
res.status(200).json(result)
}

module.exports = {
  getAllOrders
}