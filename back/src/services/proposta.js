const { order } =require('../dataBase/models')

const getAllOrders = async () => {
  const result = await order.findAll();
  return result;
}

module.exports = {getAllOrders}