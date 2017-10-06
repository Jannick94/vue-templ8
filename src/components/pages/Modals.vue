<template>
    <div>
        <h2>Modals</h2>

        <ModalToggle name="modal"></ModalToggle>
        <Modal name="modal"></Modal>
    </div>
</template>

<script>
    import { Modal, ModalToggle } from '@/components/core/elements/Modal/index.js';

    export default {
        name: 'Modals',
        components: {
            Modal,
            ModalToggle
        }
    }
</script>