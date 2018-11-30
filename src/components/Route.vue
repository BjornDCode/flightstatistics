<template>
    <line 
        :x1="coordinates.x1" 
        :y1="coordinates.y1" 
        :x2="coordinates.x2" 
        :y2="coordinates.y2" 
        stroke="#DE5A5A" 
        stroke-width="3" 
    />
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            route: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                airports: null
            }
        },

        mounted() {
            this.airports = {
                airport1: document.querySelector(`#${this.route.airport1}`),
                airport2: document.querySelector(`#${this.route.airport2}`)
            }
        },

        computed: {
            coordinates() {
                if (!this.airports) {
                    return { x: 0, y: 0 }
                }

                return {
                    x1: this.airports.airport1.getAttribute('cx'),
                    y1: this.airports.airport1.getAttribute('cy'),
                    x2: this.airports.airport2.getAttribute('cx'),
                    y2: this.airports.airport2.getAttribute('cy')
                }
            },
        }
    })
</script>
