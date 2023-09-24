<script setup>
import { CAlert } from '@coreui/bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CCarouselItem } from '@coreui/bootstrap-vue'
import { CCarousel } from '@coreui/bootstrap-vue'
import Badge from 'primevue/badge';

</script>
<template>
    <div class="CarouselContainer">
        <CCarousel controls style="background-color: #f1f5f9;">
            <CCarouselItem class="CarouselItemContainer">
                <Badge class="flex flex-wrap justify-content-center align-items-start gap-2" value="Акция" size="xlarge"
                    severity="danger"></Badge>
                <img class="d-block w-50" src="https://www.pngall.com/wp-content/uploads/2016/05/Lamborghini-PNG-File.png"
                    alt="slide 6" />
                <CCarouselCaption class="d-none d-md-block">
                    <h5>Lamborghini</h5>
                    <p>Акционное предложение.</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem class="CarouselItemContainer">
                <Badge class="flex flex-wrap justify-content-center align-items-start gap-2" value="Акция" size="xlarge"
                    severity="danger"></Badge>
                <img class="d-block w-50" src="https://www.pngmart.com/files/3/BMW-M3-PNG-Pic.png" alt="slide 1" />
                <CCarouselCaption class="d-none d-md-block">
                    <h5>BMW-M3</h5>
                    <p>Акционное предложение</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem class="CarouselItemContainer">
                <Badge class="flex flex-wrap justify-content-center align-items-start gap-2" value="Акция" size="xlarge"
                    severity="danger"></Badge>
                <img class="d-block w-50" src="https://www.pngmart.com/files/5/Lexus-Concept-PNG-Clipart.png"
                    alt="slide 2" />
                <CCarouselCaption class="d-none d-md-block">
                    <h5>Lexus</h5>
                    <p>Акционное предложение</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem class="CarouselItemContainer">
                <Badge class="flex flex-wrap justify-content-center align-items-start gap-2" value="Акция" size="xlarge"
                    severity="danger"></Badge>
                <img class="d-block w-50" src="https://www.pngmart.com/files/4/Mazda-Car-PNG-Photo.png" alt="slide 3" />
                <CCarouselCaption class="d-none d-md-block">
                    <h5>Mazda</h5>
                    <p>Акционное предложение</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem class="CarouselItemContainer">
                <Badge class="flex flex-wrap justify-content-center align-items-start gap-2" value="Акция" size="xlarge"
                    severity="danger"></Badge>
                <img class="d-block w-50" src="https://www.pngmart.com/files/10/Red-Kia-Car-PNG-File.png" alt="slide 4" />
                <CCarouselCaption class="d-none d-md-block">
                    <h5>Kia</h5>
                    <p>Акционное предложение</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem class="CarouselItemContainer">
                <Badge class="flex flex-wrap justify-content-center align-items-start gap-2" value="Акция" size="xlarge"
                    severity="danger"></Badge>
                <img class="d-block w-50" src="https://www.pngall.com/wp-content/uploads/2016/05/Ferrari-Download-PNG.png"
                    alt="slide 5" />
                <CCarouselCaption class="d-none d-md-block">
                    <h5>Ferrari</h5>
                    <p>Акционное предложение</p>
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    </div>

    <section class="singup">
        <div class="cont">
            <div class="text">
                <h1>Sign up for amazing offers
                    <span>exclusive access for offers and promotions</span>
                </h1>
            </div>

            <div class="form-e">
                <form action="#" method="get">

                    <input type="email" name="email" placeholder="Enter your Email Address" required>
                    <button type="submit">SEND</button>

                </form>
            </div>

            <div>
                <span> <a href="https://www.facebook.com/example"><i class="pi  pi-facebook"
                            style="color: #365595; font-size: 1.5rem;"></i></a></span>
                <span><a href="https://twitter.com/example"><i class="pi  pi-twitter"
                            style="color: #36a4cf; font-size: 1.5rem;"></i></a></span>
                <span> <a href="https://www.instagram.com/example"><i class="pi  pi-google"
                            style="color: #d41332; font-size: 1.5rem;"></i></a></span>

            </div>

        </div>

    </section>
</template>

<style scoped>
.p-badge.p-badge-xl[data-v-bd032450] {
    font-size: 3.5rem;
    min-width: 12rem;
    height: 6rem;
    line-height: 5rem;
    position: absolute;
    top: 48px;
    right: 40px;
}

.p-badge.p-badge-danger {
    background: rgb(255, 191, 0);
    background: linear-gradient(54deg, rgba(255, 191, 0, 1) 0%, rgba(217, 237, 12, 1) 100%);
    color: #ffffff;
}

.CarouselContainer {
    background-color: #e9edf3;
    color: #708da9;
    border-radius: 3px;
    border: 1px solid #dee2e6;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

}



.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 400px;
}

.CarouselItemContainer {
    margin-bottom: 20px;
}

.carousel {
    width: 50%;
    margin: 0 auto;
}

.carousel-item {
    text-align: center;
}

.carousel-item img {
    max-width: 100%;
    height: auto;
    width: 50%;
}

.carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    padding: 10px;
}

.carousel-caption h5 {
    font-size: 24px;
}

.carousel-caption p {
    font-size: 18px;
}

.singup {
    background-color: #fdbb2d;
    margin-top: 15px;
    padding: 35px 0;
}

a {
    text-decoration: none;
    margin: 10px;
    cursor: pointer;
}

.cont {
    width: 1170px;
    margin: 0px auto;
}


.text h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 900;
}

.text span {
    font-size: 18px;
    color: #716d6e;
    display: block;
    font-weight: normal;
    margin-top: 6px;
}

.singup .cont>div {
    display: inline-block;
    vertical-align: middle;
}

.form-e {
    width: 35%;
    margin-left: 20px;
    background: white;
    padding: 8px 20px;
}

button[type="submit"] {
    background-color: #fff;
    border: 2px solid #b8b6b6;
    font-size: 18px;
    font-weight: 900;
    color: #716d6e;
    padding: 0 8px;
    line-height: 36px;
    transition: 500ms;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #716d6e;
    border: 2px solid #716d6e;
    color: white;
    transition-delay: 100ms;
}

input[type="email"] {
    width: 80%;
    border: none;
    outline: none;
}

.text h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 900;
}

.text span {
    font-size: 18px;
    color: #716d6e;
    display: block;
    font-weight: normal;
    margin-top: 6px;
}
</style>