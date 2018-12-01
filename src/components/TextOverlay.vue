<template>
    <ul class="list-reset absolute pin-b pin-l mb-8 ml-8">
        <li v-for="(value, key) in source" class="mt-4">
            <span class="text-blue-lighter text-xs uppercase">{{ key }}</span>
            <p class="text-blue-lightest text-lg">{{ value }}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            source: {
                type: Object,
                required: false,
            }
        }
    }
</script>
