import { Component } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';

Kinvey.init({

      appKey: 'kid_B1KKf0zuM',
      appSecret: '084c04c9bd7d44d8990541321fc028e5'
  });
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})


export class AppComponent { 

    
}
