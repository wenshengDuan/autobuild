/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-24 09:34:14
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-25 17:11:19
 * @FilePath: /autobuild/src/config/dev.config.ts
 */
import { IConfig } from './interface';
const config:IConfig = {
    db: {
        database: 'autobuild', 
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'admin',
        password: '123456',
    }
}
export default config; 