<template>
  <div class ="content">
    <h1>
      Books,<br>
      Clouds,<br>
      Greentea,<br>
      Music and Han
      <img src="https://i.pinimg.com/564x/00/7d/67/007d67d18547898bc9c166638578c621.jpg" alt="pict"/>
    </h1>
  </div>
  <h1 class="scroll">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  </h1>
  <h3 class="content2">
    Hello! This is Fay, welcome.
  </h3>
  <p>

  </p>


</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

body{
  background-color:floralwhite;
}

.content h1{
  margin-left: 80px;
  font-family: "sans-serif";
  font-size: 80px;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
}
.content img{
  margin-right: 80px;
  border-radius: 10px;
  height: 350px;
  width: 350px;
  float: right;
}
/*content end*/
.scroll {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1% 15%;
}
.content2{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444444;
  padding: 2%;
}
p{
  align-items: center;
  color: #444444;
  margin-right: 80px;
  margin-left: 80px;
}
</style>