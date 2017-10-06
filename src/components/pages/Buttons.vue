<template>
    <div>
        <h2>Button</h2>
        <AppButton class="primary">Button</AppButton>

        <h2>Button Outline</h2>
        <AppButton class="primary outline">Button</AppButton>

        <h2>Button dropdown</h2>
        <AppDropdownButton></AppDropdownButton>
    </div>
</template>

<script>
    import AppButton         from '@/components/core/elements/Button/AppButton';
    import AppDropdownButton from '@/components/core/elements/Button/AppDropdownButton';

    export default {
        name: 'Buttons',
        components: {
            AppButton,
            AppDropdownButton
        }
    }
</script>