<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AppRow',
    }
</script>

<style lang="scss">
    .row {
        display: flex;
        margin: 10px -15px;
        flex-wrap: wrap;
    }
</style>