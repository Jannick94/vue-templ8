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

<style lang="scss">
    @import "../../../../scss/app.scss";

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: #f9f9f9;
        padding: 10px 20px;
        border: 1px solid darken(#f9f9f9, 10%);
        border-radius: 2px;
        outline: none;
        margin: 5px;
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

                &.button-loading {
                    color: transparent;

                    &:hover {
                        &:after {
                            border-color: #fff;
                            border-top-color: transparent;
                        }
                    }

                    &:after {
                        border-color: $primary;
                        border-top-color: transparent;
                    }
                }
            }
        }

        &.button-loading {
            color: transparent;

            &:after {
                content: "";
                position: absolute;
                width: 14px;
                height: 14px;
                left: 0;
                right: 0;
                top: 10px;
                margin: auto;
                border: 3px solid #fff;
                border-radius: 50%;
                border-top-color: transparent;
                animation: rotate .5s infinite linear;
            }
        }
    }
</style>