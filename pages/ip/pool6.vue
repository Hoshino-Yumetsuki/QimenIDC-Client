<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="content-center">
                    <div class="maintenance-page text-center">
                        <img src="/assets/icons/svg/maintenance.svg" alt="maintenance" class="svg" />
                        <h5 class="maintenance-page__title">&#128679;该功能还在开发中&#129313;</h5>
                        <p class="fw-500">敬请期待！感谢支持！</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'Console',
    head() {
        return {
            title: 'IPV6池列表 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'IPV6池列表 - QimenIDC'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: '//at.alicdn.com/t/c/font_4242563_kromlkm7t9r.css'
                }
            ]
        }
    },
}
</script>