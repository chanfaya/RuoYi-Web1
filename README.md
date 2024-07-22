## 安装使用

前置准备环境(只能用pnpm)

```json
"packageManager": "pnpm",
"engines": {
  "node": ">=18.12.0",
  "pnpm": ">=9.0.4"
}
```

- 安装依赖

```bash
cd ruoyi-plus-vben

pnpm install
```

- 关于代码生成(非必选)

**系统工具-代码生成 表格右上角有详细操作怎么改后端!**

**系统工具-代码生成 表格右上角有详细操作怎么改后端!**

**系统工具-代码生成 表格右上角有详细操作怎么改后端!**

- 关于一些监控的地址配置(微服务版本可以跳过这一小节)

使用[RuoYi-Vue-Plus](https://gitee.com/dromara/RuoYi-Vue-Plus/tree/5.X/)注意 `已经去除 admin/snailjob 的.env 配置` 可自行修改 有两种方式

1. 修改源码`/views/monitor/admin` `views/monitor/snailjob`

```ts
// 修改地址
const url = ref<string>('http://127.0.0.1:7700/#/oms/home');
```

2. **推荐** 使用菜单自行配置 (跟 cloud 版本打开方式一致)

![图片](https://gitee.com/dapppp/ruoyi-plus-vben/raw/main/preview/菜单修改.png)

使用内嵌 iframe 方式需要解决跨域问题 可参考[nginx.conf](https://gitee.com/dromara/RuoYi-Vue-Plus/blob/5.X/script/docker/nginx/conf/nginx.conf#LC87)配置

- 修改.env.development 配置文件
- **注意 RSA 公私钥一定要修改和后端匹配**
- RSA 公私钥为两对 `前端请求加密-后端解密是一对` `后端响应加密 前端解密是一对`

```properties
# 后台请求路径 具体在vite.config.ts配置代理
VITE_GLOB_API_URL=/basic-api

# 全局加密开关(即开启了加解密功能才会生效 不是全部接口加密 需要和后端对应)
VITE_GLOB_ENABLE_ENCRYPT=true

# RSA公钥 请求加密使用 注意这两个是两对RSA公私钥 请求加密-后端解密是一对 响应解密-后端加密是一对
VITE_GLOB_RSA_PUBLIC_KEY=xxx

# RSA私钥 响应解密使用 注意这两个是两对RSA公私钥 请求加密-后端解密是一对 响应解密-后端加密是一对
VITE_GLOB_RSA_PRIVATE_KEY=xx

# 客户端id 必填
VITE_GLOB_APP_CLIENT_ID=e5cd7e4891bf95d1d19206ce24a7b32e

# 开启WEBSOCKET
VITE_GLOB_WEBSOCKET_ENABLE=true
```

- 运行

```bash
pnpm serve
```

- 打包

```bash
pnpm build
```



