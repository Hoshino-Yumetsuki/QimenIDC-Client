<template>
    <aside class="sidebar-wrapper">
        <div class="sidebar sidebar-collapse" id="sidebar">
            <div class="sidebar__menu-group">
                <ul class="sidebar_nav">

                    <!-- <li class="has-child" :class="{ 'open': isMenuOpen('/parent') }">
                        <a href="#" class="active">
                            <feather-icon name="home" className="nav-icon" />
                            <span class="menu-text">Dashboard</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <a class="active" href="index.html">Social Media</a>
                            </li>
                        </ul>
                    </li> -->

                    <li>
                        <nuxt-link to="/console" exact-active-class="active">
                            <feather-icon name="activity" className="nav-icon" />
                            <span class="menu-text">数据报表</span>
                        </nuxt-link>
                    </li>
                    <!-- 实例列表 -->
                    <li class="has-child" :class="{ 'open': isMenuOpen('/vm') }">
                        <a href="#" :class="{ 'active': isMenuOpen('/vm') }">
                            <feather-icon name="server" className="nav-icon" />
                            <span class="menu-text">实例管理</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <nuxt-link to="/vm/list" exact-active-class="active">
                                    <span>实例列表</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/vm/template" exact-active-class="active">
                                    <span>模板列表</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 镜像管理 -->
                    <li class="has-child" :class="{ 'open': isMenuOpen('/image') }">
                        <a href="#" :class="{ 'active': isMenuOpen('/image') }">
                            <!-- <feather-icon name="disc" className="nav-icon" /> -->
                            <i class="lab la-ubuntu nav-icon"></i>
                            <span class="menu-text">镜像管理</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <nuxt-link to="/image/os" exact-active-class="active">
                                    <span>Cloud-Images</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/image/iso" exact-active-class="active">
                                    <span>ISO</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <!-- IP池管理 -->
                    <li class="has-child" :class="{ 'open': isMenuOpen('/ip') }">
                        <a href="#" :class="{ 'active': isMenuOpen('/ip') }">
                            <!-- <feather-icon name="server" className="nav-icon" /> -->
                            <i class="lab la-battle-net nav-icon"></i>
                            <!-- <img class="nav-icon" src="assets/icons/svg/ip.svg" alt="img"> -->
                            <span class="menu-text">IP池管理</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <nuxt-link to="/ip/pool" exact-active-class="active">
                                    <span>IPV4池列表</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/ip/pool6" exact-active-class="active">
                                    <span>IPV6池列表</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 地区管理 -->
                    <li class="has-child" :class="{ 'open': isMenuOpen('/region') }">
                        <a href="#" :class="{ 'active': isMenuOpen('/region') }">
                            <feather-icon name="map-pin" className="nav-icon" />
                            <span class="menu-text">地区管理</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <nuxt-link to="/region/list" exact-active-class="active">
                                    <span>地区列表</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 节点管理 -->
                    <li class="has-child" :class="{ 'open': isMenuOpen('/node') }">
                        <a href="#" :class="{ 'active': isMenuOpen('/node') }">
                            <i class="las la-globe nav-icon"></i>
                            <span class="menu-text">节点管理</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <nuxt-link to="/node/list" exact-active-class="active">
                                    <span>节点列表</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 系统设置 -->
                    <li class="has-child" :class="{ 'open': isMenuOpen('/setting') }">
                        <a href="#" :class="{ 'active': isMenuOpen('/setting') }">
                            <feather-icon name="settings" className="nav-icon" />
                            <span class="menu-text">系统设置</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <nuxt-link to="/setting/account" exact-active-class="active">
                                    <span>账号管理</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/setting/system" exact-active-class="active">
                                    <span>系统配置</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/setting/api" exact-active-class="active">
                                    <span>API管理</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>
<script>
export default {
    methods: {
        // 判断当前路由是否打开
        isMenuOpen(path) {
            return this.$route.path.startsWith(path);
        }
    }

}
</script>