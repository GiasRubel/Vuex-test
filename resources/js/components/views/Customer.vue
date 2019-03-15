<template>

   <div class="col-md-6">
       <div class="card">
           <div class="card-body">
               <h5> This is  Customer Component</h5>

               <ul v-for="(product,index) in saleProduct" :key="product.id">
                   <li>{{ product.title }} => Price: {{product.price}}</li>
               </ul>
               <button class="btn btn-primary" @click="changePrice(products)">increase Price</button>
               <button class="btn btn-primary" @click="actualPrice">Add 1 to Price</button>
           </div>
       </div>
   </div>

</template>

<script>
    import {mapGetters , mapActions } from 'vuex'
    import * as types from '../../store/types'
    export default {
        name: "Customer",

        computed: {

            // saleProduct(){
            //     return this.$store.getters.saleProduct
            // }

            ...mapGetters({
                saleProduct: types.SALEPRODUCT,
                products: types.PRODUCTS_LIST,
            }),


        },

        methods:{
            // changePrice(){
            //     this.$store.dispatch('changePrice', this.products)
            // },

            ...mapActions([
                'actualPrice'
            ]),
            ...mapActions({
                changePrice: types.CHANGE_PRICE
            })


        }
    }
</script>

<style scoped>

</style>