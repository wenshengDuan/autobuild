/*
 * @Author: duanwensheng duanwensheng@58.com
 * @Date: 2023-06-23 10:37:12
 * @LastEditors: duanwensheng duanwensheng@58.com
 * @LastEditTime: 2023-06-23 17:32:47
 * @FilePath: /autobuild/src/router/children.ts
 */
import { Context } from 'koa';
import Router from 'koa-router';

const childRouter = new Router({
    prefix: '/child'
});

childRouter.get('/:id', async ctx => {
    ctx.body = {
        childId: ctx.params.id
    }
})

// 需要看下打包后的结果
module.exports = childRouter;
