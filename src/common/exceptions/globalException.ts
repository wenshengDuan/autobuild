/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-23 17:50:30
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-23 18:16:30
 * @FilePath: /autobuild/src/common/exceptions/globalException.ts
 */
import { Context, Next } from 'koa';
import { fail } from '../resResult';

async function globalException(ctx: Context, next: Next) {
    try {
        await next();
    } catch (err:any) {
        // console.log('全局异常', err)
        ctx.body = fail(err.message);
    }
}

export default globalException;