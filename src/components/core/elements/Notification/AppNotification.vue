<template>
    <transition name="slide-up">
        <div class="notification" :class="position" v-show="isOpen">
            <div class="notification-message">
                {{ message }}
            </div>
            <div class="notification-action" @click="close()">
                OK
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Notification',
        data() {
            return {
                isOpen: false,
                message: '',
                position: 'bottom right'
            }
        },
        created() {
            Vue.prototype.$notification = this;
        },
        methods: {
            open(message, position = 'bottom-right') {
                this.position = position
                this.message  = message;
                this.isOpen   = true;

                setTimeout(() => {
                    this.isOpen = false;
                }, 3000);
            },
            close() {
                this.isOpen = false;
            }
        }
    }
</script>

<style lang="scss">
    .slide-up-active, .slide-up-leave-active {
        transition: opacity .15s;
    }

    .slide-up-enter, .slide-up-leave-to {
        opacity: 0;
        transform: translateY(100px);
    }

    .notification {
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 25px;
        right: 25px;
        padding: 10px 20px;
        background: #2f2f2f;
        color: #fff;
        transition: all .15s ease-out;

        .notification-action {
            margin-left: 20px;
            padding: 10px;
            transition: background .15s ease-in-out;
            cursor: pointer;
            border-radius: 2px;

            &:hover {
                background: rgba(255, 255, 255, 0.3);
            }
        }
    }
</style>