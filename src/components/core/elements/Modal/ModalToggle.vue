<template>
    <AppButton class="primary" @click.native="open()">
        Open basic modal
    </AppButton>
</template>

<script>
    export default {
        name: 'ModalToggle',
        props: {
            name: {
                type: String,
                required: true
            }
        },
        methods: {
            open() {
                this.$modals[this.name].open();
            }
        }
    }
</script>