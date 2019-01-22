<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                This is  from Full Body
            </div>
        </div>

        <!--<router-link :to="{ name:'Product' }" tag="button" type="button" class="btn btn-success btn-sm">Go to Customer-->
            <!--<i class="fa fa-eye"></i></router-link>-->
        <div class="row">

                <Product></Product>


                <Customer></Customer>

        </div>


    </div>
</template>

<script>

    import Product from './views/Product.vue';
    import Customer from './views/Customer.vue';
    export default {
        name: "Full",
        components: {Product, Customer},

    }
</script>

<style scoped>

</style>