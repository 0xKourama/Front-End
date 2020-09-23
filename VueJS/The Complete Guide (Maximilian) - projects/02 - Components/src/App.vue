<template>
    <div class="container">
        <Header></Header>
        <hr>
        <div class="row">
            <servers></servers>
            <ServerDetails></ServerDetails>
        </div>
        <hr>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            Header,
            Servers,
            ServerDetails,
            Footer,
        }
    }
</script>

<style>

</style>
