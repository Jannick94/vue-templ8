<template>
    <div>
        <h2>Button</h2>
        <AppButton class="primary">Button</AppButton>

        <h2>Button Outline</h2>
        <AppButton class="primary outline">Button</AppButton>
    </div>
</template>

<script>
    import AppButton from '@/components/core/elements/Button/AppButton';

    export default {
        name: 'Buttons',
        components: {
            AppButton
        },
        mounted() {
            console.log(this);
        }
    }
</script>