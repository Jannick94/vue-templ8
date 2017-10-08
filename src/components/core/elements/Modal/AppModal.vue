<template>
    <transition name="modal">
        <div class="modal" v-if="isOpen" @click="close()">
            <div class="modal-dialog" @click.stop>
                <div class="modal-dialog-header">
                    <div>Title</div>
                    <div class="modal-dialog-close">
                        <AppIcon @click.native="close()">
                            close
                        </AppIcon>
                    </div>
                </div>
                <div class="modal-dialog-content">
                    Content
                </div>
                <div class="modal-dialog-footer">
                    <slot name="footer">
                        <AppButton class="primary" @click="close()">Close</AppButton>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                isOpen: false
            }
        },
        mounted() {
            this.$modals[this.name] = this;
        },
        methods: {
            open() {
                this.isOpen = true;
                this.$emit('open');
            },
            close() {
                this.isOpen = false;
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss">
    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-dialog,
    .modal-leave-active .modal-dialog {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);

    }

    .modal {
        position: fixed;
        background: rgba(0,0,0,0.2);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity .15s ease-in;

        .modal-dialog {
            background: #fff;
            box-shadow: 0px 2px 20px 2px rgba(0,0,0,0.2);
            width: 800px;
            transition: all .15s ease-in;

            .modal-dialog-header {
                display: flex;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid #eee;

                .modal-dialog-close {
                    cursor: pointer;
                    margin-left: auto;
                }
            }

            .modal-dialog-content {
                padding: 20px;
                min-height: 400px;
                max-height: 400px;
                overflow: auto;
            }

            .modal-dialog-footer {
                padding: 20px;
                border-top: 1px solid #eee;
                display: flex;
                justify-content: flex-end;
            }

        }
    }
</style>