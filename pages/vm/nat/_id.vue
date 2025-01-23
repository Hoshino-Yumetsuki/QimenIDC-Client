<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">NAT管理</h4>
                        <div class="breadcrumb-action justify-content-center flex-wrap">
                            <div class="action-btn">
                                <a href="#" @click="showModal" class="btn btn-sm btn-primary btn-add">
                                    <i class="la la-plus"></i> 创建NAT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header color-dark fw-500">
                            {{ this.vmData.IP }} NAT列表 &nbsp;&nbsp; 可创建NAT数量：{{ this.vmData.natnum }}
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
                                                    <option value="IP">IP</option>
                                                    <option value="hostname">主机名</option>
                                                    <option value="vmid">虚拟机ID</option>
                                                    <option value="hostId">节点ID</option>
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
                                                                <span
                                                                    class="checkbox-text userDatatable-title">ID</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">协议</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">公网地址</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">目的端口</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">操作</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody style="text-align: center">

                                            <tr v-for="item in tableData" :key="item.id">
                                                <td>
                                                    <div class="d-flex">
                                                        <div
                                                            class="userDatatable__imgWrapper d-flex align-items-center">
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
                                                    {{ item.protocol }}
                                                </td>
                                                <td>
                                                    {{ natAddr }}:{{ item.source_port }}
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.destination_port }}
                                                    </div>
                                                </td>
                                                <td class="text-center">
                                                    <a href="" class="remove" data-toggle="modal"
                                                        data-target="#modal-info-confirmed"
                                                        @click="setRemove(item.source_port, item.destination_port, item.protocol, $event)">
                                                        <feather-icon name="trash-2" />
                                                    </a>
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
                                <h6>确认删除?</h6>
                                <p>确认删除这个NAT吗?</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info btn-sm" data-dismiss="modal"
                            @click="ClickConfirm()">确认</button>
                        <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal"
                            @click="clickCancel()">取消</button>
                    </div>
                </div>
            </div>
        </div>
        <a-modal :visible="visible" :ok-text="'创建'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickOk">
            <h3>创建NAT转发</h3>
            <p>请输入以下信息：</p><br>
            <a-form :form="form">
                <a-form-item label="公网端口" name="source_port" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.source_port" placeholder="例如：3333" />
                </a-form-item>
                <a-form-item label="内部端口" name="destination_port" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.destination_port" placeholder="例如：3333" />
                </a-form-item>
                <a-form-item label="协议" name="protocol" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.protocol">
                        <a-select-option value="tcp">TCP</a-select-option>
                        <a-select-option value="udp">UDP</a-select-option>
                        <a-select-option value="all">TCP+UDP</a-select-option>
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
        const hostId = params.id; // 通过 $route.params.id 获取路由参数中的 ID 值
        return {
            hostId
        };
    },
    head() {
        return {
            title: 'NAT管理 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'NAT管理 - QimenIDC'
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
            removeId: null,
            natAddr: '',
            visible: false,
            formData: {
                source_port: '',
                destination_port: '',
                protocol: 'tcp',
            },
            form: null,
            vmData: [], // 表格数据
            remove_source_port: null,
            remove_destination_port: null,
            remove_protocol: null,
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
            // 判断第一位是否为1，如果是则删除 页面小于2才执行，否则有BUG
            if (totalPages < 2) {
                if (range[0] === 1) {
                    range.shift();
                }
            }
            return range;
        },

    },
    methods: {
        fetchData() {
            // 使用异步获取数据
            const url = `/api/nat/getVm?page=${this.currentPage}&size=${this.pageSize}&hostId=${this.hostId}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    this.tableData = data.map((item, index) => ({
                        ...item,
                        id: index + 1 // 从1开始编号
                    }));
                    this.total = data.total;
                    this.currentPage = data.current;
                    this.totalPages = data.pages;
                }
            });
            //获取转发地址
            const url2 = `/api/nat/getInfo?hostId=${this.hostId}`;
            this.$axios.get(url2).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    this.natAddr = data.natAddr;
                }
            });
            // 获取虚拟机信息
            const url3 = `/api/getVmHostInfo?hostId=${this.hostId}`;
            this.$axios.get(url3).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const vmhost = data.vmhost;
                    let ip = `none`;
                    // 获取IP为1的地址
                    const ipConfig = vmhost.ipConfig['1'];
                    if (ipConfig) {
                        // ip=192.168.36.1/24,gw=192.168.36.2
                        ip = ipConfig.split('/')[0].split('=')[1];
                    }
                    // 构建新的记录对象
                    const newRecord = {
                        IP: ip,
                        natnum: vmhost.natnum,
                    };
                    this.vmData = newRecord;
                }
            });
        },
        setRemove(source_port,destination_port,protocol, event) { //设置删除的ID
            event.preventDefault();
            this.remove_source_port = source_port;
            this.remove_destination_port = destination_port;
            this.remove_protocol = protocol;
        },
        clickCancel() {
            this.remove_source_port = null;
            this.remove_destination_port = null;
            this.remove_protocol = null;
            this.formData = [];
            this.visible = false;
        },
        ClickConfirm() { //执行删除操作
            const url = '/api/nat/del';
            const data = {
                source_port: this.remove_source_port,
                destination_ip: this.vmData.IP,
                destination_port: this.remove_destination_port,
                protocol: this.remove_protocol,
                vm: this.hostId
            };
            this.$axios.post(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '删除NAT转发成功!',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                    
                    setTimeout(() => {
                        // 刷新页面
                        location.reload();
                    }, 2000); // 延迟2秒刷新页面
                    this.remove_source_port = null;
                    this.remove_destination_port = null;
                    this.remove_protocol = null;
                } else {
                    notification.error({
                        message: res.data.message,
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
            })
        },
        showModal() {
            this.visible = true;
        },
        clickOk() {
            // 创建NAT
            if (this.formData.source_port !== '' && this.formData.destination_port !== '') {
                const url = '/api/nat/add';
                const data = {
                    source_port: this.formData.source_port,
                    destination_ip: this.vmData.IP,
                    destination_port: this.formData.destination_port,
                    protocol: this.formData.protocol,
                    vm: this.hostId
                };
                this.$axios.post(url, data).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '创建NAT转发成功!',
                            duration: 2,
                            placement: 'bottomRight'
                        });
                        setTimeout(() => {
                            // 刷新页面
                            location.reload();
                        }, 2000); // 延迟2秒刷新页面
                        this.formData = [];
                    } else {
                        notification.error({
                            message: res.data.message,
                            duration: 2,
                            placement: 'bottomRight'
                        });
                    }
                })
                this.visible = false;
            } else {
                notification.error({
                    message: '请确保各项都不为空!',
                    duration: 2,
                    placement: 'bottomRight'
                });
            }
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
        }, 60000);
    },
    // 组件销毁时清除定时器
    beforeDestroy() {
        clearInterval(this.timer);
    }

}
</script>

<style scoped>
.userDatatable-header th {
    text-align: center;
    /* 设置文本居中对齐 */
}

.status-cell {
    display: flex;
    /* align-items: center; */
    justify-content: center;
}

.status-cell img {
    margin-right: 8px;
}

.progress-bar {
    overflow: visible;
    color: black;
    font-size: 12px;
}

.progress-bar .progress_text {
    padding-left: 5px;
}
</style>
