/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-28 21:17:02
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-28 23:00:27
 * @Description: 
 */
import { Context } from "koa";

export function ctxToSSE(ctx: Context) {
    ctx.set('Content-Type', 'text/event-stream; chaset=uft-8');
    // ctx.type = 'text/event-stream; charset=utf-8';
    ctx.set('Cache-Control', 'no-cache, no-transform');
    ctx.set('Connection', 'keep-alive');
    ctx.set('Transfer-Encoding', 'chunked');
    ctx.status = 200;
}