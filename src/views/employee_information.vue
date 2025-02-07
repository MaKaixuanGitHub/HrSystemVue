<template>
  <div class="bg-white rounded-lg shadow">
    <div>
      <h2 class="text-xl font-semibold" style="text-align:center">员工详情</h2>
    </div>
    <!-- 画面項目-->
    <div class="p-6">
      <form>
        <table class="min-w-full">
          <tbody>
          <tr class="h-16">
            <td>员工编号：</td>
            <td>
              <input type="text" placeholder="请输入员工编号" v-model="employeeInfo.employeeNum">
            </td>
            <td class="col-md-m"><label style="color:red">*</label>姓名：</td>
            <td>
              <input type="text" placeholder="请输入员工姓名" required v-model="employeeInfo.name">
            </td>
            <td class="col-md-m"><label style="color:red">*</label>性别：</td>
            <td>
              <label class="custom-radio">
                <input type="radio" value="0" v-model="employeeInfo.gender"/>男
              </label>
              <label class="custom-radio" style="margin-left:30px">
                <input type="radio" value="1" v-model="employeeInfo.gender"/>女
              </label>
            </td>
            <td class="col-md-m"><label style="color:red">*</label>年龄：</td>
            <td><input type="text" placeholder="请输入年龄" required v-model="employeeInfo.age"></td>
          </tr>

          <tr class="h-16">
            <td><label style="color:red">*</label>婚姻状况：</td>
            <td>
              <label class="custom-radio">
                <input type="radio" value="0" v-model="employeeInfo.marital"/>未婚
              </label>
              <label class="custom-radio" style="margin-left:30px">
                <input type="radio" value="1" v-model="employeeInfo.marital"/>已婚
              </label>
            </td>
            <td><label style="color:red">*</label>有无子女：</td>
            <td>
              <label class="custom-radio">
                <input type="radio" value="0" v-model="employeeInfo.haveChildren"/>无
              </label>
              <label class="custom-radio" style="margin-left:30px">
                <input type="radio" value="1" v-model="employeeInfo.haveChildren"/>有
              </label>
            </td>
            <td><label style="color:red">*</label>户籍所在地：</td>
            <td>
              <input type="text" placeholder="请输入户籍所在地" required v-model="employeeInfo.placeOfDomicle">
            </td>
            <td><label style="color:red">*</label>家庭住址：</td>
            <td>
              <input type="text" placeholder="请输入家庭住址" required v-model="employeeInfo.homeAddress">
            </td>
          </tr>

          <tr class="h-16">
            <td><label style="color:red">*</label>毕业院校：</td>
            <td>
              <input type="text" placeholder="请输入毕业院校" v-model="employeeInfo.graduateSchool" required>
            </td>
            <td><label style="color:red">*</label>学历：</td>
            <td>
              <input type="text" placeholder="请输入学历" v-model="employeeInfo.degree" required>
            </td>
            <td><label style="color:red">*</label>专业名称：</td>
            <td>
              <input type="text" placeholder="请输入专业名称" v-model="employeeInfo.major" required>
            </td>
            <td><label style="color:red">*</label>毕业证书编号：</td>
            <td>
              <input type="text" placeholder="请输入毕业证书编号" v-model="employeeInfo.diplomaNum" required>
            </td>
          </tr>

          <tr class="h-16">
            <td><label style="color:red">*</label>手机号：</td>
            <td>
              <input type="tel" placeholder="请输入手机号" required v-model="employeeInfo.tel">
            </td>
            <td><label style="color:red">*</label>身份证号码：</td>
            <td>
              <input type="text" placeholder="请输入身份证号码" v-model="employeeInfo.idNum" required>
            </td>
            <td><label style="color:red">*</label>联络邮箱：</td>
            <td>
              <input type="email" placeholder="请输入联络邮箱" v-model="employeeInfo.email" required>
            </td>
            <td><label style="color:red">*</label>微信号：</td>
            <td>
              <input type="text" placeholder="请输入微信号" v-model="employeeInfo.vchat" required>
            </td>
          </tr>

          <tr class="h-16">
            <td><label style="color:red">*</label>护照号：</td>
            <td>
              <input type="text" placeholder="请输入护照号" v-model="employeeInfo.passportNum" required>
            </td>
            <td><label style="color:red">*</label>护照到期时间：</td>
            <td>
              <input type="date" v-model="employeeInfo.passportExpiration" required>
            </td>
            <td><label style="color:red">*</label>首次参加工作时间：</td>
            <td>
              <input type="date" v-model="employeeInfo.timeOfFirstWork" required>
            </td>
            <td><label style="color:red">*</label>Department：</td>
            <td>
              <select id="departmentList" v-model="employeeInfo.department" required>
                <option v-for="option in departmentList" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </td>
          </tr>

          <!-- 第六行 -->
          <tr class="h-16">
            <td>职位/岗位级别：</td>
            <td>
              <select id="positionList" v-model="employeeInfo.position" required>
                <option v-for="option in positionList" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </td>
            <td><label style="color:red">*</label>在职状态：</td>
            <td>
              <label class="custom-radio">
                <input type="radio" value="0" v-model="employeeInfo.employmentStatus"/>在职
              </label>
              <label class="custom-radio" style="margin-left:30px">
                <input type="radio" value="1" v-model="employeeInfo.employmentStatus"/>离职
              </label>
            </td>
            <td><label style="color:red">*</label>入职是否满两年：</td>
            <td>
              <label class="custom-radio">
                <input type="radio" value="0" v-model="employeeInfo.haveBeenTwoYears"/>否
              </label>
              <label class="custom-radio" style="margin-left:30px">
                <input type="radio" value="1" v-model="employeeInfo.haveBeenTwoYears"/>是
              </label>
            </td>
            <td><label style="color:red">*</label>入社日期：</td>
            <td>
              <input type="date" v-model="employeeInfo.entryDate" required>
            </td>
          </tr>

          <!-- 第七行 -->
          <tr class="h-16">
            <td><label style="color:red">*</label>离职日期：</td>
            <td>
              <input type="date" v-model="employeeInfo.departureDate" required>
            </td>
            <td><label style="color:red">*</label>实习开始日期：</td>
            <td>
              <input type="date" v-model="employeeInfo.internStartDate" required>
            </td>
            <td><label style="color:red">*</label>实习结束日期：</td>
            <td>
              <input type="date" v-model="employeeInfo.internEndDate" required>
            </td>
            <td><label style="color:red">*</label>试用期开始日：</td>
            <td>
              <input type="date" v-model="employeeInfo.trialStartDate" required>
            </td>
          </tr>

          <!-- 第八行 -->
          <tr class="h-16">
            <td><label style="color:red">*</label>试用期结束日：</td>
            <td>
              <input type="date" v-model="employeeInfo.trialEndDate" required>
            </td>
            <td><label style="color:red">*</label>转正日期：</td>
            <td>
              <input type="date" v-model="employeeInfo.probationaryDate" required>
            </td>
            <td><label style="color:red">*</label>合同起始日：</td>
            <td>
              <input type="date" v-model="employeeInfo.contractStartDate" required>
            </td>
            <td><label style="color:red">*</label>合同终止日：</td>
            <td>
              <input type="date" v-model="employeeInfo.contractEndDate" required>
            </td>
          </tr>

          <!-- 第九行 -->
          <tr class="h-16">
            <td><label style="color:red">*</label>无固定期限：</td>
            <td>
              <input type="date" v-model="employeeInfo.noFixedTermDate" required>
            </td>
            <td><label style="color:red">*</label>工资卡号：</td>
            <td>
              <input type="text"  placeholder="请输入工资卡号" v-model="employeeInfo.payrollNum" required>
            </td>
            <td><label style="color:red">*</label>社保编号：</td>
            <td>
              <input type="text"  placeholder="请输入社保编号" v-model="employeeInfo.socialSecurityNum" required>
            </td>
            <td><label style="color:red">*</label>公积金账号：</td>
            <td>
              <input type="text"  placeholder="请输入公积金账号" v-model="employeeInfo.cpfNum" required>
            </td>
          </tr>
          </tbody>
        </table>
        
        <!-- Button -->
        <table class="min-w-full">
          <tbody>
          <tr>
            <td>
              <button 
                class="btn btn-success">
                合同管理
              </button>
            </td>
            <td style="text-align:right">
              <button
                class="btn btn-success">
                确定
              </button>

              <router-link to="/employee_list">
                <button class="btn btn-secondary" style="margin-left:10px" 
              >
                返回
                </button>
              </router-link>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script  setup lang="ts">
