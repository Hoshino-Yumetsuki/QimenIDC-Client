export const state = () => ({
    // 用于存储用户登录后的token
    token: null
})

export const mutations = {
    // 用于修改state中的token
    setToken(state, token) {
        state.token = token;
        // 持久化存储token,2小时后过期
        this.$cookies.set('token', token, {
            path: '/',
            maxAge: 60 * 60 * 2
        })
    },
    // 读取cookie中的token
    getToken(state) {
        state.token = this.$cookies.get('token')
    },
    // 退出登录
    logout(state) {
        state.token = null;
        this.$cookies.remove('token');
    }
}