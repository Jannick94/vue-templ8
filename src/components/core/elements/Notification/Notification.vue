<template>
    <div class="notification" :class="position">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Notification',
        props: {
            position: {
                type: String,
                default: 'bottom right',
                validator: (val) => {
                    return [
                        'bottom right',
                        'bottom left',
                        'top right',
                        'top left',
                    ].indexOf(val) > -1
                }
            }
        },
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            open() {
                this.isOpen = true;
            }
        }
    }
</script>

<style lang="scss">
    .notification {
        position: fixed;
        bottom: 25px;
        right: 25px;
        background: #2f2f2f;
        padding: 20px;
        color: #fff;
    }
</style>