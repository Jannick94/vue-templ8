let inputProps = {
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
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

export default inputProps;