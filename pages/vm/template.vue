<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">配置模板列表</h4>
                        <div class="breadcrumb-action justify-content-center flex-wrap">
                            <div class="action-btn">
                                <a href="" class="btn btn-sm btn-primary btn-add">
                                    <i class="la la-plus"></i>新建配置模板</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header color-dark fw-500">
                            配置模板池列表
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
                                                    <option value="id">id</option>
                                                    <option value="appid">appid</option>
                                                    <option value="appkey">appkey</option>
                                                    <option value="info">info</option>
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
                                                    <span class="userDatatable-title">name</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">cores</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">memory</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">sockets</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">threads</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">devirtualization</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">kvm</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">cpuModel</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">modelGroup</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">nested</span>
                                                </th>

                                                <th>
                                                    <span class="userDatatable-title">cpu</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">cpuUnits</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">bwlimit</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">arch</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">acpi</span>
                                                </th>

                                                <th>
                                                    <span class="userDatatable-title">storage</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">systemDiskSize</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">dataDisk</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">bandwidth</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">onboot</span>
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
                                                        <nuxt-link :to="`/ip/poollist/${item.id}`"
                                                            class="text-black-50 fw-500">
                                                            {{ item.id }}
                                                        </nuxt-link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.name }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.cores }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.memory }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.sockets }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.threads }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.devirtualization }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.kvm }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.cpuModel }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.modelGroup }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.nested }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.cpu }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.cpuUnits }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.bwlimit }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.arch }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.acpi }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.storage }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.systemDiskSize }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.dataDisk }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.bandwidth }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.onboot }}
                                                    </div>
                                                </td>

                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li>
                                                            <nuxt-link :to="`/ip/poollist/${item.id}`"
                                                                class="text-black-50 fw-500">
                                                                <a href="#" class="view">
                                                                    <feather-icon name="eye" />
                                                                </a>
                                                            </nuxt-link>
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
    </div>
</template>
<script>
export default {
    layout: 'Console',
    head() {
        return {
            title: '配置模板列表 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '配置模板列表 - QimenIDC'
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
            const url = `/api/getConfiguretemplateByPage?page=${this.currentPage}&limit=${this.pageSize}`;
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    const data = res.data.data;
                    const records = data.records;
                    const newTableData = [];
                    records.forEach(record => {
                        // 构建新的记录对象
                        const newRecord = {
                            id: record.id,
                            name: record.name,
                            cores: record.cores,
                            memory: record.memory,
                            sockets: record.sockets,
                            threads: record.threads,
                            devirtualization: record.devirtualization,
                            kvm: record.kvm,
                            cpuModel: record.cpuModel,
                            modelGroup: record.modelGroup,
                            nested: record.nested,
                            cpu: record.cpu,
                            cpuUnits: record.cpuUnits,
                            bwlimit: record.bwlimit,
                            arch: record.arch,
                            acpi: record.acpi,
                            storage: record.storage,
                            systemDiskSize: record.systemDiskSize,
                            dataDisk: record.dataDisk,
                            bandwidth: record.bandwidth,
                            onboot: record.onboot,
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


