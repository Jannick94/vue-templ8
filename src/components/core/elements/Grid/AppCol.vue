<template>
    <div class="col" :class="[colXs, colSm]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AppCol',
        props: {
            xs: {
                type: [String, Number]
            },
            sm: {
                type: [String, Number]
            }
        },
        computed: {
            colXs() {
                if (this.xs) {
                    return `col-xs-${this.xs}`;
                }

                return `col-xs`;
            },
            colSm() {
                return `col-sm-${this.sm}`;
            }
        }
    }
</script>

<style lang="scss">
    .col {
        flex: 1;
        padding: 0 15px;

        &.col-xs, &.col-sm, &.col-md, &.col-lg {
            flex-basis: 0;
        }

        &.col-xs-6 {
            flex-basis: 50%;
            max-width: 50%;
        }

        &.col-xs-12 {
            flex-basis: 100%;
            max-width: 100%;
        }

        @media(min-width: 768px) {
            &.col-sm-3 {
                flex-basis: 33.3333333%;
                max-width: 33.3333333%;
            }

            &.col-sm-4 {
                flex-basis: 25%;
                max-width: 25%;
            }
        }
    }
</style>