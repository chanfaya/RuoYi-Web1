import type { AppRouteModule } from '@/router/types';
// import { LAYOUT } from '@/router/constant';

/**
 * 这里放本地路由  就是后台没有包含的
 * 默认登录后才能访问
 * 白名单路径: router/guard/permissionGuard.ts
 * 注意 component: LAYOUT 一定要有
 */
export const localRoutes: AppRouteModule[] = [
  // {
  //   component: LAYOUT,
  //   path: '/system/oss-config',
  //   name: 'OssConfigRoot',
  //   meta: { title: 'OSS配置管理' },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/system/oss/OssConfig.vue'),
  //       name: 'OssConfig',
  //       meta: {
  //         hidden: true,
  //         title: 'OSS配置管理',
  //         currentActiveMenu: '/system/oss',
  //       },
  //     },
  //   ],
  // },
];
