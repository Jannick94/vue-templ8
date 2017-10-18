<template>
    <div id="app">
        <AppHeader>
            <AppButton class="primary" @click="toggleSideNav()">
                <AppIcon>menu</AppIcon>
            </AppButton>
            Brand
        </AppHeader>

        <div class="app-content">
            <AppSideNav :open="sideNavOpen"></AppSideNav>
            <div class="app-view">
                <transition name="view">
                    <router-view></router-view>
                </transition>
            </div>
        </div>

        <AppNotification></AppNotification>
    </div>
</template>

<script>
    import AppHeader  from '@/components/core/AppHeader';
    import AppSideNav from '@/components/core/AppSideNav';

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppSideNav
        },
        data() {
            return {
                sideNavOpen: true
            }
        },
        methods: {
            toggleSideNav() {
                this.sideNavOpen = !this.sideNavOpen;
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    @import "~normalize.css";
    @import "./scss/app.scss";

    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .app-content {
        display: flex;
        flex: 1;

        .app-view {
            flex: 1;
            padding: 20px;
        }
    }

    .view-enter-active, .view-leave-active {
      transition-property: opacity;
      transition-duration: .20s;
    }

    .view-enter-active {
      transition-delay: .20s;
    }

    .view-enter, .view-leave-active {
      opacity: 0
    }
</style>
