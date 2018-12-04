<template>
    <div id="app" class="bg-blue-darkest min-h-screen font-sans">
        <ir-screen-md direction="down">
            <orientation-notice></orientation-notice>
        </ir-screen-md>
        <ir-screen-sm direction="down">
            <div class="w-full h-screen flex flex-col justify-end items-center">
                <mobile-notice></mobile-notice>
                <mobile-text-overlay :source="textSource"></mobile-text-overlay>
                <map-title :dataset="dataset"></map-title>
                <mobile-navigation :dataset="dataset" @select="dataset = $event"></mobile-navigation>
                <world-map 
                    :dataset="dataset"
                    @update="textSource = $event"
                ></world-map>
                <meta-info></meta-info>
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
    import WorldMap from './components/map/WorldMap'
    import TextOverlay from './components/overlays/TextOverlay'
    import DataSelector from './components/overlays/DataSelector'
    import MapTitle from './components/overlays/MapTitle'
    import MetaInfo from './components/overlays/MetaInfo'

    import OrientationNotice from './components/mobile/OrientationNotice'
    import MobileNotice from './components/mobile/MobileNotice'
    import MobileTextOverlay from './components/mobile/MobileTextOverlay'
    import MobileNavigation from './components/mobile/MobileNavigation'

    export default {
        components: {
            MobileNotice,
            OrientationNotice,
            WorldMap,
            TextOverlay,
            DataSelector,
            MapTitle,
            MetaInfo,
            MobileTextOverlay,
            MobileNavigation
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
