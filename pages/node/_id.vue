<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-lg-12">

                <div class="breadcrumb-main">
                    <h4 class="text-capitalize breadcrumb-title">节点信息</h4>
                    <div class="breadcrumb-action justify-content-center flex-wrap">
                        <div class="action-btn">

                            <div class="form-group mb-0">
                                <div class="input-container icon-left position-relative">
                                    <span class="input-icon icon-left">
                                        <span data-feather="calendar"></span>
                                    </span>
                                    <input type="text" class="form-control form-control-default date-ranger"
                                        name="date-ranger" placeholder="2023.11.1 - 2023.12.31">
                                    <span class="input-icon icon-right">
                                        <span data-feather="chevron-down"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown action-btn">
                            <button class="btn btn-sm btn-default btn-white dropdown-toggle" type="button"
                                id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="la la-share"></i> 分享
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                                <span class="dropdown-item">分享链接</span>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">
                                    <i class="la la-facebook"></i> Facebook</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-twitter"></i> Twitter</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-google"></i> Google</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-feed"></i> Feed</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-instagram"></i> Instagram</a>
                            </div>
                        </div>
                        <div class="action-btn">
                            <a href="" class="btn btn-sm btn-primary btn-add">
                                <i class="la la-plus"></i> Add New</a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-12" style="margin-bottom: 25px;">

                <div class="card">
                    <div class="card-header color-dark fw-500">
                        {{ nodeData.name }}（{{ nodeData.host }}）
                        <span v-if="nodeData.status === 0"
                            class="text-success bg-opacity-success color-success rounded-pill userDatatable-content-status active">节点正常</span>
                        <span v-if="nodeData.status === 1"
                            class="text-danger bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">节点暂停</span>
                    </div>
                    <div class="card-body p-0">
                        <div class="table4  p-25 bg-white mb-30">
                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <thead>
                                        <tr class="userDatatable-header">
                                            <th>
                                                <span class="userDatatable-title">名称</span>
                                            </th>
                                            <th>
                                                <span class="userDatatable-title">节点类型</span>
                                            </th>
                                            <th>
                                                <span class="userDatatable-title">版本</span>
                                            </th>
                                            <th>
                                                <span class="userDatatable-title">区域</span>
                                            </th>
                                            <th>
                                                <span class="userDatatable-title">实例数量</span>
                                            </th>
                                            <th>
                                                <span class="userDatatable-title">IP地址数量(已用/总)</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="userDatatable-content">
                                                    {{ nodeData.name }}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="userDatatable-content">
                                                    <img height="24" width="24" :src="'/assets/icons/svg/pve.svg'" /> {{
                                                        nodeData.nodeName }}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="userDatatable-content">
                                                    <img height="24" width="24" :src="'/assets/icons/svg/pve.svg'" /> {{
                                                        nodeInfoData.pveversion }}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="userDatatable-content">
                                                    {{ nodeData.area }}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="userDatatable-content">
                                                    开发中
                                                </div>
                                            </td>
                                            <td>
                                                <div class="userDatatable-content">
                                                    开发中
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-8 m-bottom-30">

                <div class="card border-0">
                    <div class="card-header">
                        <h6>数据大全</h6>
                        <div class="card-extra">
                            <ul class="card-tab-links mr-3 nav-tabs nav">
                                <li>
                                    <a class="active" href="#t_channel-today" data-toggle="tab" id="t_channel-today-tab"
                                        role="tab" area-controls="t_channel-table" aria-selected="true">概况</a>
                                </li>
                                <li>
                                    <a href="#t_channel-week" data-toggle="tab" id="t_channel-week-tab" role="tab"
                                        area-controls="t_channel-table" aria-selected="false" @click="getNetInfo()">网卡</a>
                                </li>
                                <li>
                                    <a href="#t_channel-month" data-toggle="tab" id="t_channel-month-tab" role="tab"
                                        area-controls="t_channel-table" aria-selected="fasle" @click="getVmInfo()">实例</a>
                                </li>
                                <!-- <li>
                                    <a href="#t_channel-year" data-toggle="tab" id="t_channel-year-tab" role="tab"
                                        area-controls="t_channel-table" aria-selected="false">Year</a>
                                </li> -->
                            </ul>
                            <div class="dropdown dropleft">
                                <a href="#" role="button" id="traffic" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span data-feather="more-horizontal"></span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="traffic">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="t_channel-today" role="tabpanel"
                                aria-labelledby="t_channel-today-tab">
                                <div class="table-responsive">
                                    <div class="" style="padding-left: 27px; padding-right: 27px;">
                                        <div class="node-content-left">
                                            <div class="node-content-item"><span class="title">CPU(S)</span>
                                                <span class="color-blue" v-if="nodeInfoData.cpuinfo">
                                                    {{ nodeInfoData.cpuinfo.cores }}x {{ nodeInfoData.cpuinfo.model }} @
                                                    {{ (nodeInfoData.cpuinfo.mhz / 1000).toFixed(1) }}0GHz
                                                    ({{ nodeInfoData.cpuinfo.hvm }}插口)</span>
                                            </div>
                                            <div class="node-content-item"><span class="title">内核版本</span>
                                                <span class="color-blue">{{ nodeInfoData.kversion }}</span>
                                            </div>
                                            <div class="node-content-item"><span class="title">PVE版本</span>
                                                <span class="color-blue">{{ nodeInfoData.pveversion }}</span>
                                            </div>
                                            <div class="node-content-item"><span class="title">运行时间</span>
                                                <span class="color-blue">{{ (nodeInfoData.uptime / 60 / 60 / 24).toFixed(0)
                                                }}天</span>
                                            </div>
                                        </div>
                                        <div class="node-content-right">
                                            <div class="el-row" style="margin-left: -10px; margin-right: -10px;">
                                                <div class="  el-col-sm-12"
                                                    style="padding-left: 10px; padding-right: 10px;">
                                                    <div class="item2_content">
                                                        <div class="item2_swap">
                                                            <div class="item2_swap_text"><img
                                                                    src="/assets/icons/svg/cpu-line.e52baf02.svg">CPU利用率
                                                            </div>
                                                            <div class="item2_swap_text" v-if="nodeInfoData.cpuinfo">{{
                                                                (nodeInfoData.cpu *
                                                                    100).toFixed(2) }}% of {{ nodeInfoData.cpuinfo.cores }}
                                                                CPU(s) </div>
                                                        </div>
                                                        <div class="progress" style="height: 12px;">
                                                            <div :class="cpuBarClass(nodeInfoData.cpu * 100)"
                                                                role="progressbar"
                                                                :style="{ width: nodeInfoData.cpu * 100 + '%' }"
                                                                :aria-valuenow="(nodeInfoData.cpu * 100).toFixed(2)"
                                                                aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item2_content">
                                                        <div class="item2_swap">
                                                            <div class="item2_swap_text"><img
                                                                    src="/assets/icons/svg/load.d2f84316.svg">平均负荷
                                                            </div>
                                                            <div class="item2_swap_text">
                                                                <div v-if="nodeInfoData.loadavg">
                                                                    {{ nodeInfoData.loadavg[0] }},{{ nodeInfoData.loadavg[1]
                                                                    }},{{ nodeInfoData.loadavg[2] }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item2_content">
                                                        <div class="item2_swap">
                                                            <div class="item2_swap_text"><img
                                                                    src="/assets/icons/svg/memory.efe6b189.svg">内存使用率
                                                            </div>
                                                            <div class="item2_swap_text" v-if="nodeInfoData.memory">
                                                                {{ (nodeInfoData.memory.used /
                                                                    nodeInfoData.memory.total * 100).toFixed(2) }}%
                                                                ({{ (nodeInfoData.memory.used / 1024 / 1024 /
                                                                    1024).toFixed(1) }}GB
                                                                of {{ (nodeInfoData.memory.total / 1024 / 1024 /
                                                                    1024).toFixed(1)
                                                                }}GB)
                                                            </div>
                                                        </div>
                                                        <div class="progress" style="height: 12px;">
                                                            <div v-if="nodeInfoData.memory" :class="cpuBarClass(nodeInfoData.memory.used /
                                                                nodeInfoData.memory.total * 100)" role="progressbar"
                                                                :style="{
                                                                    width: nodeInfoData.memory.used /
                                                                        nodeInfoData.memory.total * 100 + '%'
                                                                }"
                                                                :aria-valuenow="(nodeInfoData.memory.used / nodeInfoData.memory.total * 100).toFixed(2)"
                                                                aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="  el-col-sm-12"
                                                    style="padding-left: 10px; padding-right: 10px;">
                                                    <div class="item2_content">
                                                        <div class="item2_swap">
                                                            <div class="item2_swap_text"><img
                                                                    src="/assets/icons/svg/swap.928aae56.svg">SWAP使用率
                                                            </div>
                                                            <div v-if="nodeInfoData.swap" class="item2_swap_text">
                                                                {{ (nodeInfoData.swap.used /
                                                                    nodeInfoData.swap.total * 100).toFixed(2) }}%
                                                                ({{ (nodeInfoData.swap.used / 1024 / 1024 /
                                                                    1024).toFixed(1) }}GB
                                                                of {{ (nodeInfoData.swap.total / 1024 / 1024 /
                                                                    1024).toFixed(1)
                                                                }}GB)
                                                            </div>
                                                        </div>
                                                        <div class="progress" style="height: 12px;">
                                                            <div v-if="nodeInfoData.swap" :class="cpuBarClass(nodeInfoData.swap.used /
                                                                nodeInfoData.swap.total * 100)" role="progressbar"
                                                                :style="{
                                                                    width: nodeInfoData.swap.used /
                                                                        nodeInfoData.swap.total * 100 + '%'
                                                                }"
                                                                :aria-valuenow="(nodeInfoData.swap.used / nodeInfoData.swap.total * 100).toFixed(2)"
                                                                aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item2_content">
                                                        <div class="item2_swap">
                                                            <div class="item2_swap_text">KSM共享</div>
                                                            <div class="item2_swap_text" v-if="nodeInfoData.ksm">
                                                                {{ nodeInfoData.ksm.shared / 1024 / 1024 / 1024 }}GB
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item2_content">
                                                        <div class="item2_swap ">
                                                            <div class="item2_swap_text"><img
                                                                    src="/assets/icons/svg/wait.aeedf2cc.svg">IO延迟
                                                            </div>
                                                            <div class="item2_swap_text">
                                                                {{ (nodeInfoData.wait * 100).toFixed(2) }}%
                                                            </div>
                                                        </div>
                                                        <div class="progress" style="height: 12px;">
                                                            <div :class="cpuBarClass(nodeInfoData.wait * 100)"
                                                                role="progressbar"
                                                                :style="{ width: nodeInfoData.wait * 100 + '%' }"
                                                                :aria-valuenow="(nodeInfoData.wait * 100).toFixed(2)"
                                                                aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="  el-col-sm-12"
                                                    style="padding-left: 10px; padding-right: 10px;">
                                                    <div class="item2_content">
                                                        <div class="item2_swap">
                                                            <div class="item2_swap_text"><img
                                                                    src="/assets/icons/svg/hardDisk.fd3695f4.svg">硬盘空间(/)
                                                            </div>
                                                            <div class="item2_swap_text" v-if="nodeInfoData.rootfs">
                                                                {{ (nodeInfoData.rootfs.used /
                                                                    nodeInfoData.rootfs.total * 100).toFixed(2) }}%
                                                                ({{ (nodeInfoData.rootfs.used / 1024 / 1024 /
                                                                    1024).toFixed(1) }}GB
                                                                of {{ (nodeInfoData.rootfs.total / 1024 / 1024 /
                                                                    1024).toFixed(1)
                                                                }}GB)
                                                            </div>
                                                        </div>
                                                        <div class="progress" style="height: 12px;">
                                                            <div v-if="nodeInfoData.rootfs" :class="cpuBarClass(nodeInfoData.rootfs.used /
                                                                nodeInfoData.rootfs.total * 100)" role="progressbar"
                                                                :style="{
                                                                    width: nodeInfoData.rootfs.used /
                                                                        nodeInfoData.rootfs.total * 100 + '%'
                                                                }"
                                                                :aria-valuenow="(nodeInfoData.rootfs.used / nodeInfoData.rootfs.total * 100).toFixed(2)"
                                                                aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-xxl-6 m-bottom-30 m-top-30">
                                    <div class="card border-0">
                                        <div class="card-header">
                                            <h6>负载信息</h6>
                                            <div class="card-extra">
                                                <div class="dropdown dropleft">
                                                    <a href="#" role="button" id="else" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        <span data-feather="more-horizontal"></span>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="else">
                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-content">
                                                <div class="tab-pane fade active show" id="se_region-today" role="tabpanel"
                                                    aria-labelledby="se_region-today-tab">
                                                    <div class="row">
                                                        <div
                                                            class="col-md-6 d-flex align-items-center justify-content-center">
                                                            <div id="cpuEcharts" style="width: 100%;height: 250px;"></div>
                                                        </div>
                                                        <div
                                                            class="col-md-6 d-flex align-items-center justify-content-center">
                                                            <div id="loadEcharts" style="width: 100%;height: 250px;"></div>
                                                        </div>
                                                        <div
                                                            class="col-md-6 d-flex align-items-center justify-content-center">
                                                            <div id="memEcharts" style="width: 100%;height: 250px;"></div>
                                                        </div>
                                                        <div
                                                            class="col-md-6 d-flex align-items-center justify-content-center">
                                                            <div id="diskEcharts" style="width: 100%;height: 250px;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="t_channel-week" role="tabpanel"
                                aria-labelledby="t_channel-week-tab">
                                <div class="table-responsive">
                                    <table class="table table--default traffic-table">
                                        <thead>
                                            <tr>
                                                <th>名称</th>
                                                <th>类别</th>
                                                <th>活动</th>
                                                <th>自动启动</th>
                                                <th>VLAN感知</th>
                                                <th>端口/从属</th>
                                                <!-- <th>Bond模式</th> -->
                                                <th>CIDR</th>
                                                <th>网关</th>
                                                <th>备注</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="netInfoData">
                                            <tr v-for="item in netInfoData" :key="item.iface">
                                                <td>{{ item.iface }}</td>
                                                <td>{{ item.type }}</td>
                                                <td>{{ item.active }}</td>
                                                <td>{{ item.autostart }}</td>
                                                <td>{{ item.bridge_vlan_aware }}</td>
                                                <td>{{ item.bridge_ports }}</td>
                                                <td>{{ item.cidr }}</td>
                                                <td>{{ item.gateway }}</td>
                                                <td>{{ item.comments }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="t_channel-month" role="tabpanel"
                                aria-labelledby="t_channel-month-tab">
                                <div class="table-responsive">
                                    <table class="table table--default traffic-table">
                                        <thead>
                                            <tr class="userDatatable-header">
                                                <th>
                                                    <div class="d-flex align-items-center">
                                                        <div class="custom-checkbox  check-all">
                                                            <input class="checkbox" type="checkbox" id="check-3">
                                                            <label for="check-3">
                                                                <span class="checkbox-text userDatatable-title">ID</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">主机名</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">状态</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">IP</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">操作系统</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">配置</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">CPU/内存使用率</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">实时带宽(in/out)</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">磁盘IO(读/写)</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">节点地区</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-for="item in vmInfoData" :key="item.id">
                                                <td>
                                                    <div class="d-flex">
                                                        <div class="userDatatable__imgWrapper d-flex align-items-center">
                                                            <div class="checkbox-group-wrapper">
                                                                <div class="checkbox-group d-flex">
                                                                    <div
                                                                        class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                                                        <input class="checkbox" type="checkbox"
                                                                            id="check-grp-12">
                                                                        <label for="check-grp-12"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <nuxt-link :to="`/vm/${item.id}`" class="text-black-50 fw-500">
                                                            {{ item.id }}
                                                        </nuxt-link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text-info">
                                                        <a :href="`/vm/${item.id}`">{{ item.hostname }}</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="status-cell">

                                                        <img v-if="item.status <= 4" height="24" width="24"
                                                            :src="'/assets/icons/svg/' + item.status + '.svg'" />
                                                        <img v-if="item.status === 5" height="24" width="24"
                                                            :src="'/assets/icons/svg/4.svg'" />
                                                        <img v-if="item.status > 5" height="24" width="24"
                                                            :src="'/assets/icons/svg/3.svg'" />
                                                        <!--0=运行中、1=已关机、2=挂起、3=恢复中、4=暂停、5=到期、6=创建中、7=开机中、8=关机中
                                                            9=停止中（强制关机中10=挂起中、11=暂停中、12重启中、13=重装系统中、14=修改密码中-->
                                                        <span v-if="item.status === 0" class="text-success">运行中</span>
                                                        <span v-if="item.status === 1" class="text-danger">已关机</span>
                                                        <span v-if="item.status === 2" class="text-warning">挂起</span>
                                                        <span v-if="item.status === 3" class="text-danger">恢复中</span>
                                                        <span v-if="item.status === 4" class="text-danger">暂停</span>
                                                        <span v-if="item.status === 5" class="text-danger">到期</span>
                                                        <span v-if="item.status === 6" class="text-warning">创建中</span>
                                                        <span v-if="item.status === 7" class="text-warning">正在开机</span>
                                                        <span v-if="item.status === 8" class="text-warning">正在关机</span>
                                                        <span v-if="item.status === 9" class="text-warning">正在停止</span>
                                                        <span v-if="item.status === 10" class="text-warning">正在挂起</span>
                                                        <span v-if="item.status === 11" class="text-warning">正在暂停</span>
                                                        <span v-if="item.status === 12" class="text-warning">正在重启</span>
                                                        <span v-if="item.status === 13" class="text-warning">正在重装系统</span>
                                                        <span v-if="item.status === 14" class="text-warning">正在修改密码</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <i class="iconfont icon-wangluo" style="color: #ff8800c7;"></i>
                                                        {{ item.IP }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <img height="24" width="24"
                                                            :src="'/assets/icons/svg/' + item.osType + '.svg'" />
                                                        {{ item.operatingSystem }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.cpuMemory }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="progress-wrap d-flex align-items-center mb-15">
                                                        <span class="progress-text">CPU：</span>
                                                        <div class="progress" style="height: 12px;">
                                                            <div :class="cpuBarClass(item.cpuUsage)" role="progressbar"
                                                                :style="{ width: item.cpuUsage + '%' }"
                                                                :aria-valuenow="item.cpuUsage" aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="progress-wrap d-flex align-items-center">
                                                        <span class="progress-text">内存：</span>
                                                        <div class="progress" style="height: 12px;">
                                                            <div :class="memoryBarClass(item.memoryUsage)"
                                                                role="progressbar"
                                                                :style="{ width: item.memoryUsage + '%' }"
                                                                :aria-valuenow="item.memoryUsage" aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div>
                                                        <img height="16" width="16" src="/assets/icons/svg/up.svg" />
                                                        <span class="text-warning">{{ item.netOut }} Mbps</span>
                                                    </div>
                                                    <div>
                                                        <img height="16" width="16" src="/assets/icons/svg/down.svg" />
                                                        <span class="text-success">{{ item.netIn }} Mbps</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.diskIO }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span class="text-info">[{{ item.area }}]</span>
                                                        <span class="text-success">{{ item.nodeName }}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="t_channel-year" role="tabpanel"
                                aria-labelledby="t_channel-year-tab">
                                <div class="table-responsive">
                                    <table class="table table--default traffic-table">
                                        <thead>
                                            <tr>
                                                <th>Channel</th>
                                                <th>Sessions</th>
                                                <th>Goal Conv. Rate</th>
                                                <th>Goals Completions</th>
                                                <th style="max-width: 150px">Percentage of Traffic (%)</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Direct</td>
                                                <td>7,256</td>
                                                <td>4.5%</td>
                                                <td>265</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-primay" role="progressbar"
                                                            style="width: 65.75%" aria-valuenow="65.75" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>65.75%</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>6,658</td>
                                                <td>4.9%</td>
                                                <td>453</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-secondary" role="progressbar"
                                                            style="width: 85.14%" aria-valuenow="85.14" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>45.14%</td>
                                            </tr>
                                            <tr>
                                                <td>Organic Search</td>
                                                <td>4,698</td>
                                                <td>6.5%</td>
                                                <td>359</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                            style="width: 95.36%" aria-valuenow="95.36" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>95.36%</td>
                                            </tr>
                                            <tr>
                                                <td>Referral</td>
                                                <td>6,856</td>
                                                <td>4.6%</td>
                                                <td>156</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style="width: 45.25%" aria-valuenow="45.25" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>45.25%</td>
                                            </tr>
                                            <tr>
                                                <td>Social Media</td>
                                                <td>9,456</td>
                                                <td>3.2%</td>
                                                <td>752</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            style="width: 39.94%" aria-valuenow="39.94" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>39.94%</td>
                                            </tr>
                                            <tr>
                                                <td>Other</td>
                                                <td>1,247</td>
                                                <td>5.2%</td>
                                                <td>421</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger" role="progressbar"
                                                            style="width: 60.58%" aria-valuenow="60.58" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>60.58%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { notification } from 'ant-design-vue';
export default {
    layout: 'Console',
    async asyncData({ params }) {
        const nodeId = params.id; // 通过 $route.params.id 获取路由参数中的 ID 值
        return {
            nodeId
        };
    },
    head() {
        return {
            title: '节点信息 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '节点信息 - QimenIDC'
                }
            ],
            script: [
                { src: '/assets/vendor_assets/js/Chart.min.js' },
                { src: '/assets/vendor_assets/js/charts.js' },
                { src: '/assets/vendor_assets/js/google-chart.js' },
            ]
        }
    },
    data() {
        return {
            tableData: {
                vmNum: 0, //虚拟机数
                onlineVmNum: 0, //在线虚拟机数
                nodeNum: 0, //节点总数
            },
            nodeData: [],
            nodeInfoData: [],
            netInfoData: [],
            vmInfoData: [],
            loadAvgData: [],
        }
    },
    methods: {
        fetchData() {
            // 获取节点数据
            let url = `/api/selectNodeByPage?page=1&size=200`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    let newTableData = null;
                    records.forEach(record => {
                        // 构建新的记录对象
                        if (record.id == this.nodeId) {
                            newTableData = {
                                id: record.id,
                                name: record.name || '未知',
                                area: record.area || '未知',
                                host: record.host,
                                port: record.port,
                                username: record.username,
                                password: record.password,
                                realm: record.realm,
                                nodeName: record.nodeName,
                                status: record.status,
                                sshPort: record.sshPort,
                                sshUsername: record.sshUsername,
                                sshPassword: record.sshPassword,
                                controllerStatus: record.controllerStatus,
                            };
                            return;
                        }
                    });
                    this.nodeData = newTableData;
                }
            });
            //获取节点信息
            url = `/api/getNodeInfoByOne?nodeId=${this.nodeId}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    // const newTableData = [];
                    // records.forEach(record => {
                    //     // 构建新的记录对象
                    //     const newRecord = {
                    //         id: record.id,
                    //         nodeId: record.nodeId,
                    //         vmId: record.vmId,
                    //         poolId: record.poolId,
                    //         ip: record.ip,
                    //         subnetMask: record.subnetMask,
                    //         gateway: record.gateway,
                    //         dns1: record.dns1 || ' ',
                    //         dns2: record.dns2 || ' ',
                    //         status: record.status,
                    //     };
                    //     // 添加到新的数组中
                    //     newTableData.push(newRecord);
                    // });
                    this.nodeInfoData = data;
                }
            });
            //获取节点负载
            url = `/api/getNodeLoadAvg?nodeId=${this.nodeId}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    this.loadAvgData = data;

                    this.cpuEcharts()
                    this.memEcharts()
                    this.diskEcharts()
                    this.loadEcharts()
                }
            });
        },
        getNetInfo() {
            // 获取节点数据
            const url = `/api/getPveNodeNetworkInfo?nodeId=${this.nodeId}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data;
                    const newTableData = [];
                    records.forEach(record => {
                        // 构建新的记录对象
                        const newRecord = {
                            iface: record.iface || '',
                            type: `pve`,
                            active: record.active || '',
                            autostart: record.autostart || '',
                            bridge_ports: record.bridge_ports || '',
                            cidr: record.cidr,
                            gateway: record.gateway || '',
                            bridge_vlan_aware: record.bridge_vlan_aware || '',
                            comments: record.comments || '',
                        };

                        // 添加到新的数组中
                        newTableData.push(newRecord);
                    });
                    this.netInfoData = newTableData;
                }
            });
        },
        getVmInfo() {
            // 使用异步获取数据
            const url = `/api/getVmByPage?page=1&size=20`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    const newTableData = [];
                    records.forEach(record => {
                        if (record.vmhost.nodeid == this.nodeId) {
                            const vmhost = record.vmhost || 'none';
                            const os = record.os || 'none';
                            const current = record.current || null;
                            let diskIOReadTotal = 0;
                            let diskIOWriteTotal = 0;

                            let netInTotal = 0;
                            let netOutTotal = 0;

                            let cpuUsage = 0;
                            let memoryUsage = 0;
                            if (current != null) {
                                // 计算磁盘IO的读写总量
                                const blockstat = current.data.blockstat || {}; // 处理blockstat可能为空的情况

                                for (const device in blockstat) {
                                    diskIOReadTotal += blockstat[device].rd_bytes || 0;
                                    diskIOWriteTotal += blockstat[device].wr_bytes || 0;
                                }
                                // 计算实时带宽的入口和出口总量
                                const nics = current.data.nics || {}; // 处理nics可能为空的情况

                                for (const nic in nics) {
                                    netInTotal += nics[nic].netin || 0;
                                    netOutTotal += nics[nic].netout || 0;
                                }

                                cpuUsage = current.data.cpu ? (current.data.cpu * 100).toFixed(2) : 0;
                                memoryUsage = current.data.mem ? (current.data.mem / current.data.maxmem * 100).toFixed(2) : 0;
                            }
                            let ip = `none`;
                            // 获取IP为1的地址
                            const ipConfig = vmhost.ipConfig['1'];
                            if (ipConfig) {
                                // ip=192.168.36.1/24,gw=192.168.36.2
                                ip = ipConfig.split('/')[0].split('=')[1];
                            }
                            // 构建新的记录对象
                            const newRecord = {
                                id: vmhost.id || 'none',
                                vmid: vmhost.vmid || 'none',
                                type: `pve`,
                                nodeName: record.nodeName || 'none',
                                area: record.area || 'none',
                                hostname: vmhost.hostname || 'none',
                                status: vmhost.status, // 处理status可能为空的情况
                                IP: ip || 'none',
                                operatingSystem: os.name || 'none', // 处理operatingSystem可能为空的情况
                                osType: os.osType || 'none', // 处理osType可能为空的情况
                                vCpu: vmhost.cores || '0',
                                memory: vmhost.memory || '0',
                                // 组合成文字
                                cpuMemory: `${vmhost.cores}C/${vmhost.memory}M`,
                                // cpuUsage: current.cpu ? current.cpu * 100 : 0, 
                                cpuUsage: cpuUsage || '0',
                                memoryUsage: memoryUsage || '0',
                                netIn: (netInTotal / 1024 / 1024 / 1024).toFixed(2) || '0',
                                netOut: (netOutTotal / 1024 / 1024 / 1024).toFixed(2) || '0',
                                diskIO: `Read: ${(diskIOReadTotal / 1024 / 1024 / 1024).toFixed(2)} MB / Write: ${(diskIOWriteTotal / 1024 / 1024 / 1024).toFixed(2)} MB` || '0',
                            };

                            // 添加到新的数组中
                            newTableData.push(newRecord);
                        }
                    });
                    this.vmInfoData = newTableData;
                    this.total = data.total;
                    this.currentPage = data.current;
                    this.totalPages = data.pages;
                }
            });

        },
        cpuEcharts() {
            // 找到容器
            let cpuEcharts = document.getElementById('cpuEcharts')
            // 初始化echarts实例
            let myChart = this.$echarts.init(cpuEcharts)
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: 'CPU'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.loadAvgData.map(item => this.formatTime(item.time))
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.loadAvgData.map(item => (item.cpu * 100).toFixed(2)),
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表
            myChart.setOption(option)
        },
        memEcharts() {
            // 找到容器
            let memEcharts = document.getElementById('memEcharts')
            // 初始化echarts实例
            let myChart = this.$echarts.init(memEcharts)
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: '内存(GB)'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['已使用', '总量']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: this.loadAvgData.map(item => this.formatTime(item.time))
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '已使用',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: this.loadAvgData.map(item => (item.memused / 1024 / 1024 / 1024).toFixed(2))
                    },
                    {
                        name: '总量',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: this.loadAvgData.map(item => (item.memtotal / 1024 / 1024 / 1024).toFixed(2))
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表
            myChart.setOption(option)
        },
        diskEcharts() {
            // 找到容器
            let diskEcharts = document.getElementById('diskEcharts')
            // 初始化echarts实例
            let myChart = this.$echarts.init(diskEcharts)
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: '网络(KB)'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['出', '进']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: this.loadAvgData.map(item => this.formatTime(item.time))
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '出',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: this.loadAvgData.map(item => (item.netin / 1024).toFixed(2))
                    },
                    {
                        name: '进',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: this.loadAvgData.map(item => (item.netout / 1024).toFixed(2))
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表
            myChart.setOption(option)
        },
        loadEcharts() {
            // 找到容器
            let loadEcharts = document.getElementById('loadEcharts')
            // 初始化echarts实例
            let myChart = this.$echarts.init(loadEcharts)
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: '负载'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.loadAvgData.map(item => this.formatTime(item.time))
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.loadAvgData.map(item => (item.loadavg).toFixed(2)),
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表
            myChart.setOption(option)
        },
        cpuBarClass(cpuUsage) {
            if (cpuUsage < 30) {
                return 'progress-bar bg-success';
            } else if (cpuUsage < 70) {
                return 'progress-bar bg-warning';
            } else {
                return 'progress-bar bg-danger';
            }
        },
        memoryBarClass(memoryUsage) {
            if (memoryUsage < 30) {
                return 'progress-bar bg-success';
            } else if (memoryUsage < 70) {
                return 'progress-bar bg-warning';
            } else {
                return 'progress-bar bg-danger';
            }
        },
        formatTime(timestamp) {//时间戳转换时间
            // 将秒转换为毫秒
            const timestampInMilliseconds = timestamp * 1000;
            // 创建Date对象
            const date = new Date(timestampInMilliseconds);
            // 提取小时和分钟
            const hours = date.getHours();
            const minutes = date.getMinutes();
            // 格式化时间
            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        },
    },
    mounted() {
        this.fetchData()
    }
}
</script>
<style>
.node-content-left {
    float: left;
    width: 49%;
}

.node-content-right {
    float: right;
    width: 49%;
}

.node-content-left .node-content-item {
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 24px;
    border-top: 1px solid #f5f4f7;
}

.node-content-left .node-content-item .title {
    min-width: 80px;
}

.node-content-left .node-content-item .color-blue {
    text-align: right;
}

.node-content-right img {
    width: 14px;
    height: 14px;
    opacity: .8;
    margin-right: 10px;
}

.item2_swap {
    margin-bottom: 0.2rem;
}

.item2_swap_text {
    margin-bottom: 0.2rem;
}

.progress {
    margin-bottom: 0.2rem;
}


@media only screen and (min-width: 768px) {
    .el-col-sm-12 {
        width: 50%;
        float: left;
    }
}
</style>