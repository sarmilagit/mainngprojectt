import { componentFactoryName } from "@angular/compiler";
import { Component } from "@angular/core";
@Component({

    selector:"home",
    templateUrl:"./home.component.html"
})
 export  class HomeComponent{
     message:any;
     constructor(){
         this.message="Product soon .. from state management"
     }
 }