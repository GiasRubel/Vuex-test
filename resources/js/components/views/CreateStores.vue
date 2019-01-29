<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <p>Create Sores Page</p>
            </div>
            <div class="card-body">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-row">
                            <p class="text-success">{{message.message}}</p>
                            <!--<p v-if="$route.params.id">{{$route.params.id}}</p>-->
                            <!--{{stores}}-->
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Title</label>
                                <input type="text" class="form-control" v-model="stores.title">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Store Types</label>
                                <select id="inputState" class="form-control" v-model="stores.types">
                                    <option selected>Choose...</option>
                                    <option v-for="type in types" :value="type">{{type}}</option>
                                </select>

                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary" @click="insertStores">Submit</button>


                    </div>

                    <div class="col-md-6">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Test value</label>
                                <input type="text" v-model="test" class="form-control">
                            </div>
                        </div>
                        <p>{{test}}</p>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <router-link :to="{name: 'Store List'}">
                                    <i class="fa fa-arrow-left"></i> Go Back To List
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import * as types from '../../store/types'

    export default {
        name: "CreateStores",

        data() {
            return {}
        },


        computed: {
            types() {
                return this.$store.state.storeTypes.types
            },

            test: {
                get() {
                    return this.$store.getters[types.TEST_INPUT]
                },
                set(test) {
                    this.$store.dispatch(types.MUTATE_TEST_INPUT, test)
                }
            },

            message() {
                return this.$store.getters.message;

            },

            stores() {
                return this.$store.getters.stores;
            }
        },

        methods: {
            insertStores() {
                if (this.$route.params.id) {
                    this.$store.dispatch('updateStore', {store:this.stores, id:this.$route.params.id});
                }else{
                    this.$store.dispatch('insertStores', this.stores);
                }

            }
        },

        created() {
            if (this.$route.params.id) {
                this.$store.dispatch('fetchStore', this.$route.params.id);
            } else {
                this.$store.dispatch('emptyStores', {});
            }
        }
    }
</script>

<style scoped>

</style>