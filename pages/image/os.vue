<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">Cloud-Image镜像列表</h4>
                        <div class="breadcrumb-action justify-content-center flex-wrap">
                            <div class="action-btn">
                                <a href="/image/osOnline" class="btn btn-sm btn-success btn-add">
                                    <i class="la la-ravelry"></i> 镜像库</a>
                            </div>
                            <div class="action-btn">
                                <a href="#" class="btn btn-sm btn-primary btn-add" @click="showModal">
                                    <i class="la la-plus"></i> 手动添加镜像</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header color-dark fw-500">
                            Cloud-Image列表
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
                                                    <span class="userDatatable-title">名称</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">文件名</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">类型</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">arch</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">镜像类别</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">镜像大小</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">已添加节点</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">镜像状态</span>
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
                                                        {{ item.name }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.fileName }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.type }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.arch }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.osType }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.size }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div v-for="(nodeStatus, index) in item.nodeStatus" :key="index">
                                                        <span v-if="nodeStatus.status === 2"
                                                            class="text-success"><feather-icon name="check-circle" />{{
                                                                nodeStatus.nodeName }}</span>
                                                        <span v-if="nodeStatus.status === 1"
                                                            class="text-success"><feather-icon name="arrow-down-circle" />{{
                                                                nodeStatus.nodeName }} {{ nodeStatus.schedule }}%</span>
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
                                                        <span v-if="item.status === 2" class="text-danger">镜像地址无法连接</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li><a href="" class="view"
                                                                @click="showDownloadModal(item.id, $event)">
                                                                <feather-icon name="download" />
                                                            </a>
                                                        </li>
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
        <a-modal :visible="downVisible" :ok-text="'下载'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickDownload">
            <p>下载镜像</p><br>
            <a-form :form="form">
                <a-form-item label="节点" name="id" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="downData.nodeId">
                        <a-select-option v-for="item in nodesData" :key="item.id" :value="item.id">{{
                            item.name }}</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal :visible="visible" :ok-text="'创建'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickOk">
            <p>添加镜像</p><br>
            <a-form :form="form">
                <a-form-item label="系统名称" name="name" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.name" :placeholder="'系统名称（别称，可自定义）'" />
                </a-form-item>
                <a-form-item label="文件全称" name="fileName" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.fileName" :placeholder="'文件全称，带后缀'" />
                </a-form-item>
                <a-form-item label="镜像类型" name="type" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.type">
                        <a-select-option :value="'win'">Windows</a-select-option>
                        <a-select-option :value="'linux'">Linux</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="镜像架构" name="arch" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.arch">
                        <a-select-option :value="'x86_64'">x86_64</a-select-option>
                        <a-select-option :value="'arm64'">arm64</a-select-option>
                        <a-select-option :value="'armhf'">armhf</a-select-option>
                        <a-select-option :value="'ppc64el'">ppc64el</a-select-option>
                        <a-select-option :value="'riscv64'">riscv64</a-select-option>
                        <a-select-option :value="'s390x'">s390x</a-select-option>
                        <a-select-option :value="'aarch64'">aarch64</a-select-option>
                        <a-select-option :value="'armv7l'">armv7l</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="镜像类型" name="osType" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.osType">
                        <a-select-option :value="'centos'">CentOS</a-select-option>
                        <a-select-option :value="'debian'">Debian</a-select-option>
                        <a-select-option :value="'ubuntu'">Ubuntu</a-select-option>
                        <a-select-option :value="'alpine'">Alpine</a-select-option>
                        <a-select-option :value="'fedora'">Fedora</a-select-option>
                        <a-select-option :value="'opensuse'">Opensuse</a-select-option>
                        <a-select-option :value="'ubuntukylin'">UbuntuKylin</a-select-option>
                        <a-select-option :value="'other'">Other</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="下载类型" name="downType" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.downType">
                        <a-select-option :value="0">自动下载</a-select-option>
                        <a-select-option :value="1">手动上传</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="下载地址" name="url" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.url" :placeholder="'下载地址（选自动下载时禁止为空）'" />
                </a-form-item>
                <a-form-item label="存储路径" name="path" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.path" :placeholder="'值为空或default则默认为/home/images'" />
                </a-form-item>
                <a-form-item label="cloud-init" name="cloud" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.cloud">
                        <a-select-option :value="0">关闭</a-select-option>
                        <a-select-option :value="1">开启</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal :visible="changeVisible" :ok-text="'修改'" :cancel-text="'取消'" @cancel="clearCancel" @ok="clickChange">
            <p>修改镜像</p><br>
            <a-form :form="form">
                <a-form-item label="系统名称" name="name" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.name" :placeholder="'系统名称（别称，可自定义）'" />
                </a-form-item>
                <a-form-item label="文件全称" name="fileName" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.fileName" :placeholder="'文件全称，带后缀'" />
                </a-form-item>
                <a-form-item label="镜像类型" name="type" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.type">
                        <a-select-option :value="'win'">Windows</a-select-option>
                        <a-select-option :value="'linux'">Linux</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="镜像架构" name="arch" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.arch">
                        <a-select-option :value="'x86_64'">x86_64</a-select-option>
                        <a-select-option :value="'arm64'">arm64</a-select-option>
                        <a-select-option :value="'armhf'">armhf</a-select-option>
                        <a-select-option :value="'ppc64el'">ppc64el</a-select-option>
                        <a-select-option :value="'riscv64'">riscv64</a-select-option>
                        <a-select-option :value="'s390x'">s390x</a-select-option>
                        <a-select-option :value="'aarch64'">aarch64</a-select-option>
                        <a-select-option :value="'armv7l'">armv7l</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="镜像类型" name="osType" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.osType">
                        <a-select-option :value="'centos'">CentOS</a-select-option>
                        <a-select-option :value="'debian'">Debian</a-select-option>
                        <a-select-option :value="'ubuntu'">Ubuntu</a-select-option>
                        <a-select-option :value="'alpine'">Alpine</a-select-option>
                        <a-select-option :value="'fedora'">Fedora</a-select-option>
                        <a-select-option :value="'opensuse'">Opensuse</a-select-option>
                        <a-select-option :value="'ubuntukylin'">UbuntuKylin</a-select-option>
                        <a-select-option :value="'other'">Other</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="下载类型" name="downType" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.downType">
                        <a-select-option :value="0">自动下载</a-select-option>
                        <a-select-option :value="1">手动上传</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="下载地址" name="url" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.url" :placeholder="'下载地址（选自动下载时禁止为空）'" />
                </a-form-item>
                <a-form-item label="存储路径" name="path" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.path" :placeholder="'值为空或default则默认为/home/images'" />
                </a-form-item>
                <a-form-item label="cloud-init" name="cloud" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.cloud">
                        <a-select-option :value="0">关闭</a-select-option>
                        <a-select-option :value="1">开启</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="镜像状态" name="status" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-select v-model="formData.status">
                        <a-select-option :value="0">正常</a-select-option>
                        <a-select-option :value="1">暂停</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
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
                                <p>确认删除这个镜像吗?</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info btn-sm" data-dismiss="modal"
                            @click="ClickRemove()">确认</button>
                        <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal"
                            @click="clickCancel()">取消</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ends: .modal-info-confirmed -->
    </div>
