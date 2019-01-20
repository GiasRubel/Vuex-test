<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h5> This is  Customer Component</h5>
                <ul v-for="(product,index) in saleProduct" :key="product.id">
                    <li>{{ product.title }} => Price: {{product.price}}
                        => <button class="btn btn-primary btn-sm" @click="changePrice(product.price)">Change Price</button></li>
                </ul>


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
            changePrice(data){
                // console.log(data)
                this.$store.commit('changePrice',data)
            }
        }
    }
</script>

<style scoped>

</style>