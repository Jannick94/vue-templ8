<template>
    <div class="app-dropdown-button">
        <div class="dropdown-button">
            <AppButton class="primary dropdown-button-primary" @click.native="primary()">Dropdown</AppButton>
            <AppButton class="primary dropdown-button-secondary" @click.native="toggle()">
                <i class="material-icons">arrow_drop_down</i>
            </AppButton>
        </div>
        <ul class="dropdown-button-list" v-show="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    import AppButton from '@/components/core/elements/Button/AppButton';

    export default {
        name: 'AppDropdownButton',
        components: {
            AppButton
        },
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            primary() {
                this.$emit('primary');
            },
            toggle() {
                this.isOpen = !this.isOpen;
                this.$emit('toggle', this.isOpen);
            }
        }
    }
</script>

<style lang="scss">
    .app-dropdown-button {
        display: inline-block;

        .dropdown-button {
            display: flex;

            .button {
                margin: 0;
                padding: 8px 20px;
            }

            .dropdown-button-primary {
                border-radius: 2px 0px 0px 2px;
                border-right: none;
            }

            .dropdown-button-secondary {
                border-radius: 0px 2px 2px 0px;
                padding: 10px;
            }
        }

        .dropdown-button-list {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 0;
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 5px 0;

            a {
                display: flex;
                align-items: center;
                padding: 10px;

                i {
                    margin-right: 10px;
                }

                &:hover {
                    background: #ddd;
                }
            }
        }
    }
</style>