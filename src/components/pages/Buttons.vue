<template>
    <div>
        <h2>Button</h2>
        <AppButton class="primary">Button</AppButton>

        <h2>Button Outline</h2>
        <AppButton class="primary outline">Button</AppButton>

        <h2>Button Loading</h2>
        <AppButton
            class="primary"
            :loading="loadingOne"
            @click="loadingOne = !loadingOne"
        >
            Click to show loader
        </AppButton>

        <AppButton
            class="primary outline"
            :loading="loadingTwo"
            @click="loadingTwo = !loadingTwo"
        >
            Click to show loader
        </AppButton>

        <h2>Button dropdown</h2>
        <AppDropdownButton>
            <li>
                <router-link to="/buttons">
                    <AppIcon>attachment</AppIcon>
                    Dropdown item
                </router-link>
            </li>
            <li>
                <router-link to="/buttons">
                    <AppIcon>file_download</AppIcon>
                    Dropdown item with long text
                </router-link>
            </li>
        </AppDropdownButton>
    </div>
</template>

<script>
    import AppDropdownButton from '@/components/core/elements/Button/AppDropdownButton';

    export default {
        name: 'Buttons',
        components: {
            AppDropdownButton
        },
        data() {
            return {
                loadingOne: false,
                loadingTwo: false
            }
        }
    }
</script>