"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var translationsCollection = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('translations', kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Network);
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.registerToLiveService = function () {
        kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser().registerForLiveService()
            .then(function () {
            console.log("Register...");
        })
            .catch(function (err) {
            console.log("Error: " + err);
        });
    };
    HomeComponent.prototype.login = function () {
        if (!!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            console.log("active");
            return Promise.resolve();
        }
        else {
            console.log("nije activ");
            return kinvey_nativescript_sdk_1.Kinvey.User.login("nmiljancic", "123456");
        }
    };
    HomeComponent.prototype.registerForTranslate = function () {
        /*Kinvey.LiveService.onConnectionStatusUpdates((status) => {
            console.log('status event: ', status);
          });*/
        //  console.log("init? " +a);
        translationsCollection.subscribe({
            onMessage: function (m) {
                console.log("message: " + JSON.stringify(m));
            },
            onStatus: function (s) {
                console.log("status: " + s);
            },
            onError: function (e) {
                console.log("error message : " + e);
            }
        }).catch(function (e) { return console.log("Error " + e); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBaUQ7QUFFakQsSUFBTSxzQkFBc0IsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGdDQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBT3pHO0lBRUk7UUFDSSxxREFBcUQ7SUFDekQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNJLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLHNCQUFzQixFQUFFO2FBQ25ELElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELDZCQUFLLEdBQUw7UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDTCxDQUFDO0lBQ00sNENBQW9CLEdBQTNCO1FBQ0k7O2VBRU87UUFFVCw2QkFBNkI7UUFDM0Isc0JBQXNCLENBQUMsU0FBUyxDQUFDO1lBQzdCLFNBQVMsRUFBRSxVQUFDLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBR2pELENBQUM7WUFDRCxRQUFRLEVBQUUsVUFBQyxDQUFDO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFDRCxPQUFPLEVBQUUsVUFBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztTQUNKLENBQUMsQ0FBRSxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFsRFEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzs7T0FDVyxhQUFhLENBb0R6QjtJQUFELG9CQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcclxuXHJcbmNvbnN0IHRyYW5zbGF0aW9uc0NvbGxlY3Rpb24gPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oJ3RyYW5zbGF0aW9ucycsIEtpbnZleS5EYXRhU3RvcmVUeXBlLk5ldHdvcmspO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJUb0xpdmVTZXJ2aWNlKCl7XHJcbiAgICAgICAgS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpLnJlZ2lzdGVyRm9yTGl2ZVNlcnZpY2UoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3Rlci4uLlwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBsb2dpbigpOiBQcm9taXNlPGFueT4ge1xyXG5cclxuICAgICAgICBpZiAoISFLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5pamUgYWN0aXZcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dpbihcIm5taWxqYW5jaWNcIiwgXCIxMjM0NTZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlZ2lzdGVyRm9yVHJhbnNsYXRlKCkge1xyXG4gICAgICAgIC8qS2ludmV5LkxpdmVTZXJ2aWNlLm9uQ29ubmVjdGlvblN0YXR1c1VwZGF0ZXMoKHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzIGV2ZW50OiAnLCBzdGF0dXMpO1xyXG4gICAgICAgICAgfSk7Ki9cclxuICAgICAgXHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcImluaXQ/IFwiICthKTtcclxuICAgICAgICB0cmFuc2xhdGlvbnNDb2xsZWN0aW9uLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZTogKG0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZTogXCIgKyBKU09OLnN0cmluZ2lmeShtKSk7XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TdGF0dXM6IChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1czogXCIgKyBzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25FcnJvcjogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgbWVzc2FnZSA6IFwiICsgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhcIkVycm9yIFwiICsgZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=