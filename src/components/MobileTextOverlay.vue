<template>
    <ir-hamburger-nav>
        <button slot="toggle" slot-scope="{ open, toggle }" @click="toggle" class="absolute pin-t pin-l z-20 mt-4 ml-4">
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                <g fill="#C2CFE8" fill-rule="nonzero">
                    <path d="M12.5 0C5.607 0 0 5.608 0 12.5 0 19.393 5.607 25 12.5 25 19.392 25 25 19.393 25 12.5 25 5.608 19.392 0 12.5 0zm0 22.727c-5.64 0-10.227-4.588-10.227-10.227C2.273 6.86 6.86 2.273 12.5 2.273c5.64 0 10.227 4.588 10.227 10.227 0 5.64-4.588 10.227-10.227 10.227z" />
                    <path d="M12.5 5c-.827 0-1.5.673-1.5 1.5S11.673 8 12.5 8 14 7.327 14 6.5 13.327 5 12.5 5zM12.5 10c-.828 0-1.5.504-1.5 1.125v6.75c0 .621.672 1.125 1.5 1.125s1.5-.504 1.5-1.125v-6.75c0-.621-.672-1.125-1.5-1.125z" />
                </g>
            </svg>
        </button>
        <div slot="content" slot-scope="{ open, toggle }" v-show="open" class="absolute z-30 pin bg-black-transparent">
            <ir-transition-slide-right>
                <div v-show="open" class="w-1/2 h-full p-4 bg-blue-darkest">
                    <button @click="toggle" class="mb-4">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                            <path class="text-blue-lightest" fill="currentColor" d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z" /></svg>
                    </button>
                    <div>
                        <text-overlay v-if="hasSourceText" :source="source"></text-overlay>
                        <span v-else class="text-blue-lightest leading-normal">Select a route or airport by clicking on it. The details will show up here.</span>
                    </div>
                </div>
            </ir-transition-slide-right>
        </div>
    </ir-hamburger-nav>
</template>
<script>
import TextOverlay from './TextOverlay'
import { isEmpty } from 'lodash'

export default {
    components: {
        TextOverlay
    },

    props: {
        source: {
            type: Object,
            required: false,
        }
    },

    computed: {
        hasSourceText() {
            return !isEmpty(this.source)
        }
    }
}
</script>
