<template>
    <form @submit.prevent="submitForm" class="border p-4 rounded bg-light">
      <div class="form-group mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" v-model="form.name" class="form-control" required placeholder="Enter employee name" />
      </div>
      <div class="form-group mb-3">
        <label for="position" class="form-label">Position</label>
        <input type="text" id="position" v-model="form.position" class="form-control" required placeholder="Enter position" />
      </div>
      <div class="form-group mb-3">
        <label for="department" class="form-label">Department</label>
        <input type="text" id="department" v-model="form.department" class="form-control" required placeholder="Enter department" />
      </div>
      <div class="form-group mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="form.email" class="form-control" required placeholder="Enter email" />
      </div>
      <div class="form-group mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="tel" id="phone" v-model="form.phone" class="form-control" required pattern="[0-9]{10,15}" placeholder="Enter phone number" />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Add' }} Employee</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        form: {
          name: '',
          position: '',
          department: '',
          email: '',
          phone: ''
        },
        isEdit: false
      };
    },
    mounted() {
      if (this.id) {
        this.isEdit = true;
        this.fetchEmployee();
      }
    },
    methods: {
      fetchEmployee() {
        axios.get(`http://localhost:3000/employees/${this.id}`)
          .then(response => {
            this.form = response.data;
          });
      },
      submitForm() {
        const method = this.isEdit ? 'PUT' : 'POST';
        const url = this.isEdit
          ? `http://localhost:3000/employees/${this.id}`
          : 'http://localhost:3000/employees';
  
        axios({
          method: method,
          url: url,
          data: this.form
        })
          .then(() => {
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Failed to submit employee data', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  