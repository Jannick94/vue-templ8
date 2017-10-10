<template>
    <div>
        <h2>Form</h2>

        <AppInput placeholder="Input placeholder" v-model="input"></AppInput>

        <AppInputIcon icon="grade" placeholder="Input icon placeholder"></AppInputIcon>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                input: ''
            }
        }
    }
</script>
