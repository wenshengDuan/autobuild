/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-29 20:12:56
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-29 21:52:58
 * @Description: 
 */
const cp = require('child_process');

const asyncSpawn = async (cmdStr, cmdArg, options, fn) => {
    return new Promise((resolve, reject) => {
        const cmd = cp.spawn(cmdStr, cmdArg, options);
        
        cmd.stdout.on('data', data => {
            fn(data.toString());
        })

        cmd.stderr.on('data', data => {
            fn(data.toString());
        })

        cmd.on('error', err => {
            reject(err);
        })

        cmd.on('close', code => {
            resolve(code)
        })
    })
}

const asyncExec = async (cmdStr) => {
    return new Promise((resolve, reject) => {
        cp.exec(cmdStr, { maxBuffer: 2 * 1024 * 1024 }, (err, stdout, stderr) => {
            console.log('------exec callback------')
            if (err) {
                reject(err);
                return;
            }
            resolve(stdout+stderr);
        })
    })
}

module.exports = {
    asyncExec,
    asyncSpawn
}