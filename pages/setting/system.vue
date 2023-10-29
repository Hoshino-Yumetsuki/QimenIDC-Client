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

                                        <input type="text" v-model="secretKey" readonly="readonly" class="form-control"
                                            id="id" placeholder="通讯密钥">
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
                                    <!-- <div class="form-group mb-25">
                                        <label for="port">端口</label>
                                        <input type="number" class="form-control" id="port" placeholder="8006">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为8006（即web面板端口）</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="nodeName">节点名称</label>
                                        <input type="text" class="form-control" id="nodeName" placeholder="pve">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为pve（即集群下方的子节点名称）</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="username">username</label>
                                        <input type="text" class="form-control" id="username" placeholder="root">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为root（即web面板登录用户名）</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="password">password</label>
                                        <input type="text" class="form-control" id="password" placeholder="123456">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为web面板登录密码</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="realm">realm</label>
                                        <input type="text" class="form-control" id="realm" placeholder="pam">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">填写pam即可（即web面板登录认证方式）</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="sshport">ssh-端口</label>
                                        <input type="number" class="form-control" id="sshport" placeholder="22">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为22，请根据实际情况填写</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="sshusername">ssh-username</label>
                                        <input type="text" class="form-control" id="sshusername" placeholder="root">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为root，请根据实际情况填写</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="sshpassword">ssh-password</label>
                                        <input type="text" class="form-control" id="sshpassword" placeholder="123456">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">如果未修改则与上方web面板密码一致</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <div>
                                            <label for="status">
                                                status
                                            </label>
                                            <select class="js-example-basic-single js-states form-control" id="status">
                                                <option value="0">激活</option>
                                                <option value="1">禁用</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group mb-25">
                                        <label for="autoStorage">默认储存位置</label>
                                        <input type="text" readonly class="form-control-plaintext" id="autoStorage"
                                            placeholder="Example">
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="csrfToken">csrfToken</label>
                                        <textarea type="text" readonly class="form-control-plaintext" id="csrfToken"
                                            placeholder="Position" />
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="ticket">ticket</label>
                                        <textarea type="text" readonly class="form-control-plaintext" id="ticket"
                                            placeholder="Position" />
                                    </div> -->
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