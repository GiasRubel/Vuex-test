<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h5> This is  Store Component</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">

                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Types</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(store,index) in storelist">
                                <th scope="row">{{index+1}}</th>
                                <td>{{store.title ? store.title : ''}}</td>
                                <td>{{store.types ? store.types : ''}}</td>
                                <td>
                                    <router-link :to="{name:'Store Edit', params: {id:store.id} }" class="btn btn-primary btn-sm">
                                        <i class="fa fa-pen"></i>
                                    </router-link>

                                    <button class="btn btn-warning btn-sm" @click="deleteStore(store.id)"> <i class="fa fa-trash"></i></button>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-4">
                        <p>Go to Create Page</p>
                        <router-link :to="{name:'Store Create'}"  class="btn btn-success btn-sm">Create Store</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stores",

        computed: {
            storelist() {
                return this.$store.getters.storelist
            }
        },

        methods: {
            deleteStore(id) {
                return this.$store.dispatch('deleteStore', id)
            }
        },

        created() {
            this.$store.dispatch('fetchStores')
        }
    }
</script>

<style scoped>

</style>