<template>
<!--<div>
<div v-for="task in tasks" :key="task.id">
{{task.title}}
<img v-if="completed" src = "../assets/add.png">
<img v-else src = "../assets/empty.png">
</div>
</div>-->
<div>
<div class="list">
            <div class="date_div">
            <div class="cur_date">
                <p class="d">{{date.getDate()}}</p>
                <div class="in_cur_date">
                    <p class="m">{{['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль','Август','Сентабрь','Ноябрь','Декабрь',''][date.getMonth()]}}</p>
                    <p class="y">{{date.getFullYear()}}</p>
                </div>
            </div>
            <p class="weekday">{{['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][date.getDay()]}}</p>
        </div>
    <div v-for="(task,index) in tasks" :key="index">
        <div v-if='!task.completed' class="cur_case" @click="action(index)">
            <p class="cur_case_p">{{task.title}}</p>
            <img class="done" src="../assets/empty.png">
        </div>

        <div v-else class="cur_case" @click="action(index)">
            <p class="cur_case_p done_c">{{task.title}}</p>
            <img class="done" src="../assets/add.png">
        </div>
    </div>
</div>
<a class="add_btn" v-bind:class="{invert:isActive}" @click="show_input()"><img class="add_btn_img" src="../assets/add_plus.png"></a>
<div class="form" v-if='seen'>
    <input class = "input" type="text" v-model="title">
    <button class="btn"  @click="add_task()">ОК</button>
</div>
</div>
</template>

<script>
export default {
  name: 'todo',
  data () {
      return {
          newTask: '',
          seen:false,
          taskId: 0,
          isActive:false,
          date: new Date(),
          tasks:[
          ]
          }
  },
  methods: {
              show_input(){
            if(!this.seen){
                this.seen = true;
                this.isActive = true;
            } else {
                this.seen = false;
                this.isActive = false;
            }
        },
                add_task(){
if(this.title !=''){
        this.tasks.push({
        id: this.taskId,
        title: this.title,
        completed: false,
      })
}
      this.title = ''
      this.taskId++
        },
        task_done(){
          this.$emit('task_done')
        },
        action(id){
            if(this.tasks[id].completed){
                this.tasks[id].completed = false;
                this.tasks.sort(function(a, b){
                    return a.completed-b.completed
                  })
            } else {
                this.tasks[id].completed = true;
                this.tasks.sort(function(a, b){
                    return a.completed-b.completed
                  })
            }
            return this.tasks[id].completed;
          }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.date_div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.cur_date{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.in_cur_date{
    display: flex;
    flex-direction: column;
}

.d{
    font-size: 40px;
    margin-right: 10px;
}

.cur_case{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    transition: 0.5s;
    padding: 10px;
}

.done,.empty{
    height: 30px;
}

.done_c{
    color: #929292;
}

.add_btn{
    position: absolute;
    top: 100%;
    left: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100px;
    transition: 0.5s;
}

.list{
    transition: 0.5s;
}

.add_btn_img{
    width: 100%;

}

.invert{
    filter: invert(1);
    transform: rotate(45deg) translate(-73%,0);
    transition: 0.5s;
}

.input{
    border: none;
    border-bottom: 2px solid gray;
    height: 50px;
    font-size: 18px;
    width: 200px;
    outline: none;
    padding: 0 10px;
}

.btn{
    height: 50px;
    width: 50px;
    background-color: #52e6a8;
    border: none;
    border-radius: 5px;
    color: black;
    transition: 0.5s;
}

.btn:hover{
    background-color: #3c8868;
}

.form{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    transition: 0.5s;
}

.none{
    display: none;
}

.cur_case:hover{
    background-color: rgba(131,131,131,.5);
}
</style>
