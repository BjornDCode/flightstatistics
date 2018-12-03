<template>
    <transition @enter="enterTransition" @leave="leaveTransition">        
        <path 
            :d="`
                M${coordinates.x1},${coordinates.y1} 
                A${controlPoint.x},${controlPoint.y} 0 0 ${sweep} ${coordinates.x2},${coordinates.y2}
            `"
            style="transition: stroke-width 200ms;"
            stroke="currentColor"
            stroke-linecap="round"
            :stroke-width="active ? 5 : 3"
            :stroke-dasharray="pathLength"
            :stroke-dashoffset="pathLength"
            @mouseover="emitData"
        ></path>
    </transition>
</template>

<script>
    import { TweenLite } from 'gsap'
    import Formatter from '../mixins/Formatter'    

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

        mixins: [ Formatter ],

        data() {
            return {
                routeAirports: null,
                pathLength: 0
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
                    return { x1: 0, y1: 1, x2: 0, y2: 0 }
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
            }
        },

        methods: {
            emitData() {
                this.$emit('update', this.formatRouteText(this.route, this.airports))
                this.$emit('active', this.route)
            },

            createRandomTransitionDuration(min, max) {
                return (Math.random() * (max - min) + min) / 1000
            },

            enterTransition(el, done) {
                TweenLite.to(el, this.createRandomTransitionDuration(500, 2000), {
                    strokeDashoffset: 0,
                    onComplete() {
                        done()
                    }
                }) 
            },

            leaveTransition(el, done) {
                TweenLite.to(el, 0.25, {
                    strokeDashoffset: this.pathLength,
                    onComplete() {
                        done()
                    }
                })
            }
        }
    }
</script>
