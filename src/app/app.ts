import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, computed, effect, linkedSignal, signal, WritableSignal } from '@angular/core';
import { Cartly } from './components/cartly/cartly';
// import { delay, of } from 'rxjs';

@Component({
  imports: [AsyncPipe, JsonPipe, Cartly],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cartly');

  // public user$ = of({
  //   name: 'John Doe',
  //   email: 'john.doe@example.com'
  // }).pipe(delay(1000));

  // ? -> Signal

  /*

   * signal() -> create a signal (WriteableSignal)
   * .set -> set the value of the signal
   * () -> get the value of the signal

   * .update -> update the value of the signal
   * var = computed(() => { ... }) -> create a computed signal depending on other signals (ReadOnlySignal) & automatically update the value of the signal when the dependencies change so its return is in val
   * effect(() => { ... }) -> create an effect that runs whenever the dependencies change (ReadOnlySignal) & automatically update the value of the signal when the dependencies change so its return is in val
   * linkedSignal = signal.linked(() => { ... }) -> create a linked signal that depends on other signals (WriteableSignal) & automatically update the value of the signal when the dependencies change so its return is in val
   */


  // public name = signal("loading...");

  // public constructor() {
  //   setTimeout(() => {
  //     this.name.set("John Doe"); //* .set -> set the value of the signal
  //     console.log(`name: ${this.name()}`); //* () -> get the value of the signal
  //   }, 1000);
  // }

  // public counter: WritableSignal<number> = signal(0);

  // public increment() {
  //   // this.counter.set(this.counter() + 1); //* .set -> set the value of the signal
  //   this.counter.update((value) => value + 1); //* .update -> update the value of the signal
  // }

  // public user = signal({
  //   name: 'mando',
  //   email: 'mando@example.com'
  // });

  // public updateUser() {
  //   this.user.set({
  //     ...this.user(),
  //     name: 'Jane Doe'
  //   });
  // }

  // public price = signal(100);
  // public quantity = signal(5);

  // totalPrice = computed(() => {
  //   return this.price() * this.quantity();
  // });

  // public updatePrice() {
  //   this.price.update((val) => val + 10);
  // }

  // public constructor() {
  //   effect(() => {
  //     localStorage.setItem('Price', this.price().toString());
  //   });
  // }

  // * Linked Signal

  // public products = signal(['Product 1', 'Product 2', 'Product 3']);

  // public selectedProduct = linkedSignal(() => this.products()[0]);

  // change(){
  //   this.products.set(['Product 4', 'Product 5', 'Product 6']);
  // }

  // changeSelectedProduct(product : string){
  //   this.selectedProduct.set(product);
  // }
}