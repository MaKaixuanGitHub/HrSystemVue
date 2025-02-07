<template>
  <div class="employee-details">
    <header class="header">
      <h1>Employee Details</h1>
    </header>
    <div class="details-content">
      <p><strong>ID:</strong> {{ employee.id }}</p>
      <p><strong>Name:</strong> {{ employee.name }}</p>
      <p><strong>Age:</strong> {{ employee.age }}</p>
      <p><strong>Birthday:</strong> {{ employee.birthday }}</p>
      <p><strong>Tel:</strong> {{ employee.tel }}</p>
      <p><strong>Address:</strong> {{ employee.address }}</p>
    </div>
    <router-link to="/EmployeeSearch" class="back-link">Back to Search</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
    { id: 1, name: 'John Doe', age: 30, birthday: '1995-01-01', tel: '123456789', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
  { id: 3, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
  { id: 4, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
  { id: 5, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
  { id: 6, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
  { id: 7, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
  { id: 8, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
  { id: 10, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
    // 更多员工数据...
  ];
  employee.value = allEmployees.find(emp => emp.id.toString() === id) || employee.value;
};

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