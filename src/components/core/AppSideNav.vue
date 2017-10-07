<template>
    <div class="side-nav">
        <ul class="list-unstyled">
            <li class="side-nav-item">
                <router-link to="/">
                    <i class="material-icons">home</i>
                    Home
                </router-link>
            </li>
            <li class="side-nav-item">
                <router-link to="/buttons">
                    <i class="material-icons">view_quilt</i>
                    Buttons
                </router-link>
            </li>
            <li class="side-nav-item">
                <router-link to="/modals">
                    <i class="material-icons">view_carousel</i>
                    Modals
                </router-link>
            </li>
            <li class="side-nav-item">
                <router-link to="/notifications">
                    <i class="material-icons">view_carousel</i>
                    Notifications
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'SideNav',
    }
</script>

<style lang="scss">
    @import "../../scss/variables.scss";

    .side-nav {
        background: $primary;
        color: #fff;
        flex: 1;
        flex-basis: 120px;
        max-width: 120px;
        box-shadow: 1px 10px 11px 4px rgba(0, 0, 0, 0.15);

        .side-nav-item {
            text-align: center;
            border-bottom: 1px solid darken($primary, 5%);

            &:first-child {
                border-top: 1px solid darken($primary, 5%);
            }

            a {
                padding: 20px;
                text-decoration: none;
                color: #fff;
                transition: background .15s ease-in-out;
                display: flex;
                flex-direction: column;

                &:hover {
                    background: darken($primary, 2%);
                }

                i {
                    margin: 5px 0;
                }
            }
        }
    }
</style>