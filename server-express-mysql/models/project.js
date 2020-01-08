module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    user_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email_address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'project'
  });
};