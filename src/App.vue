<template>
    <div id="app" class="bg-blue-darkest min-h-screen font-sans">
        <ir-screen-md direction="down">
            <orientation-notice></orientation-notice>
        </ir-screen-md>
        <ir-screen-sm direction="down">
            <mobile-notice></mobile-notice>
        </ir-screen-sm>
    </div>
</template>

<script>
    import MobileNotice from './components/MobileNotice'
    import OrientationNotice from './components/OrientationNotice'

    export default {
        components: {
            MobileNotice,
            OrientationNotice
        }
    }
</script>

<style>
    @font-face {
        font-family: 'Electrolize';
        src: url('./assets/fonts/Electrolize-Regular.ttf');
    }

    @tailwind preflight;
    @tailwind components;
    @tailwind utilities;
</style>
