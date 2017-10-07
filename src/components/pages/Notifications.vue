<template>
    <div>
        <h2>Notifications</h2>

        <AppButton class="primary">Show notification</AppButton>

        <Notification>Notification</Notification>
    </div>
</template>

<script>
    import { Notification } from '@/components/core/elements/Notification/index';

    export default {
        name: 'Notifications',
        components: {
            Notification
        }
    }
</script>