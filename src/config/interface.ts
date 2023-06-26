/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-24 09:44:45
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-25 15:36:07
 * @FilePath: /autobuild/src/config/interface.ts
 */
import { SequelizeOptions } from 'sequelize-typescript'

export type IENV = 'dev' | 'pro';

export interface IDbConfig {
    dbName: string;
    host: string;
    port: string;
    user: string;
    password: string;
    // dialect: ;
}

export interface IConfig {
    db: SequelizeOptions,
    server?: string[];
}