import { Component, OnInit } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';

const translationsCollection = Kinvey.DataStore.collection('translations', Kinvey.DataStoreType.Network);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    registerToLiveService(){
        Kinvey.User.getActiveUser().registerForLiveService()
        .then(() => {
            console.log("Register...");
        })
        .catch(err => {
            console.log("Error: " + err);
        });
    }

    
    login(): Promise<any> {

        if (!!Kinvey.User.getActiveUser()) {
            console.log("active");
            return Promise.resolve();
        } else {
            console.log("nije activ");
            return Kinvey.User.login("nmiljancic", "123456");
        }
    }
    public registerForTranslate() {
        /*Kinvey.LiveService.onConnectionStatusUpdates((status) => {
            console.log('status event: ', status);
          });*/
      
      //  console.log("init? " +a);
        translationsCollection.subscribe({
            onMessage: (m) => {
                console.log("message: " + JSON.stringify(m));
               

            },
            onStatus: (s) => {
                console.log("status: " + s);
            },
            onError: (e) => {
                console.log("error message : " + e);
            }
        }) .catch(e => console.log("Error " + e));
    }

}
