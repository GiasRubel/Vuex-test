<template>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link :to="{ name:'Full' }" class="nav-link">Home<span class="sr-only">(current)</span></router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link :to="{ name:'Product' }" class="dropdown-item">Product</router-link>
                            <router-link :to="{ name:'Customer' }" class="dropdown-item">Customer</router-link>

                        </div>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ name:'Store List' }" class="nav-link">Stores<span class="sr-only">(current)</span></router-link>
                    </li>

                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

</template>

<script>
    export default {

    }
</script>