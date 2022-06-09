<template>
<div class="card">
    <div class="box_image">
        <img :src="img" :alt="title">
    </div>
    <div class="box_title">
        <h4>{{title}}</h4>
    </div>

</div>


</template>

<script>
export default {
 name: 'CardItem',
 props: {
     img: String,
     title: String
 }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
    flex-basis: 15%;
    min-height: 400px;

    .box_image{
        width: 100%;
        height: 70%;

           img{
               max-width: 100%;
               max-height: 100%;
           }
         
    }

    .box_title{
        width: 100%;
        height: 30%;
    }


}


</style>