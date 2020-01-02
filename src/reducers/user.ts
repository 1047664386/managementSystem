/*
 * @Author: Always
 * @LastEditors  : Always
 * @email: 740905172@qq.com
 * @Date: 2020-01-02 14:16:32
 * @LastEditTime : 2020-01-02 15:08:25
 * @FilePath: /managementSystem/src/reducers/user.ts
 */
import { UserInfo } from '@/interface/User';
import { ReduxAction } from '@/interface/Redux';
import { UPDATA_USERINFO } from '@/constants';

/**
 * 用户数据
 * @param state
 * @param action
 */
export const userInfo = (
  state: UserInfo | null = null,
  action: ReduxAction<UserInfo>,
): UserInfo | null => {
  switch (action.type) {
    case UPDATA_USERINFO:
      return action.data;
    default:
      return state;
  }
};
