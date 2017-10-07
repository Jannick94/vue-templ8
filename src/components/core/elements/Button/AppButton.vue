<template>
    <button type="button" class="button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'AppButton'
    }
</script>

<style lang="scss">
    @import "../../../../scss/variables.scss";

    .button {
        background: #f9f9f9;
        padding: 10px 20px;
        border: 1px solid darken(#f9f9f9, 10%);
        border-radius: 2px;
        outline: none;
        margin: 0 5px;
        cursor: pointer;
        transition: all .15s ease-in-out;

        &.primary {
            background: $primary;
            border: 1px solid darken($primary, 10%);
            color: #fff;

            &:hover {
                background: darken($primary, 10%);
            }

            &:active {
                background: darken($primary, 20%);
            }

            &.outline {
                background: #f9f9f9;
                border: 1px solid $primary;
                color: $primary;

                &:hover {
                    background: $primary;
                    border: 1px solid darken($primary, 10%);
                    color: #fff;
                }

                &:active {
                    background: darken($primary, 20%);
                }
            }
        }
    }
</style>