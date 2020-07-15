<template>
  <div id="app" class = "main_div">
  <ToDoList/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-weight: 600;
    color: #57565e;
}

body{
    background-color: #f0efea;
    
}

.main_div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: auto;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 70px;
    transition: 0.5s;
}
</style>