import { ref, computed, onMounted } from "vue";
import axios from "../axios";
import type { EmployeeInfo } from "../types/EmployeeInfo";
// export default {
//   name: "About",
// };

//部门选项
const departmentList = ref(["", "第一开发部", "第二开发部", "人事部"]);
//职位/岗位级别
const positionList = ref(["", "Manager", "PM", "TL", "SE", "PG"]);

//初期处理
onMounted(() => {
    axios.get('/user/employeeInformation_init', {
     params : {
      employeeNum: '003',
     }
    }).then (response => {
      console.log("response.data==> " + JSON.stringify(response.data));
      console.log("response.status==> " + response.status);
      console.log("response.statusText==> " + response.statusText);
      console.log("response.headers==> " + response.headers);
      console.log("response.config==> " + JSON.stringify(response.config));
  }).catch(error => {
    console.error('Error fetching data:', error);
  });
  // return
  // const id = users.value.length ? Math.max(...users.value.map((e) => e.id)) + 1 : 1;

  // users.value.push({
  //   id: id,
  //   name: user.value.name,
  //   email: "aaa@gmail.com",
  //   role: user.value.role,
  //   status: user.value.status,
  // });
});


//画面出力值
let employeeInfo = ref(
  {
    //员工编号
    employeeNum:"",
    //姓名
    name: "",
    //性别 0：男 1：女
    gender:"",
    //出生日期 YYYY-MM-DD
    birthday:"",
    //婚姻状况 0：未婚 1：已婚
    marital:"",
    //有无子女 0：无 1：有
    haveChildren:"",
    //户籍所在地
    placeOfDomicle:"",
    //家庭住址
    homeAddress:"",
    //毕业院校
    graduateSchool:"",
    //学历
    degree:"",
    //专业
    major:"",
    //毕业证书编号
    diplomaNum:"",
    //手机号
    tel:"",
    //身份证号
    idNum:"",
    //联络邮箱
    email:"",
    //微信号
    vchat:"",
    //护照号
    passportNum:"",
    //护照到期时间 YYYY-MM-DD
    passportExpiration:"",
    //首次参加工作时间 YYYY-MM-DD
    timeOfFirstWork:"",
    //部门
    department:"",
    //职位/岗位级别
    position:"",
    //在职状态 0：在职 1：离职
    employmentStatus:"",
    //入职是否满两年 0：否 1：是
    haveBeenTwoYears:"",
    //入社日期 YYYY-MM-DD
    entryDate:"",
    //离职日期 YYYY-MM-DD
    departureDate:"",
    //实习开始日期 YYYY-MM-DD
    internStartDate:"",
    //实习结束日期 YYYY-MM-DD
    internEndDate:"",
    //试用期开始日 YYYY-MM-DD
    trialStartDate:"",
    //试用期结束日 YYYY-MM-DD
    trialEndDate:"",
    //转正日期 YYYY-MM-DD
    probationaryDate:"",
    //合同起始日 YYYY-MM-DD
    contractStartDate:"",
    //合同终止日 YYYY-MM-DD
    contractEndDate:"",
    //无固定期限 YYYY-MM-DD
    noFixedTermDate:"",
    //工资卡号
    payrollNum:"",
    //社保编号
    socialSecurityNum:"",
    //公积金账号
    cpfNum:""
  });
</script>

<style scoped>
/* button {
  padding: 8px 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
} */

button:hover {
  background: #45a049;
}

input[type="text"] {
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input[type="date"] {
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input[type="email"] {
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input[type="tel"] {
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

select {
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
