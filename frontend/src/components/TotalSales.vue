<template>
    <div>
      <h2>Total Sales</h2>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <p>Total Sales: {{ totalSales }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        totalSales: 0,
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchTotalSales() {
        this.loading = true;
        this.error = null;
  
        try {
          const { data } = await axios.get('http://localhost:3000/total_sales', {
            params: {
              startDate: '2024-12-01',
              endDate: '2024-12-02',
            },
          });
          this.totalSales = data.totalSales;
        } catch (err) {
          this.error = 'Failed to fetch total sales.';
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      this.fetchTotalSales();
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #555;
  }
  </style>
  