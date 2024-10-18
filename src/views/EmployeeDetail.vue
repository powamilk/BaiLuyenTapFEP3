<template>
    <div>
      <EmployeeForm :id="$route.params.id" :isView="true" />
    </div>
  </template>
  
  <script>
  import EmployeeForm from '@/components/EmployeeForm.vue';
  
  export default {
    components: {
      EmployeeForm
    }
  };
  </script>
  