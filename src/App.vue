<template>
    <div id="app">
        <AppHeader></AppHeader>

        <div class="app-content">
            <AppSideNav></AppSideNav>
            <div class="app-view">
                <router-view></router-view>
            </div>
        </div>
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
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    @import "~normalize.css";
    @import "./scss/variables.scss";

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
</style>
