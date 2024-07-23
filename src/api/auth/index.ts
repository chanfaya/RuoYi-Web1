import { defHttp } from '@/utils/http/axios';
import { TenantResp, LoginParams, LoginResult, UserInfoResult, Menu } from './model';
import { ErrorMessageMode } from '#/axios';
import { useGlobSetting } from '@/hooks/setting';

enum Api {
  Login = '/auth/login',
  Logout = '/auth/logout',
  TenantList = '/auth/tenant/list',
  authUnbinding = '/auth/unlock',
  GetUserInfo = '/system/user/getInfo',
  GetRoutes = '/system/menu/getRouters',
}

/**
 * 获取租户列表 下拉框使用
 */
export function tenantList() {
  return defHttp.get<TenantResp>({ url: Api.TenantList }, { ignoreCancelToken: true });
}

const globSetting = useGlobSetting();
/**
 * @description 登录接口 可处理普通登录和oauth登录
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResult>(
    {
      url: Api.Login,
      params: {
        ...params,
        clientId: globSetting.clientId,
      },
    },
    {
      errorMessageMode: mode,
      encrypt: true,
    },
  );
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return defHttp.get<UserInfoResult>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

/**
 * 用户登出
 * @returns
 */
export function doLogout() {
  return defHttp.post<void>({ url: Api.Logout });
}

/**
 * 获取对应用户的菜单
 * @returns
 */
export function getRoutes() {
  return defHttp.get<Menu[]>({ url: Api.GetRoutes });
}
