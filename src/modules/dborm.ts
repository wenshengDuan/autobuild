/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-25 15:10:12
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-26 22:26:35
 * @FilePath: /autobuild/src/orm/db.ts
 */
import { Sequelize } from 'sequelize-typescript';
import Config from '@/config/index';
import path from 'path';

export class DataBase {
    static sequelize: Sequelize;
    static connect() {
        const options = Config.getConfig('db');
        console.log('db', options)
        const sequelize = new Sequelize({
            ...options,
            logging: true,
            timezone: '+08:00',
            // models: [path.join(__dirname, '../models')],
            define: {
                timestamps: true,
                underscored: true,
                freezeTableName: true
            }
        })
        DataBase.sequelize = sequelize;
        sequelize.sync({ force: true })
    }
}

// export let sequelize = DataBase.sequelize;