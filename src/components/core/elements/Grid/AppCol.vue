<template>
    <div class="col">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AppCol'
    }
</script>

<style lang="scss">
    .col {
        flex: 1;
        padding: 0 15px;
    }
</style>