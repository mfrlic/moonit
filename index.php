<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>moon.it</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
  <link rel="manifest" href="assets/img/favicon/site.webmanifest">

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">

  <link href="assets/css/style.css" rel="stylesheet">
</head>

<body>

  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="">moon.it</a></h1>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#home">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
        <div style="position:relative; padding: 0px; margin-left: 20px;">
          <a id="btn-cart" data-bs-toggle="modal" data-bs-target="#cart"><i class="bx bx-cart"></i></a>
        </div>
      </nav>

    </div>
  </header>

  <section id="home" class="d-flex align-items-center">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-6 text-center order-lg-1 order-2">
          <h1>Need a head start to your crypto project? Let's moon it!</h1>
          <h2>Crypto marketing agency</h2>
          <a href="#about" class="btn-get-started scrollto">Learn more</a>
          <a href="#contact" class="btn-get-started scrollto">Apply for a position</a>
        </div>
        <div class="col-lg-6 text-center order-lg-2 order-1 mb-lg-0 mt-lg-0 mb-5 mt-4">
          <img class="logo" src="assets/img/logo.png">
        </div>
      </div>

    </div>
  </section>

  <div class="modal fade" id="cart" tabindex="-1" aria-labelledby="cart-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cart-label">Cart</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div id="items_table">
            <a class="cart-close" onclick="ClearAll()"><i class="bx bx-trash"></i></a>
            <table id="list"></table>
          </div>
          <div>
            Where can we contact you?<br>
            <button id="contact1" class="btn-contact active"><i class="bx bx-mail-send"></i></button>
            <button id="contact2" class="btn-contact"><i class="bx bxl-telegram"></i></button>
            <button id="contact3" class="btn-contact"><i class="bx bxl-twitter"></i></button>
            <input id="contact-input" type="text" placeholder="Email">
          </div>
        </div>
        <div class="modal-footer">
          <span id="cart-total"></span>
          <a class="cart-checkout" id="send-offer">Send offer</a>
        </div>
      </div>
    </div>
  </div>

  <main id="main">

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
          <p>We aim to be the one place for every crypto project promotions. </p>
        </div>

        <div class="row icon-boxes">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-twitter"></i></div>
              <h4 class="title"><a href="">Twitter</a></h4>
              <p class="description">Promos/Followers/Retweets</p>
            </div>
          </div>
  
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="icon-4chan"></i></div>
              <h4 class="title"><a href="">4chan</a></h4>
              <p class="description">Posts/Bumps</p>
            </div>
          </div>
  
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="icon-reddit"></i></div>
              <h4 class="title"><a href="">Reddit</a></h4>
              <p class="description">Posts/Upvotes</p>
            </div>
          </div>
  
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="500">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-telegram"></i></div>
              <h4 class="title"><a href="">Telegram</a></h4>
              <p class="description">Promo</p>
            </div>
          </div>
  
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="600">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-youtube"></i></div>
              <h4 class="title"><a href="">Youtube</a></h4>
              <p class="description">Promo</p>
            </div>
          </div>
  
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="700">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-tiktok"></i></div>
              <h4 class="title"><a href="">TikTok</a></h4>
              <p class="description">Promo</p>
            </div>
          </div>
  
        </div>

      </div>
    </section>

    <section id="pricing" class="pricing section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Pricing</h2>
        </div>

        <div class="row">
          <a class="option" data-bs-toggle="collapse" href="#twitter" role="button" aria-expanded="false" aria-controls="twitter">Twitter</a>
          <div class="collapse multi-collapse" id="twitter">
            <div class="card card-body container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="promo">
                    <h4>Giveaway</h4>
                    <span class="subtitle">We host a giveaway on your terms!</span>
                    <div class="details">
                      <div class="details-row">
                        Giveaway amount: <input id="price1-1" type="number" min=10 max=10000> USD <span id="calc1-1"></span>
                      </div>

                      <div class="details-row">
                        Pin the tweet?<button id="y1" class="price-radio">Yes</button><button id="n1" class="price-radio active">No</button> <span id="calc1-2"></span>
                        <input id="y1-radio" class="d-none" name="radio1-1" type="radio">
                        <input checked id="n1-radio" class="d-none" name="radio1-1" type="radio">
                      </div>

                      <div class="details-row">
                        Number of interactions required: <input id="price1-3" type="number" min=1 max=10> <span id="calc1-3"></span>
                      </div>

                      <div class="details-row">
                        Giveaway duration: <input id="price1-4" type="number" min=1 max=72> <button id="h1" class="price-radio active">Hours</button><button id="d1" class="price-radio">Days</button> <span id="calc1-4"></span>
                        <input checked id="h1-radio" class="d-none" name="radio1-2" type="radio">
                        <input id="d1-radio" class="d-none" name="radio1-2" type="radio">
                      </div>

                      <div class="details-row">
                        <span id="total-sum">Total: 0 USD</span>
                      </div>

                      <br>

                      <div class="details-row text-center">
                        <button id="btn-giveaway" class="cart-add"><i class="bx bxs-cart-add"></i> Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="promo">
                    <h4>Promotion</h4>
                    <span class="subtitle">We share your project to the world!</span>
                    <div class="details">

                      <div class="details-row text-center">
                        <span class="fixed-total">35 USD</span>
                      </div>

                      <div class="details-row text-center">
                        <button id="btn-promotion" class="cart-add"><i class="bx bxs-cart-add"></i> Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="form-container">
          <div class="opt-box">
            <button id="btn-p" class="opt opt-left active">I want to apply for a position.</button>
            <button id="btn-q" class="opt opt-right">I have a question.</button>
          </div>
  
          <div id="form-p" class="form row">
            <div class="col-lg-6">
              <div class="input-container ic1">
                <input id="firstname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="firstname" class="placeholder">First name</label>
              </div>
              <div class="input-container ic2">
                <input id="lastname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Last name</label>
              </div>
              <div class="input-container ic2">
                <input id="email-p" class="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
              </div>
              <div class="pos-container ic2">
                <div class="t-pos">I am interested in working on:</div>
                <button id="opt1" class="pos-app"><i class="bx bxl-twitter"></i></button>
                <button id="opt2" class="pos-app"><i class="icon-reddit"></i></button>
                <button id="opt3" class="pos-app"><i class="icon-4chan"></i></button>
                <button id="opt4" class="pos-app"><i class="bx bxl-telegram"></i></button>
                <button id="opt5" class="pos-app"><i class="bx bxl-tiktok"></i></button>
                <button id="opt6" class="pos-app"><i class="bx bxl-youtube"></i></button>
                <input id="checkbox1" class="d-none" type="checkbox" value="Twitter">
                <input id="checkbox2" class="d-none" type="checkbox" value="Reddit">
                <input id="checkbox3" class="d-none" type="checkbox" value="4chan">
                <input id="checkbox4" class="d-none" type="checkbox" value="Telegram">
                <input id="checkbox5" class="d-none" type="checkbox" value="TikTok">
                <input id="checkbox6" class="d-none" type="checkbox" value="Youtube">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="textarea-container ic1">
                <textarea id="message" class="input" placeholder=" "></textarea>
                <div class="cut"></div>
                <label for="message" class="placeholder">Message</label>
              </div>
            </div>
            <div class="submit-container">
              <button type="text" id="submit-p" class="submit">Submit</button>
            </div>
          </div>
          <div id="form-q" class="form row d-none">
            <div class="col-lg-7 container-q">
              <div class="input-container ic1">
                <input id="email-q" class="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email-q" class="placeholder">Email</label>
              </div>
              <div class="textarea-container ta-q ic2">
                <textarea id="question" class="input" placeholder=" "></textarea>
                <div class="cut"></div>
                <label for="question" class="placeholder">Question</label>
              </div>
            </div>
            <div class="submit-container">
              <button type="text" id="submit-q" class="submit submit-q">Submit</button>
            </div>
          </div>
        </div>

      </div>
    </section>
    <form id="cart-form" method="POST">
      <input id="order-summary" type="hidden">
    </form>
    <form id="p-form" method="POST">
      <input id="p-summary" type="hidden">
    </form>
    <form id="q-form" method="POST" action="index.php">
      <input id="q-summary" type="hidden">
    </form>
  </main>

  <footer id="footer">

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          Copyright &copy; <strong><span>moon.it</span></strong>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-telegram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-discord-alt"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
      </div>
    </div>
  </footer>

  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bx bx-up-arrow-alt"></i></a>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/bignumber/bignumber.min.js"></script>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/cart.js"></script>

</body>

</html>

<?php
if($SERVER["REQUEST_METHOD"] == "POST") {
    echo "<script type='text/javascript'>alert('eii');</script>";
}
?>