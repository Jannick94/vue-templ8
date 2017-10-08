<template>
    <div class="input">
        <input type="text" :value="value" @input="update($event.target.value)">
    </div>
</template>

<script>
    export default {
        name: 'AppInput',
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        methods: {
            update(val) {
                this.$emit('input', val);
            }
        }
    }
</script>

<style lang="scss">
    .input {

        input {
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