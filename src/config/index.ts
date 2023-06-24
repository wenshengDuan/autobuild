/*
 * @Author: duanwensheng duanwensheng@58.com
 * @Date: 2023-06-22 21:42:16
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-24 11:00:49
 * @FilePath: /autobuild/src/config/index.ts
 */
import path from 'path';
import { getEnv } from '@/utils/env';
import { IConfig, IDbConfig, IENV } from './interface';

class Config {
    static config = new Config();
    env!: IENV;
    
    constructor() {
        this.env = getEnv();
    }

    getConfig():IConfig;
    getConfig<T extends keyof IConfig>(key: T): IConfig[T];
    getConfig(key?: string) {
        const configpath = path.join(process.cwd(), `./src/config/${this.env}.config.ts`);
        console.log('configpath', configpath);
        const currentConf = require(configpath);
        if (!key) {
            return currentConf;
        }

        if (key ){
            return currentConf?.[key] || {}
        }
    }
}

export default Config.config;