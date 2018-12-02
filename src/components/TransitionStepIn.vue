<template>
    <transition-group name="step-in" v-bind="$attrs">
        <slot></slot>
    </transition-group>
</template>

<style>
    .step-in-enter-active {
        transition: all 150ms;
    }
    .step-in-enter, .step-in-leave-to {
        @apply opacity-0;
        transform: translateX(-2rem);
    }
</style>