</template>
<script>
import { notification } from 'ant-design-vue';
export default {
    layout: 'Console',
    head() {
        return {
            title: '镜像列表 - QimenIDC',
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
            timer: null, // 定时器
            removeId: null,
            visible: false,
            changeVisible: false,
            downVisible: false,
            downData: {
                nodeId: '',
                osId: ''
            },
            formData: {
                id: '',
                name: '',
                fileName: '',
                type: '',
                arch: '',
                osType: '',
                downType: '',
                url: '',
                path: '',
                cloud: '',
            },
            form: null,
            nodesData: [],//节点数据
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
            const url = `/api/selectOsByPage?page=${this.currentPage}&size=${this.pageSize}`;
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
                            fileName: record.fileName || '未知',
                            type: record.type || '未知',
                            arch: record.arch || '未知',
                            osType: record.osType || '未知',
                            nodeStatus: record.nodeStatus,
                            size: record.size,
                            status: record.status,
                            url: record.url,
                            path: record.path,
                            cloud: record.cloud,
                            downType: record.downType,
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
        getNodeData() {
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
                        };
                        // 添加到新的数组中
                        newTableData.push(newRecord);
                    });
                    this.nodesData = newTableData;
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
        showDownloadModal(itemid, event) {
            event.preventDefault();//阻止a标签的默认点击行为
            this.downData.osId = itemid; //传入下载镜像ID
            this.downVisible = true;
        },
        showChangeModal(item, event) {
            event.preventDefault();
            this.formData.id = item.id;
            this.formData.name = item.name;
            this.formData.fileName = item.fileName;
            this.formData.type = item.type;
            this.formData.arch = item.arch;
            this.formData.osType = item.osType;
            this.formData.downType = item.downType;
            this.formData.url = item.url;
            this.formData.path = item.path;
            this.formData.cloud = item.cloud;
            this.formData.status = item.status;
            this.changeVisible = true;
        },
        showModal() {
            this.visible = true;
        },
        clickOk() {
            if (this.formData.name != '' && this.formData.fileName != '') {
                // 创建IPV4地址池确认
                const url = '/api/insertOs';
                const data = {
                    name: this.formData.name,
                    fileName: this.formData.fileName,
                    type: this.formData.type,
                    arch: this.formData.arch,
                    osType: this.formData.osType,
                    downType: this.formData.downType,
                    url: this.formData.url || null,
                    path: this.formData.path,
                    cloud: this.formData.cloud,
                };
                this.$axios.post(url, data).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '添加镜像成功!',
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
                this.visible = false;
            }
            else {
                notification.error({
                    message: '请确保必填项都不为空!',
                    duration: 2,
                    placement: 'bottomRight'
                });
            }
        },
        clickChange() {
            // 修改确认
            const url = '/api/updateOs';
            const data = {
                id: this.formData.id,
                name: this.formData.name,
                fileName: this.formData.fileName,
                type: this.formData.type,
                arch: this.formData.arch,
                osType: this.formData.osType,
                downType: this.formData.downType,
                url: this.formData.url,
                path: this.formData.path,
                cloud: this.formData.cloud,
                status: this.formData.status,
            };
            this.$axios.put(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '修改镜像成功!',
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
        clickDownload() {
            // 下载镜像
            const url = '/api/downloadOs';
            const data = {
                osId: this.downData.osId,
                nodeId: this.downData.nodeId,
            };
            this.$axios.post(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '下载镜像请求发起成功!',
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
            this.downVisible = false;
        },
        clickCancel() {
            this.downVisible = false;
            this.visible = false;
            this.removeId = null;
        },
        clearCancel() {
            this.formData = [];
            this.changeVisible = false;
        },
        setRemoveId(id, event) { //设置删除的ID
            event.preventDefault();
            this.removeId = id;
        },
        ClickRemove() { //执行删除操作
            const url = `/api/deleteOs`;
            const data = {
                osId: this.removeId
            };
            this.$axios.delete(url, { data: data }).then(res => {
                if (res.data.code === 20000) {
                    // 显示成功提示框
                    notification.success({
                        message: '删除成功',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                } else {
                    if (res.data.code === 20000) {
                        // 显示成功提示框
                        notification.error({
                            message: res.data.message,
                            duration: 2,
                            placement: 'bottomRight'
                        });
                    }
                }
            });
        },
    },
    mounted() {
        this.getNodeData();
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