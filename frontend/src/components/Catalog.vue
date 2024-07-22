<script>
import roomImage1 from '@/assets/images/room-image1.jpg';
import roomImage2 from '@/assets/images/room-image2.jpg';
import roomImage3 from '@/assets/images/room-image3.jpg';
import roomImage4 from '@/assets/images/room-image4.jpg';
import roomImage5 from '@/assets/images/room-image5.jpg';

export default {
  data() {
    return{
        rooms:[
            {
                name: 'Lux',
                space: '30',
                guests: '3',
                price: '54',
                image: roomImage2,
            },
            {
                name: 'Delux plus',
                space: '25',
                guests: '2',
                price: '41',
                image: roomImage1,
            },
            {
                name: 'Delux',
                space: '25',
                guests: '1',
                price: '37',
                image: roomImage1,
            },
            {
                name: 'Standart',
                space: '15',
                guests: '2',
                price: '30',
                image: roomImage3,
            }
        ]
    }
  },
};
</script>

<template>
  <section id="catalog" class="rooms-catalog">
    <div class="container">
      <div class="rc-wrapp">
        <div class="rc-header">
          <h1 class="rc_title header-1">Your cozy</h1>
          <p class="rc_context"><b>Barakat</b> — has 18 cozy and spacious rooms with incredible panoramas that take your breath away.</p>
        </div>
        <div class="rc-catalog">
            <a v-for="(room, index) in rooms" :key="index" href="https://www.booking.com/Share-qXK2KL" class="rc-catalog_item">
                <div class="rcc-item-info">
                    <div>
                        <h4 class="rcc-item_title">{{ room.name }}</h4>
                        <span class="rcc-item_detail">{{ room.space }} m²</span>
                        <span class="rcc-item_detail">{{ room.guests }} Guests</span>
                    </div>
                    <div>
                        <span class="rcc-item_price">{{ room.price }}$/day</span>
                    </div>
                </div>
                <img :src="room.image">
                <div class="rcc-item_btn">
                    <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.62085 2H34.0002V27.3793" stroke="black" stroke-width="3" stroke-linecap="round"/>
                        <path d="M34.0607 4.06066L35.1213 3L33 0.87868L31.9393 1.93934L34.0607 4.06066ZM0.93934 32.9393C0.353553 33.5251 0.353553 34.4749 0.93934 35.0607C1.52513 35.6464 2.47487 35.6464 3.06066 35.0607L0.93934 32.9393ZM31.9393 1.93934L0.93934 32.9393L3.06066 35.0607L34.0607 4.06066L31.9393 1.93934Z" fill="black"/>
                    </svg>
                </div>
            </a>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.rooms-catalog{
  padding: 60px 0;
  overflow: hidden;
}
.rc-wrapp{
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.rc-header{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
.rc_title{
  text-align: start;
}
.rc_context{
  font-size: var(--text-size);
  font-weight: 400;
  text-align: start;
  max-width: 700px;
}
.rc_context b{
  text-decoration: underline;
  text-transform: uppercase;
}
.rc-catalog{
    display: flex;
    gap: 20px;
    row-gap: 0;
    flex-wrap: wrap;
    height: 750px;
}
.rc-catalog_item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.rc-catalog_item{
    position: relative;
    display: block;
    flex: calc(50% - 20px);
    height: calc(50% - 20px);
}
.rcc-item-info{
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    width: 100%;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 16px;
    color: #fff;
}
.rcc-item_title{
    font-family: Unbounded;
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 10px;
}
.rcc-item_detail{
    display: inline-block;
    margin-right: 15px;
}
.rcc-item_price{
    font-size: 20px;
}
.rcc-item_btn{
    position: absolute;
    top: 75%;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fff;
    width: 70px;
    height: 70px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    transition: .3s all ease;
}
.rc-catalog_item::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    transition: .3s all ease;
}
.rc-catalog_item:hover .rcc-item_btn{
    opacity: 1;
    top: 50%;
}
.rc-catalog_item:hover::before{
    opacity: 0.5;
}

@media screen and (max-width: 1268px) {
    .rc-catalog{
        height: 650px;
    }
}
@media screen and (max-width: 1024px) {
    .rc-catalog{
        height: 600px;
    }
}
@media screen and (max-width: 900px) {
    .rc-catalog{
        flex-direction: column;
        flex-wrap: nowrap;
        height: auto;
        row-gap: 20px;
    }
    .rc-catalog_item{
        flex: none;
        height: 400px;
    }
}
@media screen and (max-width: 425px) {
    .rc-catalog_item{
        height: 300px;
    }
    .rcc-item-info{
        padding: 20px;
    }
}
</style>
