export default ({ $axios, store }) =>{
    // Request拦截器
    $axios.onRequest(config => {
        // 设置header
        config.headers['Authorization'] = store.state.token;
        }
    )
}