<template>
    <div class="app-header">
        <div class="app-header-brand">
            <slot>App Brand</slot>
        </div>

        <div class="app-header-nav">
            <ul class="list-inline">
                <li class="app-header-nav-item">
                    <a href="#">
                        <i class="material-icons">face</i>
                    </a>
                </li>
                <li class="app-header-nav-item">
                    <a href="#">
                        <i class="material-icons">settings</i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style lang="scss">
    @import "../../scss/variables.scss";

    .app-header {
        background: $primary;
        height: 80px;
        padding: 0 30px;
        color: #fff;
        display: flex;
        align-items: center;
        box-shadow: 0px 1px 11px 4px rgba(0, 0, 0, 0.15);

        .app-header-brand {
            margin-right: auto;
            display: flex;
            align-items: center;
        }

        .app-header-nav {

            .app-header-nav-item {
                a {
                    color: #fff;
                    padding: 35px 25px 25px;
                    transition: background .15s ease-in-out;

                    &:hover {
                        background: darken($primary, 2%);
                    }
                }
            }

        }
    }
</style>