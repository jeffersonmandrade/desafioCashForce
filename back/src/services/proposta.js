const { order } =require('../dataBase/models')


const getAllOrders = async () => {
  try{
    const result = await order.findAll({include:['provider','buyer']});
    return result;
  }catch(e){
    console.log(e)
  }
}

module.exports = {getAllOrders}