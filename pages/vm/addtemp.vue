<template>
    <div class="container-fluid">
        <div class="social-dash-wrap">

            <div class="card mb-50">
                <div class="row justify-content-center">
                    <div class="col-sm-5 col-10">
                        <div class="mt-40 mb-50">
                            <div class="checkbox-theme-default custom-checkbox add-checkbox">
                                <input class="checkbox" type="checkbox" id="check-1" v-model="isChecked">
                                <label for="check-1">
                                    <span class="checkbox-text">
                                        高级选项
                                    </span>
                                </label>
                            </div>
                            <div class="edit-profile__body">
                                <form>
                                    <div class="form-group mb-25">
                                        <label for="hostname">模板名称</label>
                                        <input type="text" v-model="nodeData.name" class="form-control" id="hostname"
                                            placeholder="配置模板名称(必填)">
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="sockets">CPU插槽数</label>
                                        <input type="number" v-model="nodeData.sockets" class="form-control" id="sockets"
                                            required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">CPU插槽数</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="cores">CPU核心数</label>
                                        <input type="number" v-model="nodeData.cores" class="form-control" id="cores"
                                            required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">CPU核心数</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="threads">CPU线程数</label>
                                        <input type="number" v-model="nodeData.threads" class="form-control" id="threads">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">CPU线程数</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="memory">内存</label>
                                        <input type="number" v-model="nodeData.memory" class="form-control" id="memory"
                                            value="512" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">内存,单位Mb</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="bandwidth">带宽</label>
                                        <input type="number" v-model="nodeData.bandwidth" class="form-control"
                                            id="bandwidth" value="1" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">带宽 单位Mbps</small>
                                    </div>
                                    <div v-if="isChecked">
                                        <div class="form-group mb-25">
                                            <label for="username">系统盘大小</label>
                                            <input type="text" v-model="nodeData.systemDiskSize" class="form-control"
                                                id="systemDiskSize" required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">留空则使用系统默认系统盘大小</small>
                                        </div>
                                        <div class="form-group mb-25">
                                            <label for="password">去虚拟化</label>
                                            <input type="text" v-model="nodeData.devirtualization" class="form-control"
                                                id="password" required>
                                            <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                            <small class="text-danger">去虚拟化</small>
                                        </div>
                                    </div>
                                    <div class="button-group d-flex pt-25 justify-content-end">
                                        <a href="" style="color: white;"
                                            class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                                            @click="clickAdd($event)">创建实例模板
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
<style src="static/css/now-ui-addvm.css"></style>
<script>
import { notification } from 'ant-design-vue';
export default {
    layout: 'Console',
    head() {
        return {
            title: '创建实例模板 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '创建实例模板 - QimenIDC'
                }
            ]
        }
    },
    data() {
        return {
            nodeData: {
                name: null,//模板名称
                sockets: 1, //插槽数
                cores: 1,//核心
                threads: 1,//线程
                memory: 512,//内存
                dataDisk: null,//附加磁盘
                bandwidth: null,//带宽
                systemDiskSize: null,//系统盘大小
                devirtualization: null,//去虚拟化boolean 默认false
                kvm: null,//带宽
                nested: null,//带宽
                cpu: null,//带宽
                cpuUnits: null,//带宽
                bwlimit: null,//带宽
                arch: null,//带宽
                onBoot: null,//带宽
            },
            isChecked: false
        }
    },

    methods: {
        handleOsTypeChange() {
            // 获取选中的值
            const selectedOsType = this.nodeData.osType;

            // 执行相应的函数
            this.getSysData(selectedOsType);
        },
        clickAdd(event) {
            event.preventDefault();
            const url = '/api/addConfiguretemplate';
            const data = {
                nodeid: this.nodeData.nodeid,
                hostname: this.nodeData.hostname,
                sockets: this.nodeData.sockets,
                cores: this.nodeData.cores,
                threads: this.nodeData.threads,
                memory: this.nodeData.memory,
                dataDisk: this.nodeData.dataDisk,
                osType: null,
                os: this.nodeData.os,
                bandwidth: this.nodeData.bandwidth,
                username: this.nodeData.username,
                password: this.nodeData.password,
                confirmPassword: this.nodeData.confirmPassword,
            };
            this.$axios.post(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '创建模板成功',
                        duration: 2,
                        placement: 'bottomRight'
                    });
                    setTimeout(() => { //1秒后跳转到node界面，让消息提示充分显示
                        this.$router.push('/vm/template');
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