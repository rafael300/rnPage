<template lang="pug">
    <div>
        <v-vanta effect="net" :options=options></v-vanta>
            <section class="hero is-medium is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Dark Rafael Neves
                        </h1>
                        <h2 class="subtitle">
                            Dark Arquivista e Estudante 
                        </h2>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>
import VVanta from 'vue-vanta';
export default {
    components:{
        VVanta
    },
    data(){
        return{
            options:{
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 480.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00
            }
        }
    }
};  
</script>

<style scoped>
.hero-body {
}   

.title{
    font-size: 70px;
    font-family: "Tajawal";
    margin-top: 70px;
}

.subtitle{
    font-size: 25px;
    font-family: "Tajawal";
}
</style>