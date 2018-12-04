<template>
    <ir-hamburger-nav>
        <button slot="toggle" slot-scope="{ open, toggle }" @click="toggle" class="absolute pin-t pin-r z-20 mt-4 mr-4">
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                <svg width="27" height="17" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#C2CFE8" fill-rule="nonzero">
                        <rect width="27" height="3" rx="1.5" />
                        <rect y="7" width="27" height="3" rx="1.5" />
                        <rect x="7" y="14" width="20" height="3" rx="1.5" />
                    </g>
                </svg>
            </svg>
        </button>
        <div slot="content" slot-scope="{ open, toggle }" v-show="open" class="absolute z-30 pin bg-black-transparent flex justify-end" @click.self="toggle">
            <transition name="slide-right">
                <div v-show="open" class="absolute pin-3 w-1/2 h-full p-4 bg-blue-darkest">
                    <button @click="toggle" class="mb-4">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                            <path class="text-blue-lightest" fill="currentColor" d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z" /></svg>
                    </button>
                    <div>
                        <data-selector @select="$emit('select', $event)" :currently-selected="dataset"></data-selector>
                    </div>
                </div>
            </transition>
        </div>
    </ir-hamburger-nav>
</template>

<script>
import DataSelector from '../overlays/DataSelector'
import MetaInfo from '../overlays/MetaInfo'
import { isEmpty } from 'lodash'

export default {
    components: {
        DataSelector,
        MetaInfo
    },

    props: {
        dataset: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
    .slide-right-enter-active, .slide-right-leave-active {
        transition: transform 200ms;
    }
    .slide-right-enter, .slide-right-leave-to {
        transform: translateX(80%);
    }
</style>
