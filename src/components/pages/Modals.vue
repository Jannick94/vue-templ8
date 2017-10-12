<template>
    <div>
        <h2>Modals</h2>

        <AppModalToggle name="modal"></AppModalToggle>
        <AppModal name="modal">
            <AppRow>
                <AppCol sm="3" xs="6">col in modal</AppCol>
                <AppCol>col in modal</AppCol>
            </AppRow>
        </AppModal>
    </div>
</template>

<script>
    import { AppModal, AppModalToggle } from '@/components/core/elements/Modal/index.js';

    export default {
        name: 'Modals',
        components: {
            AppModal,
            AppModalToggle
        }
    }
</script>