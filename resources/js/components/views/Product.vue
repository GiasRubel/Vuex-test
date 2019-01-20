<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
               <h5> This is  Product Component</h5>
                <ul v-for="(product,index) in products" :key="product.id">
                    <li>{{ product.title }} => Price: {{product.price}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",
        // props: ['products'],

        computed: {
            products(){
                return this.$store.state.products
            }

        },
        created() {
            this.$store.dispatch('fetchProduct')
        }
    }
</script>

<style scoped>

</style>