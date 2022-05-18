<template>
<div>
  <van-button @click="fakerBtn">生成假数据</van-button>
  <van-button @click="testB">查看表单</van-button>
<van-button @click="btn">发送假数据</van-button>

  <hr/>

  <div>
    <save-score/>
  </div>

</div>

</template>

<script>
import {doCard} from "@/network/doCard";
import {faker} from '@faker-js/faker'
import {ref} from "vue";
import SaveScore from "@/components/SaveScore";
export default {
  name: "Add",
  components: {SaveScore},
  setup(){
   let realName=ref()
    let phone=ref()
    let birth=ref()
    let allBirthday=''
    let gender=''
    let identynumber=''
    let num=''
    let arr=['足球','篮球','乒乓球','唱歌']
    let hobby=''
    let doCardForm=null
    let zzmarr=['团员','党员','群众']
    let zzmm=''
    let teachersubArr=['语文','数学','外语','政治','历史','地理','物理','化学','生物']
    let teeacherSub=''
    let proArr=['一级教师','二级教师','三级教师','特级教师']
    let pro=''
    faker.setLocale("zh_CN")

    const fakerBtn = () => {
      realName.value=faker.name.lastName()+faker.name.firstName()
      phone.value=faker.phone.phoneNumber('13#########')
      birth=faker.date.past(10,'2018-10-04')
      allBirthday=`${birth.getFullYear()}-${birth.getMonth()}-${birth.getDate()} 00:00:00`
      gender=Math.round(Math.random())+''
      identynumber=faker.phone.phoneNumber('###########')+''
      num=`${Math.round(Math.random()*100000)}`
       hobby=arr[Math.round(Math.random()*3)]
      zzmm=zzmarr[Math.round(Math.random()*2)]
      teeacherSub=teachersubArr[Math.round(Math.random()*8)]
      pro=proArr[Math.floor(Math.random()*proArr.length)]
      console.log(`生成完毕 realName:${realName.value}`);

      doCardForm={
        "realName": realName.value,
        "gender": gender,   //性别1 为男性
        "phone":  phone.value,
        "remark": "",
        "headShot": "",
        "orgId": "60",   //分组id  初中1班是57 2班是58 55是初中   56是高中 59高中1班 60是高中2班
        "userType": "1", //1学生    2教师
        "position": "",
        "country": "中国",
        "nation": "汉族",
        "number": num,  //编号
        "bloodType": "",
        "starSign": "",
        "shengxiao": "",
        "teachSubjects": '',  //教学科目
        "hoby": hobby,
        "identynumber": identynumber,   //证件号码
        "birth": allBirthday,
        "pro":'',  //职称
        "identyType": "2",
        "zzmm":zzmm,  //政治面貌
        "labels": ""
      }
    }




    const testB = () => {
      console.log(doCardForm)
    }

    const btn=()=>{
      doCard(doCardForm).then(res=>{
        console.log(res)
      })
    }

    //----
    return{
      btn,
      fakerBtn,
      testB
    }
  }
}
</script>

<style scoped>

</style>