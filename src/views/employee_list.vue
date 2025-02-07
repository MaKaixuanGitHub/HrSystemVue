<template>
  <div class="bg-white rounded-lg shadow">
    <div class="p-6">
      <form>
        <table class="min-w-full">
          <tbody>
          <tr>
            <td class="w-4">
              员工编号 :
              <input v-model="userNumber" placeholder="员工编号" required />
            </td>
            <td class="w-2"></td>
            <td class="w-4">
              姓名 :
              <input v-model="userName" placeholder="姓名" required />
            </td>
            <td class="w-2"></td>
            <td class="w-4">
              部门 :
              <select id="dropdown" v-model="user.department">
                <option v-for="option in options" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </td>
            <td class="w-2"></td>
            <td>
              <h1>请选择状态:</h1>
              <label>
                <input type="radio" value="inWork" v-model="user.selectedGender" />
                在职
              </label>
              <label>
                <input type="radio" value="outWork" v-model="user.selectedGender" />
                离职
              </label>
            </td>
            <td>
              <button
                @click="addUser"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                添加员工
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
      <!-- 高级检索弹窗 -->
      <div v-if="showAdvancedSearch">
        <!-- <span class="close" @click="toggleAdvancedSearch">&times;</span>
        <h2>高级检索</h2> -->
        <form @submit.prevent="submitAdvancedSearch">
          <table class="w-max">
            <tbody>
            <tr>
              <td class="w-36">
                <h1>性别 :</h1>
                <label>
                  <input type="radio" value="man" v-model="user.selectedSex" />
                  男
                </label>
                <label>
                  <input type="radio" value="women" v-model="user.selectedSex" />
                  女
                </label>
              </td>
              <td class="w-36">
                <h1>婚姻状况 :</h1>
                <label>
                  <input type="radio" value="unmarried" v-model="user.maritalStatus" />
                  未婚
                </label>
                <label>
                  <input type="radio" value="married" v-model="user.maritalStatus" />
                  已婚
                </label>
              </td>
              <td class="w-36">
                <h1>有无子女 :</h1>
                <label>
                  <input type="radio" value="child" v-model="user.haveChild" />
                  有
                </label>
                <label>
                  <input type="radio" value="noChild" v-model="user.haveChild" />
                  无
                </label>
              </td>
              <td class="w-32">
                职位/岗位级别 :
                <select id="jobTitle" v-model="user.jobTitle">
                  <option
                    v-for="optionJob in optionsJob"
                    :key="optionJob"
                    :value="optionJob"
                  >
                    {{ optionJob }}
                  </option>
                </select>
              </td>
              <td class="w-4">
                入社日期 :
                <input type="date" v-model="user.date" placeholder="入社日期" required />
              </td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
      <table>
        <tbody>
        <tr>
          <td>
            <button
              @click="searchUsers"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              检索
            </button>
          </td>
          <td>
            <button
              @click="toggleAdvancedSearch"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              高级检索
            </button>
          </td>
        </tr>
        </tbody>
      </table>

      <table class="min-w-full" v-show="showData">
        <thead>
          <tr>
            <th class="text-left py-3 px-4 border-b w-20">ID</th>
            <th class="text-left py-3 px-4 border-b w-32">员工编号</th>
            <th class="text-left py-3 px-4 border-b w-32">姓名</th>
            <th class="text-left py-3 px-4 border-b w-20">性别</th>
            <th class="text-left py-3 px-4 border-b w-32">部门</th>
            <th class="text-left py-3 px-4 border-b w-28">在职状态</th>
            <th class="text-left py-3 px-4 border-b w-28">职位/<br />岗位级别</th>
            <th class="text-left py-3 px-4 border-b w-16">婚姻状况</th>
            <th class="text-left py-3 px-4 border-b w-16">有无子女</th>
            <th class="text-left py-3 px-4 border-b w-40">入社日期</th>
            <th class="text-left py-3 px-4 border-b w-40"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td class="py-3 px-4 border-b w-20">{{ index + 1 }}</td>
            <td class="py-3 px-4 border-b w-32">{{ user.employeeNum }}</td>
            <td class="py-3 px-4 border-b w-32">{{ user.name }}</td>
            <td class="py-3 px-4 border-b w-20">{{ user.gender }}</td>
            <td class="py-3 px-4 border-b w-32">{{ user.department }}</td>
            <td class="py-3 px-4 border-b w-28">{{ user.employmentStatus }}</td>
            <td class="py-3 px-4 border-b w-28">{{ user.position }}</td>
            <td class="py-3 px-4 border-b w-16">{{ user.marital }}</td>
            <td class="py-3 px-4 border-b w-16">{{ user.haveChildren }}</td>
            <td class="py-3 px-4 border-b w-40">{{ user.entryDate }}</td>
            <td class="py-3 px-4 border-b">
              <router-link to="/employee_information">
                <button class="text-blue-500 hover:text-blue-700 mr-2">
                  <i class="fas fa-edit"></i>
                </button>
              </router-link>

              <button class="text-red-500 hover:text-red-700" @click="delUser(user.id)">
                <i class="fas fa-eye"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, defineComponent } from "vue";
import { useRouter } from "vue-router";
import axios from "../axios";

const router = useRouter();
const isMenuOpen = ref(false);
const options = ref(["", "第一开发部", "第二开发部", "人事部"]); // 下拉菜单的选项
const optionsJob = ref(["", "Manager", "PM", "TL", "SE", "PG"]); // 下拉菜单的选项
const userNumber = ref<string>();
const userName = ref<string>();
let showData = ref(false);
const users = ref([]);
  
// 获取数据的函数
const searchUsers = async () => {
    const url = 'http://localhost:8081/user/employeeSearch';
    const data1 = {  
        employeeNum: userNumber.value,
        name: userName.value,
        // 其它字段，如果需要的话
    }  

    try {  
          const response = await axios.post(url, data1);
        users.value = response.data;
        if (users.value.length > 0){
          showData = true;
        }else{
          showData = false;
        }

        console.log('users.length:', users.value.length);
        console.log('showData:', showData);
        console.log('Response:', response.data);
    } catch (error) {
        alert('ng');
        console.log('Error response:', error.response);
        console.error('Request:', error.request);
    }  
};

//高级检索
const simpleSearchQuery = ref("");
const showAdvancedSearch = ref(false);
const advancedSearch = ref({
  keyword: "",
  category: "",
});

//检索
const searchQuery = ref("");
const results = ref<any[]>([]);

const user = ref<User>({
  id: 0,
  name: "",
  email: "",
  role: "",
  status: "",
  number: "",
});


const addUser = () => {};

//高级检索
const performSimpleSearch = () => {
  console.log("普通检索关键词:", simpleSearchQuery.value);
  // 在这里添加普通检索逻辑
};

const toggleAdvancedSearch = () => {
  showAdvancedSearch.value = !showAdvancedSearch.value;
};

const submitAdvancedSearch = () => {
  console.log(
    "高级检索关键词:",
    advancedSearch.value.keyword,
    "分类:",
    advancedSearch.value.category
  );
  // 在这里添加高级检索逻辑
  //toggleAdvancedSearch(); // 提交后关闭弹窗
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  background: #f5f5f5;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
}

/* form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
} */

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}

.employee-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  gap: 10px;
}

.actions button:last-child {
  background: #f44336;
}

.actions button:last-child:hover {
  background: #da190b;
}

label {
  margin-right: 15px;
  top: 15px;
}

</style>
