<template>
    <header class="header-top">
        <nav class="navbar navbar-light">
            <div class="navbar-left">
                <a href="#" @click="toggleSidebar" class="sidebar-toggle"><img class="svg" src="/img/svg/bars.svg"
                        alt="img"></a>
                <!-- <a href="" class="sidebar-toggle" id="">
                    <img class="svg" src="img/svg/bars.svg" alt="img"></a> -->
                <a class="navbar-brand" href="#"><img class="dark" src="/images/logo.png" alt="svg"><img class="light"
                        src="/images/logo.png" alt="img"></a>
                <form action="/" class="search-form">
                    <feather-icon name="search" className="nav-icon" />
                    <input class="form-control mr-sm-2 box-shadow-none" type="text" placeholder="Search...">
                </form>

            </div>
            <!-- ends: navbar-left -->

            <div class="navbar-right">
                <ul class="navbar-right__menu">
                    <li class="nav-search d-none">
                        <a href="#" class="search-toggle">
                            <i class="la la-search"></i>
                            <i class="la la-times"></i>
                        </a>
                        <form action="/" class="search-form-topMenu">
                            <feather-icon name="search" className="search-icon" />
                            <input class="form-control mr-sm-2 box-shadow-none" type="text" placeholder="Search...">
                        </form>
                    </li>
                    <li class="nav-message">
                        <div class="dropdown-custom">
                            <a href="javascript:;" class="nav-item-toggle">
                                <feather-icon name="mail" /></a>
                            <div class="dropdown-wrapper">
                                <h2 class="dropdown-wrapper__title">消息 <span
                                        class="badge-circle badge-success ml-1">2</span></h2>
                                <ul>
                                    <li class="author-online has-new-message">
                                        <div class="user-avater">
                                            <img src="/img/team-1.png" alt="">
                                        </div>
                                        <div class="user-message">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span class="time-posted">3 hrs ago</span>
                                            </p>
                                            <p>
                                                <span class="desc text-truncate" style="max-width: 215px;">Lorem ipsum
                                                    dolor amet cosec Lorem ipsum</span>
                                                <span class="msg-count badge-circle badge-success badge-sm">1</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="author-offline has-new-message">
                                        <div class="user-avater">
                                            <img src="/img/team-1.png" alt="">
                                        </div>
                                        <div class="user-message">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span class="time-posted">3 hrs ago</span>
                                            </p>
                                            <p>
                                                <span class="desc text-truncate" style="max-width: 215px;">Lorem ipsum
                                                    dolor amet cosec Lorem ipsum</span>
                                                <span class="msg-count badge-circle badge-success badge-sm">1</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="author-online has-new-message">
                                        <div class="user-avater">
                                            <img src="/img/team-1.png" alt="">
                                        </div>
                                        <div class="user-message">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span class="time-posted">3 hrs ago</span>
                                            </p>
                                            <p>
                                                <span class="desc text-truncate" style="max-width: 215px;">Lorem ipsum
                                                    dolor amet cosec Lorem ipsum</span>
                                                <span class="msg-count badge-circle badge-success badge-sm">1</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="author-offline">
                                        <div class="user-avater">
                                            <img src="/img/team-1.png" alt="">
                                        </div>
                                        <div class="user-message">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span class="time-posted">3 hrs ago</span>
                                            </p>
                                            <p>
                                                <span class="desc text-truncate" style="max-width: 215px;">Lorem ipsum
                                                    dolor amet cosec Lorem ipsum</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="author-offline">
                                        <div class="user-avater">
                                            <img src="/img/team-1.png" alt="">
                                        </div>
                                        <div class="user-message">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span class="time-posted">3 hrs ago</span>
                                            </p>
                                            <p>
                                                <span class="desc text-truncate" style="max-width: 215px;">Lorem ipsum
                                                    dolor amet cosec Lorem ipsum</span>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="" class="dropdown-wrapper__more">See All Message</a>
                            </div>
                        </div>
                    </li>
                    <!-- ends: nav-message -->
                    <li class="nav-notification">
                        <div class="dropdown-custom">
                            <a href="javascript:;" class="nav-item-toggle">
                                <feather-icon name="bell" /></a>
                            <div class="dropdown-wrapper">
                                <h2 class="dropdown-wrapper__title">通知 <span
                                        class="badge-circle badge-warning ml-1">4</span></h2>
                                <ul>
                                    <li class="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                                        <div class="nav-notification__type nav-notification__type--primary">
                                            <feather-icon name="inbox" />
                                        </div>
                                        <div class="nav-notification__details">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span>sent you a message</span>
                                            </p>
                                            <p>
                                                <span class="time-posted">5 hours ago</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                                        <div class="nav-notification__type nav-notification__type--secondary">
                                            <feather-icon name="upload" />
                                        </div>
                                        <div class="nav-notification__details">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span>sent you a message</span>
                                            </p>
                                            <p>
                                                <span class="time-posted">5 hours ago</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                                        <div class="nav-notification__type nav-notification__type--success">
                                            <feather-icon name="log-in" />
                                        </div>
                                        <div class="nav-notification__details">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span>sent you a message</span>
                                            </p>
                                            <p>
                                                <span class="time-posted">5 hours ago</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="nav-notification__single nav-notification__single d-flex flex-wrap">
                                        <div class="nav-notification__type nav-notification__type--info">
                                            <feather-icon name="at-sign" />
                                        </div>
                                        <div class="nav-notification__details">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span>sent you a message</span>
                                            </p>
                                            <p>
                                                <span class="time-posted">5 hours ago</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="nav-notification__single nav-notification__single d-flex flex-wrap">
                                        <div class="nav-notification__type nav-notification__type--danger">
                                            <span data-feather="heart"></span>
                                            <feather-icon name="settings" />
                                        </div>
                                        <div class="nav-notification__details">
                                            <p>
                                                <a href="" class="subject stretched-link text-truncate"
                                                    style="max-width: 180px;">开发中</a>
                                                <span>sent you a message</span>
                                            </p>
                                            <p>
                                                <span class="time-posted">5 hours ago</span>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="" class="dropdown-wrapper__more">See all incoming activity</a>
                            </div>
                        </div>
                    </li>

                    <li class="nav-support">
                        <div class="dropdown-custom">
                            <a href="javascript:;" class="nav-item-toggle">
                                <feather-icon name="help-circle" className="nav-icon" /></a>
                            <div class="dropdown-wrapper">
                                <div class="list-group">
                                    <span>Documentation</span>
                                    <ul>
                                        <li>
                                            <a href="">How to customize admin</a>
                                        </li>
                                        <li>
                                            <a href="">How to use</a>
                                        </li>
                                        <li>
                                            <a href="">The relation of vertical spacing</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="list-group">
                                    <span>Payments</span>
                                    <ul>
                                        <li>
                                            <a href="">How to customize admin</a>
                                        </li>
                                        <li>
                                            <a href="">How to use</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="list-group">
                                    <span>Content Planner</span>
                                    <ul>
                                        <li>
                                            <a href="">How to customize admin</a>
                                        </li>
                                        <li>
                                            <a href="">How to use</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- ends: .nav-flag-select -->
                    <li class="nav-author">
                        <div class="dropdown-custom">
                            <a href="javascript:;" class="nav-item-toggle"><img src="/img/author-nav.jpg" alt=""
                                    class="rounded-circle"></a>
                            <div class="dropdown-wrapper">
                                <div class="nav-author__info">
                                    <div class="author-img">
                                        <img src="/img/author-nav.jpg" alt="" class="rounded-circle">
                                    </div>
                                    <div>
                                        <h6>管理员</h6>
                                        <span>开发中</span>
                                    </div>
                                </div>
                                <div class="nav-author__options">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <span data-feather="user"></span> 个人信息</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span data-feather="settings"></span> 设置</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span data-feather="key"></span> 账单</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span data-feather="users"></span> 用户</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span data-feather="bell"></span> 帮助</a>
                                        </li>
                                    </ul>
                                    <a href="" class="nav-author__signout">
                                        <span data-feather="log-out"></span> 登出</a>
                                </div>
                            </div>
                            <!-- ends: .dropdown-wrapper -->
                        </div>
                    </li>
                    <!-- ends: .nav-author -->
                </ul>
                <!-- ends: .navbar-right__menu -->
                <div class="navbar-right__mobileAction d-md-none">
                    <a href="#" class="btn-search">
                        <span data-feather="search"></span>
                        <span data-feather="x"></span></a>
                    <a href="#" class="btn-author-action">
                        <span data-feather="more-vertical"></span></a>
                </div>
            </div>
            <!-- ends: .navbar-right -->
        </nav>
    </header>
