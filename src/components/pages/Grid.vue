<template>
    <div>
        <h2>Grid</h2>

        <AppRow>
            <AppCol xs="12" sm="4">
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol xs="12" sm="4">
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol xs="12" sm="4">
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol xs="12" sm="4">
                <div class="demo-col">Col</div>
            </AppCol>
        </AppRow>
    </div>
</template>

<script>
    export default {
        name: 'Grid',
    }
</script>

<style lang="scss">
    .demo-col {
        background: #eee;
        border: 1p solid #ddd;
        padding: 10px;
    }
</style>