/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-29 19:11:33
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-29 21:35:57
 * @Description: 
 */
import path from 'path';
import { asyncExec, asyncSpawn } from "./tools";

type MessageType = 'end' | 'heart' | 'msg';

export interface SendData {
	type: MessageType,
	msg: string;
}

// 发送数据
function send(data: SendData) {
	console.log('send', data);
	process.send?.(data, (err: Error) => {
		console.log(err);
	})
}

async function start(params:any) {
	send({
		type: 'msg',
		msg: '子进程在工作'
	})
	return;
	const workDir = path.join(process.cwd(), '../../build');
	const giturl = 'https://github.com/wenshengDuan/BookIsland.git'
	send({
		type: 'msg',
		msg: '开始 clone 代码 ---> start'
	})
	try {
		const r = await asyncExec(`cd ${workDir}; git clone ${giturl}`) as string;
		send({
			type: 'msg',
			msg: r
		})
	} catch (err) {
		send({
			type:'msg',
			msg: 'clone 代码fail ----> 请检查权限或者用户名密码'
		})

		process.exit(0);
	}
	send({
		type: 'msg',
		msg: 'clone 代码成功 ---> success'
	})
	
	send({
		type: 'msg',
		msg: `开始 安装依赖 ---> start: ${workDir}`
	})
	
	const cmdarg = ['install', '-d', '--prefer-offline'];
	const code = await asyncSpawn('npm', cmdarg, { cwd: workDir }, (msg) => send({
		type: 'msg',
		msg
	}))

	send({
		type: 'msg',
		msg: `code: ${code}`
	})

	send({
		type: 'msg',
		msg: '安装依赖成功'
	})

	send({
		type: 'end',
		msg: 'package -----> success'
	})
}

process.on('message', async (params) => {
    // console.log('开始打包');
	// send({
	// 	type: 'msg',
	// 	msg: '子进程在工作'
	// })
	try {
		console.log('start')
		await start(params);
	} catch (error: any) {
		send({
			type: 'end',
			msg: error
		})
	}
})