<template>
    <v-app>
        <AppBar/>
        <v-content>
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
</style>
