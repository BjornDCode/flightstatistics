<template>
    <path 
        v-if="routeAirports" 
        :d="`
            M${coordinates.x1},${coordinates.y1} 
            A${controlPoint.x},${controlPoint.y} 0 0 ${sweep} ${coordinates.x2},${coordinates.y2}
        `"
        stroke="#DE5A5A"
        stroke-width="3"
        @mouseover="emitData"
    ></path>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            route: {
                type: Object,
                required: true
            },
            airports: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                routeAirports: null
            }
        },

        mounted() {
            this.routeAirports = {
                airport1: document.querySelector(`#${this.route.airport1}`),
                airport2: document.querySelector(`#${this.route.airport2}`)
            }
        },

        computed: {
            coordinates() {
                if (!this.routeAirports) {
                    return null
                }

                return {
                    x1: parseInt(this.routeAirports.airport1.getAttribute('cx')),
                    y1: parseInt(this.routeAirports.airport1.getAttribute('cy')),
                    x2: parseInt(this.routeAirports.airport2.getAttribute('cx')),
                    y2: parseInt(this.routeAirports.airport2.getAttribute('cy'))
                }
            },

            sweep() {
                if (!this.coordinates) {
                    return 0
                }

                return (this.coordinates.x1 > this.coordinates.x2) ? 0 : 1
            },

            controlPoint() {
                if (!this.coordinates) {
                    return { x: 0, y: 0 }
                }

                const ellipsisRadius = ((this.coordinates.x1 - this.coordinates.x2) / 2) + parseInt(this.coordinates.x2)

                return {
                    x: ellipsisRadius,
                    y: ellipsisRadius
                }
            },
        },

        methods: {
            emitData() {
                this.$emit('routeSelect', {
                    'Spot': `#${this.route.spot}`,
                    'Route': `${this.getAirportName(this.route.airport1)} - ${this.getAirportName(this.route.airport2)}`,
                    'Airline': this.route.airline,
                    'Total Revenue': `${this.formatMoney(this.route.totalRevenue)}`
                })
            },

            formatMoney(money) {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                }).format(money)
            },

            getAirportName(airportCode) {
                return this.airports.find(airport => airport.code === airportCode ).name
            }
        }
    })
</script>
