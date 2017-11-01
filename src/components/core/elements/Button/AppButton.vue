<template>
    <button
        type="button"
        class="button"
        :class="{ 'button-loading': loading }"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'AppButton',
        props: {
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>