const { order } =require('../dataBase/models')

const organizeResult = (bigArray) => {

const result =  bigArray.map(({nNf,buyer,orderStatusBuyer,provider,emissionDate,value}) => ({
notaFiscal:nNf,
sacado: buyer.name,
cedente: provider.name,
emissao:emissionDate,
valor: value,
status: orderStatusBuyer,
}))
return result
}

const getAllOrders = async () => {
  try{
    const result = await order.findAll({include:['provider','buyer']});
    const changeResult = organizeResult(result)
    return changeResult;
  }catch(e){
    console.log(e)
  }
}

module.exports = {getAllOrders}