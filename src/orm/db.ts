/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-25 15:10:12
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-25 21:36:50
 * @FilePath: /autobuild/src/orm/db.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Sequelize } from 'sequelize-typescript';
import Config from '@/config/index';
import path from 'path';

export class DataBase {
    // sequelize!: Sequelize;
    static connect() {
        const options = Config.getConfig('db');
        console.log('db', options)
        const sequelize = new Sequelize({
            ...options,
            logging: true,
            timezone: '+08:00',
            models: [path.join(__dirname, '../models')],
            define: {
                timestamps: true,
                underscored: true,
                freezeTableName: true
            }
        })
        
        sequelize.sync({ force: true })
    }
}