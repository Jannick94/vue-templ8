<template>
    <div class="input input-icon">
        <AppIcon>{{ icon }}</AppIcon>
        <input
            type="text"
            :placeholder="placeholder"
            :value="value"
            @input="update($event.target.value)"
        >
    </div>
</template>

<script>
    import inputProps from './props';

    export default {
        name: 'AppInputIcon',
        mixins: [inputProps],
        props: {
            icon: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .input {

        &.input-icon {
            position: relative;

            input {
                padding-left: 40px;
            }
        }

        i {
            position: absolute;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 10px;
        }
    }

</style>