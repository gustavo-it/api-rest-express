import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: { // validação do campo
          len: {
            args: [3, 70], // array com a quantidade de caracteres do campo
            msg: 'Campo nome deve ter entre 3 e 70 caracteres.',
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe'
        },
        validate: { // validação do campo
          isEmail: {
            msg: 'Email inválido.',
          }
        }
      },
      password_hash: {
        type:Sequelize.STRING,
        defaultValue: '',
      },
      // este password será transformado no hash que vai para a base de dados
      password: {
        type: Sequelize.VIRTUAL, // esse campo não vai existir no bd
        defaultValue: '',
        validate: { // validação do campo
          len: {
            args: [6, 50], // array com a quantidade de caracteres do campo
            msg: 'A senha precisa ter entre 6 e 50 caracteres.',
          }
        }
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async user => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}