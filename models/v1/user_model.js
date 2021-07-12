import 'providers/database/sequelize_provider'
import sequelize from 'providers/database/sequelize_provider'
import { Model, DataTypes } from 'sequelize'

const bcrypt = require('bcrypt')

class User extends Model {
    authenticate(password) {
        return bcrypt.compareSync(password, this.password)
    }
}

User.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password',
        set(value) {
            this.setDataValue('password', bcrypt.hashSync(value, bcrypt.genSaltSync()))
        }
    },
    is_active: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
        field: 'is_active'
    },
    deleted_at: {
        type: DataTypes.DATE,
        field: 'deleted_at'
    }
},
{
    sequelize,
    modelName: 'User',
    tableName: 'users',
})

export default User
