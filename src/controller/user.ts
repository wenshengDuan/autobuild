/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-26 22:33:36
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-28 21:12:09
 * @FilePath: /autobuild/src/controller/user.ts
 */
import { Context } from 'koa';
import { post, get } from '@/decorator/router';
import { controller } from '@/decorator/controller';
import { success, fail } from '@/common/resResult';
import { UserDao } from '@/modules/user/dao/user';
@controller('/user')
class UserController {
    @post('/add')
    async addUserInfo(ctx: Context) {
        const userInfo = ctx.request.body;
        const result = await UserDao.addUser(userInfo);
        ctx.body = success(result);
    }

    buy() {}
}