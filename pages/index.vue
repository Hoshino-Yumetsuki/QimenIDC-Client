<template>
  <!-- loading -->
  <Loading />
</template>

<script>
import Loading from '../components/Loading.vue';

export default {
    mounted() {
        // 3秒后跳转到/console
        setTimeout(() => {
            window.location.href = '/console'; 
        }, 1000);
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
                    href: 'assets/vendor_assets/css/bootstrap/bootstrap.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/daterangepicker.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/fontawesome.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/footable.standalone.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/fullcalendar@5.2.0.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/jquery-jvectormap-2.0.5.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/jquery.mCustomScrollbar.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/leaflet.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/line-awesome.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/magnific-popup.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/MarkerCluster.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/MarkerCluster.Default.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/select2.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/slick.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/star-rating-svg.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/trumbowyg.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'assets/vendor_assets/css/wickedpicker.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'style.css'
                }
            ],
            script: [
                { src: 'assets/vendor_assets/js/jquery/jquery-3.5.1.min.js' },
                { src: 'assets/vendor_assets/js/jquery/jquery-ui.js' },
                { src: 'assets/vendor_assets/js/bootstrap/popper.js' },
                { src: 'assets/vendor_assets/js/bootstrap/bootstrap.min.js' },
                { src: 'assets/vendor_assets/js/moment/moment.min.js' },
                { src: 'assets/vendor_assets/js/accordion.js' },
                { src: 'assets/vendor_assets/js/autoComplete.js' },
                { src: 'assets/vendor_assets/js/Chart.min.js' },
                { src: 'assets/vendor_assets/js/charts.js' },
                { src: 'assets/vendor_assets/js/daterangepicker.js' },
                { src: 'assets/vendor_assets/js/drawer.js' },
                { src: 'assets/vendor_assets/js/dynamicBadge.js' },
                { src: 'assets/vendor_assets/js/dynamicCheckbox.js' },
                { src: 'assets/vendor_assets/js/feather.min.js' },
                { src: 'assets/vendor_assets/js/footable.min.js' },
                { src: 'assets/vendor_assets/js/fullcalendar@5.2.0.js' },
                { src: 'assets/vendor_assets/js/google-chart.js' },
                { src: 'assets/vendor_assets/js/jquery-jvectormap-2.0.5.min.js' },
                { src: 'assets/vendor_assets/js/jquery-jvectormap-world-mill-en.js' },
                { src: 'assets/vendor_assets/js/jquery.countdown.min.js' },
                { src: 'assets/vendor_assets/js/jquery.filterizr.min.js' },
                { src: 'assets/vendor_assets/js/jquery.magnific-popup.min.js' },
                { src: 'assets/vendor_assets/js/jquery.mCustomScrollbar.min.js' },
                { src: 'assets/vendor_assets/js/jquery.peity.min.js' },
                { src: 'assets/vendor_assets/js/jquery.star-rating-svg.min.js' },
                { src: 'assets/vendor_assets/js/leaflet.js' },
                { src: 'assets/vendor_assets/js/leaflet.markercluster.js' },
                { src: 'assets/vendor_assets/js/loader.js' },
                { src: 'assets/vendor_assets/js/message.js' },
                { src: 'assets/vendor_assets/js/moment.js' },
                { src: 'assets/vendor_assets/js/muuri.min.js' },
                { src: 'assets/vendor_assets/js/notification.js' },
                { src: 'assets/vendor_assets/js/popover.js' },
                { src: 'assets/vendor_assets/js/select2.full.min.js' },
                { src: 'assets/vendor_assets/js/slick.min.js' },
                { src: 'assets/vendor_assets/js/trumbowyg.min.js' },
                { src: 'assets/vendor_assets/js/wickedpicker.min.js' },
                { src: 'assets/theme_assets/js/drag-drop.js' },
                { src: 'assets/theme_assets/js/footable.js' },
                { src: 'assets/theme_assets/js/full-calendar.js' },
                { src: 'assets/theme_assets/js/googlemap-init.js' },
                { src: 'assets/theme_assets/js/icon-loader.js' },
                { src: 'assets/theme_assets/js/jvectormap-init.js' },
                { src: 'assets/theme_assets/js/leaflet-init.js' },
                { src: 'assets/theme_assets/js/main.js' }
            ]
        };
    },
    components: { Loading }
};
</script>