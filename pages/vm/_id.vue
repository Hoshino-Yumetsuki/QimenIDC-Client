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
                        <div class="card-header">
                            <p class="color-dark fw-500 fs-20 mb-0">实例监控</p>
                        </div>
                        <div class="card-body" id="echarts">
                            <div class="row">
                                <div class="col">
                                    <span class="font-weight-bold">CPU利用率（%）</span>
                                    <div>
                                        <span>当前：</span>
                                        <span>4.666%</span>
                                        <span> 总量</span>
                                        <span>2核</span>
                                    </div>
                                    <!-- CPU监控 -->
                                    <div id="cpuEcharts" style="width: 100%;height: 150px;"></div>
                                </div>
                                <div class="col">
                                    <span class="font-weight-bold">内存利用率（%）</span>
                                    <div>
                                        <span>当前：</span>
                                        <span>2245.83MB(74.66%)</span>
                                        <span> 总量</span>
                                        <span>4GB</span>
                                    </div>
                                    <!-- 内存监控 -->
                                    <div id="memoryEcharts" style="width: 100%;height: 150px;"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <span class="font-weight-bold">磁盘IO使用（kb/s）</span>
                                    <div>
                                        <span>当前：</span>
                                        <span>0.015（入）</span>
                                        <span>0.035（出）</span>
                                    </div>
                                    <!-- 磁盘监控 -->
                                    <div id="diskEcharts" style="width: 100%;height: 150px;"></div>
                                </div>
                                <div class="col">
                                    <span class="font-weight-bold">网络使用（kb/s）</span>
                                    <div>
                                        <span>当前：</span>
                                        <span>9.451（读）</span>
                                        <span>156.954（写）</span>
                                    </div>
                                    <!-- 网络监控 -->
                                    <div id="networkEcharts" style="width: 100%;height: 150px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 up-down-margin">
                    <div class="card">
                        <div class="card-header">
                            <p class="color-dark fw-500 fs-20 mb-0">资源使用情况</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <div class="info-container">
                                        <span class="font-weight-bold">流量包</span>
                                        <div class="usage-info">
                                            <span>1.5GB</span>
                                            <span>/</span>
                                            <span>1000GB</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col">
                                    <!-- 流量使用饼图 -->
                                    <div id="flowEcharts" class="chart-container"></div>
                                </div>
                                <div class="separator"></div> <!-- 竖线分隔 -->
                                <div class="col">
                                    <div class="info-container">
                                        <span class="font-weight-bold">系统盘</span>
                                        <div class="usage-info">
                                            <span>50GB</span>
                                            <span>/</span>
                                            <span>60GB</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <!-- 系统盘使用饼图 -->
                                    <div id="diskFlowEcharts" class="chart-container"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 up-down-margin">
                    <div class="card">
                        <div class="card-header">
                            <p class="color-dark fw-500 fs-20 mb-0">资源使用情况</p>
                        </div>
                        <div class="card-body">
                            
                        </div>
                    </div>
                </div>
                <!-- 与页脚之间留白 -->
                <div class="col-md-12" style="height: 40px;">
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
        methods: {
            cpuEcharts (){
                // 找到容器
                let cpuEcharts = document.getElementById('cpuEcharts')
                // 初始化echarts实例
                let myChart = this.$echarts.init(cpuEcharts)
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        // 底部时间
                        type: 'category',
                        data: ['21:10', '21:11', '21:12', '21:13', '21:14', '21:15', '21:16', '21:17', '21:18', '21:19', '21:20', '21:21', '21:22', '21:23', '21:24', '21:25', '21:26', '21:27', '21:28', '21:29', '21:30', '21:31', '21:32', '21:33', '21:34']
                    },
                    yAxis: {
                        // 左侧百分比
                        type: 'value'
                    },
                    series: [
                        {
                            name: 'CPU利用率（%）',
                            type: 'line',
                            data: [66, 77, 20, 50, 60, 60, 50, 40, 30, 40, 60, 90, 100, 80, 100, 90, 80, 70, 60, 50, 60, 80, 20, 10, 50],
                            
                            // 删除点
                            showSymbol: false,

                        }
                    ]
                }
                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option)
            },
            // 内存监控
            memoryEcharts (){
                // 找到容器
                let memoryEcharts = document.getElementById('memoryEcharts')
                // 初始化echarts实例
                let myChart = this.$echarts.init(memoryEcharts)
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        // 底部时间
                        type: 'category',
                        data: ['21:10', '21:11', '21:12', '21:13', '21:14', '21:15', '21:16', '21:17', '21:18', '21:19', '21:20', '21:21', '21:22', '21:23', '21:24', '21:25', '21:26', '21:27', '21:28', '21:29', '21:30', '21:31', '21:32', '21:33', '21:34']
                    },
                    yAxis: {
                        // 左侧百分比
                        type: 'value'
                    },
                    series: [
                        {
                            name: '内存利用率（%）',
                            type: 'line',
                            data: [66, 77, 20, 50, 60, 60, 50, 40, 30, 40, 60, 90, 100, 80, 100, 90, 80, 70, 60, 50, 60, 80, 20, 10, 50],
                            
                            // 删除点
                            showSymbol: false,

                        }
                    ]
                }
                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option)
            },
            // 磁盘监控 （蓝色）读 （绿色）写
            diskEcharts (){
                // 找到容器
                let diskEcharts = document.getElementById('diskEcharts')
                // 初始化echarts实例
                let myChart = this.$echarts.init(diskEcharts)
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    // 网格
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    // 底部时间
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['21:10', '21:11', '21:12', '21:13', '21:14', '21:15', '21:16', '21:17', '21:18', '21:19', '21:20', '21:21', '21:22', '21:23', '21:24', '21:25', '21:26', '21:27', '21:28', '21:29', '21:30', '21:31', '21:32', '21:33', '21:34']
                    },
                    // 左侧百分比
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '读（kb/s）',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134],
                            // 删除点
                            showSymbol: false,
                            // 颜色
                            itemStyle: {
                                color: '#00a8ff'
                            }
                        },
                        {
                            name: '写（kb/s）',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234],
                            // 删除点
                            showSymbol: false,
                            // 颜色
                            itemStyle: {
                                color: '#00ff00'
                            }
                        }
                    ]
                }
                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option)
            },
            // 网络监控 （蓝色）出 （绿色）入
            networkEcharts (){
                // 找到容器
                let networkEcharts = document.getElementById('networkEcharts')
                // 初始化echarts实例
                let myChart = this.$echarts.init(networkEcharts)
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    // 网格
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    // 底部时间
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['21:10', '21:11', '21:12', '21:13', '21:14', '21:15', '21:16', '21:17', '21:18', '21:19', '21:20', '21:21', '21:22', '21:23', '21:24', '21:25', '21:26', '21:27', '21:28', '21:29', '21:30', '21:31', '21:32', '21:33', '21:34']
                    },
                    // 左侧百分比
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '出（kb/s）',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134],
                            // 删除点
                            showSymbol: false,
                            // 颜色
                            itemStyle: {
                                color: '#00a8ff'
                            }
                        },
                        {
                            name: '入（kb/s）',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234],
                            // 删除点
                            showSymbol: false,
                            // 颜色
                            itemStyle: {
                                color: '#00ff00'
                            }
                        }
                    ]
                }
                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option)
            },
            // 流量使用饼图
            flowEcharts (){
                // 找到容器
                let flowEcharts = document.getElementById('flowEcharts')
                // 初始化echarts实例
                let myChart = this.$echarts.init(flowEcharts)
                // 自定义仪表盘
                let option = {
                    series: [
                        {
                            type: 'pie',
                            radius: ['90%', '100%'], // 仪表盘大小
                            avoidLabelOverlap: false, // 避免标签重叠
                            hoverAnimation: false, // 鼠标移入变大
                            label: {
                                show: true,
                                position: 'center',
                                formatter: `{a|10%}\n{b|已使用}`,
                                rich: {
                                    a: {
                                        fontSize: 20,
                                        lineHeight: 30,
                                        color: '#00a8ff',
                                    },
                                    b: {
                                        fontSize: 12,
                                        lineHeight: 20,
                                        color: '#666',
                                    },
                                },
                            },
                            data: [
                                {
                                    value: 100,
                                    name: '已使用',
                                    itemStyle: {
                                        color: '#00a8ff'
                                    }
                                },
                                {
                                    value: 1000,
                                    name: '未使用',
                                    itemStyle: {
                                        color: '#e9ecef'
                                    }
                                }
                            ]
                        }
                    ]
                }
                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option)
            },
            // 系统盘使用饼图
            diskFlowEcharts (){
                // 找到容器
                let diskFlowEcharts = document.getElementById('diskFlowEcharts')
                // 初始化echarts实例
                let myChart = this.$echarts.init(diskFlowEcharts)
                // 自定义仪表盘
                let option = {
                    series: [
                        {
                            type: 'pie',
                            radius: ['90%', '100%'], // 仪表盘大小
                            avoidLabelOverlap: false, // 避免标签重叠
                            hoverAnimation: false, // 鼠标移入变大
                            label: {
                                show: true,
                                position: 'center',
                                formatter: `{a|90%}\n{b|已使用}`,
                                rich: {
                                    a: {
                                        fontSize: 20,
                                        lineHeight: 30,
                                        color: '#00a8ff',
                                    },
                                    b: {
                                        fontSize: 12,
                                        lineHeight: 20,
                                        color: '#666',
                                    },
                                },
                            },
                            data: [
                                {
                                    value: 50,
                                    name: '已使用',
                                    itemStyle: {
                                        color: '#00a8ff'
                                    }
                                },
                                {
                                    value: 60,
                                    name: '未使用',
                                    itemStyle: {
                                        color: '#e9ecef'
                                    }
                                }
                            ]
                        }
                    ]
                }
                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option)
            }
        },
        mounted() {
            this.cpuEcharts()
            this.memoryEcharts()
            this.diskEcharts()
            this.networkEcharts()
            this.flowEcharts()
            this.diskFlowEcharts()
        }
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
    /* 两个div直接高度距离 */
    .card-body > div > div {
        margin-top: 3px;
    }
    /* 卡片上下直接间距 */
    .up-down-margin > div{
        margin-top: 20px;
    }
    .info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 20px; /* 调整文字和图表之间的间距 */
    }

    .usage-info {
        /* margin-top: 50px; */
        /* 字体缩小 */
        font-size: 12px;
    }

    .separator {
        width: 1px;
        background-color: #ccc; /* 竖线的颜色 */
        height: 100px; /* 控制竖线的高度 */
        margin: 0 20px; /* 调整竖线与文本之间的间距 */
    }

    .chart-container {
        width: 100%;
        height: 150px;
        /* 图表向上移动 */
        margin-top: -20px;
        /* 图表向左移动 */
        margin-left: -30px;
    }

    
</style>
