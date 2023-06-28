/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-28 21:09:17
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-28 23:02:12
 * @Description: 
 */
import { Context } from 'koa';
import { controller } from '@/decorator/controller';
import { post, get } from '@/decorator/router';
import { success, fail } from '@/common/resResult';
import { ctxToSSE } from '@/utils/deploy';
import { PassThrough } from 'stream';

@controller('/deploy')
class DeployController {
    @get('/build')
    async build(ctx: Context) {
        ctxToSSE(ctx);
        const stream = new PassThrough();
        stream.write('data: 我收到了你的请求\n\n')
        ctx.body = stream;
        let count = 0;
        setInterval(() => {
            stream.write(`data: ${count}\n\n`);
            count++;
        }, 1000);
    }
}