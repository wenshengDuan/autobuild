/*
 * @Author: duanwensheng duanwensheng@58.com
 * @Date: 2023-06-22 18:21:12
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-24 10:58:16
 * @FilePath: /autobuild/src/app.ts
*/
import Koa from 'koa';
import InitManager from '@common/init';
import Config from '@/config/index';
const config = Config.getConfig();
console.log('config', config);
const app = new Koa();
InitManager.init(app);