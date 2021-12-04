module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define(
    "cnpj",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      cnpj: DataTypes.STRING(255),
      companyType:DataTypes.STRING(255),

    },
  );

  return Cnpj;
};
