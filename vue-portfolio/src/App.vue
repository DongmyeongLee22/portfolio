<template>
    <v-app>
        <AppBar/>
        <v-content class="white">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import AppBar from "./components/AppBar";

    export default {
        name: 'App',
        components: {
            AppBar
        }

    };
</script>

<style>
    a {
        text-decoration: none;
    }

    @media (min-width: 1904px) {
        .container {
            max-width: 1185px !important;
        }
    }

    .bg-light-grey {
        background-color: #f7f7f7;
    }

    .row {
        margin-left: auto !important;
        margin-right: auto !important;
    }

    @media (min-width: 1450px) {
        .my-about-card {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }

    .container {
        width: 95% !important;
    }
</style>
