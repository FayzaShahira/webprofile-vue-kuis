<template>

  <div class="text1">
    <img src="../assets/fayy.jpg" alt="fay">
    <h5>About Me:</h5>
    <p><br>Born with name 'Fayza Shahira'.
     <br>Growing up, i've been called with several names;
    <br>Iza, Fayza, and now in campus people call me Pay.
    <br><br>as you can see on the Home page, there's 5 things that i use for describing myself.
    <br>a bookworm since a kid,
    <br>a nephopile,
    <br>addicted to greentea flavor.
    <br>24/7 busy with music. and Han, the music producer.
    <br> I was born in Tg. Balai Karimun, but currently living in Riau since 2018 for my study.
      <br>  <br> an informatics engineering student who likes to writes a story, poem, and learn a new language.
      <br> click <a href="https://www.notion.so/letter-to-95c66f2ad0554230b5ff99c5a81741ad?pvs=4">here</a> to read one of my writing
  </p>
  </div>


  <div class="text2">
    <h5>Educational background:</h5>
    <p>
      i'm currently on my second year in informatics engineering at UIN Suska Riau for my bachelor degree.
      <br>for the last 2 years, i've been join a student oraganization on campus, and two study club.
      <br>in 2021, i graduated from Islamic Center Senior High School Siak, with a good GPA.
      <br> i was also participated in some science olympiad. student organization, and scout organization during high school
    </p>
  </div>

</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
body{
  margin-left: 80px;
}

.text1 {
  margin-top: 20px;
  font-size: 15px;
  display: flex;
}
.text1 img{
  margin-left: 80px;
  height: auto;
  width: 260px;
  border-radius:10px;
}
.text1 p{
  padding: 5px;
}
.text1 h5{
  font-size: 20px;
  margin-left: 10px;
  font-family: "sans-serif";
  font-weight: bold;
  color: #2c3e50;
}

.text2 h5{
  margin-left: 80px;
  font-size: 20px;
  font-family: "sans-serif";
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1px;
}
.text2 p{
  margin-left: 80px;
}

</style>