<template>
    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
               <h5> This is  Product Component</h5>
                <ul v-for="(product,index) in products" :key="product.id">
                    <li>{{ product.title }} => Price: {{product.price}}</li>
                </ul>

                <button class="btn btn-primary" @click="reducePrice()">reduce Price</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "Product",

        computed: {
            // products(){
            //     return this.$store.state.products.products
            // }

            ...mapState({
                products: state => state.products.products
            })

        },

        methods:{
            // reducePrice(){
            //     this.$store.dispatch('reducePrice')
            // }

            ...mapActions([
                'reducePrice'
            ])
        },
        created() {
            this.$store.dispatch('fetchProduct')
        }
    }
</script>

<style scoped>

</style>