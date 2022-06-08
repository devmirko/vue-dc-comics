<template>
<footer>
    <section id="head_footer">
        <div class="container">
            <ul>
                <li>
                    <img src="../assets/buy-comics-digital-comics.png" alt="">
                    <span>Digital comics</span>
                </li>
                <li>
                    <img src="../assets/buy-comics-merchandise.png" alt="">
                    <span>Digital comics</span>
                </li>
                <li>
                    <img src="../assets/buy-comics-subscriptions.png" alt="">
                    <span>Digital comics</span>
                </li>
                <li>
                    <img src="../assets/buy-comics-shop-locator.png" alt="">
                    <span>Digital comics</span>
                </li>
                <li>
                    <img src="../assets/buy-dc-power-visa.svg" alt="">
                    <span>Digital comics</span>
                </li>

            </ul>
        </div>
    </section>
    <section id="main_footer">

    </section>
    <section id="bottom_footer">

    </section>

</footer>
</template>

<script>
export default {
  name: 'FooterGroup',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#head_footer{
    height: 115px;
    background-color: #0C7CEC;

    .container{
        width: 60%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: center;

        ul{
            display: flex;
            padding: 0;
            
            
            

            li{
                display: flex;
                align-items: center;
                margin-right: 20px;
                color: white;
               

                img{
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }
            }
            
        }
    }
}

</style>
