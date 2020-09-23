<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ StringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
         computed: mapGetters([
             'doubleCounter',
             'StringCounter'
         ])
    }
</script>