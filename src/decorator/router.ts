/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-26 22:34:50
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-27 00:21:42
 * @FilePath: /autobuild/src/decorator/router.ts
 */
import 'reflect-metadata';
import InitManager from '@/common/init';

type RequestType = 'post' | 'get' | 'put' | 'delete'
type Target = new (...args:[]) => void;

const router = (type: RequestType) => (path: string) => 
    (targetClassPrototype:any, name:string, descriptor: TypedPropertyDescriptor<any>) => {
        Reflect.defineMetadata('reqType', type, targetClassPrototype, name);
        Reflect.defineMetadata('reqPath', path, targetClassPrototype, name);
        console.log(
            Reflect.getMetadata('reqType', targetClassPrototype, name),
            Reflect.getMetadata('reqPath', targetClassPrototype, name)
        )

        // InitManager.app.context.router()
    }

const getRouterPath = () => {

}
// function router(type: RequestType) {
//     return function(path: string) {
//         return function(targetClassPrototype: any, name: string, descriptor: TypedPropertyDescriptor<any>) {
//             Reflect.defineMetadata('reqType', type, targetClassPrototype, name);
//             Reflect.defineMetadata('reqPath', path, targetClassPrototype, name);
//             console.log(
//                 Reflect.getMetadata('reqType', targetClassPrototype, name),
//                 Reflect.getMetadata('reqPath', targetClassPrototype, name)
//             )
            
//         }
//     }
// }

const post = router('post');
const get = router('get');
const put = router('put');
const del = router('delete');

export {
    post,
    get,
    del,
    put
}