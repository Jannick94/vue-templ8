<template>
    <div>
        <h2>Alerts</h2>

        <Alert>Alert! Some message here</Alert>
        <Alert type="danger">Alert! Some message here</Alert>
    </div>
</template>

<script>
    import Alert from '@/components/core/elements/Alert/AppAlert';

    export default {
        name: 'Alerts',
        components: {
            Alert
        }
    }
</script>