import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";

import { User } from "../_models";
import { UserService, AuthenticationService } from "../_services";
import { Product } from "@app/_models/product";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent {
  products: Product[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getAllProducts()
      .pipe(first())
      .subscribe(products => {
        console.log("products", products);
        this.products = products;
      });
  }
}
