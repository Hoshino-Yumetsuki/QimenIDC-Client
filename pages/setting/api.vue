<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">API管理</h4>
                        <div class="breadcrumb-action justify-content-center flex-wrap">
                            <div class="action-btn">
                                <a href="#" class="btn btn-sm btn-primary btn-add" data-toggle="modal"
                                    data-target="#modal-input-notes">
                                    <i class="la la-plus"></i> 新建API</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header color-dark fw-500">
                            API列表
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
                                                </select>
                                            </div>
                                        </div>
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
                                                    <span class="userDatatable-title">appid</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">appkey</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">状态</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">备注</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">创建时间</span>
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
                                                        {{ item.appid }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.appkey }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="status-cell">

                                                        <!-- <img height="24" width="24"
                                                            :src="'/assets/icons/svg/' + item.status + '.svg'" /> -->
                                                        <!-- 0=开机，1=暂停 -->
                                                        <span v-if="item.status === 0"
                                                            class="text-success bg-opacity-success  color-success rounded-pill userDatatable-content-status active">正常</span>
                                                        <span v-if="item.status === 1"
                                                            class="text-danger bg-opacity-warning  color-warning rounded-pill userDatatable-content-status active">暂停</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.info }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.createDate }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li>
                                                            <a class="view" v-if="item.status === 0"
                                                                @click="ClickPause(item.id)">
                                                                <feather-icon name="pause" />
                                                            </a>
                                                            <a class="edit" v-if="item.status === 1"
                                                                @click="ClickPlay(item.id)">
                                                                <feather-icon name="play" />
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
                                <p>确认删除这个API吗?</p>
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
        <!-- 新建API 填写备注 Start -->
        <div class="modal-info-confirmed modal fade show" id="modal-input-notes" tabindex="-1" role="dialog"
            aria-hidden="true">
            <div class="modal-dialog modal-sm modal-info" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-info-body d-flex">
                            <div class="modal-info-icon warning">
                                <span data-feather="info"></span>
                            </div>
                            <div class="modal-info-text">
                                <h6>新建API</h6><br>
                                <input type="text" class="form-control form-control-default" id="ApiNotes"
                                    placeholder="请输入API备注">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info btn-sm" data-dismiss="modal" @click="addApi()">创建</button>
                        <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal"
                            @click="ClickCancel()">取消</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 新建API 填写备注 Ends -->
    </div>
</template>
<script>
import { notification } from 'ant-design-vue';
export default {
    layout: 'Console',
    head() {
        return {
            title: 'API管理 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'API管理 - QimenIDC'
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
            removeId: null //删除的Id 确认使用
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
            const url = `/api/selectApiByPage?page=${this.currentPage}&size=${this.pageSize}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    const newTableData = [];
                    records.forEach(record => {
                        // 构建新的记录对象
                        const cDate = record.createDate;
                        const createDate = new Date(cDate).toLocaleString();;
                        const newRecord = {
                            id: record.id,
                            appid: record.appid,
                            appkey: record.appkey,
                            info: record.info,
                            status: record.status, // 处理status可能为空的情况
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
        UpdateData(apiPath, id, msg) {
            // 更新数据
            const url = `/api/${apiPath}/${id}`;
            this.$axios.post(url).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: msg,
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
        ClickPause(id) { //执行暂停操作
            this.UpdateData('disableApi', id, '暂停成功');
        },
        ClickPlay(id) { //执行恢复操作
            this.UpdateData('enableApi', id, '开启成功');
        },
        addApi() {
            // 获取输入框的值
            const apiNotes = document.getElementById('ApiNotes').value;
            document.getElementById('ApiNotes').value = '';//获取之后清空备注
            const url = '/api/insertApiKey';
            const data = {
                info: apiNotes
            };

            this.$axios.post(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '添加API成功',
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
            })
        },
        ClickRemove(removeId) { //执行删除操作
            const url = `/api/deleteApi?id=${removeId}`;
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
        ClickCancel() {//取消
            this.removeId = null;
        },
        setRemoveId(id, event) { //设置删除的ID
            event.preventDefault();
            this.removeId = id;
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


