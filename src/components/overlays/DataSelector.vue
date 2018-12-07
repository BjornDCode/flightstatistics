<template>
    <ul class="md:absolute md:pin-b md:pin-r md:mb-8 md:mr-8 list-reset text-blue-lightest">
        <transition-group name="step-in" appear>
            <li 
                class="mb-2" 
                v-for="(dataset, index) in datasets" 
                :key="dataset.key"
                :style="`transition-delay: ${150 * index}ms`"
            >
                <label class="cursor-pointer flex items-center group">
                    <input 
                        type="radio" 
                        name="dataset" 
                        :checked="currentlySelected === dataset.key"
                        :value="dataset.key"
                        @change="select"
                        class="hidden" 
                    >
                    <span 
                        :class="[`block w-4 h-4 rounded-full transition-100 group-hover:border-4 border-${dataset.color} mr-2`, currentlySelected === dataset.key ? `bg-${dataset.color}` : `border-2`]"
                    ></span>
                    {{ dataset.name }}
                </label>
            </li>
        </transition-group>
    </ul>
</template>

<script>
    export default {
        props: {
            currentlySelected: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                datasets: [
                    { 
                        key: 'mostProfitableRoutes', 
                        name: 'Most Profitable Routes',
                        color: 'red'
                    },
                    { 
                        key: 'busiestRoutes', 
                        name: 'Busiest Routes',
                        color: 'yellow'
                    },
                    {
                        key: 'busiestAirports',
                        name: 'Busiest Airports',
                        color: 'green'
                    }
                ]
            }
        },

        methods: {
            select(e) {
                this.$emit('select', e.target.value)
            }
        }
    }
</script>

<style>
    .step-in-enter-active {
        transition: all 150ms;
    }
    .step-in-enter, .step-in-leave-to {
        @apply opacity-0;
        transform: translateX(-2rem);
    }
</style>
