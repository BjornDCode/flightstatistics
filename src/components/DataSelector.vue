<template>
    <ul class="absolute pin-b pin-r mb-8 mr-8 list-reset text-blue-lightest">
        <transition-step-in appear>
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
        </transition-step-in>
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