</template>
<script>
export default {
    methods: {
        toggleSidebar() {
            this.$bus.$emit("toggle-sidebar");
        }
    },
    mounted() {
        // Header mobile view
        window.addEventListener('resize', () => {
            const screenSize = window.innerWidth;
            if (screenSize <= 767.98) {
                this.$el.querySelector(".navbar-right__menu").classList.add("appendToMobile");
                // this.$el.querySelector(".search-form").classList.add("appendToMobile"); // 如果有搜索框的话
                this.$el.querySelector(".contents").classList.add("expanded");
                this.$el.querySelector(".sidebar").classList.remove("sidebar-collapse");
                this.$el.querySelector(".sidebar").classList.add("collapsed");
            } else {
                this.$el.querySelector(".navbar-right__menu").classList.remove("appendToMobile");
            }
        });

        window.addEventListener('resize', () => {
            const screenSize = window.innerWidth;
            if (screenSize > 767.98) {
                this.$el.querySelector(".atbd-mail-sidebar").classList.add("show");
            }
        });

        window.addEventListener('resize', () => {
            const screenSize = window.innerWidth;
            if (screenSize <= 991) {
                this.$el.querySelector(".sidebar").classList.remove("sidebar-collapse");
                this.$el.querySelector(".sidebar").classList.add("collapsed");
                this.$el.querySelector(".sidebar-toggle").addEventListener("click", () => {
                    this.$el.querySelector(".overlay-dark-sidebar").classList.toggle("show");
                });
                this.$el.querySelector(".overlay-dark-sidebar").addEventListener("click", () => {
                    this.$el.querySelector(".overlay-dark-sidebar").classList.remove("show");
                    this.$el.querySelector(".sidebar").classList.remove("sidebar-collapse");
                    this.$el.querySelector(".sidebar").classList.add("collapsed");
                });
            }
        });
    }
}
</script>