<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <h3 class = "title-navbar">Faaysha</h3>
    <ul class = "nav-link">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/About">About</router-link></li>
      <li><router-link to="/Social">Social</router-link></li>
        <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg></li>
    </ul>
  </nav>
  <hr>
  <router-view></router-view>

</template>

<script>
import Home from "@/views/Home.vue";
export default {
  name:'App',
  components:{
    Home
  }
}
</script>


<style>
/*navbar start*/
body{
  margin: 0px;
  background-color:floralwhite;
}
nav {
  display: flex;
  justify-content: space-between;
  padding: 0px 80px;
  background-color: floralwhite;
}

.title-navbar{
  font-family: "Script MT Bold";
  font-weight: bold;
  margin-left: 0px;
  font-size: 25px;
  color: #444444;
}
.nav-link{
  display: flex;
  align-items: center;
  color: #444444;
  font-size: 20px;
  font-family:"-apple-system";
}
.nav-link li{
  list-style: none;
  margin-left: 60px;
}

/*navbar end*/
</style>
