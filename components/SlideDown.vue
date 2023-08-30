<template>
    <Transition name="slideDown">
        <template v-if="props.isShow">
            <slot />
        </template>
    </Transition>
</template>

<script setup>
const props = defineProps({
    isShow: {
        default: false,
        type: Boolean
    }
});
</script>

<style scoped>
.slideDown-enter-active,
.slideDown-leave-active {
    transition: all 150ms ease-in-out;
    -webkit-transition: all 150ms ease-in-out;
    -ms-transition: all 150ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
}

.slideDown-enter-to,
.slideDown-leave-from {
    max-height: 100px;
    overflow: hidden;
}

.slideDown-enter-from,
.slideDown-leave-to {
    overflow: hidden;
    max-height: 0;
}
</style>