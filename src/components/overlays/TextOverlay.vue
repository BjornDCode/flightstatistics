<template>
    <ul class="list-reset md:absolute md:pin-b md:pin-l md:mb-8 md:ml-8">
        <transition-group @enter="enterTransition" @leave="leaveTransition">
            <li v-for="(value, key, index) in source" :key="key + Date.now()" :data-index="index" class="mb-4 md:mb-0 md:mt-4">
                <span class="text-blue-lighter text-xs uppercase">{{ key }}</span>
                <p class="text-blue-lightest text-lg">{{ value }}</p>
            </li>
        </transition-group>
    </ul>
</template>

<script>
    import { isEmpty } from 'lodash'
    import { TweenLite } from 'gsap'

    export default {
        props: {
            source: {
                type: Object,
                required: false,
            }
        },

        methods: {
            enterTransition(el, done) {
                TweenLite.fromTo(el, 0.15, {
                    x: -40,
                    opacity: 0
                }, {
                    delay: el.dataset.index * 0.15,
                    x: 0,
                    opacity: 1,
                    onComplete: done
                })
            },

            leaveTransition(el, done) {
                TweenLite.set(el, {
                    opacity: 0,
                    onComplete: done
                })
            }
        }
    }
</script>
