module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    /*
    Employee.hasOne(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
    */
    Employee.hasMany(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employee;
};