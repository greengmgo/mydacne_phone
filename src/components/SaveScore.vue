<template>
<div style="margin-top: 30px;border: 1px solid rosybrown">
  <van-button @click="getList">获得list</van-button>
  <van-button @click="saveInfo">保存打分请求数据</van-button>
  <van-button @click="saveScoreBtn">发送打分数据</van-button>

</div>
</template>

<script>
import {faker} from "@faker-js/faker";
import {onMounted, reactive} from "vue";
import {getScoreList} from "@/network/saveScore";
import {saveScore} from "@/network/saveScore";

export default {
  name: "SaveScore",
  setup(){
    faker.setLocale("zh_CN")
    //获取打分列表请求
    const data={
      "menue":43,
      "orgId":58,   //班级id， 57是1班  //分组id  初中1班是57 2班是58 55是初中   56是高中 59高中1班 60是高中2班
      "keyword":'',
      "status":'0',
       "date":'2022-05-17 11:24'
    }

    let classList=[]
    let stuUserIdList=[]  //打分时需要学生id
    let scoreList=[]  //打分项id
    let targetName=[]//评分名称
    let targetId=[]      //评分id
    let ScoreData={}    //请求参数列表
    let stuName=[]
    let stuNum=reactive({arr:[]})
    let className=[]
    //发送请求
    const getList = () => {
      getScoreList(data).then(res=>{
        classList=res.data
        console.log(classList)
      })
    }

    //保存参数数据

    const saveInfo = () => {
      //保存学生id到学生数组stuUserId
      classList.forEach(item=>{
        stuUserIdList.push(item.stuUserId)
        stuName.push(item.stuName)

      })

      //保存打分项目id到数组targetId
      scoreList=classList[0].needScoreTargets

      scoreList.forEach(item=>{
        targetName.push(item.targetName)
        targetId.push(item.targetId)

      })

      console.log(stuUserIdList)
      console.log(targetName)
      console.log(targetId)
      // for(let n of stuName){
      //   console.log(n)
      // }

      console.log(stuUserIdList.length)
      console.log(targetName.length)
      console.log(targetId.length)



    }

    //打分参数
    const saveScoreBtn = () => {
      console.time('开始')
     for(let k=15;k<=20;k++){
       for(let j of stuUserIdList){
         for(let i=0;i<12;i++){
           ScoreData={
             stuUserId:j,
             date:`2022-03-${k} 13:09`,
             list:[{"name":targetName[i],"score":Math.round(Math.random()*100),"prove":[{"proveType":"","file":{"fileName":""}}]}],
             targetId:targetId[i]
           }
           console.log(ScoreData)
           //发送网络请求
           saveScore(ScoreData).then(res=>{
             console.log(res)
          })

         }
       }
     }
       console.timeEnd('结束')


    }







    //---
    return{
      getList,saveInfo,saveScoreBtn,targetName,stuNum
    }
  }
}
</script>

<style scoped>

</style>