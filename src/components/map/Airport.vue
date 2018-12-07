<template>
    <transition name="airport">
        <circle 
            fill="currentColor"
            :cx="airport.coordinates.x" 
            :cy="airport.coordinates.y" 
            :r="active ? 8 : 6" 
            :id="airport.code" 
            @mouseover="emitData"
        />
    </transition>
</template>

<script>
    import Formatter from '../../mixins/Formatter'

    export default {
        mixins: [ Formatter ],

        props: {
            airport: {
                type: Object,
                required: true
            },
            active: {
                type: Boolean,
                required: true
            }
        },

        methods: {
            emitData() {
                this.$emit('update', this.formatAirportText(this.airport))
                this.$emit('active', this.airport)
            }
        }
    }
</script>

<style>
    .airport-enter-active {
        transition: opacity 400ms;
    }

    .airport-leave-active {
        transition: opacity 250ms;
    }

    .airport-enter, .airport-leave-to {
        opacity: 0;
    }
</style>
