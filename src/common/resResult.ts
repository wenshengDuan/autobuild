/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-23 18:10:44
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-23 18:15:31
 * @FilePath: /autobuild/src/common/resResult.ts
 */
enum Code {
    SUCCESS = 200,
    SERVERERROR = 500,
}

class Result {
    static success(data: any = undefined, msg:string = '') {
        return {
            code: Code.SUCCESS,
            data,
            msg
        }
    }

    static fail(msg:string = '服务器错误') {
        return {
            code: Code.SERVERERROR,
            data: undefined,
            msg
        }
    }
}

export let { success, fail } = Result;