<template>
    <div>
        <h2>Modals</h2>

        <AppModalToggle name="modal"></AppModalToggle>
        <AppModal name="modal"></AppModal>
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