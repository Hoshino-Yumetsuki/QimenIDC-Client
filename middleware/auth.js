import { notification } from 'ant-design-vue';
export default ({ $axios, redirect, store }) => {
    // 读取cookie中的token
    store.commit('getToken')

    // 如果为空，跳转到登录页
    if (!store.state.token) {
        redirect('/login')
    }


    // // 设置Authorization头
    // $axios.setHeader('Authorization', store.state.token);

    // // 读取header中的Authorization
    // store.commit('getHeader', { req: $axios })
    // 如果为空，则不发送请求
    if (store.state.token) {
        // 测试请求接口判断cookie是否有效
        $axios.get('/api/test').then(res => {
            if (res.data.code != 20000) {
                // 发送notification消息提示
                notification.error({
                    message: '登录已过期',
                    description: '请重新登录',
                    duration: 2
                })
                // 如果无效，跳转到登录页
                redirect('/login')
                // 清除token
                store.commit('logout')
            }
        }).catch(err => {
            console.log(err)
            // 如果无效，跳转500页面
            redirect('/error/500')
        })
    }
}