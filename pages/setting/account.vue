<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">
            <div class="row">
                <div class="col-lg-12">

                    <div class="breadcrumb-main">
                        <h4 class="text-capitalize breadcrumb-title">账号列表</h4>
                        <div class="breadcrumb-action justify-content-center flex-wrap">
                            <div class="action-btn">
                                <a href="#" class="btn btn-sm btn-primary btn-add" @click="showModal">
                                    <i class="la la-plus"></i> 添加新账号</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header color-dark fw-500">
                            管理员账号列表
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
                                                    <span class="userDatatable-title">用户名</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">姓名</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">电话</span>
                                                </th>
                                                <th>
                                                    <span class="userDatatable-title">邮箱</span>
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
                                                        {{ item.username }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.name }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.phone }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {{ item.email }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                        <li><a href="" class="edit" @click="showChangeModal(item, $event)">
                                                                <feather-icon name="edit" />
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
            <p>请输入以下信息：</p><br>
            <a-form :form="form">
                <a-form-item label="用户名" name="username" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.username" />
                </a-form-item>
                <a-form-item label="密码" :rules="[{ required: true, message: 'Please input your password!' }]"
                    name="password" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input-password v-model="formData.password" :type="'password'"></a-input-password>
                </a-form-item>
                <a-form-item label="确认密码" :rules="[{ required: true, message: 'Please input your password!' }]"
                    name="confirmPassword" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input-password v-model="formData.confirmPassword" :type="'password'"></a-input-password>
                </a-form-item>
                <a-form-item label="姓名" name="name" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.name" />
                </a-form-item>
                <a-form-item label="电话" name="phone" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.phone" />
                </a-form-item>
                <a-form-item label="邮箱" name="email" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.email" />
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal :visible="changeVisible" :ok-text="'修改'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickChange">
            <p>修改管理员账号：</p><br>
            <a-form :form="form">
                <a-form-item label="用户名" name="username" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.username" />
                </a-form-item>
                <a-form-item label="密码" :rules="[{ required: true, message: 'Please input your password!' }]"
                    name="password" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input-password v-model="formData.password" :type="'password'"
                        :placeholder="'密码留空则表示不修改'"></a-input-password>
                </a-form-item>
                <a-form-item label="确认密码" :rules="[{ required: true, message: 'Please input your password!' }]"
                    name="confirmPassword" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input-password v-model="formData.confirmPassword" :type="'password'"
                        :placeholder="'密码留空则表示不修改'"></a-input-password>
                </a-form-item>
                <a-form-item label="姓名" name="name" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.name" />
                </a-form-item>
                <a-form-item label="电话" name="phone" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.phone" />
                </a-form-item>
                <a-form-item label="邮箱" name="email" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.email" />
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
            title: '管理员账号列表 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '管理员账号列表 - QimenIDC'
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
                username: '',
                password: '',
                confirmPassword: '',
                name: '',
                phone: '',
                email: '',
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
            const url = `/api/getSysuser?page=${this.currentPage}&size=${this.pageSize}`;
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
                            username: record.username || '未知',
                            phone: record.phone,
                            email: record.email,
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
            this.formData.username = item.username;
            this.formData.name = item.name;
            this.formData.phone = item.phone;
            this.formData.email = item.email;
            this.formData.id = item.id;
            this.changeVisible = true;
        },
        showModal() {
            this.visible = true;
        },
        clickOk() {
            // 创建管理员确认
            if (this.formData.phone !== '' && this.formData.password !== '' && this.formData.email !== '' && this.formData.username !== '' && this.formData.name !== '') {
                if (this.formData.password === this.formData.confirmPassword) {
                    const url = '/api/registerDo';
                    const data = {
                        phone: this.formData.phone,
                        password: this.formData.password,
                        email: this.formData.email,
                        username: this.formData.username,
                        name: this.formData.name
                    };
                    this.$axios.post(url, data).then(res => {
                        if (res.data.code === 20000) {
                            notification.success({
                                message: '添加管理员账号成功!',
                                duration: 2,
                                placement: 'bottomRight'
                            });
                            this.fetchData()
                            this.formData = [];
                        }
                    })
                    this.visible = false;
                }
                else {
                    notification.error({
                        message: '两次输入的密码不一样!',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
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
            if (this.formData.phone !== '' && this.formData.email !== '' && this.formData.username !== '' && this.formData.name !== '') {
                if (this.formData.password === this.formData.confirmPassword) {
                    //if (this.formData.password == '') this.formData.password = null; //防止等于''时不是值null
                    const url = '/api/updateSysuser';
                    const data = {
                        id: this.formData.id,
                        phone: this.formData.phone,
                        password: this.formData.password,
                        email: this.formData.email,
                        username: this.formData.username,
                        name: this.formData.name
                    };
                    this.$axios.post(url, data).then(res => {
                        if (res.data.code === 20000) {
                            notification.success({
                                message: '修改管理员账号成功!',
                                duration: 2,
                                placement: 'bottomRight'
                            });
                            this.fetchData()
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
                }
                else {
                    notification.error({
                        message: '两次输入的密码不一样!',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
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