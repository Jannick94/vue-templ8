<template>
    <div class="input">
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
        name: 'AppInput',
        mixins: [inputProps],
    }
</script>

<style lang="scss">
    .input {
        display: flex;
        margin: 10px 0 0;

        input {
            flex: 1;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 2px;
            outline: none;
            transition: border-color .15s ease-in-out;

            &:focus {
                border-color: #bbb;
            }
        }
    }
</style>