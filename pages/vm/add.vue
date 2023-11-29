<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">

            <div class="card mb-50">
                <div class="row justify-content-center">
                    <div class="col-sm-5 col-10">
                        <div class="mt-40 mb-50">
                            <div class="checkbox-theme-default custom-checkbox add-checkbox">
                                <input class="checkbox" type="checkbox" id="check-1" v-model="isUseTemplate"
                                    @click="getTempData()">
                                <label for="check-1">
                                    <span class="checkbox-text">
                                        使用配置模板
                                    </span>
                                </label>
                                <input class="checkbox" type="checkbox" id="check-2" v-model="isChecked">
                                <label for="check-2">
                                    <span class="checkbox-text">
                                        高级选项
                                    </span>
                                </label>
                            </div>
                            <div class="edit-profile__body">
                                <form>
                                    <div class="form-group mb-25">
                                        <div>
                                            <label for="nodesData">节点</label>
                                            <a-select class="add-aselect" id="nodeid" v-model="nodeData.nodeid">
                                                <a-select-option v-for="item in nodesData" :key="item.id"
                                                    :value="item.id">{{
                                                        item.name }}({{ item.host }})</a-select-option>
                                            </a-select>
                                        </div>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="hostname">虚拟机名</label>
                                        <input type="text" v-model="nodeData.hostname" class="form-control" id="hostname"
                                            placeholder="虚拟机名，请勿输入中文">
                                    </div>
                                    <div class="form-group mb-25" v-if="isUseTemplate">
                                        <label for="configureTemplateId">配置模板</label>
                                        <a-select class="add-aselect" id="nodeid" v-model="nodeData.configureTemplateId">
                                            <a-select-option v-for="item in tempData" :key="item.id" :value="item.id">（{{
                                                item.id }}）{{ item.name }}</a-select-option>
                                        </a-select>
                                    </div>
                                    <div v-if="isUseTemplate === false">
                                        <div class="form-group mb-25">
                                            <label for="sockets">CPU插槽数</label>
                                            <input type="number" v-model="nodeData.sockets" class="form-control"
                                                id="sockets" required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">CPU插槽数</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="cores">CPU核心数</label>
                                            <input type="number" v-model="nodeData.cores" class="form-control" id="cores"
                                                required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">CPU核心数</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="threads">CPU线程数</label>
                                            <input type="number" v-model="nodeData.threads" class="form-control"
                                                id="threads">
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">CPU线程数</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="memory">内存</label>
                                            <input type="number" v-model="nodeData.memory" class="form-control" id="memory"
                                                value="512" required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">内存,单位Mb</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="bandwidth">带宽</label>
                                            <input type="number" v-model="nodeData.bandwidth" class="form-control"
                                                id="bandwidth" value="1" required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">带宽 单位Mbps</small>
                                        </div>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="memory">系统类型</label>
                                        <a-select class="add-aselect" id="osType" v-model="nodeData.osType"
                                            @change="handleOsTypeChange">
                                            <a-select-option v-for="item in osTypeData" :value="item.osType"
                                                :key="item.osType">{{
                                                    item.osType }}</a-select-option>
                                        </a-select>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="os">操作系统</label>
                                        <a-select class="add-aselect" id="os" v-model="nodeData.os">
                                            <a-select-option v-for="item in systemData" :value="item.name"
                                                :key="item.name">{{
                                                    item.name }}</a-select-option>
                                        </a-select>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="username">远程用户名</label>
                                        <input type="text" v-model="nodeData.username" class="form-control" id="username"
                                            value="root" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为root，请根据实际情况填写</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="password">远程密码</label>
                                        <a-input-password v-model="nodeData.password" :type="'password'"
                                            :placeholder="'请输入虚拟机远程的密码'" class="add-aselect"></a-input-password>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">密码</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="password">跟随宿主机开机自启</label>
                                        <a-select class="add-aselect" id="osType" v-model="nodeData.onBoot">
                                            <a-select-option :value="1">开启</a-select-option>
                                            <a-select-option :value="0">关闭</a-select-option>
                                        </a-select>
                                    </div>
                                    <div v-if="isChecked">
                                        <div class="form-group mb-25">
                                            <label for="username">系统盘大小</label>
                                            <input type="number" v-model="nodeData.systemDiskSize" class="form-control"
                                                id="systemDiskSize" required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">留空则使用系统默认系统盘大小</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="password">去虚拟化</label>
                                            <a-select class="add-aselect" id="osType" v-model="nodeData.devirtualization">
                                                <a-select-option :value="1">开启</a-select-option>
                                                <a-select-option :value="0">关闭</a-select-option>
                                            </a-select>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="password">kvm虚拟化</label>
                                            <a-select class="add-aselect" id="osType" v-model="nodeData.kvm">
                                                <a-select-option :value="1">开启</a-select-option>
                                                <a-select-option :value="0">关闭</a-select-option>
                                            </a-select>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="password">嵌套虚拟化</label>
                                            <a-select class="add-aselect" id="osType" v-model="nodeData.nested">
                                                <a-select-option :value="1">开启</a-select-option>
                                                <a-select-option :value="0">关闭</a-select-option>
                                            </a-select>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="username">CPU类型</label>
                                            <a-select class="add-aselect" id="cpu" v-model="nodeData.cpu">
                                                <a-select-option :value="'kvm64'">kvm64</a-select-option>
                                                <a-select-option :value="'host'">host</a-select-option>
                                                <a-select-option :value="'max'">max</a-select-option>
                                            </a-select>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">cpu类型,默认kvm64,如果开启嵌套虚拟化,cpu类型必须host或者max</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="username">CPU限制</label>
                                            <input type="number" v-model="nodeData.cpuUnits" class="form-control"
                                                id="cpuUnits" required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">CPU限制,单位:百分比 如填80则限制80%</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="username">I/O限制</label>
                                            <input type="number" v-model="nodeData.bwlimit" class="form-control"
                                                id="cpuUnits" required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">I/O限制,单位:mb/s 如填80则限制80mb/s</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="username">系统架构</label>
                                            <a-select class="add-aselect" id="osType" v-model="nodeData.arch">
                                                <a-select-option :value="'x86_64'">x86_64</a-select-option>
                                                <a-select-option :value="'arm64'">arm64</a-select-option>
                                                <a-select-option :value="'armhf'">armhf</a-select-option>
                                                <a-select-option :value="'ppc64el'">ppc64el</a-select-option>
                                                <a-select-option :value="'riscv64'">riscv64</a-select-option>
                                                <a-select-option :value="'s390x'">s390x</a-select-option>
                                                <a-select-option :value="'aarch64'">aarch64</a-select-option>
                                                <a-select-option :value="'armv7l'">armv7l</a-select-option>
                                            </a-select>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">系统架构(x86_64,arrch64)</small>
                                        </div>
                                    </div>
                                    <div class="button-group d-flex pt-25 justify-content-end">
                                        <a href="" style="color: white;"
                                            class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                                            @click="clickAdd($event)">创建虚拟机
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="static/css/now-ui-addvm.css"></style>
<script>
import { notification } from 'ant-design-vue';
export default {
    layout: 'Console',
    head() {
        return {
            title: '创建虚拟机 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '创建虚拟机 - QimenIDC'
                }
            ]
        }
    },
    data() {
        return {
            nodeData: {
                nodeid: null,//节点id
                hostname: null,//虚拟机名
                sockets: 1, //插槽数
                cores: 1,//核心
                threads: 1,//线程
                memory: 1024,//内存
                dataDisk: null,//附加磁盘
                osType: null,//操作系统类型
                os: null,//操作系统
                bandwidth: 1,//带宽
                username: 'root',//用户名
                password: null,//密码
                onBoot: 1,// 是否开机自启 0 1 默认0关闭
                systemDiskSize: null,// 系统盘大小
                devirtualization: 0,// 去虚拟化boolean 默认false
                kvm: 1,// 是否开启kvm虚拟化，默认开启 boolean
                nested: 0,// 嵌套虚拟化 默认关闭boolean
                cpu: 'kvm64',// cpu类型 默认kvm64，如果开启了nested，cpu必须为host或max
                cpuUnits: null,// cpu限制 百分比
                bwlimit: null,// I/ O限制 mb/ s
                arch: 'x86_64',// 系统架构(x86_64, arrch64)，默认x86_64
                configureTemplateId: null,
            },
            nodesData: [],
            osTypeData: [],
            systemData: [],
            tempData: [],
            isChecked: false,
            isUseTemplate: false
        }
    },

    methods: {
        fetchData() {
            // 使用异步获取数据
            const url = `/api/selectNodeByPage?page=1&size=200`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    const newTableData = [];
                    records.forEach(record => {
                        // 构建新的记录对象
                        const newRecord = {
                            id: record.id,
                            name: record.name || '未知',
                            host: record.host,
                        };
                        // 添加到新的数组中
                        newTableData.push(newRecord);
                    });
                    this.nodesData = newTableData;
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
        handleOsTypeChange() {
            // 获取选中的值
            const selectedOsType = this.nodeData.osType;
            if (selectedOsType == 'windows') {
                this.nodeData.username = 'Administrator'
            } else {
                this.nodeData.username = 'root'
            }
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
        getTempData() {
            if (!this.isUseTemplate) {
                // 使用异步获取数据
                const url = `/api/getConfiguretemplateByPage?page=1&limit=200`;
                this.$axios.get(url).then(res => {
                    if (res.data.code === 20000) {
                        const data = res.data.data;
                        const records = data.records;
                        const newTableData = [];
                        records.forEach(record => {
                            // 构建新的记录对象
                            const newRecord = {
                                id: record.id,
                                name: record.name || '未知',
                            };
                            // 添加到新的数组中
                            newTableData.push(newRecord);
                        });
                        this.tempData = newTableData;
                    }
                });
            }
        },
        clickAdd(event) {
            event.preventDefault();
            const hostnameIsValid = /^[a-zA-Z0-9-]+$/.test(this.nodeData.hostname);
            if (this.nodeData.os !== null && this.nodeData.os !== '' && this.nodeData.password !== null && this.nodeData.password !== '' && hostnameIsValid) {
                const url = '/api/createVm';
                const data = {
                    nodeid: this.nodeData.nodeid,
                    hostname: this.nodeData.hostname,
                    sockets: this.nodeData.sockets,
                    cores: this.nodeData.cores,
                    threads: this.nodeData.threads,
                    memory: this.nodeData.memory,
                    dataDisk: this.nodeData.dataDisk,
                    osType: null,
                    os: this.nodeData.os,
                    bandwidth: this.nodeData.bandwidth,
                    username: this.nodeData.username,
                    password: this.nodeData.password,
                    onBoot: this.nodeData.onBoot,
                    systemDiskSize: this.nodeData.systemDiskSize,
                    devirtualization: this.nodeData.devirtualization,
                    kvm: this.nodeData.kvm,
                    nested: this.nodeData.nested,
                    cpu: this.nodeData.cpu,
                    cpuUnits: this.nodeData.cpuUnits,
                    bwlimit: this.nodeData.bwlimit,
                    arch: this.nodeData.arch,
                    configureTemplateId: this.nodeData.configureTemplateId
                };
                this.$axios.post(url, data).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '创建虚拟机成功',
                            duration: 2,
                            placement: 'bottomRight'
                        });
                        setTimeout(() => { //1秒后跳转到node界面，让消息提示充分显示
                            this.$router.push('/vm/list');
                        }, 1000); // 1000毫秒 = 1秒
                    }
                    else {
                        notification.error({
                            message: res.data.message,
                            duration: 2,
                            placement: 'bottomRight'
                        });
                    }
                })
            } else {
                notification.error({
                    message: '请确保各项不能为空且主机名只能包含英文字符或数字',
                    duration: 2,
                    placement: 'bottomRight'
                });
            }
        },
    },
    mounted() {
        this.fetchData();
        this.getOsType();
    },
}
</script>