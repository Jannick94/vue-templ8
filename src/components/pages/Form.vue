<template>
    <div>
        <h2>Form</h2>

        <AppInput v-model="input"></AppInput>
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
