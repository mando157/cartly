import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, FreeMode, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  imports: [],
  selector: 'app-cartly',
  styleUrl: './cartly.scss',
  templateUrl: './cartly.html',
})
export class Cartly implements AfterViewInit {

  public products = [
    {
      name: "Phone",
      image: "assets/images/phone.png",
      description: "Powerful smartphone with a sleek design.",
      price: 500,
      quantity: 0
    },
    {
      name: "Soundcore",
      image: "assets/images/soundcore.png",
      description: "Premium sound quality for everyday listening.",
      price: 100,
      quantity: 0
    },
    {
      name: "Xbox",
      image: "assets/images/xbox.png",
      description: "Enjoy an amazing next-level gaming experience.",
      price: 450,
      quantity: 0
    },
    {
      name: "Smart Watch",
      image: "assets/images/smartwatch.png",
      description: "Track your fitness and stay connected.",
      price: 150,
      quantity: 0
    },
    {
      name: "Headphone",
      image: "assets/images/headphone.png",
      description: "Comfortable headphones with clear audio.",
      price: 80,
      quantity: 0
    },
    {
      name: "Laptop",
      image: "assets/images/laptop.png",
      description: "Reliable performance for work and entertainment.",
      price: 900,
      quantity: 0
    },
    {
      name: "Headset",
      image: "assets/images/headset.png",
      description: "Immersive audio for gaming and communication.",
      price: 120,
      quantity: 0
    },
    {
      name: "Mouse",
      image: "assets/images/mouse.png",
      description: "Precise control with a comfortable grip.",
      price: 30,
      quantity: 0
    },
    {
      name: "Keyboard",
      image: "assets/images/keyboard.png",
      description: "Lovely Responsive keys for smooth typing.",
      price: 60,
      quantity: 0
    }
  ];

  toggleTheme() {
    let currentTheme = document.body.getAttribute('data-theme'),
      newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.setAttribute('data-theme', newTheme);
  }

  ngAfterViewInit() {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination, Scrollbar, Autoplay, FreeMode],

      direction: 'horizontal',
      loop: true,

      slidesPerView: 4,
      spaceBetween: 25,

      speed: 8000,

      freeMode: {
        enabled: true,
        momentum: false,
        sticky: false,
      },

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25
        }
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },

      preventClicks: false,
      preventClicksPropagation: false,
    });
  }
}