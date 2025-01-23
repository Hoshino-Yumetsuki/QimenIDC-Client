<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">

            <div class="card mb-50">
                <div class="row justify-content-center">
                    <div class="col-sm-5 col-10">
                        <div class="mt-40 mb-50">
                            <div class="edit-profile__body">
                                <form>
                                    <div class="form-group mb-25">
                                        <label for="id">被控通讯密钥</label>

                                        <input type="text" v-model="secretKey" class="form-control" id="id"
                                            placeholder="通讯密钥">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">{与同集群非同节点区别开}</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="name2">Linux系统盘大小</label>
                                        <input type="text" v-model="systemDisk.Linux" class="form-control" id="name2"
                                            placeholder="Linux系统盘大小">
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="host">Windows系统盘大小</label>
                                        <input type="text" v-model="systemDisk.Windows" class="form-control" id="host"
                                            placeholder="Windows系统盘大小">
                                    </div>
                                    <div class="button-group d-flex pt-25 justify-content-end">



                                        <a href="" style="color: white;"
                                            class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                                            @click="clickChange($event)">修改
                                        </a>

                                    </div>
                                </form>
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
            title: '系统配置 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '系统配置 - QimenIDC'
                }
            ]
        }
    },
    data() {
        return {
            tableData: [], // 表格数据
            secretKey: null,//被控通讯密钥
            systemDisk: {//系统盘大小
                Linux: null,
                Windows: null,
            },
        }
    },
    methods: {
        fetchData() {
            // 使用异步获取数据
            const url = `/api/getControlledSecretKey`; //获取密钥
            this.$axios.get(url).then(res => {
                if (res.data.code === 20000) {
                    this.secretKey = res.data.data;
                }
            });
            const url2 = `/api/getVmDefaultDiskSize`; //获取系统盘
            this.$axios.get(url2).then(res => {
                if (res.data.code === 20000) {
                    this.systemDisk.Linux = res.data.data.Linux;
                    this.systemDisk.Windows = res.data.data.Windows;
                }
            });
        },
        clickChange(event) {
            event.preventDefault();
            const url = '/api/updateVmDefaultDiskSize';
            const data = {
                Linux: this.systemDisk.Linux,
                Windows: this.systemDisk.Windows,
            };
            this.$axios.post(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '修改保存成功',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
            })
        },
    },
    mounted() {
        this.fetchData();
    },
}
</script>