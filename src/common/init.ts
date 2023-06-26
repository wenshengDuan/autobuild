/*
 * @Author: duanwensheng duanwensheng@58.com
 * @Date: 2023-06-23 16:19:28
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-26 23:48:48
 * @FilePath: /autobuild/src/common/init.ts
 */
import Koa, { Context } from 'koa';
import body from 'koa-body';
import json from 'koa-json';
import Router from 'koa-router';
import path from 'path';
import fs from 'fs';

import globalException from './exceptions/globalException';
import { DataBase } from '@/modules/dborm';

class InitManager {
    static app: Koa;
    
    static init(app: Koa) {
        InitManager.app = app;
        DataBase.connect();
        InitManager.loadMiddlewares();
        InitManager.loadRouters();
        InitManager.listen();
    }

    static async loadMiddlewares() {
        const app = InitManager.app;
        app.use(globalException)
        app.use(body());
        app.use(json());
    }

    static loadRouters() {
        // 初始化一级路由
        const rootRouter = InitManager.initRootRouer();
        // 挂在全局变量
        InitManager.app.context.router = rootRouter;
        // 加载子级路由 并挂载到一级路由上
        InitManager.loadchildrenRouter(rootRouter);   
    }

    static initRootRouer() {
        const router = new Router({ 
            prefix: '/api'
        })
        InitManager.app.use(router.routes());
        return router;
    }
    
    static async loadchildrenRouter(rootRouter: Router) {
        // const routerdir = path.join(process.cwd(), './src/router');
        const routerdir = path.join(process.cwd(), './src/controller');
        const filePaths = InitManager.readDirRecursively(routerdir);
        console.log('filePaths', filePaths);
        InitManager.initController(filePaths);
        // InitManager.nestedRouters(rootRouter, filePaths);
    }

    // 初始化控制器
    static initController(filePaths: string[]){
        filePaths.forEach(file => require(file));
    }

    // 递归获取目录下所有文件路径并返回
    static readDirRecursively(dir: string):string[] {
        // 最终返回的文件绝对路径数组
        const filePaths = [];
        const files = fs.readdirSync(dir);

        for (let file of files) {
            const filepath = path.join(dir, file);
            // 通过文件路径获取文件描述符
            const stat = fs.statSync(filepath);

            if (stat.isFile()) {
                filePaths.push(filepath);
                continue;
            }

            if (stat.isDirectory()) {
                const pathArr = InitManager.readDirRecursively(filepath);
                filePaths.push(...pathArr);
                continue;
            }
        }

        return filePaths;
    }

    // 组装嵌套路由
    static nestedRouters(rootRouter: Router, filePaths: string[]) {
        if (!filePaths.length) return;
        
        for (let file of filePaths) {
            const route = require(file).default;
            console.log('route', route);
            if (InitManager.isRouter(route)) {
                rootRouter.use(route.routes(), route.allowedMethods())
            }
        }
    }

    static isRouter(module: any):module is Router {
        return module instanceof Router;
    }

    static listen() {
        const app = InitManager.app;
        app.listen(3001, () => {
            console.log('服务已启动： http://localhost:3001')
        })
    }
}

export default InitManager;