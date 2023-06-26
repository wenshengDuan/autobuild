/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-26 22:33:36
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-26 23:49:55
 * @FilePath: /autobuild/src/controller/user.ts
 */
import { Context } from 'koa';
import { post, get } from '@/decorator/router';
import { success, fail } from '@/common/resResult';

class UserController {
    @post('/addddd')
    async addUserInfo(ctx: Context) {
        const userInfo = ctx.request.body;
        ctx.body = success();
    }
}