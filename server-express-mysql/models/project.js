module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define(
    'users', 
    {
    user_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    email_address: {
      type: DataTypes.STRING(45),
      unique: false,
    },
     Username: {
        type: DataTypes.STRING,
        unique: true
      },
      Password: DataTypes.STRING,
      createdAt: DataTypes.DATE
  },  
    {}
  );

  return users;
};