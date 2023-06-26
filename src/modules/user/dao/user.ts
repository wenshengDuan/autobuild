/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-25 16:31:07
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-26 22:23:07
 * @FilePath: /autobuild/src/dao/user.ts
 */
import { User, IUserInfo } from '../model/User';

export class UserDao {
    static addUser(userInfo: User) {
        return User.create(userInfo);
    }
}
 