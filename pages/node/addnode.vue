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
                                        <label for="id">名称</label>

                                        <input type="text" v-model="nodeData.name" class="form-control" id="id"
                                            placeholder="名称(选填)">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">{与同集群非同节点区别开}</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="name2">地区id</label>
                                        <input type="text" v-model="nodeData.area" class="form-control" id="name2"
                                            placeholder="地区id(选填)">
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="host">IP地址</label>
                                        <input type="text" v-model="nodeData.host" class="form-control" id="host"
                                            placeholder="IP地址" required>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="port">端口</label>
                                        <input type="number" v-model="nodeData.port" class="form-control" id="port"
                                            placeholder="8006" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为8006（即web面板端口）</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="nodeName">节点名称</label>
                                        <input type="text" v-model="nodeData.nodeName" class="form-control" id="nodeName"
                                            placeholder="pve">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为pve（即集群下方的子节点名称）</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="username">username</label>
                                        <input type="text" v-model="nodeData.username" class="form-control" id="username"
                                            placeholder="root" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为root（即web面板登录用户名）</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="password">password</label>
                                        <input type="text" v-model="nodeData.password" class="form-control" id="password"
                                            placeholder="123456" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为web面板登录密码</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="realm">realm</label>
                                        <input type="text" v-model="nodeData.realm" class="form-control" id="realm"
                                            placeholder="pam">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">填写pam即可（即web面板登录认证方式）</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="sshport">ssh-端口</label>
                                        <input type="number" v-model="nodeData.sshPort" class="form-control" id="sshport"
                                            placeholder="22" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为22，请根据实际情况填写</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="sshusername">ssh-username</label>
                                        <input type="text" v-model="nodeData.sshUsername" class="form-control"
                                            id="sshusername" placeholder="root" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">一般为root，请根据实际情况填写</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="sshpassword">ssh-password</label>
                                        <input type="text" v-model="nodeData.sshPassword" class="form-control"
                                            id="sshpassword" placeholder="123456" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">如果未修改则与上方web面板密码一致</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <div>
                                            <label for="status">
                                                status
                                            </label>
                                            <select class="js-example-basic-single js-states form-control" id="status"
                                                v-model="nodeData.status">
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
                                    </div>
                                    <div class="button-group d-flex pt-25 justify-content-end">

                                        <a href="" style="color: white;"
                                            class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                                            @click="clickAdd($event)">添加节点
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
            title: '添加节点 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '添加节点 - QimenIDC'
                }
            ]
        }
    },
    data() {
        return {
            nodeData: {
                name: null,//节点名称
                area: null,//地区id
                host: null, //主机IP
                port: null,//端口
                username: null,//节点用户名
                password: null,//节点密码
                realm: null,//权限
                nodeName: null,//节点名
                sshPort: null,//端口
                sshUsername: null,//ssh用户名
                sshPassword: null,//ssh密码
                status: 0,
            }
        }
    },
    methods: {
        clickAdd(event) {
            event.preventDefault();
            const url = '/api/insertNodeMaster';
            const data = {
                name: this.nodeData.name,
                area: this.nodeData.area,
                host: this.nodeData.host,
                port: this.nodeData.port,
                username: this.nodeData.username,
                password: this.nodeData.password,
                nodeName: this.nodeData.nodeName,
                sshPort: this.nodeData.sshPort,
                sshUsername: this.nodeData.sshUsername,
                sshPassword: this.nodeData.sshPassword,
                status: this.nodeData.status,
            };
            this.$axios.post(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '添加节点成功',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                    setTimeout(() => { //1秒后跳转到node界面，让消息提示充分显示
                        this.$router.push('/node/list');
                    }, 1000); // 1000毫秒 = 1秒
                }
                else {
                    notification.error({
                        message: res.data.message,
                        duration: 2,
                        placement: 'bottomRight'
                    });
                }
            })
        },
    },
}
</script>