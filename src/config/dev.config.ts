/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-24 09:34:14
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-24 10:10:17
 * @FilePath: /autobuild/src/config/dev.config.ts
 */
import { IConfig } from './interface';
const config:IConfig = {
    database: {
        dbName: 'autobuild', 
        host: 'localhost',
        port: '3306',
        user: 'admin',
        password: '123456',
    }
}
export default config; 