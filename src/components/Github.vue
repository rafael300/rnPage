<template lang="pug">
        <div class="card">
            <div>
                <figure>
                    <a href="https://github.com/rafael300"><i class="fab fa-github"></i></a>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">Git hub</p>
                    </div>
                </div>
                <div class="content">
                    Lorem HTML, CSS, JavaScript, Node.js, Vue.js.
                    <br>
                </div>
            </div>
        </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

export default {
    components:{
        library,
        faUserSecret
    }
}
</script>

<style scoped>
 .fa-github{
     font-size: 200px;
     color: #363636;
 } 

  .fa-github:hover{
     color: #008B8B;
 } 

 .card{
     height: auto;
     width: 300px;
     background-color: #F3F3F3;
 }
</style>