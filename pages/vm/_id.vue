<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <div>
                            <span class="text-monospace font-weight-bolder fw-500 fs-20 mb-0"
                                style="max-width: 300px;">ECS-{{ tableData.vmName }}</span>
                            <span class="breadcrumb-text" style="margin-left: 10px;">{{ tableData.area }}</span>
                            <span>&nbsp;&nbsp;|&nbsp;&nbsp;(</span>
                            <span class="breadcrumb-text">公</span>
                            <span>)</span>
                            <span class="breadcrumb-text">{{ tableData.IP }} <i class="la la-copy"
                                    style="cursor: pointer;"></i></span>
                        </div>
                        <div class="breadcrumb-action justify-content-center flex-wrap btn-action">
                            <div>
                                <button class="btn btn-default btn-sm btn-primary" type="button" id="button1">
                                    登录
                                </button>
                            </div>
                            <!-- 关机 或 开机 -->
                            <div>
                                <button v-if="tableData.status === 0" class="btn btn-default btn-sm btn-white text-info"
                                    type="button" id="button2" data-toggle="modal" data-target="#modal-info-confirmed"
                                    @click="setVmStatus('stop', '关机')">
                                    关机
                                </button>
                                <button v-if="tableData.status === 1" class="btn btn-default btn-sm btn-white text-info"
                                    type="button" id="button2" data-toggle="modal" data-target="#modal-info-confirmed"
                                    @click="setVmStatus('start', '开机')">
                                    开机
                                </button>
                            </div>
                            <!-- 重启 -->
                            <div>
                                <button class="btn btn-default btn-sm btn-white text-info" type="button" id="button3"
                                    data-toggle="modal" data-target="#modal-info-confirmed"
                                    @click="setVmStatus('reboot', '重启')">
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
                                <button class="btn btn-sm btn-default btn-white dropdown-toggle" type="button"
                                    id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="la la-download"></i> 更多操作
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <a href="" class="dropdown-item" @click="showReinstallModal($event)">重装系统</a>
                                    <a href="" class="dropdown-item" data-toggle="modal" data-target="#modal-info-confirmed"
                                        @click="setVmStatus('shutdown', '强制关机')">强制关机</a>
                                    <a href="" class="dropdown-item" data-toggle="modal" data-target="#modal-info-confirmed"
                                        @click="setVmStatus('suspend', '挂起')">挂起实例</a>
                                    <a href="" class="dropdown-item" data-toggle="modal" data-target="#modal-info-confirmed"
                                        @click="setVmStatus('resume', '取消挂起')">取消挂起</a>
                                    <a href="" class="dropdown-item" data-toggle="modal" data-target="#modal-info-confirmed"
                                        @click="setVmStatus('pause', '暂停')">暂停实例</a>
                                    <a href="" class="dropdown-item" data-toggle="modal" data-target="#modal-info-confirmed"
                                        @click="setVmStatus('unpause', '取消暂停')">取消暂停</a>
                                    <a href="" class="dropdown-item" data-toggle="modal" data-target="#modal-info-confirmed"
                                        @click="setVmStatus('delete', '删除')">删除实例</a>
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
                                <span class="span-level-ip">{{ vmId }}</span>
                            </div>
                            <div>
                                <label>实例名称</label>
                                <span class="span-level-5">{{ tableData.hostname }}</span>
                                <i class="la la-edit" style="cursor: pointer;"></i>
                            </div>
                            <div>
                                <label>实例状态</label>

                                <span class="span-level-5"><img height="24" width="24"
                                        :src="'/assets/icons/svg/' + tableData.status + '.svg'" /></span>
                                <span v-if="tableData.status === 0">运行中</span>
                                <span v-if="tableData.status === 1">关机</span>
                                <span v-if="tableData.status === 2">挂起</span>
                                <span v-if="tableData.status === 4">封禁</span>
                            </div>
                            <div>
                                <label>可用区</label>
                                <span class="span-level-5">&nbsp;&nbsp;&nbsp;&nbsp;{{
                                    tableData.area
                                }}</span>
                            </div>
                            <div>
                                <label>实例规格</label>
                                <span class="span-level-5">CPU - </span>
                                <span class="span-text-font">{{ tableData.vCpu }}核</span>
                                <span>内存 - </span>
                                <span class="span-text-font">{{ tableData.memory }}M</span>
                            </div>
                            <div>
                                <label>操作系统</label>
                                <span class="span-level-5"><img height="24" width="24"
                                        :src="'/assets/icons/svg/' + tableData.osType + '.svg'" /></span>
                                <span>{{ tableData.osName }}</span>
                            </div>
                            <div>
                                <label>公网IP</label>
                                <span class="span-level-ip"><i class="iconfont icon-wangluo"
                                        style="color: #ff8800c7;"></i></span>
                                <span>{{ tableData.IP }}</span>
                            </div>
                            <div>
                                <label>用户名密码</label>
                                <span class="span-level-user">{{ tableData.username }}</span>
                                <span>/</span>
                                <span>{{ tableData.password }}</span>
                            </div>
                            <div>
                                <label>创建时间</label>
                                <span class="span-level-5">{{ formatDateTime(tableData.createTime) }}</span>
                            </div>
                            <div>
                                <label>到期时间</label>
                                <span class="span-level-5">{{ formatDateTime(tableData.expirationTime) }}</span>
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
                                            <span>{{ tableData.diskwrite }}GB</span>
                                            <span>/</span>
                                            <span>{{ tableData.systemDiskSize }}GB</span>
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
        <!-- start: .modal-info-warning 提示框确认-->
        <div class="modal-info-confirmed modal fade show" id="modal-info-confirmed" tabindex="-1" role="dialog"
            aria-hidden="true">
            <div class="modal-dialog modal-sm modal-info" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-info-body d-flex">
                            <div class="modal-info-icon warning">
                                <span data-feather="info"></span>
                            </div>
                            <div class="modal-info-text">
                                <h6>确认{{ vmStatusText }}?</h6>
                                <p>确认对这个虚拟机进行{{ vmStatusText }}吗?</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info btn-sm" data-dismiss="modal"
                            @click="ClickConfirm()">确认</button>
                        <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal"
                            @click="ClickCancel()">取消</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ends: .modal-info-confirmed -->
        <a-modal :visible="reinstallVisible" :ok-text="'重装系统'" :cancel-text="'取消'" @cancel="clickCancel"
            @ok="clickReinstall">
            <p>重装系统：</p><br>
            <a-form>
                <a-form-item label="系统类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select class="add-aselect" id="osType" v-model="reinstallData.osType" @change="handleOsTypeChange">
                        <a-select-option v-for="item in osTypeData" :value="item.osType" :key="item.osType">{{
                            item.osType }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="操作系统" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select class="add-aselect" id="os" v-model="reinstallData.os">
                        <a-select-option v-for="item in systemData" :value="item.name" :key="item.name">{{
                            item.name }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="新密码" name="newPassword" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input :placeholder="'新密码,留空则不重置'" v-model="reinstallData.newPassword" />
                </a-form-item>
                <a-form-item label="重置数据盘" name="resetDataDisk" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select class="add-aselect" id="osType" v-model="reinstallData.resetDataDisk">
                        <a-select-option :value="true">重置</a-select-option>
                        <a-select-option :value="false">不重置</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script>
import { notification } from 'ant-design-vue';
export default {
    layout: 'Console',
    async asyncData({ params }) {
        const vmId = params.id; // 通过 $route.params.id 获取路由参数中的 ID 值
        return {
            vmId
        };
    },
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
    data() {
        return {
            tableData: [], // 表格数据
            vmId: null, // 虚拟机ID
            vmStatus: null,//虚拟机控制状态start=开机、stop=关机、reboot=重启、shutdown=强制关机、suspend=挂起、resume=恢复、pause=暂停、unpause=恢复
            vmStatusText: null,//中文提示
            reinstallData: {
                os: null,
                osType: null,
                newPassword: null,
                resetDataDisk: false,
            },//重装系统的数据
            reinstallVisible: false,//重装窗口
            osTypeData: [],
            systemData: [],
        }
    },
    methods: {
        fetchData() {
            // 使用异步获取数据
            const url = `/api/getVmHostInfo?vmId=${this.vmId}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const vmhost = data.vmhost;
                    const current = data.current;
                    const os = data.os;
                    let ip = `none`;
                    // 获取IP为1的地址
                    const ipConfig = vmhost.ipConfig['1'];
                    if (ipConfig) {
                        // ip=192.168.36.1/24,gw=192.168.36.2
                        ip = ipConfig.split('/')[0].split('=')[1];
                    }
                    // 构建新的记录对象
                    const newRecord = {
                        type: `pve`,
                        area: data.area || '空',
                        vmid: vmhost.id,
                        vmName: vmhost.name,
                        osName: os.name,
                        osType: os.osType,
                        hostname: vmhost.name,
                        username: vmhost.username,
                        password: vmhost.password,
                        createTime: vmhost.createTime,
                        expirationTime: vmhost.expirationTime,
                        status: vmhost.status, // 处理status可能为空的情况
                        IP: ip,
                        vCpu: vmhost.cores,
                        memory: vmhost.memory,
                        diskwrite: (current.data.diskwrite / 1024 / 1024).toFixed(2),
                        systemDiskSize: vmhost.systemDiskSize,
                    };
                    // 添加到新的数组中
                    // newTableData.push(newRecord);
                    this.tableData = newRecord;
                    this.diskFlowEcharts()
                }
            });
        },
        formatDateTime(timestamp) {
            const dateObject = new Date(timestamp);
            return `${dateObject.getFullYear()}-${this.padZero(dateObject.getMonth() + 1)}-${this.padZero(dateObject.getDate())} ${this.padZero(dateObject.getHours())}:${this.padZero(dateObject.getMinutes())}:${this.padZero(dateObject.getSeconds())}`;
        },
        padZero(value) {
            return value < 10 ? `0${value}` : value;
        },
        setVmStatus(Status, StatusText) { //设置删除的ID
            this.vmStatus = Status;
            this.vmStatusText = StatusText;
        },
        ClickConfirm() {//确认操作delete
            let url;
            if (this.vmStatus === 'delete') {
                url = `/api/delete/${this.tableData.vmid}`;
            }
            else {
                url = `/api/power/${this.tableData.vmid}/${this.vmStatus}`;
            }
            this.$axios.put(url).then(res => {
                if (res.data.code === 20000) {
                    // 显示成功提示框
                    notification.success({
                        message: this.vmStatusText + '成功',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                    if (this.vmStatus === 'delete') {
                        setTimeout(() => { //1秒后跳转到node界面，让消息提示充分显示
                            this.$router.push('/vm/list');
                        }, 1000); // 1000毫秒 = 1秒
                    }
                    this.vmStatus = null;
                    this.vmStatusText = null;
                }
                else {
                    notification.error({
                        message: res.data.message,
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
            });

        },
        ClickCancel() {//取消
            this.removeId = null;
        },
        clickCancel() {
            this.reinstallData = [];
            this.reinstallVisible = false;
        },
        clickReinstall() {
            const url = `/api/reinstall`;
            const data = {
                vmHostId: this.tableData.vmid,
                os: this.reinstallData.os,
                newPassword: this.reinstallData.newPassword,
                resetDataDisk: this.reinstallData.resetDataDisk,
            };
            this.$axios.put(url, data).then(res => {
                if (res.data.code === 20000) {
                    // 显示成功提示框
                    notification.success({
                        message: (
                            <div style="white-space: pre-line;">
                                {'发起重装' + this.reinstallData.os + '成功!\n请耐心等待10分钟左右!'}
                            </div>
                        ),
                        duration: 2,
                        placement: 'bottomRight',
                    });
                    this.reinstallVisible = false;
                }
                else {
                    notification.error({
                        message: res.data.message,
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
            });
        },
        showReinstallModal(event) {
            event.preventDefault();
            this.getOsType();
            this.reinstallData.vmHostId = this.tableData.vmid;
            this.reinstallVisible = true;
        },
        handleOsTypeChange() {
            // 获取选中的值
            const selectedOsType = this.reinstallData.osType;

            // 执行相应的函数
            this.getSysData(selectedOsType);
        },
        getSysData(type) {
            // 使用异步获取数据
            const url = `/api/selectOsByPageAndCondition?page=1&size=200&param=osType&value=${type}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    const newTableData = [];
                    records.forEach(record => {
                        // 构建新的记录对象
                        const newRecord = {
                            osType: record.osType,
                            name: record.name,
                        };
                        // 添加到新的数组中
                        newTableData.push(newRecord);
                    });
                    this.systemData = newTableData;
                }
            });
        },
        getOsType() {
            // 使用异步获取数据
            const url = `/api/selectOsByPage?page=1&size=200`;
            // 存储ostype,后面判断用,防止重复
            const osTypeSet = new Set();

            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    const newTableData = [];

                    records.forEach(record => {
                        // 检查osType是否已经存在于Set中，避免重复
                        if (!osTypeSet.has(record.osType)) {
                            // 构建新的记录对象
                            const newRecord = {
                                osType: record.osType,
                            };
                            // 添加到新的数组中
                            newTableData.push(newRecord);
                            // 将osType添加到Set中，确保唯一性
                            osTypeSet.add(record.osType);
                        }
                    });
                    // 将Set转为数组，并赋值给osTypeData
                    this.osTypeData = newTableData;
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
        memoryEcharts() {
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
        diskEcharts() {
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
        networkEcharts() {
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
        flowEcharts() {
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
        diskFlowEcharts() {
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
                            formatter: `{a|` + (this.tableData.diskwrite / this.tableData.systemDiskSize * 100).toFixed(2) + `%}\n{b|已使用}`,
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
                                value: this.tableData.diskwrite,
                                name: '已使用',
                                itemStyle: {
                                    color: '#00a8ff'
                                }
                            },
                            {
                                value: this.tableData.systemDiskSize,
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
        this.fetchData()
        this.cpuEcharts()
        this.memoryEcharts()
        this.diskEcharts()
        this.networkEcharts()
        this.flowEcharts()
        this.timer = setInterval(() => {
            this.fetchData();
        }, 5000);
    },
    // 组件销毁时清除定时器
    beforeDestroy() {
        clearInterval(this.timer);
    }
}
</script>

<style scoped>
.btn-action>div {
    margin-left: 10px;
}

/* label字体加粗 */
.card-body label {
    font-weight: 400;
}

/* 设置每个内容之间的距离 */
.card-body>div {
    margin-bottom: 10px;
}

.card-body>div>span {
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
.card-body>div>div {
    margin-top: 3px;
}

/* 卡片上下直接间距 */
.up-down-margin>div {
    margin-top: 20px;
}

.info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;
    /* 调整文字和图表之间的间距 */
}

.usage-info {
    /* margin-top: 50px; */
    /* 字体缩小 */
    font-size: 12px;
}

.separator {
    width: 1px;
    background-color: #ccc;
    /* 竖线的颜色 */
    height: 100px;
    /* 控制竖线的高度 */
    margin: 0 20px;
    /* 调整竖线与文本之间的间距 */
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
