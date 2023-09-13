<!-- 
    该页面是后台管理系统的layouts，包含了左侧菜单栏、顶部导航栏
 -->

<template>
    <div class="layout-light side-menu overlayScroll">
        <div class="mobile-search">
            <form class="search-form">
                <feather-icon name="search" className="nav-icon" />
                <input class="form-control mr-sm-2 box-shadow-none" type="text" placeholder="Search...">
            </form>
        </div>
        <!-- 头部 -->
        <ConsoleHeader />
        <main class="main-content">
            <!-- 侧边栏 -->
            <ConsoleSidebar />
            <div class="contents">
                <!-- 主体 -->
                <nuxt />
            </div>
            <!-- 底部 -->
            <ConsoleFooter />
        </main>
        <!-- <Loading /> -->
        <div class="overlay-dark-sidebar"></div>
    </div>
</template>
<script>
    import ConsoleSidebar from '../components/Sidebars/ConsoleSidebar.vue';
    import ConsoleHeader from '../components/Headers/ConsoleHeader.vue';
    import ConsoleFooter from '@/components/Footers/ConsoleFooter.vue';
    import Loading from '../components/Loading.vue';
    // import feather from 'feather-icons';
    export default({
        // 鉴权
        middleware: 'auth',
        components: {
            ConsoleSidebar,
            ConsoleHeader,
            ConsoleFooter,
            Loading
        },
        data() {
            return {
                sidebarCollapsed: false,
            }
        },
        created() {
            this.$bus.$on("toggle-sidebar", () => {
                this.sidebarCollapsed = !this.sidebarCollapsed;
                this.$nextTick(() => {
                    // 在这里添加展开和折叠侧边栏的逻辑
                    this.$el.querySelector('.overlay-dark-sidebar').classList.toggle('show'); // 展开侧边栏时添加遮罩层
                    this.$el.querySelector(".sidebar").classList.toggle("sidebar-collapse"); // 折叠侧边栏
                    this.$el.querySelector(".sidebar").classList.toggle("collapsed"); // 展开侧边栏
                    this.$el.querySelector(".contents").classList.toggle("expanded"); // 展开侧边栏
                });
            });
        },
        mounted() {
            if (process.client) {
                // 隐藏所有子菜单
                $(".sidebar_nav .has-child ul").hide();
                // 为open类添加展开子菜单
                $(".sidebar_nav .has-child.open ul").show();

            }
            
            // sidebar nav events
            const hasChildLinks = this.$el.querySelectorAll(".sidebar_nav .has-child > a");
                hasChildLinks.forEach((link) => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const parentLi = link.parentElement;
                    const isOpen = parentLi.classList.contains("open");
                    parentLi.classList.toggle("open", !isOpen);
                    if (!isOpen) {
                    parentLi.querySelector("ul").style.display = 'block';
                    } else {
                    parentLi.querySelector("ul").style.display = 'none';
                    }
                });
            });


            // Mobile Menu
            window.addEventListener('resize', () => {
                const screenSize = window.innerWidth;
                if (screenSize <= 991.98) {
                    this.$el.querySelector(".menu-horizontal").classList.add("appendToMobile");
                }
            });
        },
        head() {
            return {
                meta: [
                    {
                        charset: 'utf-8'
                    },
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1.0'
                    }
                ],
                link: [
                    // Google Fonts
                    {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/bootstrap/bootstrap.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/daterangepicker.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/fontawesome.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/footable.standalone.min.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/fullcalendar@5.2.0.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/jquery-jvectormap-2.0.5.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/jquery.mCustomScrollbar.min.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/leaflet.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/line-awesome.min.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/magnific-popup.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/MarkerCluster.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/MarkerCluster.Default.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/select2.min.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/slick.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/star-rating-svg.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/trumbowyg.min.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/assets/vendor_assets/css/wickedpicker.min.css'
                    },
                    {
                        rel: 'stylesheet',
                        href: '/style.css'
                    }
                ],

                script: [
                    // { src: '/assets/vendor_assets/js/jquery/jquery-3.5.1.min.js' },
                    { src: 'https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js'},
                    { src: '/assets/vendor_assets/js/jquery/jquery-ui.js' },
                    { src: '/assets/vendor_assets/js/bootstrap/popper.js' },
                    { src: '/assets/vendor_assets/js/bootstrap/bootstrap.min.js' },
                    { src: '/assets/vendor_assets/js/moment/moment.min.js' },
                    { src: '/assets/vendor_assets/js/accordion.js' },
                    { src: '/assets/vendor_assets/js/autoComplete.js' },
                    { src: '/assets/vendor_assets/js/Chart.min.js' },
                    { src: '/assets/vendor_assets/js/charts.js' },
                    { src: '/assets/vendor_assets/js/daterangepicker.js' },
                    { src: '/assets/vendor_assets/js/drawer.js' },
                    { src: '/assets/vendor_assets/js/dynamicBadge.js' },
                    { src: '/assets/vendor_assets/js/dynamicCheckbox.js' },
                    { src: '/assets/vendor_assets/js/feather.min.js' },
                    { src: '/assets/vendor_assets/js/footable.min.js' },
                    { src: '/assets/vendor_assets/js/fullcalendar@5.2.0.js' },
                    { src: '/assets/vendor_assets/js/google-chart.js' },
                    { src: '/assets/vendor_assets/js/jquery-jvectormap-2.0.5.min.js' },
                    { src: '/assets/vendor_assets/js/jquery-jvectormap-world-mill-en.js' },
                    { src: '/assets/vendor_assets/js/jquery.countdown.min.js' },
                    { src: '/assets/vendor_assets/js/jquery.filterizr.min.js' },
                    { src: '/assets/vendor_assets/js/jquery.magnific-popup.min.js' },
                    { src: '/assets/vendor_assets/js/jquery.mCustomScrollbar.min.js' },
                    { src: '/assets/vendor_assets/js/jquery.peity.min.js' },
                    { src: '/assets/vendor_assets/js/jquery.star-rating-svg.min.js' },
                    { src: '/assets/vendor_assets/js/leaflet.js' },
                    { src: '/assets/vendor_assets/js/leaflet.markercluster.js' },
                    { src: '/assets/vendor_assets/js/loader.js' },
                    { src: '/assets/vendor_assets/js/message.js' },
                    { src: '/assets/vendor_assets/js/moment.js' },
                    { src: '/assets/vendor_assets/js/muuri.min.js' },
                    { src: '/assets/vendor_assets/js/notification.js' },
                    { src: '/assets/vendor_assets/js/popover.js' },
                    { src: '/assets/vendor_assets/js/select2.full.min.js' },
                    { src: '/assets/vendor_assets/js/slick.min.js' },
                    { src: '/assets/vendor_assets/js/trumbowyg.min.js' },
                    { src: '/assets/vendor_assets/js/wickedpicker.min.js' },
                    { src: '/assets/theme_assets/js/drag-drop.js' },
                    { src: '/assets/theme_assets/js/footable.js' },
                    { src: '/assets/theme_assets/js/full-calendar.js' },
                    { src: '/assets/theme_assets/js/googlemap-init.js' },
                    { src: '/assets/theme_assets/js/icon-loader.js' },
                    { src: '/assets/theme_assets/js/jvectormap-init.js' },
                    { src: '/assets/theme_assets/js/leaflet-init.js' },
                    { src: '/assets/theme_assets/js/main.js' }
                ]
            }
        }
    })
</script>