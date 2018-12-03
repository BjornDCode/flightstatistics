<template>
    <div id="app" class="bg-blue-darkest min-h-screen font-sans">
        <ir-screen-md direction="down">
            <orientation-notice></orientation-notice>
        </ir-screen-md>
        <ir-screen-sm direction="down">
            <mobile-notice></mobile-notice>
        </ir-screen-sm>
        <ir-screen-md>
            <div class="w-full h-screen flex justify-center items-center">
                <desktop-map 
                    :dataset="dataset"
                    @update="textSource = $event"
                ></desktop-map>
                <text-overlay :source="textSource"></text-overlay>
                <data-selector @select="dataset = $event" :currently-selected="dataset"></data-selector>
            </div>
        </ir-screen-md>
    </div>
</template>

<script>
    import MobileNotice from './components/MobileNotice'
    import OrientationNotice from './components/OrientationNotice'
    import DesktopMap from './components/DesktopMap'
    import TextOverlay from './components/TextOverlay'
    import DataSelector from './components/DataSelector'

    export default {
        components: {
            MobileNotice,
            OrientationNotice,
            DesktopMap,
            TextOverlay,
            DataSelector
        },

        data() {
            return {
                textSource: {},
                dataset: 'mostProfitableRoutes'
            }
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

    @responsive {
        .w-80 {
            width: 80%;
        }

        .transition-100 {
            transition: all 100ms;
        }
    }
</style>
