<template>
  <div class="edit-employee">
    <h1>Edit Employee</h1>
    <form @submit.prevent="saveEmployee">
      <table class="form-table">
      <tbody>
        <tr>
          <td><label for="id">Employee ID:</label></td>
          <td><input id="id" v-model="employee.id" type="number" class="form-input" required readonly /></td>
          <td><label for="name">Name:</label></td>
          <td><input id="name" v-model="employee.name" class="form-input" required /></td>
          <td><label for="age">Age:</label></td>
          <td><input id="age" v-model="employee.age" type="number" class="form-input" required /></td>
          <td><label for="birthday">Birthday:</label></td>
          <td><input id="birthday" v-model="employee.birthday" type="date" class="form-input" required /></td>
        </tr>
        <tr>
          <td><label for="tel">Tel:</label></td>
          <td><input id="tel" v-model="employee.tel" class="form-input" required /></td>
          <td><label for="address">Address:</label></td>
          <td><input id="address" v-model="employee.address" class="form-input" required /></td>
          <td colspan="4" class="form-actions">
            <div class="button-container">
              <button type="submit" class="submit-button">Save Employee</button>
              <router-link to="/EmployeeSearch" class="cancel-button">Cancel</router-link>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const employee = ref({
  id: '',
  name: '',
  age: '',
  birthday: '',
  tel: '',
  address: ''
});

const fetchEmployeeDetails = async (id: string) => {
  // 假设有一个 API 可以获取员工详细信息
  const allEmployees = [
    { id: 1, name: 'John Doe', age: 30, birthday: '1995-01-01', tel: '123456789', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 25, birthday: '2000-02-02', tel: '987654321', address: '456 Elm St' },
    // 更多员工数据...
  ];
  const fetchedEmployee = allEmployees.find(emp => emp.id.toString() === id);
  if (fetchedEmployee) {
    employee.value = fetchedEmployee;
  }
};

const saveEmployee = async () => {
  try {
    // 假设有一个 API 可以保存员工详细信息
    await fetch(`https://api.example.com/employees/${employee.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee.value)
    });

    // 保存成功后跳转回员工列表页面
    router.push('/EmployeeSearch');
  } catch (error) {
    console.error('Error saving employee:', error);
  }
};

onMounted(() => {
  const employeeId = route.params.id as string;
  fetchEmployeeDetails(employeeId);
});
</script>

<style scoped>
.edit-employee {
  max-width: 100%;
  height: 95%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.form-table {
  width: 100%;
  border-collapse: collapse;
}

.form-table td {
  padding: 10px;
  vertical-align: middle;
}

.form-table label {
  display: block;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-actions {
  text-align: right;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #2c8c6e;
}

.cancel-button {
  padding: 10px 20px;
  background-color: #ccc;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.cancel-button:hover {
  background-color: #999;
}
</style>