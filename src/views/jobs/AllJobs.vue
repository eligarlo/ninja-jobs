<template>
  <h1>All Jobs</h1>
  
</template>

<script>
export default {
  
  mounted() {
    console.log('this.$router.params.id ',this.$route.params.id)
    this.$router.push({
      name:'JobDetails',
      params:{
        id:this.$route.params.id
      }
    })
  },
}
</script>

<style>
.job h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
  transition: background-color 0.2s ease-in;
}

.job h2:hover {
  background-color: #ddd;
}

.job a {
  text-decoration: none;
}
</style>