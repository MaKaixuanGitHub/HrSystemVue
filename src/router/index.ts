import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Icon from '../views/Icon.vue'
import Login from '../views/Login.vue'
import Settings from '../views/Settings.vue'
import employee_information from '../views/employee_information.vue'
import employee_list from '../views/employee_list.vue'
import NotFound from '../views/NotFound.vue';
import EmployeeSearch from '../views/EmployeeSearch.vue';
import EmployeeDetails from '../views/EmployeeDetails.vue';
import EmployeeEdit from '../views/EmployeeEdit.vue';
import AddEmployee from '../views/AddEmployee.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/employee/:id',
      name: 'EmployeeDetails',
      component: EmployeeDetails,
      props: true
    },
    {
      path: '/employee/edit/:id',
      name: 'EmployeeEdit',
      component: EmployeeEdit,
      props: true
    },
    {
      path: '/add-employee',
      name: 'AddEmployee',
      component: AddEmployee
    },
    {
      path: '/EmployeeSearch',
      name: 'EmployeeSearch',
      component: EmployeeSearch,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },

    {
      path: '/employee_information',
      name: 'employee_information',
      component: employee_information
    },

    {
      path: '/employee_list',
      name: 'employee_list',
      component: employee_list
    },
    // 如果路径未匹配，重定向到404页面
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});
export default router