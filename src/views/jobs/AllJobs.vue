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