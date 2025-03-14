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
  const fetchedEmployee = allEmployees.find(emp => emp.id.toString() === id);
  if (fetchedEmployee) {
    employee.value = fetchedEmployee;
  }
};

const saveEmployee = async () => {
  try {
    // // 假设有一个 API 可以保存员工详细信息
    // await fetch(`https://api.example.com/employees/${employee.value.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(employee.value)
    // });

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