<template>
    <div>
      <h1>Dashboard</h1>
      <TotalSales />
    </div>
  </template>
  
  <script>
  import TotalSales from '../components/TotalSales.vue';
  
  export default {
    name: "Home",
    components: {
      TotalSales,
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  </style>
  