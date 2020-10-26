<template>
  <div id="app">
    <div>
      <b-navbar id="barramenu" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#cabecalho">RN</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#container">GitHub</b-nav-item>
            <b-nav-item href="#container">Linkedin</b-nav-item>
            <b-nav-item href="#birdapi">API bird</b-nav-item>
            <b-nav-item href="#formacao">Formação</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div> 
    <div id="cabecalho">
      <Cabecalho/>
    </div>
    <div id="container">
        <div id="github">
          <Github/>
        </div>
        <div id="linkedin">
          <Linkedin/>
        </div>
    </div>
    <div id="birdapi">
      <h1 id="h1"><b>API BIRD</b></h1>
      <p id="P">________________________</p>
      <h1 id="h2"><b>Minha API esta disponivel em: <br><a id="link" href="https://apibird.herokuapp.com/bird/species">https://apibird.herokuapp.com/bird/species</a></b></h1>
      <div id="bir" v-for="lista in bird" :key="lista">
        <Birdapi :name="lista.name" :url="lista.url"/>
      </div>
    </div>
    <div id="fo">
      <div id="formacao">
          <Formacao/>
      </div>
    </div>
    <Rodape/>
  </div>
</template>
 
<script>
import Cabecalho from './components/Cabecalho'
import Github from './components/Github'
import Linkedin from './components/Linkedin'
import Rodape from './components/Rodape'
import Formacao from './components/Formacao'
import Birdapi from './components/Birdapi'
import axios from 'axios'
export default {
  name: 'App',
  components:{
    Cabecalho,
    Github,
    Linkedin,
    Rodape,
    Formacao,
    Birdapi
  },
  data(){
    return{
      bird: []
    }
  },
  created:function(){
    axios.get("https://apibird.herokuapp.com/bird/species").then((res)=>{
      this.bird = res.data
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#link{
  text-decoration: none;
  color: white;
}

#link:hover{
  color: #008B8B;
}

#container{
  width:100%;
  margin-top: 40px;
  margin-bottom: 80px;
  text-align: center;
}

#github{
  display:inline-block;
  margin:50px
}
#linkedin{
  display:inline-block;
  
}

#fo{
  background-color: #F3F3F3;
  text-align: center;
}

#formacao{
  display:inline-block;
  height: auto;
  width: auto;
}

#bir{
  display:inline-flex
}

#h1{
  padding-top: 90px;
  font-size: 40px;
  font-family: "Tajawal";
  color: white;
}

#h2{
  padding-top: 10px;
  padding-bottom: 40px;
  font-size: 16px;
  font-family: "Tajawal";
  color: white;
}

#P{
  color: white;
}

#birdapi{
  background-color: #363636;
}

#barramenu{
    position: fixed;
    width: 100%;
    height: auto;
}
b-navbar{
  align-content: center;
}
</style>