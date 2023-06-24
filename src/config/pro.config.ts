/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-24 09:34:33
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-24 10:10:09
 * @FilePath: /autobuild/src/config/pro.config.ts
 */
import { IConfig } from './interface';

const config:IConfig = {
    database: {
        dbName: 'autobuild',
        host: '',
        port: '3306',
        user: 'admin',
        password: '66666'
    }
}
export default config;