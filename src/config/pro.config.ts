/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-24 09:34:33
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-25 17:04:11
 * @FilePath: /autobuild/src/config/pro.config.ts
 */
import { IConfig } from './interface';

const config:IConfig = {
    db: {
        database: 'autobuild',
        dialect: 'mysql',
        host: '',
        port: 3306,
        username: 'admin',
        password: '66666'
    }
}
export default config;