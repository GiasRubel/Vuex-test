<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h5> This is  Customer Component</h5>
                <ul v-for="(product,index) in saleProduct" :key="product.id">
                    <li>{{ product.title }} => Price: {{product.price}}</li>
                </ul>

                <button class="btn btn-primary" @click="changePrice()">increase Price</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Customer",

        computed: {
            products(){
                return this.$store.state.products
            },

            saleProduct(){
                return this.$store.getters.saleProduct
            }
        },

        methods:{
            changePrice(){
                this.$store.commit('changePrice');
            }
        }
    }
</script>

<style scoped>

</style>