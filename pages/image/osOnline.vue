<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">在线镜像库列表</h4>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
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
                                                    <span class="userDatatable-title">系统类别</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">镜像类型</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">文件名</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">arch</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">cloud-int</span>
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
                                                    <div class="capitalize-text">
                                                        <img height="24" width="24"
                                                            :src="'/assets/icons/svg/' + item.type + '.svg'" /> {{ item.type
                                                            }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="capitalize-text">
                                                        <img height="24" width="24"
                                                            :src="'/assets/icons/svg/' + item.osType + '.svg'" /> {{
                                                                item.osType }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.fileName }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.arch }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="status-cell">
                                                        <span v-if="item.cloudInit === 1" class="text-success">激活</span>
                                                        <span v-if="item.cloudInit === 0" class="text-primary">未激活</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="status-cell">

                                                        <span v-if="item.status === 1" class="text-success">激活</span>
                                                        <span v-if="item.status === 0" class="text-warning">未使用</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li>
                                                            <a href="" class="view" v-if="item.status === 1"
                                                                @click="ClickPause($event)">
                                                                <feather-icon name="pause" />
                                                            </a>
                                                            <a href="" class="edit" v-if="item.status === 0"
                                                                @click="ClickPlay(item.fileName, $event)">
                                                                <feather-icon name="play" />
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
    </div>
</template>
<script>
import { notification } from 'ant-design-vue';
export default {
    layout: 'Console',
    head() {
        return {
            title: '镜像库 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '镜像列表 - QimenIDC'
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
            const url = `/api/selectOsByOnline?page=${this.currentPage}&size=${this.pageSize}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.data;
                    const newTableData = [];
                    records.forEach(record => {
                        // 获取第一个值
                        const value = Object.values(record)[0] || '未知';
                        // 构建新的记录对象
                        const newRecord = {
                            // 获取第一个键
                            fileName: Object.keys(record)[0] || '未知',
                            type: value.type || '未知',
                            arch: value.arch || '未知',
                            osType: value.osType || '未知',
                            cloudInit: value['cloud-int'] || '未知',
                            // 如果nodeData中元素数量为0则为0否则为1
                            status: value.nodeData.length === 0 ? 0 : 1
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
        ClickPause(event) { //执行暂停操作
            event.preventDefault();
            notification.error({
                message: '请在镜像列表删除',
                duration: 2,
                placement: 'bottomRight'
            });
        },
        ClickPlay(fileName, event) { //执行恢复操作
            event.preventDefault();
            const url = `/api/activeOsByOnline`;
            const data = {
                fileName: fileName,
            };
            this.$axios.post(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '激活镜像成功',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                    this.fetchData()
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
    },
    mounted() {
        this.fetchData();
    },

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

.capitalize-text {
    text-transform: capitalize;
}
</style>