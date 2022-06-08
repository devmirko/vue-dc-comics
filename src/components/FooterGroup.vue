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
        <div class="container">
            <div id="nav_footer">
                <!-- menu footer -->
                <div class="col_1">
                    <h3>DC Comics</h3>
                    <ul>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                    </ul>
                    <h3>shop</h3>
                    <ul>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                    </ul>
                
                </div>
                <div class="col_2">
                    <h3>DC Comics</h3>
                    <ul>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                    </ul>
                </div>
                <div class="col_3">
                    <h3>shop</h3>
                    <ul>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                        <li>
                            <a href="">comics</a>
                        </li>
                    </ul>

                </div>
                     
            </div>
            <div id="image_background">
                <img src="../assets/dc-logo-bg.png" alt="">
            </div>
        </div>
    </section>
    <section id="bottom_footer">
        <div class="container">
            <a href="">SIGN-UP NOW</a>
            <ul>
                <li>
                    <span>follow us</span>
                </li>
                <li>
                    <a href="">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                    </a>
                </li>
            </ul>

        </div>

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
#main_footer{
    min-height: 250px;
    background-image: url(../assets/footer-bg.jpg);

    .container{
        width: 60%;
        margin: 0 auto;
        display: flex;

        #nav_footer{
            width: 50%;
            // menu footer
            display: flex;

            .col_1 , .col_2 , .col_3 {

                margin-right: 20px;

                h3{
                    color: white;
                }
                ul{
                    list-style-type: none;

                    a{
                        text-decoration: none;
                        color: #959595;
                    }
                }

            }

         

        }

        #image_background{
            width: 50%;

            img{

            }
        }


    }
}
#bottom_footer{
    height: 100px;
    background-color: #222222;

    .container{
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;

       
    }

    ul{
        display: flex;

        li{
            list-style-type: none;
            margin-right: 20px;
        }
    }
}

</style>
