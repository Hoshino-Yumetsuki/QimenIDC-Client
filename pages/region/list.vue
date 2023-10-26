<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">

                <div class="breadcrumb-main">
                    <h4 class="text-capitalize breadcrumb-title">地区管理</h4>

                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 col-sm-5">
                <!-- Card 1 -->
                <div class="card shadow-lg">
                    <div class="card-body p-0">
                        <div class="d-flex align-content-center px-15">
                            <button class="btn btn-success btn-default btn-squared text-capitalize px-30"
                                @click="showModal"><i class="la la-plus"></i>添加新地区
                            </button>
                        </div>

                        <div class="faqs-wrapper">
                            <div class="faqs-wrapper-tab p-15 pt-25 pb-30">
                                <div class="nav flex-column text-left mb-2" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <!-- <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home"
                                        role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <span class="dot bg-primary"></span>中国</a>
                                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                        <span class="dot bg-warning"></span>美国</a>
                                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill"
                                        href="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                                        aria-selected="false">
                                        <span class="dot bg-success"></span>日本</a>
                                    <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill"
                                        href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                                        aria-selected="false">
                                        <span class="dot bg-warning"></span>新加坡</a>
                                    <a class="nav-link" id="v-pills-notification-tab" data-toggle="pill"
                                        href="#v-pills-notification" role="tab" aria-controls="v-pills-notification"
                                        aria-selected="false">
                                        <span class="dot bg-info"></span>俄罗斯</a>
                                    <a class="nav-link" id="v-pills-support-tab" data-toggle="pill" href="#v-pills-support"
                                        role="tab" aria-controls="v-pills-support" aria-selected="false">
                                        <span class="dot bg-danger"></span>火星</a> -->

                                    <a v-for="item in tableData" :key="item.id" class="nav-link"
                                        :id="`v-pills-${item.id}-tab`" data-toggle="pill" :href="`#v-pills-${item.id}`"
                                        role="tab" :aria-controls="`v-pills-${item.id}`" aria-selected="false">
                                        <span class="dot bg-danger"></span>{{ item.name }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- ends: col -->
            <div class="col-xl-9 col-sm-7">
                <div class="mb-30">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div v-for="(item, index) in tableData" :key="item.id"
                            :class="{ 'tab-pane': true, 'fade': true, 'show': index === 0, 'active': index === 0 }"
                            :id="`v-pills-${item.id}`" role="tabpanel" :aria-labelledby="`v-pills-${item.id}-tab`">
                            <!-- Edit Profile -->

                            <div class="card h-100 shadow-lg pb-md-50 pb-30 mb-md-50 mb-30">
                                <div class="card-header px-30 pt-30 pb-25 border-bottom-0">
                                    <h4 class="fw-500">{{ item.name }}</h4>
                                </div>
                                <div class="card-body pt-0">
                                    <div class="application-faqs">
                                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <!-- panel 1 -->
                                            <div class="panel panel-default">
                                                <div class="panel-heading" role="tab" id="headingOne">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion"
                                                            href="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            北京电信 - A区
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" class="panel-collapse collapse in show"
                                                    role="tabpanel" aria-labelledby="headingOne">
                                                    <div class="panel-body">
                                                        <p class="mb-sm-35 mb-20">Many support queries and technical
                                                            questions will
                                                            already be answered in supporting documentation such as FAQ's
                                                            and comments from previous buyers. Anim pariatur cliche
                                                            reprehenderit, enim eiusmod high life accusamus terry richardson
                                                            ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                                                            3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                            single-origin coffee nulla assumenda shoreditch et.</p>
                                                        <span class="fs-14 fw-500 color-dark">Was this article
                                                            helpful?</span>
                                                        <div class="button-group d-flex mt-2">
                                                            <button
                                                                class="btn btn-default btn-squared btn-outline-success px-15 "><span
                                                                    data-feather="meh"></span>
                                                                Yes
                                                            </button>
                                                            <button
                                                                class="btn btn-default btn-squared btn-outline-warning px-15 "><span
                                                                    data-feather="frown"></span>
                                                                No
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- panel 2 -->
                                            <div class="panel panel-default">
                                                <div class="panel-heading" role="tab" id="headingTwo">
                                                    <h4 class="panel-title">
                                                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion"
                                                            href="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                            北京电信 - B区
                                                        </a>
                                                    </h4>

                                                </div>
                                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                                                    aria-labelledby="headingTwo">
                                                    <div class="panel-body">
                                                        <p class="mb-sm-35 mb-20">Many support queries and technical
                                                            questions will
                                                            already be answered in supporting documentation such as FAQ's
                                                            and comments from previous buyers. Anim pariatur cliche
                                                            reprehenderit, enim eiusmod high life accusamus terry richardson
                                                            ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                                                            3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                            single-origin coffee nulla assumenda shoreditch et.</p>
                                                        <span class="fs-14 fw-500 color-dark">Was this article
                                                            helpful?</span>
                                                        <div class="button-group d-flex mt-2">
                                                            <button
                                                                class="btn btn-default btn-squared btn-outline-success px-15 "><span
                                                                    data-feather="meh"></span>
                                                                Yes
                                                            </button>
                                                            <button
                                                                class="btn btn-default btn-squared btn-outline-warning px-15 "><span
                                                                    data-feather="frown"></span>
                                                                No
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Edit Profile End -->
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab">测试1
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                            aria-labelledby="v-pills-messages-tab">
                        </div>
                        <div class="tab-pane fade " id="v-pills-settings" role="tabpanel"
                            aria-labelledby="v-pills-settings-tab">测试2
                        </div>
                        <div class="tab-pane fade" id="v-pills-notification" role="tabpanel"
                            aria-labelledby="v-pills-notification-tab">测试3
                        </div>
                        <div class="tab-pane fade" id="v-pills-support" role="tabpanel"
                            aria-labelledby="v-pills-support-tab">测试4
                        </div>
                    </div>
                </div>
            </div><!-- ends: col -->
        </div>
        <a-modal :visible="visible" :ok-text="'创建'" :cancel-text="'取消'" @cancel="clickCancel" @ok="clickOk">
            <p>添加地区</p><br>
            <a-form :form="form">
                <a-form-item label="地区名" name="name" :required="true" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.name" :placeholder="'地区名'" />
                </a-form-item>
                <a-form-item label="父级节点id" name="parent" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.parent" :placeholder="'绑定父级目录ID(选填)'" />
                </a-form-item>
                <a-form-item label="地区级别" name="realm" :required="true" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 14 }">
                    <a-input v-model="formData.realm" :placeholder="'0为顶级地区目录,1为子级'" />
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
            title: '地区管理 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '地区管理 - QimenIDC'
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
            formData: {
                name: '',
                parent: '',
                realm: '',
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
            const url = `/api/getAreaList?page=${this.currentPage}&limit=${this.pageSize}`;
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
                            parent: record.parent,
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
            if (this.formData.name != '' && this.formData.realm != '') {
                // 创建IPV4地址池确认
                const url = '/api/addArea';
                const data = {
                    name: this.formData.name,
                    parent: this.formData.parent || null,
                    realm: this.formData.realm
                };
                this.$axios.post(url, data).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '添加地区成功!',
                            duration: 2,
                            placement: 'bottomRight'
                        });
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
        clickCancel() {
            this.visible = false;
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