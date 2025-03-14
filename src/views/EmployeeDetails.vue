<template>
  <div class="employee-details">
    <header class="header">
      <h1>员工详情</h1>
    </header>
    <div class="details-content">
      <p><strong>员工号码:</strong> {{ employee.id }}</p>
      <p><strong>员工名字:</strong> {{ employee.name }}</p>
      <p><strong>员工年龄:</strong> {{ employee.age }}</p>
      <p><strong>员工生日:</strong> {{ employee.birthday }}</p>
      <p><strong>员工电话:</strong> {{ employee.tel }}</p>
      <p><strong>员工住址:</strong> {{ employee.address }}</p>
      <p><strong>员工爱好:</strong> ------去厕所打鱼！------</p>
    </div>
    <router-link :to="backToSearchLink" class="back-link">回到查询页←</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const employee = ref({
  id: '',
  name: '',
  age: '',
  birthday: '',
  tel: '',
  address: ''
});

const fetchEmployeeDetails = async (id: string) => {
  // 此处模拟获取员工详细信息的 API 请求
  const allEmployees = [
  { id: 1001, name: '王小狗', age: 30, birthday: '1995-01-01', tel: '123456789', address: '辽宁省沈阳市康平县' },
  { id: 1002, name: '林令狗', age: 25, birthday: '2000-02-02', tel: '987654321', address: '山东省青岛市' },
  { id: 1003, name: '王二狗', age: 25, birthday: '2000-02-02', tel: '987654321', address: '米花国米花市米花小镇' },
  { id: 1004, name: '金三胖', age: 25, birthday: '2000-02-02', tel: '987654321', address: '朝鲜人民主义共和国 万岁！' },
  { id: 1005, name: '五 哥', age: 25, birthday: '2000-02-02', tel: '987654321', address: '辽宁省大连市沙河口区' },
  { id: 1006, name: '军 师', age: 25, birthday: '2000-02-02', tel: '987654321', address: '辽宁省大连市高新园区' },
  { id: 1007, name: '谢广坤', age: 25, birthday: '2000-02-02', tel: '987654321', address: '辽宁省铁岭市开原县象牙山村' },
  { id: 1008, name: '王老七', age: 25, birthday: '2000-02-02', tel: '987654321', address: '辽宁省铁岭市开原县象牙山村' },
  { id: 1009, name: '朱重八', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1010, name: '朱五四', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1011, name: '朱五五', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1012, name: '朱五六', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1013, name: '朱五七', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1014, name: '朱五八', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1015, name: '朱五酒', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1016, name: '朱六十', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1017, name: '朱六一', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1018, name: '朱六二', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
  { id: 1019, name: '朱六san', age: 25, birthday: '2000-02-02', tel: '987654321', address: '应天府' },
    // 更多员工数据...
  ];
  employee.value = allEmployees.find(emp => emp.id.toString() === id) || employee.value;
};

const backToSearchLink = computed(() => {
  return { 
    path: '/EmployeeSearch', 
    query: {
      page: route.query.page || 1,
      name: route.query.name || ''
    }
  };
});

onMounted(() => {
  const employeeId = route.params.id as string;
  fetchEmployeeDetails(employeeId);
});
</script>

<style scoped>
.employee-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
  background-color: #42b983;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.details-content {
  margin-bottom: 20px;
}

.details-content p {
  margin: 10px 0;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.back-link:hover {
  background-color: #2c8c6e;
}
</style>