/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-23 16:38:25
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-26 22:24:44
 * @FilePath: /autobuild/src/router/pages/user.ts
 */
import Router from 'koa-router';
// import { UserDao } from '@/dao/user';
import { success } from '@/common/resResult';
import { UserDao } from '@/modules/user/dao/user';

const router = new Router({
    prefix: '/user'
})

router.post('/add', async ctx => {
    const userInfo = ctx.request.body;
    const result = await UserDao.addUser(userInfo);
    ctx.body = success(result);
})

export default router;