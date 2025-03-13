<template>
  <div class="employee-search">
    <h1>Employee Search</h1>
    <div class="search-form">
      <input v-model="searchQuery.id" type="number" placeholder="Input Employee ID..." class="search-input" />
      <input v-model="searchQuery.name" placeholder="Input Employee Name..." class="search-input" />
      <button @click="filterEmployees" class="search-button">Search</button>
    </div>
    <table class="employee-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee Age</th>
          <th>Employee Birthday</th>
          <th>Employee Tel</th>
          <th>Employee Address</th>
          <th>Employee Memo</th>
          <th>Employee Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in paginatedEmployees" :key="employee.id">
          <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.age }}</td>
          <td>{{ employee.birthday }}</td>
          <td>{{ employee.tel }}</td>
          <td>{{ employee.address }}</td>
          <td>------- 备注 -------</td>
          <td>
            <button @click="goToEditEmployee(employee.id)" class="edit-button">Edit</button>
            <button @click="confirmDelete(employee.id)" class="delete-button">Delete</button>
            <button @click="goToEmployeeDetails(employee.id)" class="info-button">Info</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @pageChanged="handlePageChange"
    />
    <div v-if="showDeleteConfirm" class="delete-confirm">
      <p>Are you sure you want to delete this employee?</p>
      <button @click="deleteEmployee" class="confirm-button">Yes</button>
      <button @click="cancelDelete" class="cancel-button">No</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Pagination from '../views/Pagination.vue';

const router = useRouter();
const route = useRoute();

// 示例员工数据
const employees = ref([
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
]);

const searchQuery = ref({
  id: '',
  name: ''
});

const filteredEmployees = ref([...employees.value]);
const currentPage = ref(parseInt(route.query.page as string) || 1);
const itemsPerPage = ref(8);
const showDeleteConfirm = ref(false);
const deleteEmployeeId = ref(null);

const totalPages = computed(() => {
  return Math.ceil(filteredEmployees.value.length / itemsPerPage.value);
});

const paginatedEmployees = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredEmployees.value.slice(start, end);
});

const previousSearchQuery = ref({ ...searchQuery.value });

const filterEmployees = () => {
  const isSearchChanged = searchQuery.value.id !== previousSearchQuery.value.id || searchQuery.value.name !== previousSearchQuery.value.name;

  filteredEmployees.value = employees.value.filter(employee => {
    return (!searchQuery.value.id || employee.id == searchQuery.value.id) &&
        (!searchQuery.value.name || employee.name.includes(searchQuery.value.name));
    });

  if (isSearchChanged) {
    currentPage.value = 1;
  }

  previousSearchQuery.value = { ...searchQuery.value };
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

const goToEditEmployee = (id: number) => {
  router.push({ name: 'EmployeeEdit', params: { id }, query: { page: currentPage.value, name: searchQuery.value.name } });
};

const goToEmployeeDetails = (id: number) => {
  router.push({ name: 'EmployeeDetails', params: { id }, query: { page: currentPage.value, name: searchQuery.value.name } });
};

const confirmDelete = (id: number) => {
  deleteEmployeeId.value = id;
  showDeleteConfirm.value = true;
};

const deleteEmployee = () => {
  filteredEmployees.value = filteredEmployees.value.filter(employee => employee.id !== deleteEmployeeId.value);
  employees.value = employees.value.filter(employee => employee.id !== deleteEmployeeId.value);
  showDeleteConfirm.value = false;
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
};

onMounted(() => {
  searchQuery.value.id = route.query.id as string || '';
  searchQuery.value.name = route.query.name as string || '';
  filterEmployees();
});
</script>

<style scoped>
.employee-search {
  max-width: 100%;
  height: 95%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.search-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #2c8c6e;
}

.employee-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.employee-table th, .employee-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.employee-table th {
  background-color: #f2f2f2;
  text-align:center;
}

.employee-table tr:hover {
  background-color: #f9f9f9;
}

.edit-button, .delete-button, .info-button {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
}

.delete-button {
  background-color: #e74c3c;
}

.info-button {
  background-color: #3498db;
}

.edit-button:hover, .delete-button:hover, .info-button:hover {
  opacity: 0.8;
}

.delete-confirm {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

.confirm-button, .cancel-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

.confirm-button {
  background-color: #e74c3c;
  color: white;
}

.cancel-button {
  background-color: #ccc;
  color: white;
}
</style>