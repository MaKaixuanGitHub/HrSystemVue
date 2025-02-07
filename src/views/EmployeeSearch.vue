<template>
  <div class="employee-search">
    <h1>Employee Search</h1>
    <div class="search-form">
      <input v-model="searchQuery.id" type="number" placeholder="Employee ID" class="search-input" />
      <input v-model="searchQuery.name" placeholder="Employee Name" class="search-input" />
      <button @click="filterEmployees" class="search-button">Search</button>
    </div>
    <table class="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Birthday</th>
          <th>Tel</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in paginatedEmployees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.age }}</td>
          <td>{{ employee.birthday }}</td>
          <td>{{ employee.tel }}</td>
          <td>{{ employee.address }}</td>
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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Pagination from '../views/Pagination.vue';

const router = useRouter();

// 示例员工数据
const employees = ref([
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
]);

const searchQuery = ref({
  id: '',
  name: ''
});

const filteredEmployees = ref([...employees.value]);
const currentPage = ref(1);
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

const filterEmployees = () => {
  filteredEmployees.value = employees.value.filter(employee => {
    return (!searchQuery.value.id || employee.id == searchQuery.value.id) &&
           (!searchQuery.value.name || employee.name.includes(searchQuery.value.name));
  });
  currentPage.value = 1;
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

const goToEditEmployee = (id: number) => {
  router.push({ name: 'EmployeeEdit', params: { id } });
};

const goToEmployeeDetails = (id: number) => {
  router.push({ name: 'EmployeeDetails', params: { id } });
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
  text-align: left;
}

.employee-table th {
  background-color: #f2f2f2;
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