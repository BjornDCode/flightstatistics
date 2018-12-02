<template>
    <transition name="route" appear>        
        <path 
            v-if="routeAirports" 
            :d="`
                M${coordinates.x1},${coordinates.y1} 
                A${controlPoint.x},${controlPoint.y} 0 0 ${sweep} ${coordinates.x2},${coordinates.y2}
            `"
            :style="`
                --pathlength: ${pathLength};
                --duration: ${createRandomTransitionDuration()}ms;
            `"
            stroke="currentColor"
            :stroke-width="active ? 5 : 3"
            :stroke-dasharray="pathLength"
            @mouseover="emitData"
        ></path>
    </transition>
</template>

<script>

    export default {
        props: {
            route: {
                type: Object,
                required: true
            },
            airports: {
                type: Array,
                required: true
            },
            active: {
                type: Boolean,
                required: true
            }
        },

        data() {
            return {
                routeAirports: null,
                pathLength: "0"
            }
        },

        mounted() {
            this.routeAirports = {
                airport1: document.querySelector(`#${this.route.airport1}`),
                airport2: document.querySelector(`#${this.route.airport2}`)
            }

            this.$nextTick(() => {
                this.pathLength = this.$el.getTotalLength()
            })
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
                this.$emit('update', {
                    'Spot': `#${this.route.spot}`,
                    'Route': `${this.getAirportName(this.route.airport1)} - ${this.getAirportName(this.route.airport2)}`,
                    'Airline': this.route.airline,
                    'Total Revenue': `${this.formatMoney(this.route.totalRevenue)}`
                })

                this.$emit('active', this.route)
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
            },

            createRandomTransitionDuration() {
                return Math.floor(Math.random() * 2000)
            }
        }
    }
</script>

<style>
    .route-enter-active, .route-leave-active {
        transition: stroke-dashoffset var(--duration);
    }

    .route-enter, .route-leave-to {
        stroke-dashoffset: var(--pathlength);
    }
</style>
