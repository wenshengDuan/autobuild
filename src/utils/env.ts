/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-24 10:03:28
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-24 11:06:15
 * @FilePath: /autobuild/src/utils/env.ts
 */
import { IENV } from "@/config/interface";

export function getEnv():IENV {
    console.log('getEnv', process.env.NODE_ENV)
    return process.env.NODE_ENV === 'pro' ? 'pro' : 'dev'
}