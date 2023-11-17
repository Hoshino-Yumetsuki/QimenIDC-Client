<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">IPV4列表</h4>
                        <div class="breadcrumb-action justify-content-center flex-wrap">
                            <div class="action-btn">
                                <a href="#" class="btn btn-sm btn-primary btn-add" @click="showModal">
                                    <i class="la la-plus"></i>插入IPV4地址</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header color-dark fw-500">
                            IPV4地址池 {{ poolId }} 列表
                        </div>
                        <div class="card-body">
                            <div class="userDatatable global-shadow border-0 bg-white w-100">
                                <!-- 选择搜索框 -->
                                <div class="d-flex justify-content-between align-items-center mb-30">
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex align-items-center mr-30">
                                            <div class="atbd-select">
                                                <select name="column" class="form-control form-control-sm" id="column"
                                                    style="height: 45px;">
                                                    <option value="all">全部</option>
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
                                                <select name="status" class="form-control form-control-sm" id="status"
                                                    style="height: 45px;">
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
                                                <select name="type" class="form-control form-control-sm" id="type"
                                                    style="height: 45px;">
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
                                                    <span class="userDatatable-title">节点ID</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">虚拟机</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">IP地址</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">子网掩码</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">网关</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">DNS1</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">DNS2</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">状态</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">操作</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in tableData" :key="item.id" class="userDatatable-body">
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
                                                        {{ item.id }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.nodeId }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.vmId }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.ip }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.subnetMask }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.gateway }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.dns1 }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.dns2 }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="status-cell">

                                                        <!-- <img height="24" width="24"
                                                            :src="'/assets/icons/svg/' + item.status + '.svg'" /> -->
                                                        <!-- 0=正常，1=正在使用 2停止-->
                                                        <span v-if="item.status === 0"
                                                            class="text-success bg-opacity-success  color-success rounded-pill userDatatable-content-status active">可用</span>
                                                        <span v-if="item.status === 1"
                                                            class="text-danger bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">正在使用</span>
                                                        <span v-if="item.status === 2"
                                                            class="text-danger bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">暂停</span>
                                                        <span v-if="item.status === 3"
                                                            class="text-danger bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">网关IP</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li><a href="" class="edit" @click="showChangeModal(item, $event)">
                                                                <feather-icon name="edit" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="remove" @click='del(item.id)'>
                                                                <feather-icon name="trash-2" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- 选择框操作 -->
                                <div class="d-flex justify-content-between align-items-center mb-30">
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex align-items-center mr-30">
                                            <div class="atbd-select">
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-default btn-white dropdown-toggle"
                                                        type="button" id="dropdownMenu4" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        批量操作
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu4">
                                                        <a class="dropdown-item" href="#">暂停</a>
                                                        <a class="dropdown-item" href="#">删除</a>
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
                                                <a href="#" class="atbd-pagination__link pagination-control"
                                                    @click="changePage(currentPage - 1)"><span
                                                        class="la la-angle-left"></span></a>
                                                <!-- 生成页码链接 -->
                                                <template v-for="pageNumber in visiblePages">
                                                    <a href="#" class="atbd-pagination__link"
                                                        :class="{ active: pageNumber === currentPage }"
                                                        @click="changePage(pageNumber)">
                                                        <span class="page-number">{{ pageNumber }}</span>
                                                    </a>
                                                </template>
                                                <a href="#" class="atbd-pagination__link pagination-control"
                                                    @click="changePage(currentPage + 1)"><span
                                                        class="la la-angle-right"></span></a>
                                            </li>
                                            <li class="atbd-pagination__item">
                                                <div class="paging-option">
                                                    <select name="page-number" class="page-selection" v-model="pageSize"
                                                        @change="changePageSize">
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
        <a-modal :visible="visible" :ok-text="'创建'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickOk">
            <p>插入IP地址</p><br>
            <a-form :form="form">
                <a-form-item label="开始IP" name="poolName" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="addData.startIp" :placeholder="'开始IP,例如192.168.10.1'" />
                </a-form-item>
                <a-form-item label="结束IP" name="nodeId" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="addData.endIp" :placeholder="'结束IP,例如192.168.10.10'" />
                </a-form-item>
                <a-form-item label="DNS1" name="dns1" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="addData.dns1" :placeholder="'DNS1'" />
                </a-form-item>
                <a-form-item label="DNS2" name="dns2" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="addData.dns2" :placeholder="'DNS2'" />
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal :visible="changeVisible" :ok-text="'修改'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickChange">
            <p>修改IP：</p><br>
            <a-form :form="form">
                <a-form-item label="IP地址" name="poolName" :placeholder="'IPV4地址'" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.ip" />
                </a-form-item>
                <a-form-item label="节点ID" name="nodeId" :placeholder="'绑定节点ID'" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.nodeId" />
                </a-form-item>
                <a-form-item label="虚拟机ID" name="vmId" :placeholder="'虚拟机ID'" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.vmId" />
                </a-form-item>
                <a-form-item label="IP池ID" name="poolId" :placeholder="'IP池ID'" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.poolId" />
                </a-form-item>
                <a-form-item label="子网掩码" name="subnetMask" :placeholder="'子网掩码'" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.subnetMask" />
                </a-form-item>
                <a-form-item label="网关" name="gateway" :placeholder="'网关'" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.gateway" />
                </a-form-item>
                <a-form-item label="DNS1" name="dns1" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.dns1" />
                </a-form-item>
                <a-form-item label="DNS2" name="dns2" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.dns2" />
                </a-form-item>
                <a-form-item label="状态" name="status" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.status">
                        <a-select-option :value="0">可用</a-select-option>
                        <a-select-option :value="1">绑定</a-select-option>
                        <a-select-option :value="2">暂停</a-select-option>
                        <a-select-option :value="3">网关不可用</a-select-option>
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
        const poolId = params.id; // 通过 $route.params.id 获取路由参数中的 ID 值
        return {
            poolId
        };
    },
    head() {
        return {
            title: 'IPV4列表 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'IPV4列表 - QimenIDC'
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
            timer: null, // 定时器
            visible: false,
            changeVisible: false,
            addData: {
                startIp: '',
                endIp: '',
                dns1: '',
                dns2: '',
            },
            formData: {
                id: '',
                ip: '',
                nodeId: '',
                vmId: '',
                poolId: '',
                subnetMask: '',
                gateway: '',
                dns1: '',
                dns2: '',
                status: '',
            },
            form: null,
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
            if (totalPages < 2) {
                if (totalPages < 2) {
                    if (range[0] === 1) {
                        range.shift();
                    }
                }
            }
            return range;
        },

    },
    methods: {
        fetchData() {
            // 使用异步获取数据
            const url = `/api/selectIpListByPoolId?page=${this.currentPage}&size=${this.pageSize}&poolid=${this.poolId}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    const newTableData = [];
                    records.forEach(record => {
                        // 构建新的记录对象
                        const newRecord = {
                            id: record.id,
                            nodeId: record.nodeId,
                            vmId: record.vmId,
                            poolId: record.poolId,
                            ip: record.ip,
                            subnetMask: record.subnetMask,
                            gateway: record.gateway,
                            dns1: record.dns1 || ' ',
                            dns2: record.dns2 || ' ',
                            status: record.status,
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
        showModal() {
            this.visible = true;
        },
        clickOk() {
            if (this.addData.startIp != '' && this.addData.endIp != '' && this.addData.dns1 != '' && this.addData.dns2 != '') {
                // 创建IPV4地址池确认
                const url = '/api/insertIpPoolByRange';
                const data = {
                    poolId: this.poolId,
                    startIp: this.addData.startIp,
                    endIp: this.addData.endIp,
                    dns1: this.addData.dns1,
                    dns2: this.addData.dns2
                };
                this.$axios.post(url, data).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '添加地址成功!',
                            duration: 2,
                            placement: 'bottomRight'
                        });
                        this.addData = [];
                    }
                    else {
                        notification.error({
                            message: res.data.message,
                            duration: 2,
                            placement: 'bottomRight'
                        });
                    }
                })
                this.visible = false;
            }
            else {
                notification.error({
                    message: '请确保各项都不为空!',
                    duration: 2,
                    placement: 'bottomRight'
                });
            }
        },
        showChangeModal(item, event) {
            event.preventDefault();
            this.formData.id = item.id;
            this.formData.ip = item.ip;
            this.formData.nodeId = item.nodeId;
            this.formData.vmId = item.vmId;
            this.formData.poolId = item.poolId;
            this.formData.subnetMask = item.subnetMask;
            this.formData.gateway = item.gateway;
            this.formData.dns1 = item.dns1;
            this.formData.dns2 = item.dns2;
            this.formData.status = item.status;
            this.changeVisible = true;
        },
        clickChange() {
            // 修改确认
            const url = '/api/updateIp';
            const data = [{
                id: this.formData.id,
                nodeId: this.formData.nodeId,
                vmId: this.formData.vmId,
                poolId: this.formData.poolId,
                subnetMask: this.formData.subnetMask,
                gateway: this.formData.gateway,
                dns1: this.formData.dns1,
                dns2: this.formData.dns2,
                status: this.formData.status
            }];
            this.$axios.put(url, data).then(res => {
                console.log(res);
                if (res.data.code === 20000) {
                    notification.success({
                        message: '修改地址成功!',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                    this.formData = [];
                }
                else {
                    notification.error({
                        message: res.data.message,
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
            })
            this.changeVisible = false;
        },
        clickCancel() {
            this.formData = [];
            this.visible = false;
            this.changeVisible = false;
        },
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
//删除购物车数据
const del = (id) => {

} 
</script>

<style scoped>
.userDatatable-header th {
    text-align: center;
    /* 设置文本居中对齐 */
}

.orderDatatable_actions {
    justify-content: center !important;
}

.userDatatable-body {
    text-align: center;
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


