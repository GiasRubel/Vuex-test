<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <p>Create Sores Page</p>
            </div>
            <div class="card-body">

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Title</label>
                        <input type="email" class="form-control" id="inputEmail4" >
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputState">Store Types</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option v-for="type in types" :value="type">{{type}}</option>
                        </select>
                        <!--<p>{{types}}</p>-->
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>

            </div>
        </div>
    </div>
</template>

<script>
    // import { mapState } from 'vuex'
    // import * as types from '../store/types'

    export default {
        name: "CreateStores",

        data() {
            return {

            }
        },

        methods : {

        },

        computed: {
            types() {
                return this.$store.state.storeTypes.types
            }
            // ...mapState({
            //
            // })
        },

        created() {

        }
    }
</script>

<style scoped>

</style>