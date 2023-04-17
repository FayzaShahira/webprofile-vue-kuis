<template>

  <h5><br>keep in touch with me!
    <br>(click on the picture)</h5>
  <!--SOCIAL-->
  <div class="card" style="width: 18rem;">
    <h4 class="card-title">Instagram</h4>
    <div class="card-body">
      <a href="https://www.instagram.com/fayzashahira/" class="btn btn-primary">
        <img src="https://i.pinimg.com/564x/ce/48/84/ce48846f4f018d9113f2852af9c1bc06.jpg" class="card-img-top" alt="instapict">
      </a>
      <p class="card-text">You can easily find me on Instagram. I've been active on instagram
        for the last 9 years</p>
    </div>
  </div>

  <div class="card" style="width: 18rem;">
    <h4 class="card-title">YouTube</h4>

    <div class="card-body">
      <a href="https://www.youtube.com/channel/UCrH9Nko0TL63YgyR0yZwimA" class="btn btn-primary">
        <img src="https://i.pinimg.com/564x/52/06/98/5206980b306310a5c3d9a842683cfab7.jpg" class="card-img-top" alt="ytpict">
      </a>
      <p class="card-text">I really like watching videos! and spent a lot of time with YouTube. How about you?</p>
    </div>
  </div>

  <div class="card" style="width: 18rem;">
    <h4 class="card-title">Spotify</h4>
    <div class="card-body">
      <a href="https://open.spotify.com/user/pi6q0ac2btb8uiw18pea1cz4j" class="btn btn-primary">
        <img src="https://i.pinimg.com/564x/a0/1f/58/a01f5805bd450c9578a3abcabd7d246a.jpg" class="card-img-top" alt="spopict">
      </a>
      <p class="card-text">I like music too. Check my spotify account! and find out do we got the same music taste?</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "Social"
}
</script>

<style scoped>


h5{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444444;
  margin-bottom: 1%;
}

.card{
  margin-left: 80px;
  display:inline-block;
  border-style: ridge;
  border-radius: 15px;
  padding: 2px;
}
.card-title{
  text-align: center;
  color: #2c3e50;
}

.card-text {
  text-align: center;
}

.card img {
  margin-left: 80px;
  align-content: center;
  border-radius: 25px;
  width: 120px;
  height: 120px;
}


</style>