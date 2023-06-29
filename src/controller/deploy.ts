/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-28 21:09:17
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-29 22:00:36
 * @Description: 
 */
import { Context } from 'koa';
import { fork } from 'child_process';
import { controller } from '@/decorator/controller';
import { post, get } from '@/decorator/router';
import { success, fail } from '@/common/resResult';
import { ctxToSSE } from '@/utils/deploy';
import { PassThrough } from 'stream';
import { SendData } from '@/utils/build';

@controller('/deploy')
class DeployController {
    @get('/build')
    async build(ctx: Context) {
        ctxToSSE(ctx);
        const stream = new PassThrough();
        stream.write('data: 我收到了你的请求\n\n')
        startbuild(stream);
        ctx.body = stream;
    }
}

function startbuild(stream: PassThrough) {
    // 创建子进程
    const buildFile = process.cwd() + '/dist/utils/build.js';
    console.log('buildFile', buildFile);
    // const buildTask = childprocess.exec(`npx ts-node ${buildFile}`, (err, stdout, stderr) => {
    //     if (err) {
    //         console.log('----childprocess.exec.err', err)
    //         return
    //     }

    //     console.log('----childprocess.exec.stdout.err', stdout + stderr);
    //     return;
    // });
    const buildTask = fork(buildFile);
    // 监听子进程消息
    buildTask.on('message', async (data: SendData) => {
        const { type, msg } = data;

        // if (!msg) return ;
        if (type === 'heart') {
            stream.write(`event: heart\ndata: heartbeat\n\n`);
            return;
        }

        if (type === 'end') {
            stream.write(`event: heart\ndata: ${msg}\n\n`);
            return;
             
        }
        
        console.log('msg --->', data);
        stream.write(`data: ${msg}\n\n`);
    })
    // 监听子进程退出事件
    buildTask.on('exit', (data: SendData) => {
        stream.write(`event: exit\ndata: ${data.msg}`);
    })
    // 向子进程发送消息
    const isSuccess = buildTask.send({
        msg: 'start'
    }, (err) => {
        console.log('buildTask.send', err?.message);
    })

    console.log('isSuccess', isSuccess);
}