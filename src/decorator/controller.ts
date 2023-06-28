/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-26 22:34:34
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-28 21:11:24
 * @FilePath: /autobuild/src/decorator/controller.ts
 */
import InitManager from '@/common/init';
import 'reflect-metadata';

type TargetClass = new (...args:any) => any
export const controller = (modulePath: string = '/') => {
    const getFullPath = (reqPath:string) => {
        if(modulePath === '/') {
            modulePath = '';
        }

        if(modulePath.length > 1 && !modulePath.startsWith('/')) {
            modulePath = `/${modulePath}`;
        }
        
        return modulePath + reqPath;
    }
    return (targetClass: TargetClass) => {
        // const routerHanlderFns = Object.keys(targetClass.prototype);
        const methods = Object.getOwnPropertyNames(targetClass.prototype);
        console.log('controller', methods);
        methods.forEach(fnName => {
            console.log('fn', fnName);
            if (fnName === 'contructor') return;
            const reqType = Reflect.getMetadata('reqType', targetClass.prototype, fnName);
            const reqPath = Reflect.getMetadata('reqPath', targetClass.prototype, fnName);
            const fn = targetClass.prototype[fnName];
            const fullPath = getFullPath(reqPath);
            if (!reqType || !reqPath) return;
            const router = InitManager.app.context.router;
            router[reqType](fullPath, fn);
        })
    }  
}

