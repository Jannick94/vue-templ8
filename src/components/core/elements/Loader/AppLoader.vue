<template>
    <div class="loader">
        <div class="loader-wrapper" v-if="visible">
            <div class="loader-icon"></div>
        </div>
        <div class="loading-content" :class="{ 'is-loading': visible }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppLoader',
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    @import "../../../../scss/app.scss";

    .loader {
        position: relative;

        .loader-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.2);
            display: flex;
            justify-content: center;
            align-items: center;

            .loader-icon {
                display: flex;
                align-items: center;
                justify-content: center;

                &::after {
                    content: "";
                    position: absolute;
                    border: 3px solid;
                    border-top-color: transparent;
                    border-right-color: transparent;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    animation: rotate .5s infinite linear;
                }
            }
        }

        .loading-content.is-loading {
            opacity: 0.5;
        }
    }
</style>