<template>
    <div>
      <h2>Employee List</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.position }}</td>
            <td>{{ employee.department }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.phone }}</td>
            <td>
              <router-link :to="`/edit/${employee.id}`" class="btn btn-warning btn-sm">Edit</router-link>
              <router-link :to="`/detail/${employee.id}`" class="btn btn-info btn-sm">View</router-link>
              <button @click="deleteEmployee(employee.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        employees: []
      };
    },
    mounted() {
      this.fetchEmployees();
    },
    methods: {
      fetchEmployees() {
        axios.get('http://localhost:3000/employees')
          .then(response => {
            this.employees = response.data;
          });
      },
      deleteEmployee(id) {
        if (confirm('Are you sure you want to delete this employee?')) {
          axios.delete(`http://localhost:3000/employees/${id}`)
            .then(() => {
              this.fetchEmployees(); 
            });
        }
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  