<template>
    <i v-html="featherIcon" :class="className"></i>
</template>

<script>
    import feather from 'feather-icons';

    export default {
        props: {
            name: String,
            size: String,
            className: String,
        },
        computed: {
            featherIcon() {
                // 获取SVG字符串
                let svgString = feather.icons[this.name].toSvg();

                // 将自定义类应用到SVG字符串中
                svgString = svgString.replace('<svg', `<svg class="${this.className}"`);

                return svgString;
            },
        },
    };
</script>
