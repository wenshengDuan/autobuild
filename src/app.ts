/*
 * @Author: duanwensheng duanwensheng@58.com
 * @Date: 2023-06-22 18:21:12
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-24 11:18:23
 * @FilePath: /autobuild/src/app.ts
*/
import Koa from 'koa';
import InitManager from '@common/init';

const app = new Koa();
InitManager.init(app);