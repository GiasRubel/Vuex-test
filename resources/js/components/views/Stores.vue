<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h5> This is  Store Component</h5>
            </div>
            <div class="card-body">
                <p>Go to Create Page</p>
                <router-link :to="{name: 'Store Create'}"  class="btn btn-success btn-sm" tag="button">Create Store</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stores"
    }
</script>

<style scoped>

</style>