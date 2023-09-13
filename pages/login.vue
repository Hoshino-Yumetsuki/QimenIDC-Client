<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute" color-on-scroll="500">
        <div class="container">
          <div class="navbar-wrapper">
            <div class="navbar-toggle">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <nuxt-link to="#pablo" class="navbar-brand">QimenIDC - 极致功能，极致体验</nuxt-link>
          </div>
          <!-- <div class="collapse navbar-collapse justify-content-end" id="navbar">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <nuxt-link to="/login" class="nav-link">
                  <i class="now-ui-icons users_circle-08"></i> 登录
                </nuxt-link>
              </li>
            </ul>
          </div> -->
        </div>
      </nav>
      <div class="wrapper wrapper-full-page ">
        <div class="full-page register-page section-image" :style="{ backgroundImage: 'url(' + require('@/static/img/header.jpg') + ')' }">
          <div class="content">
            <div class="container">
              <div class="row">
                <div class="col-md-5 ml-auto" id="slogan">
                  <div class="info-area info-horizontal mt-5">
                    <div class="icon icon-primary">
                      <i class="now-ui-icons media-2_sound-wave"></i>
                    </div>
                    <div class="description">
                      <h5 class="info-title">高效</h5>
                      <p class="description">
                        基于多架构虚拟化的真云平台, 相对传统云主机拥有更为灵活的设备结构, 效率更高, 性能更强.
                      </p>
                    </div>
                  </div>
                  <div class="info-area info-horizontal">
                    <div class="icon icon-primary">
                      <i class="now-ui-icons business_bulb-63"></i>
                    </div>
                    <div class="description">
                      <h5 class="info-title">专业</h5>
                      <p class="description">
                        优秀的运维团队与专业的服务设备, 为您共同营造一个舒心、可靠的真云环境.
                      </p>
                    </div>
                  </div>
                  <div class="info-area info-horizontal">
                    <div class="icon icon-info">
                      <i class="now-ui-icons education_atom"></i>
                    </div>
                    <div class="description">
                      <h5 class="info-title">安全</h5>
                      <p class="description">
                        所有云主机全部拥有热备机制, 并拥有设备无关性的特点. 完善的预案机制, 为您的数据安全保驾护航.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mr-auto">
                  <a-card hoverable class="widget-1">
                    <img src="/images/logo.png" alt="QimenIDC">
                    <a-divider>
                      <h5 class="font-semibold">登录 - 控制中心</h5>
                    </a-divider>
                    <template>
                      <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }">
                        <a-form-item 
                        label="用户名"
                        :rules="[{ required: true, message: 'Please input your username!' }]"
                        >
                          <a-input v-model="username">
                            <a-icon slot="prefix" type="user" />
                          </a-input>
                        </a-form-item>
                        <a-form-item
                        label="密码"
                        :rules="[{ required: true, message: 'Please input your password!' }]"
                        >
                        <a-input-password v-model="password">
                          <a-icon slot="prefix" type="lock" theme="outlined" />
                        </a-input-password>
                        </a-form-item>
                        <a-form-item>
                          <a-button type="primary" @click="onlogin">Log in</a-button>
                        </a-form-item>
                      </a-form>
                    </template>
                  </a-card>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="container-fluid">
              <nav id="footernav">
                <ul>
                  <li>
                    <a href="#">
                      极致科技
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      QimenIDC
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="copyright">
                Copyright © 2023 极致科技 - QimenIDC.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
</template>

<script>
  import { notification } from 'ant-design-vue';
  import { reactive } from 'vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
  import {mapMutations} from 'vuex';

	export default ({
		data() {
			return {
        // 初始化用户名和密码
        username: 'mryunqi',
        password: '123456',
			}
		},
    head() {
        return {
            title: '登录 - QimenIDC',
            meta: [
                {
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'QimenIDC - 登录'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
                    integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'stylesheet',
                    href: '/css/bootstrap.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: '/css/now-ui-dashboard.css?v=1.6.0'
                },
                {
                    rel: 'stylesheet',
                    href: '/demo/demo.css'
                }
            ],
            script: [
                {
                    src: '/js/core/jquery.min.js',
                },
                {
                    src: '/js/core/popper.min.js',
                },
                {
                    src: '/js/core/bootstrap.min.js',
                },
                {
                    src: '/js/plugins/perfect-scrollbar.jquery.min.js',
                },
                {
                    src: '/js/plugins/moment.min.js',
                },
                {
                    src: '/js/plugins/bootstrap-switch.js',
                },
                {
                    src: '/js/plugins/sweetalert2.min.js',
                },
                {
                    src: '/js/plugins/jquery.validate.min.js',
                },
                {
                    src: '/js/plugins/nouislider.min.js',
                },
                {
                    src: '/js/plugins/jquery.bootstrap-wizard.js',
                },
                {
                    src: '/js/plugins/bootstrap-selectpicker.js',
                },
                {
                    src: '/js/plugins/bootstrap-datetimepicker.js',
                },
                {
                    src: '/js/plugins/jquery.dataTables.min.js',
                },
                {
                    src: '/js/plugins/bootstrap-tagsinput.js',
                },
                {
                    src: '/js/plugins/jasny-bootstrap.min.js',
                },
                {
                    src: '/js/plugins/fullcalendar.min.js',
                },
                {
                    src: '/js/plugins/jquery-jvectormap.js',
                },
                {
                    src: '/js/plugins/nouislider.min.js',
                },
                {
                    src: '/js/plugins/chartjs.min.js',
                },
                {
                    src: '/js/plugins/bootstrap-notify.js',
                },
                {
                    src: '/js/now-ui-dashboard.min.js?v=1.6.0',
                },
                {
                    src: '/demo/demo.js',
                }
            ]
        }
    },
    methods: {
      ...mapMutations(['setToken']),
      onlogin() {
          // 拼接请求body json参数
          let body = {
              username: this.username,
              password: this.password
          };
          // axios post请求 /loginDo
          this.$axios({
              method: 'post',
              url: '/api/loginDo',
              data: body
          }).then((res) => {
              // 登录成功
              if (res.data.code == 20000) {
                  // 登录成功
                  // 保存token
                  this.setToken(res.data.data);
                  notification.success({
                      message: '登录成功',
                      duration: 2
                  });
                  // 跳转到控制台
                  this.$router.push('/');
              } else {
                  // 登录失败
                  notification.error({
                      message: '登录失败',
                      description: res.data.message,
                      duration: 2
                  });
              }
          }).catch((err) => {
              // 登录失败
              notification.error({
                  message: '登录失败',
                  description: err,
                  duration: 2
              });
          });
      }
    }
	})

</script>