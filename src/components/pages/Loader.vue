<template>
    <div>
        <h2>Loader</h2>

        <AppButton class="primary" @click="toggleLoader()">
            Toggle loader
        </AppButton>

        <AppLoader :visible="loading">
            <div class="loader-page">
                Some content
            </div>
        </AppLoader>
    </div>
</template>

<script>
    export default {
        name: 'Loader',
        data() {
            return {
                loading: false
            }
        },
        methods: {
            toggleLoader() {
                this.loading = true;

                setTimeout(() => {
                    this.loading = false;
                }, 1500);
            }
        }
    }
</script>

<style lang="scss">
    .loader-page {
        padding: 20px;
        margin: 20px 0;
    }
</style>