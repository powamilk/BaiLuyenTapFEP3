import { createRouter, createWebHistory } from 'vue-router';
import EmployeeList from '@/components/EmployeeList.vue';
import EmployeeAdd from '@/views/EmployeeAdd.vue';
import EmployeeUpdate from '@/views/EmployeeUpdate.vue';
import EmployeeDetail from '@/views/EmployeeDetail.vue';

const routes = [
  { path: '/', component: EmployeeList },
  { path: '/add', component: EmployeeAdd },
  { path: '/update/:id', component: EmployeeUpdate },
  { path: '/detail/:id', component: EmployeeDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
