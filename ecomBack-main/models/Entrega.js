const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Entrega = db.define('entrega',{
    codEntrega: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idPedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // Garante o relacionamento 1:1 com Pedido
        references: {
            model: 'pedidos', 
            key: 'codPedido'  
        }
    },
    statusEntrega: {
        type: DataTypes.ENUM(
            'AGUARDANDO_ENVIO', 
            'EM_TRANSITO', 
            'SAIU_PARA_ENTREGA', 
            'ENTREGUE', 
            'EXTRAVIADO',
            'DEVOLVIDO'
        ),
        allowNull: false,
        defaultValue: 'AGUARDANDO_ENVIO'
    }
},{
    timestamps: true,
    tableName: 'entregas'
})

module.exports = Entrega