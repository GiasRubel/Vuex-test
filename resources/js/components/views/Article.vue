<template>
    <div>
        <section>
            <h1>🍺 Make yourself some Punk Beers 🍻</h1>
            <div v-if="beers.length === 0" class="loading">Loading...</div>
            <div v-for="beer in beers" class="beer-contain">
                <div class="beer-img">
                    <img :src="beer.image" height="200" width="200"/>
                </div>
                <div class="beer-info">
                    <h2>{{ beer.id }}</h2><h2>{{ beer.title }}</h2>
                    <p><span class="bright">Description:</span> {{ beer.description }}</p>

                </div>
            </div>
        </section>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                bottom: false,
                beers: [],
                page: 1,
            }
        },
        methods: {
            bottomVisible() {
                const scrollY = window.scrollY;
                // const visible = document.documentElement.clientHeight;
                const visible = window.innerHeight;
                const pageHeight = document.documentElement.scrollHeight;
                const bottomOfPage = visible + scrollY >= pageHeight;
                return bottomOfPage || pageHeight < visible
            },
            addBeer() {
                axios.get('articles?page=' + this.page)
                    .then(response => {
                        console.log(response.data)
                        let api = response.data.data;

                        _.forEach(api, value => {
                            let apiInfo = {
                                id: value.id,
                                title: value.title,
                                description: value.description,
                                image: value.image,
                            };
                            this.beers.push(apiInfo);
                        });

                        if (this.bottomVisible()) {
                            this.page += 1;
                        }
                    })
            }
        },
        watch: {
            bottom(bottom) {
                if (bottom) {
                    this.addBeer()
                }
            }
        },
        created() {
            window.addEventListener('scroll', () => {
                this.bottom = this.bottomVisible()
            });
            this.addBeer()
        }
    }
</script>

<style scoped>
    body {
        font-family: 'Archivo Narrow', sans-serif;
        background: #ffb3ff;
    }

    h1, h2, h3, h4 {
        font-family: 'Spectral SC', serif;
    }

    h1 {
        margin-top: 40px;
        color: #000000;
        text-align: center;
    }

    .loading {
        color: #e6e6e6;
        text-align: center;
        font-size: 20px;
    }

    .display {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    #app {
    @extend . display;
        flex-direction: column;
    }

    .beer-contain {
    @extend . display;
        width: 50%;
        margin: 20px 24%;
        box-shadow: 0 2px 3px 1px rgba(30, 0, 0, 0.1);
    }

    .beer-img {
    @extend . display;
        padding: 30px;
        background: #99ddff;
        border: 1px solid #88498F;
        border-right: 1px solid #f44822;
    }

    .beer-info {
        background: #5c8a8a;
        color: white;
        padding: 30px;
        border: 1px solid #88498F;

    .bright {
        color: #fcd7cf;
        font-family: 'Roboto Condensed', sans-serif;
    }

    }

    h3 {
        margin-bottom: 5px;
    }

    ul {
        margin-top: 5px;
    }

</style>