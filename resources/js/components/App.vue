<template>
    <div class="container">
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from './views/Nav'
    export default {
        components:{Nav}
    }
</script>
