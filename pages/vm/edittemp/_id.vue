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
                                        <label for="hostname">模板名称</label>
                                        <input type="text" v-model="formData.name" class="form-control" id="hostname"
                                            placeholder="配置模板名称(必填)">
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="sockets">CPU插槽数</label>
                                        <input type="number" v-model="formData.sockets" class="form-control" id="sockets"
                                            required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">CPU插槽数</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="cores">CPU核心数</label>
                                        <input type="number" v-model="formData.cores" class="form-control" id="cores"
                                            required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">CPU核心数</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="threads">CPU线程数</label>
                                        <input type="number" v-model="formData.threads" class="form-control" id="threads">
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">CPU线程数</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="memory">内存</label>
                                        <input type="number" v-model="formData.memory" class="form-control" id="memory"
                                            value="512" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">内存,单位Mb</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="bandwidth">带宽</label>
                                        <input type="number" v-model="formData.bandwidth" class="form-control"
                                            id="bandwidth" value="1" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">带宽 单位Mbps</small>
                                    </div>

                                    <div class="form-group mb-25">
                                        <label for="username">系统盘大小</label>
                                        <input type="number" v-model="formData.systemDiskSize" class="form-control"
                                            id="systemDiskSize" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">留空则使用系统默认系统盘大小</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="password">去虚拟化</label>
                                        <a-select class="add-aselect" id="osType" v-model="formData.devirtualization">
                                            <a-select-option :value="true">开启</a-select-option>
                                            <a-select-option :value="false">关闭</a-select-option>
                                        </a-select>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="password">kvm虚拟化</label>
                                        <a-select class="add-aselect" id="osType" v-model="formData.kvm">
                                            <a-select-option :value="true">开启</a-select-option>
                                            <a-select-option :value="false">关闭</a-select-option>
                                        </a-select>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="password">嵌套虚拟化</label>
                                        <a-select class="add-aselect" id="osType" v-model="formData.nested">
                                            <a-select-option :value="true">开启</a-select-option>
                                            <a-select-option :value="false">关闭</a-select-option>
                                        </a-select>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="username">CPU类型</label>
                                        <input type="text" v-model="formData.cpu" class="form-control" id="cpu" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">cpu类型,如果开启嵌套虚拟化,cpu类型必须host或者max</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="username">CPU限制</label>
                                        <input type="number" v-model="formData.cpuUnits" class="form-control" id="cpuUnits"
                                            required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">CPU限制,单位:百分比 如填80则限制80%</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="username">I/O限制</label>
                                        <input type="number" v-model="formData.bwlimit" class="form-control" id="cpuUnits"
                                            required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">I/O限制,单位:mb/s 如填80则限制80mb/s</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="username">系统架构</label>
                                        <input type="text" v-model="formData.arch" class="form-control" id="cpu" required>
                                        <li class="fa fa-exclamation-circle" style="color: rgb(255, 225, 0);"></li>
                                        <small class="text-danger">系统架构(x86_64,arrch64)</small>
                                    </div>
                                    <div class="form-group mb-25">
                                        <label for="password">是否开机自启</label>
                                        <a-select class="add-aselect" id="osType" v-model="formData.onBoot">
                                            <a-select-option value="1">开启</a-select-option>
                                            <a-select-option value="0">关闭</a-select-option>
                                        </a-select>
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
    async asyncData({ params, app }) {
        // 从路由参数获取数据
        let formData = params.data;

        // 尝试从cookies中获取数据
        const dataFromCookies = app.$cookies.get('formData');

        // 如果nodeData没有数据，使用cookies中的数据，否则使用路由参数的数据
        if (formData) { }
        else if (dataFromCookies) {
            formData = dataFromCookies;
        }

        return { formData };
    },
    async created() {
        // 在created生命周期中，将数据存储到cookies  刷新数据会异常,所以首次添加cookie
        this.$cookies.set('nodeData', this.nodeData);
    },
    layout: 'Console',
    head() {
        return {
            title: '编辑实例模板 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '编辑实例模板 - QimenIDC'
                }
            ]
        }
    },
    data() {
        return {
        }
    },

    methods: {
        handleOsTypeChange() {
            // 获取选中的值
            const selectedOsType = this.formData.osType;

            // 执行相应的函数
            this.getSysData(selectedOsType);
        },
        clickAdd(event) {
            event.preventDefault();
            const url = '/api/updateConfiguretemplate';
            const data = {
                configureTemplateId: this.formData.id,
                name: this.formData.name,
                sockets: this.formData.sockets,
                cores: this.formData.cores,
                threads: this.formData.threads,
                memory: this.formData.memory,
                dataDisk: this.formData.dataDisk,
                bandwidth: this.formData.bandwidth,
                systemDiskSize: this.formData.systemDiskSize,
                // devirtualization: this.formData.devirtualization,
                // kvm: this.formData.kvm,
                // nested: this.formData.nested,
                cpu: this.formData.cpu,
                cpuUnits: this.formData.cpuUnits,
                bwlimit: this.formData.bwlimit,
                arch: this.formData.arch,
                onBoot: this.formData.onBoot,
            };
            this.$axios.put(url, data).then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '修改实例模板成功',
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