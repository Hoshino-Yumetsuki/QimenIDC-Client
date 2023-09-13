<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">实例列表</h4>
                        <div class="breadcrumb-action justify-content-center flex-wrap">
                            <div class="action-btn">
                                <a href="" class="btn btn-sm btn-primary btn-add">
                                    <i class="la la-plus"></i> 创建虚拟机</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header color-dark fw-500">
                                实例列表
                        </div>
                        <div class="card-body">
                            <div class="userDatatable global-shadow border-0 bg-white w-100">
                                <!-- 选择搜索框 -->
                                <div class="d-flex justify-content-between align-items-center mb-30">
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex align-items-center mr-30">
                                            <div class="atbd-select">
                                                <select name="column" class="form-control form-control-sm" id="column"  style="height: 45px;">
                                                    <option value="all">全部</option>
                                                    <option value="IP">IP</option>
                                                    <option value="hostname">主机名</option>
                                                    <option value="vmid">虚拟机ID</option>
                                                    <option value="nodeID">节点ID</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="输入关键字">
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button">
                                                        <i class="la la-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex align-items-center mr-30">
                                            <span class="mr-10">状态</span>
                                            <div class="atbd-select">
                                                <select name="status" class="form-control form-control-sm" id="status"  style="height: 45px;">
                                                    <option value="all">全部</option>
                                                    <option value="running">运行中</option>
                                                    <option value="stop">关机</option>
                                                    <option value="suspend">挂起</option>
                                                    <option value="ban">封禁</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <span class="mr-10">类型</span>
                                            <div class="atbd-select">
                                                <select name="type" class="form-control form-control-sm" id="type"  style="height: 45px;">
                                                    <option value="all">全部</option>
                                                    <option value="pve">Proxmox</option>
                                                    <option value="vmware">VMware</option>
                                                    <option value="openstack">OpenStack</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="table-responsive">
                                    <table class="table mb-0">
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
                                                    <span class="userDatatable-title">类型</span>
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
                                                <th>
                                                    <span class="userDatatable-title">操作</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-for="item in tableData" :key="item.id">
                                                <td>
                                                    <div class="d-flex">
                                                        <div class="userDatatable__imgWrapper d-flex align-items-center">
                                                            <div class="checkbox-group-wrapper">
                                                                <div class="checkbox-group d-flex">
                                                                    <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                                                        <input class="checkbox" type="checkbox" id="check-grp-12">
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
                                                    <img height="24" width="24" :src="item.type === 'pve' ? 'https://cdn.simpleicons.org/proxmox/E57000' : 'https://cdn.simpleicons.org/vmware/607078'" />
                                                </td>
                                                <td>
                                                    <div class="text-info">
                                                        <a :href="`/vm/${item.id}`">{{ item.hostname }}</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="status-cell">

                                                        <img height="24" width="24" :src="'/assets/icons/svg/'+ item.status +'.svg'" />
                                                        <!-- 0=开机，1=关机，2=挂起，4=封禁 -->
                                                        <span v-if="item.status === 0" class="text-success">运行中</span>
                                                        <span v-if="item.status === 1" class="text-danger">关机</span>
                                                        <span v-if="item.status === 2" class="text-warning">挂起</span>
                                                        <span v-if="item.status === 4" class="text-danger">封禁</span>
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
                                                        <img height="24" width="24" :src="'/assets/icons/svg/'+ item.osType +'.svg'" />
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
                                                        <div class="progress" style="height: 10px;">
                                                            <div :class="cpuBarClass(item.cpuUsage)" role="progressbar" :style="{ width: item.cpuUsage + '%' }" :aria-valuenow="item.cpuUsage" aria-valuemin="0" aria-valuemax="100">{{ item.cpuUsage }}%</div>
                                                        </div>
                                                    </div>
                                                    <div class="progress-wrap d-flex align-items-center">
                                                        <span class="progress-text">内存：</span>
                                                        <div class="progress">
                                                            <div :class="memoryBarClass(item.memoryUsage)" role="progressbar" :style="{ width: item.memoryUsage + '%' }" :aria-valuenow="item.memoryUsage" aria-valuemin="0" aria-valuemax="100">{{ item.memoryUsage }}%</div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div>
                                                        <img height="16" width="16" src="/assets/icons/svg/up.svg" />
                                                        <span class="text-warning">{{ item.netOut }}</span>
                                                    </div>
                                                    <div>
                                                        <img height="16" width="16" src="/assets/icons/svg/down.svg" />
                                                        <span class="text-success">{{ item.netOut }}</span>
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
                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li>
                                                            <a :href="`/vm/${item.id}`" class="view">
                                                                <feather-icon name="eye" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="edit">
                                                                <feather-icon name="edit" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="remove">
                                                                <feather-icon name="trash-2" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>

                                            <!-- <tr>
                                                <td>
                                                    <div class="d-flex">
                                                        <div class="userDatatable__imgWrapper d-flex align-items-center">
                                                            <div class="checkbox-group-wrapper">
                                                                <div class="checkbox-group d-flex">
                                                                    <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                                                        <input class="checkbox" type="checkbox" id="check-grp-12">
                                                                        <label for="check-grp-12"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="text-black-50 fw-500">
                                                                100
                                                        </a>
                                                    </div>
                                                </td>
                                                
                                                <td>
                                                    <img height="24" width="24" src="https://cdn.simpleicons.org/proxmox/E57000" />
                                                </td>
                                                <td>
                                                    <div class="text-info">
                                                        <a href="#">VM-100</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img height="24" width="24" src="https://cdn.simpleicons.org/socketdotio/13C100" />
                                                    <img height="24" width="24" src="https://cdn.simpleicons.org/stopstalk/D32D27" />
                                                    <img height="24" width="24" src="https://cdn.simpleicons.org/facepunch/EC1C24" />
                                                    <img height="24" width="24" src="https://cdn.simpleicons.org/producthunt/DA552F" />
                                                </td>
                                                <td>
                                                    <div>
                                                        <i class="iconfont icon-wangluo" style="color: #ff8800c7;"></i>
                                                        192.168.1.1
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <img height="24" width="24" src="/assets/icons/svg/windows.svg" />
                                                        Windows Server 2022
                                                    </div>
                                                    <div>
                                                        <img height="24" width="24" src="/assets/icons/svg/ubuntu.svg" />
                                                        Ubuntu 22.04 LTS
                                                    </div>
                                                    <div>
                                                        <img height="24" width="24" src="/assets/icons/svg/debian.svg" />
                                                        Debian 11
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        1C/1024M
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="progress-wrap d-flex align-items-center mb-15">
                                                        <span class="progress-text">CPU：</span>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                                        </div>
                                                    </div>
                                                    <div class="progress-wrap d-flex align-items-center">
                                                        <span class="progress-text">内存：</span>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-success" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div>
                                                        <img height="16" width="16" src="/assets/icons/svg/up.svg" />
                                                        <span class="text-warning">1.2Mbps</span>
                                                    </div>
                                                    <div>
                                                        <img height="16" width="16" src="/assets/icons/svg/down.svg" />
                                                        <span class="text-success">1.4Mbps</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        0.1Mbps/0.12Mbps
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span class="text-info">[美国]</span>
                                                        <span class="text-success">洛杉矶-组A</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li>
                                                            <a href="#" class="view">
                                                                <feather-icon name="eye" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="edit">
                                                                <feather-icon name="edit" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="remove">
                                                                <feather-icon name="trash-2" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr> -->

                                        </tbody>
                                    </table>
                                </div>

                                <!-- 选择框操作 -->
                                <div class="d-flex justify-content-between align-items-center mb-30">
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex align-items-center mr-30">
                                            <div class="atbd-select">
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-default btn-white dropdown-toggle" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        批量操作
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu4">
                                                        <a class="dropdown-item" href="#">开机</a>
                                                        <a class="dropdown-item" href="#">关机</a>
                                                        <a class="dropdown-item" href="#">挂起</a>
                                                        <a class="dropdown-item" href="#">封禁</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    
                                </div>


                                <!-- 底部右侧页码 -->
                                <div class="d-flex justify-content-end mt-30">
                                    <div class="pagination-total-text">{{ paginationText }}</div>

                                    <nav class="atbd-page ">
                                        <ul class="atbd-pagination d-flex">
                                            <li class="atbd-pagination__item">
                                                <a href="#" class="atbd-pagination__link pagination-control" @click="changePage(currentPage - 1)"><span class="la la-angle-left"></span></a>
                                                <!-- 生成页码链接 -->
                                                <template v-for="pageNumber in visiblePages">
                                                <a
                                                    href="#"
                                                    class="atbd-pagination__link"
                                                    :class="{ active: pageNumber === currentPage }"
                                                    @click="changePage(pageNumber)"
                                                >
                                                    <span class="page-number">{{ pageNumber }}</span>
                                                </a>
                                                </template>
                                                <a href="#" class="atbd-pagination__link pagination-control" @click="changePage(currentPage + 1)"><span class="la la-angle-right"></span></a>
                                            </li>
                                            <li class="atbd-pagination__item">
                                                <div class="paging-option">
                                                <select name="page-number" class="page-selection" v-model="pageSize" @change="changePageSize">
                                                    <option value="20">20/page</option>
                                                    <option value="40">40/page</option>
                                                    <option value="60">60/page</option>
                                                    <option value="100">100/page</option>
                                                    <option value="200">200/page</option>
                                                </select>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>


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
    export default {
        layout: 'Console',
        head() {
            return {
                title: '实例列表 - QimenIDC',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: '实例列表 - QimenIDC'
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
                total: 2, // 总条数
                currentPage: 1, // 当前页
                pageSize: 20, // 每页条数
                totalPages: 10, // 总页数
                timer: null // 定时器
            }
        },
        // 计算属性
        computed: {
            paginationText() {
                return `共 ${this.total} 条数据`;
            },
            visiblePages() {
                const currentPage = this.currentPage;
                const totalPages = this.totalPages;
                
                
                const delta = 2;
                let range = [];
                for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
                    range.push(i);
                }
                if (currentPage - delta > 2) {
                    range.unshift('...');
                }
                if (currentPage + delta < totalPages - 1) {
                    range.push('...');
                }
                
                range.unshift(1);
                range.push(totalPages);

                // 判断最后一位是否为0，如果是则删除
                if (range[range.length - 1] === 0) {
                    range.pop();
                }
                // 判断第一位是否为1，如果是则删除
                if (range[0] === 1) {
                    range.shift();
                }
                return range;
            },
            
        },
        methods: {
            fetchData() {
                // 使用异步获取数据
                const url = `/api/getVmByPage?page=${this.currentPage}&size=${this.pageSize}`;
                this.$axios.get(url).then(res => {
                    if (res.data.code === 20000) {
                        const data = res.data.data;
                        const records = data.records;
                        const newTableData = [];
                        records.forEach(record => {
                                const vmhost = record.vmhost;
                                const os = record.os;
                                const current = record.current.data || {}; // 处理current可能为空的情况

                                // 计算磁盘IO的读写总量
                                const blockstat = current.blockstat || {}; // 处理blockstat可能为空的情况
                                let diskIOReadTotal = 0;
                                let diskIOWriteTotal = 0;
                                for (const device in blockstat) {
                                    diskIOReadTotal += blockstat[device].rd_bytes || 0;
                                    diskIOWriteTotal += blockstat[device].wr_bytes || 0;
                                }

                                // 计算实时带宽的入口和出口总量
                                const nics = current.nics || {}; // 处理nics可能为空的情况
                                let netInTotal = 0;
                                let netOutTotal = 0;
                                for (const nic in nics) {
                                    netInTotal += nics[nic].netin || 0;
                                    netOutTotal += nics[nic].netout || 0;
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
                                    id: vmhost.id,
                                    type: `pve`,
                                    nodeName: record.nodeName,
                                    area: record.area,
                                    hostname: vmhost.name,
                                    status: vmhost.status, // 处理status可能为空的情况
                                    IP: ip,
                                    operatingSystem: os.name || 'none', // 处理operatingSystem可能为空的情况
                                    osType: os.osType || 'none', // 处理osType可能为空的情况
                                    vCpu: vmhost.cores,
                                    memory: vmhost.memory,
                                    // 组合成文字
                                    cpuMemory: `${vmhost.cores}C/${vmhost.memory}M`,
                                    // cpuUsage: current.cpu ? current.cpu * 100 : 0, 
                                    cpuUsage: current.cpu ? (current.cpu * 100).toFixed(2) : 0,
                                    memoryUsage: current.mem ? (current.mem / 1024 / 1024 / 10).toFixed(2) : 0,
                                    netIn : netInTotal,
                                    netOut: netOutTotal,
                                    diskIO: `Read: ${(diskIOReadTotal / 1024 / 1024).toFixed(2)} MB / Write: ${(diskIOWriteTotal / 1024 / 1024).toFixed(2)} MB`,
                                };

                                // 添加到新的数组中
                                newTableData.push(newRecord);
                            });
                        this.tableData = newTableData;
                        this.total = data.total;
                        this.currentPage = data.current;
                        this.totalPages = data.pages;
                    }
                });

            },
            prevPage() {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.fetchData();
                }
            },
            nextPage() {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                    this.fetchData();
                }
            },
            changePage(pageNumber) {
                if (pageNumber !== this.currentPage) {
                    this.currentPage = pageNumber;
                    this.fetchData();
                }
            },
            changePageSize() {
                this.currentPage = 1;
                this.fetchData();
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
            }
        },
        mounted() {
            this.fetchData();
            // 定时刷新数据
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
    .userDatatable-header th {
        text-align: center; /* 设置文本居中对齐 */
    }
    .status-cell {
        display: flex;
        /* align-items: center; */
        justify-content: center;
    }
    .status-cell img {
        margin-right: 8px;
    }
</style>


