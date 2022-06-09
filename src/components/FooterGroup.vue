<template>
<footer>
    <section id="head_footer">
        <div class="container">
            <ul>
                <li>
                    <img src="../assets/buy-comics-digital-comics.png" alt="">
                    <span>DIGITAL COMICS</span>
                </li>
                <li>
                    <img src="../assets/buy-comics-merchandise.png" alt="">
                    <span>DC MERCHAINDAISE</span>
                </li>
                <li>
                    <img src="../assets/buy-comics-subscriptions.png" alt="">
                    <span>SUBSCRIPTION</span>
                </li>
                <li>
                    <img src="../assets/buy-comics-shop-locator.png" alt="">
                    <span>COMIC SHOP LOCATOR</span>
                </li>
                <li>
                    <img src="../assets/buy-dc-power-visa.svg" alt="">
                    <span>DC POWER VISA</span>
                </li>

            </ul>
        </div>
    </section>
    <section id="main_footer">
        <div class="container">
            <div id="nav_footer">
                <!-- menu footer -->
                <div class="row">
                    <div class="col_1">
                    <h3>DC COMICS</h3>
                    <ul>
                        <li>
                            <a href="">CHARACTERS</a>
                        </li>
                        <li>
                            <a href="">COMICS</a>
                        </li>
                        <li>
                            <a href="">MOVIES</a>
                        </li>
                        <li>
                            <a href="">TV</a>
                        </li>
                        <li>
                            <a href="">GAMES</a>
                        </li>
                        <li>
                            <a href="">VIDEOS</a>
                        </li>
                        <li>
                            <a href="">NEWS</a>
                        </li>
                    </ul>
                    <h3>SHOP</h3>
                    <ul>
                        <li>
                            <a href="">shop DC</a>
                        </li>
                        <li>
                            <a href="">shop DC Collectibles</a>
                        </li>
                       
                    </ul>
                
                </div>
                <div class="col_2">
                    <h3>DC </h3>
                    <ul>
                        <li>
                            <a href="">Term of Use</a>
                        </li>
                        <li>
                            <a href="">Privacy policy</a>
                        </li>
                        <li>
                            <a href="">Ad Choise</a>
                        </li>
                        <li>
                            <a href="">Advertising</a>
                        </li>
                        <li>
                            <a href="">Jobs</a>
                        </li>
                        <li>
                            <a href="">Subscriptions</a>
                        </li>
                        <li>
                            <a href="">Talent Workshop</a>
                        </li>
                         <li>
                            <a href="">CPSPC certificates</a>
                        </li>
                         <li>
                            <a href="">Ratings</a>
                        </li>
                        <li>
                            <a href="">Shop Helps</a>
                        </li>
                         <li>
                            <a href="">Contacs Us</a>
                        </li>
                    </ul>
                </div>
                <div class="col_3">
                    <h3>SITES</h3>
                    <ul>
                        <li>
                            <a href="">DC</a>
                        </li>
                        <li>
                            <a href="">MAD magazine</a>
                        </li>
                        <li>
                            <a href="">DC kids</a>
                        </li>
                         <li>
                            <a href="">DC Universe</a>
                        </li>
                        <li>
                            <a href="">DC Power Visa</a>
                        </li>
                    </ul>

                </div>
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
                        
                    </a>
                </li>
                <li>
                    <a href="">
                        
                    </a>
                </li>
                <li>
                    <a href="">
                        
                    </a>
                </li>
                <li>
                    <a href="">
                        
                    </a>
                </li>
                <li>
                    <a href="">
                        
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
    background-color: #0c7cec;
    position: relative;
    z-index: 10;

    .container{
        width: 60%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: center;

        ul{
            display: flex;
            width: 100%;
            justify-content: space-between;
            
            
            

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
    height: 350px;
    background-image: url(../assets/footer-bg.jpg);
    

    .container{
        width: 60%;
        height: 100%;
        margin: 0 auto;
        display: flex;

        #nav_footer{
            width: 50%;
            height: 100%;
            // menu footer
            display: flex;
            align-items: center;

            .row{
                display: flex;

                .col_1 , .col_2 , .col_3 {

                margin-right: 20px;

                h3{
                    color: white;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                ul{
                    list-style-type: none;

                    li{

                        margin-bottom: 5px;
                        a{
                        text-decoration: none;
                        color: #959595;

                    }
                    }
                }

            }
            }

            

            

         

        }

        #image_background{
            width: 50%;
            position: relative;
            

            img{
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto auto;
            position: absolute;
           
 
            }
        }


    }
}
#bottom_footer{
    height: 110px;
    background-color: #222222;
    position: relative;
    

    .container{
        width: 60%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;

        a{
            text-decoration: none;
            color: white;
            border: 1px solid #0C7CEC;
            padding: 10px;
            font-size: 18px;
            font-weight: 700;

        }
        ul{
        display: flex;
        width: 200px;

            li{
                color: white;
                list-style-type: none;
                margin-right: 20px;

              
            }
        }

    

       
    }

    
}

</style>
