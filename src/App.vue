<template>
    <div id="app" class="bg-blue-darkest min-h-screen font-sans">
        <ir-screen-md direction="down">
            <orientation-notice></orientation-notice>
        </ir-screen-md>
    </div>
</template>

<script>
    import OrientationNotice from './components/OrientationNotice'

    export default {
        components: {
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
