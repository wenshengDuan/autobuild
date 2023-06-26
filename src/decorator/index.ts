/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-27 00:03:42
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-27 01:08:06
 * @FilePath: /autobuild/src/decorator/index.ts
 */
// import * as controller from './controller';
// import * as router from './router';

// export {
//     controller,
//     ...router
// }

function controller(target: any) {
    const proto = Object.getOwnPropertyNames(target.prototype);

    console.log('controller', proto)
    for (const key in proto) {
      if (typeof proto[key] === 'function') {
        console.log('Controller function:', key);
      }
    }
  }
  
  @controller
  class MyClass {
    name = ''
    foo() {}
    bar() {}
  }