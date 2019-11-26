import { Model } from 'sequelize';

class Subscription extends Model{
  static init(sequelize){
    super.init({},{ sequelize });    
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
  }
}