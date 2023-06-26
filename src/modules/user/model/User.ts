/*
 * @Author: duanwensheng 824201954@qq.com
 * @Date: 2023-06-25 16:09:30
 * @LastEditors: duanwensheng 824201954@qq.com
 * @LastEditTime: 2023-06-26 22:26:53
 * @FilePath: /autobuild/src/models/User.ts
 */
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { DataBase } from '@/modules/dborm';

export interface IUserInfo {
  id?: number;
  name: string;
  email: string;
  password: string;
  [key:string]: any;
}

@Table({
  tableName: 'users',
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  declare id: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;
}

DataBase.sequelize.addModels([User]);