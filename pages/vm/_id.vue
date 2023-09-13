<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <div>
                            <span class="text-monospace font-weight-bolder fw-500 fs-20 mb-0" style="max-width: 300px;">ECS-vm100</span>
                            <span class="breadcrumb-text" style="margin-left: 10px;">中国 - 广州</span>
                            <span>&nbsp;&nbsp;|&nbsp;&nbsp;(</span>
                            <span class="breadcrumb-text">公</span>
                            <span>)</span>
                            <span class="breadcrumb-text">192.168.36.1 <i class="la la-copy" style="cursor: pointer;"></i></span>
                        </div>
                        <div class="breadcrumb-action justify-content-center flex-wrap btn-action">
                            <div>
                                <button class="btn btn-default btn-sm btn-primary" type="button" id="button1">
                                    登录
                                </button>
                            </div>
                            <!-- 关机 或 开机 -->
                            <div>
                                <button class="btn btn-default btn-sm btn-white text-info" type="button" id="button2">
                                    关机
                                </button>
                            </div>
                            <!-- 重启 -->
                            <div>
                                <button class="btn btn-default btn-sm btn-white text-info" type="button" id="button3">
                                    重启
                                </button>
                            </div>
                            <!-- 重置密码 -->
                            <div>
                                <button class="btn btn-default btn-sm btn-white text-info" type="button" id="button4">
                                    重置密码
                                </button>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-sm btn-default btn-white dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="la la-download"></i> 更多操作
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <a href="" class="dropdown-item">重装系统</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <p class="color-dark fw-500 fs-20 mb-0">实例信息</p>
                        </div>
                        <div class="card-body">
                            <div>
                                <label>实例ID</label>
                                <span class="span-level-ip">100</span>
                            </div>
                            <div>
                                <label>实例名称</label>
                                <span class="span-level-5">ECS-vm100</span>
                                <i class="la la-edit" style="cursor: pointer;"></i>
                            </div>
                            <div>
                                <label>实例状态</label>
                                <span class="span-level-5"><img height="24" width="24" :src="'/assets/icons/svg/0.svg'" /></span>
                                <span>运行中</span>
                            </div>
                            <div>
                                <label>地域和可用区</label>
                                <span class="span-level-2">中国&nbsp;&nbsp;|&nbsp;&nbsp;广州</span>
                            </div>
                            <div>
                                <label>实例规格</label>
                                <span class="span-level-5">CPU - </span>
                                <span class="span-text-font">1核</span>
                                <span>内存 - </span>
                                <span class="span-text-font">1G</span>
                            </div>
                            <div>
                                <label>操作系统</label>
                                <span class="span-level-5"><img height="24" width="24" :src="'/assets/icons/svg/ubuntu.svg'" /></span>
                                <span>Ubuntu 20.04</span>
                            </div>
                            <div>
                                <label>公网IP</label>
                                <span class="span-level-ip"><i class="iconfont icon-wangluo" style="color: #ff8800c7;"></i></span>
                                <span>192.168.36.1</span>  
                            </div>
                            <div>
                                <label>用户名密码</label>
                                <span class="span-level-user">root</span>
                                <span>/</span>
                                <span>123456</span>
                            </div>
                            <div>
                                <label>创建时间</label>
                                <span class="span-level-5">2023-9-1 12:34:12</span>
                            </div>
                            <div>
                                <label>到期时间</label>
                                <span class="span-level-5">2023-9-1 12:34:12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <p class="color-dark fw-500 fs-20 mb-0">实例监控</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        layout: 'Console',
        head() {
            return {
                title: '实例管理 - QimenIDC',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: '实例管理 - QimenIDC'
                    }
                ],
                link: [
                    {
                        rel: 'stylesheet',
                        href: '//at.alicdn.com/t/c/font_4242563_kromlkm7t9r.css'
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .btn-action > div {
        margin-left: 10px;
    }
    /* label字体加粗 */
    .card-body label {
        font-weight: 400;
    }
    /* 设置每个内容之间的距离 */
    .card-body > div {
        margin-bottom: 10px;
    }
    .card-body > div > span {
        /* 字体加粗 */
        font-weight: 600;
    }
    .span-text-font {
        font-weight: 800;
    }
    /* 设置内容之间的距离分级 */
    .span-level-1 {
        margin-left: 10px;
    }
    .span-level-2 {
        margin-left: 20px;
    }
    .span-level-3 {
        margin-left: 30px;
    }
    .span-level-user {
        margin-left: 35px;
    }
    .span-level-4 {
        margin-left: 40px;
    }
    .span-level-5 {
        margin-left: 50px;
    }
    .span-level-6 {
        margin-left: 60px;
    }
    .span-level-7 {
        margin-left: 70px;
    }
    .span-level-ip {
        margin-left: 65px;
    }

    
</style>
