<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">VNC控制器</h4>
                        <div class="breadcrumb-action justify-content-center flex-wrap">
                            <div class="action-btn">
                                <a href="#" class="btn btn-sm btn-primary btn-add" @click="showModal">
                                    <i class="la la-plus"></i> 添加VNC控制器</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header color-dark fw-500">
                            VNC控制器
                        </div>
                        <div class="card-body">
                            <div class="userDatatable global-shadow border-0 bg-white w-100">
                                <!-- 选择搜索框 -->
                                <div class="d-flex justify-content-between align-items-center mb-30">
                                    <div class="d-flex align-items-center">

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

                                        <div class="d-flex align-items-center">
                                            <span class="mr-10">类型</span>
                                            <div class="atbd-select">
                                                <select name="type" class="form-control form-control-sm" id="type"
                                                    style="height: 45px;">
                                                    <option value="all">全部</option>
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
                                                    <span class="userDatatable-title">名称</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">IP地址</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">端口</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">域名</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">创建时间</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">SSL是否开启</span>
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
                                                        <a href="" style="color:black;"
                                                            @click="showChangeModal(item, $event)">
                                                            {{ item.id }}
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.name }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.host }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.port }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.domain }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.createDate }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="status-cell">

                                                        <!-- <img height="24" width="24"
                                                            :src="'/assets/icons/svg/' + item.status + '.svg'" /> -->
                                                        <!-- 0=正常，1=暂停 -->
                                                        <span v-if="item.protocol === 1"
                                                            class="text-success bg-opacity-success  color-success rounded-pill userDatatable-content-status active">开启</span>
                                                        <span v-if="item.protocol === 0"
                                                            class="text-danger bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">关闭</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="status-cell">

                                                        <!-- <img height="24" width="24"
                                                            :src="'/assets/icons/svg/' + item.status + '.svg'" /> -->
                                                        <!-- 0=正常，1=暂停 -->
                                                        <span v-if="item.status === 0"
                                                            class="text-success bg-opacity-success  color-success rounded-pill userDatatable-content-status active">正常</span>
                                                        <span v-if="item.status === 1"
                                                            class="text-danger bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">暂停</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li><a href="" class="edit" @click="showChangeModal(item, $event)">
                                                                <feather-icon name="edit" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="" class="remove" data-toggle="modal"
                                                                data-target="#modal-info-confirmed"
                                                                @click="setRemoveId(item.id, $event)">
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
        <!-- ends: .modal-info-warning -->
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
                                <p>确认删除这个VNC控制器吗?</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info btn-sm" data-dismiss="modal"
                            @click="ClickRemove(removeId)">确认</button>
                        <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal"
                            @click="ClickCancel()">取消</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ends: .modal-info-confirmed -->
        <a-modal :visible="visible" :ok-text="'创建'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickOk">
            <p>添加VNC控制器：</p><br>
            <a-form :form="form">
                <a-form-item label="名称" name="name" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.name" :placeholder="'VNC控制器名称'" />
                </a-form-item>
                <a-form-item label="IP地址" name="host" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.host" :placeholder="'VNC控制器IP地址'" />
                </a-form-item>
                <a-form-item label="端口" name="port" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.port" :placeholder="'VNC控制器端口，默认7600'" />
                </a-form-item>
                <a-form-item label="域名" name="domain" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.domain" :placeholder="'对外公开的域名'" />
                </a-form-item>
                <a-form-item label="SSL" name="protocol" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.protocol">
                        <a-select-option :value="0">关闭</a-select-option>
                        <a-select-option :value="1">开启</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="状态" name="status" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.status">
                        <a-select-option :value="0">可用</a-select-option>
                        <a-select-option :value="1">停用</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal :visible="changeVisible" :ok-text="'修改'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickChange">
            <p>修改VNC控制器：</p><br>
            <a-form :form="form">
                <a-form-item label="名称" name="name" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.name" :placeholder="'VNC控制器名称'" />
                </a-form-item>
                <a-form-item label="IP地址" name="host" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.host" :placeholder="'VNC控制器IP地址'" />
                </a-form-item>
                <a-form-item label="端口" name="port" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.port" :placeholder="'VNC控制器端口,默认7600'" />
                </a-form-item>
                <a-form-item label="域名" name="domain" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.domain" :placeholder="'对外公开的域名'" />
                </a-form-item>
                <a-form-item label="SSL" name="protocol" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.protocol">
                        <a-select-option :value="0">关闭</a-select-option>
                        <a-select-option :value="1">开启</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="状态" name="status" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.status">
                        <a-select-option :value="0">可用</a-select-option>
                        <a-select-option :value="1">停用</a-select-option>
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
    head() {
        return {
            title: 'VNC控制器 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'VNC控制器 - QimenIDC'
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
            formData: {
                id: '',
                name: '',
                host: '',
                port: '',
                domain: '',
                status: 0,
                protocol: 0,
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
            const url = `/api/selectVncNodePage?page=${this.currentPage}&size=${this.pageSize}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    const newTableData = [];
                    records.forEach(record => {
                        const createDate = new Date(record.createDate).toLocaleString();;
                        // 构建新的记录对象
                        const newRecord = {
                            id: record.id,
                            name: record.name || '未知',
                            host: record.host,
                            port: record.port,
                            domain: record.domain || '无',
                            protocol: record.protocol,
                            status: record.status,
                            createDate: createDate,
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
        showChangeModal(item, event) {
            event.preventDefault();
            this.formData.name = item.name;
            this.formData.host = item.host;
            this.formData.port = item.port;
            this.formData.domain = item.domain;
            this.formData.status = item.status;
            this.formData.protocol = item.protocol;
            this.formData.id = item.id;
            this.changeVisible = true;
        },
        showModal() {
            this.visible = true;
        },
        clickOk() {
            // 创建管理员确认
            if (this.formData.name !== '' && this.formData.host !== '' && this.formData.port !== '' && this.formData.domain !== '') {
                const url = '/api/addVncNode';
                const data = {
                    name: this.formData.name,
                    host: this.formData.host,
                    port: this.formData.port,
                    domain: this.formData.domain,
                    protocol: this.formData.protocol,
                    status: this.formData.status
                };
                this.$axios.post(url, data).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '添加VNC控制器成功!',
                            duration: 2,
                            placement: 'bottomRight'
                        });
                        this.fetchData()
                        this.formData = [];
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
        clickChange() {
            // 修改管理员确认
            if (this.formData.name !== '' && this.formData.host !== '' && this.formData.port !== '' && this.formData.domain !== '') {
                const url = '/api/updateVncNode';
                const data = {
                    id: this.formData.id,
                    name: this.formData.name,
                    host: this.formData.host,
                    port: this.formData.port,
                    domain: this.formData.domain,
                    protocol: this.formData.protocol,
                    status: this.formData.status
                };
                this.$axios.post(url, data).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '修改VNC控制器成功!',
                            duration: 2,
                            placement: 'bottomRight'
                        });
                        this.fetchData()
                        this.formData = [];
                    }
                })
                this.changeVisible = false;
            } else {
                notification.error({
                    message: '请确保各项都不为空!',
                    duration: 2,
                    placement: 'bottomRight'
                });
            }
        },
        clickCancel() {
            this.formData = [];
            this.visible = false;
            this.changeVisible = false;
        },
        ClickCancel() {//取消
            this.removeId = null;
        },
        setRemoveId(id, event) { //设置删除的ID
            event.preventDefault();
            this.removeId = id;
        },
        ClickRemove(removeId) { //执行删除操作
            const url = `/api/deleteVncNode?id=${removeId}`;
            this.$axios.delete(url).then(res => {
                if (res.data.code === 20000) {
                    // 显示成功提示框
                    notification.success({
                        message: '删除成功',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                    this.fetchData()
                } else {
                    notification.error({
                        message: res.data.message,
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
            });
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