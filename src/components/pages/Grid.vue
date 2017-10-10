<template>
    <div>
        <h2>Grid</h2>

        <AppRow>
            <AppCol>
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol>
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol>
                <div class="demo-col">Col</div>
            </AppCol>
        </AppRow>

        <AppRow>
            <AppCol>
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol>
                <div class="demo-col">Col</div>
            </AppCol>
        </AppRow>

        <AppRow>
            <AppCol>
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol>
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol>
                <div class="demo-col">Col</div>
            </AppCol>
            <AppCol>
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