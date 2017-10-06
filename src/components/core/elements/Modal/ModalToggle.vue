<template>
    <AppButton class="primary" @click.native="open()">
        Open basic modal
    </AppButton>
</template>

<script>
    import AppButton from '@/components/core/elements/Button/AppButton';

    export default {
        name: 'ModalToggle',
        components: {
            AppButton
        },
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