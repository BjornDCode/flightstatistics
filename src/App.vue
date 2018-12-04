<template>
    <div id="app" class="bg-blue-darkest min-h-screen font-sans">
        <ir-screen-md direction="down">
            <orientation-notice></orientation-notice>
        </ir-screen-md>
        <ir-screen-sm direction="down">
            <div class="w-full h-screen flex flex-col justify-center items-center">
                <mobile-notice></mobile-notice>
                <map-title :dataset="dataset"></map-title>
                <world-map 
                    :dataset="dataset"
                    @update="textSource = $event"
                ></world-map>
            </div>
        </ir-screen-sm>
        <ir-screen-md>
            <div class="w-full h-screen flex flex-col justify-between items-center">
                <map-title :dataset="dataset"></map-title>
                <world-map 
                    :dataset="dataset"
                    @update="textSource = $event"
                ></world-map>
                <meta-info></meta-info>
                <text-overlay :source="textSource"></text-overlay>
                <data-selector @select="dataset = $event" :currently-selected="dataset"></data-selector>
            </div>
        </ir-screen-md>
    </div>
</template>

<script>
    import MobileNotice from './components/MobileNotice'
    import OrientationNotice from './components/OrientationNotice'
    import WorldMap from './components/WorldMap'
    import TextOverlay from './components/TextOverlay'
    import DataSelector from './components/DataSelector'
    import MapTitle from './components/MapTitle'
    import MetaInfo from './components/MetaInfo'

    export default {
        components: {
            MobileNotice,
            OrientationNotice,
            WorldMap,
            TextOverlay,
            DataSelector,
            MapTitle,
            MetaInfo
        },

        data() {
            return {
                textSource: {},
                dataset: 'mostProfitableRoutes'
            }
        },

        watch: {
            dataset() {
                this.textSource = {}
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

        .transition-100 {
            transition: all 100ms;
        }
    }

    ::selection {
        @apply bg-blue-lightest text-blue-darkest;
    }
</style>
