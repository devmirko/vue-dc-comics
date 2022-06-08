<template>
<header>
  <div class="container">
      <!-- logo -->
      <a href="">
          <img src="../assets/dc-logo.png" alt="questa è una immagine">
      </a>
      <!-- contenitore menu -->
      <ul>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>
          <li>
              <a href="">characters</a>
          </li>

      </ul>
      
  </div>
</header>  
</template>

<script>
export default {
  name: 'HeaderApp',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
    height: 120px;
    background-color: white;

    .container{
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        ul{
            display: flex;
            align-items: center;
            list-style-type: none;

            li{
                padding: 0 10px;
                

                &:hover{
                    border-bottom: 1px solid #0C7CEC;
                }

                a{
                    text-decoration: none;
                    color: #464651;

                    &:hover{
                        color: #0C7CEC;
                    }
                }


                
            }

        }
    }
 
}
   

</style>
