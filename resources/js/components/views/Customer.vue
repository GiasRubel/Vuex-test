<template>

   <div class="col-md-6">
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

            saleProduct(){
                return this.$store.getters.saleProduct
            }

            // getProduct() {
            //     return this.$store.getters.getProduct
            // }
        },

        methods:{
            changePrice(){
                // this.$store.commit('changePrice');
                this.$store.dispatch('changePrice')
            }
        }
    }
</script>

<style scoped>

</style>