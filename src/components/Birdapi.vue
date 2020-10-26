<template>
<div id="apibird">
    <div class="card">
      <div>
          <figure>
              <img :src="url">
          </figure>
      </div>
      <div class="card-content">
        <div class="media">
              <div class="media-content">
                <p class="title is-4">{{name}}</p>
              </div>
          </div>
      </div>    
    </div>
</div>   
</template>

<script>
export default {   
  props:{
    name: String,
    url: String
  }  
}
</script>

<style scoped>
    .card{
        background-color: white;
        margin: 20px;
        height: 300px;
        width: 300px;
        display: inline-block;
    }
    #apibird{
    }
</style>