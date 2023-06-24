/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-24 09:44:45
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-24 10:18:50
 * @FilePath: /autobuild/src/config/interface.ts
 */

export type IENV = 'dev' | 'pro';

export interface IDbConfig {
    dbName: string;
    host: string;
    port: string;
    user: string;
    password: string;
}

export interface IConfig {
    database: IDbConfig,
    server?: string[];
}