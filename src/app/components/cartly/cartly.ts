import { Component, AfterViewInit, signal, computed } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, FreeMode, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { NgClass } from '@angular/common';

type product = {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number,
  quantity: number
}

@Component({
  imports: [NgClass],
  selector: 'app-cartly',
  styleUrl: './cartly.scss',
  templateUrl: './cartly.html',
})
export class Cartly implements AfterViewInit {

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
      loopAdditionalSlides: 4,

      slidesPerView: 1,
      centeredSlides: true,
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
        480: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        }
      },

      preventClicks: false,
      preventClicksPropagation: false,
    });

  }

  public totalItems = computed(() => {
    return this.products().reduce((total, product) => {
      return total + product.quantity;
    }, 0)
  });

  public totalPrice = computed(() => {
    return this.products().reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  });

  public products = signal<product[]>([
    {
      id: 1,
      name: "Phone",
      image: "assets/images/phone.png",
      description: "Powerful smartphone with a sleek design.",
      price: 500,
      quantity: 0
    },
    {
      id: 2,
      name: "Soundcore",
      image: "assets/images/soundcore.png",
      description: "Premium sound quality for everyday listening.",
      price: 100,
      quantity: 0
    },
    {
      id: 3,
      name: "Xbox",
      image: "assets/images/xbox.png",
      description: "Enjoy an amazing next-level gaming experience.",
      price: 450,
      quantity: 0
    },
    {
      id: 4,
      name: "Smart Watch",
      image: "assets/images/smartwatch.png",
      description: "Track your fitness and stay connected.",
      price: 150,
      quantity: 0
    },
    {
      id: 5,
      name: "Headphone",
      image: "assets/images/headphone.png",
      description: "Comfortable headphones with clear audio.",
      price: 80,
      quantity: 0
    },
    {
      id: 6,
      name: "Laptop",
      image: "assets/images/laptop.png",
      description: "Reliable performance for work and entertainment.",
      price: 900,
      quantity: 0
    },
    {
      id: 7,
      name: "Headset",
      image: "assets/images/headset.png",
      description: "Immersive audio for gaming and communication.",
      price: 120,
      quantity: 0
    },
    {
      id: 8,
      name: "Mouse",
      image: "assets/images/mouse.png",
      description: "Precise control with a comfortable grip.",
      price: 30,
      quantity: 0
    },
    {
      id: 9,
      name: "Keyboard",
      image: "assets/images/keyboard.png",
      description: "Lovely Responsive keys for smooth typing.",
      price: 60,
      quantity: 0
    }
  ]);

  public addProduct(productId: number) {
    this.products.update((allProducts) => {
      return allProducts.map((product) => {
        if (productId == product.id) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
    });
  }

  public removeProduct(productId: number) {
    this.products.update((allProducts) => {
      return allProducts.map((product) => {
        if (productId == product.id && product.quantity > 0) {
          product.quantity--;
          return product;
        } else {
          return product;
        }
      });
    });
  }
}