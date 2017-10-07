<template>
    <div>
        <h2>Notifications</h2>

        <AppButton class="primary" @click="showNotification">Show notification</AppButton>
    </div>
</template>

<script>
    import { Notification } from '@/components/core/elements/Notification/index';

    export default {
        name: 'Notifications',
        methods: {
            showNotification() {
                this.$notification.open('Custom message');
            }
        }
    }
</script>