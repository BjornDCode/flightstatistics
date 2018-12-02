<template>
    <transition name="fade">
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
    export default {
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
                this.$emit('update', {
                    'Airport': this.airport.name,
                    'Code': this.airport.code.toUpperCase(),
                    'City': this.airport.city,
                    'Country': this.airport.country,
                })

                this.$emit('active', this.airport)
            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 400ms;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
