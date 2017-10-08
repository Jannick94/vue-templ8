<template>
    <div class="alert" :class="type" v-show="isOpen">
        <div class="alert-message">
            <slot></slot>
        </div>
        <div class="alert-close" @click="close()">
            <AppIcon>close</AppIcon>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppAlert',
        props: {
            type: {
                type: String,
                default: 'primary'
            }
        },
        data() {
            return {
                isOpen: true
            }
        },
        methods: {
            close() {
                this.isOpen = false;
            }
        }
    }
</script>

<style lang="scss">
    @import "../../../../scss/app";

    .alert {
        padding: 20px;
        display: flex;
        align-items: center;
        border-radius: 2px;

        &.primary {
            background: $primary;
            color: #fff;
        }

        .alert-message {
            margin-right: auto;
        }
    }
</style>