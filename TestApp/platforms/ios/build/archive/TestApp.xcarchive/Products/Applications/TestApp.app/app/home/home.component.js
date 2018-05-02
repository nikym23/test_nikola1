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
            console.log("not activ");
            return kinvey_nativescript_sdk_1.Kinvey.User.login("nmiljancic", "123456");
        }
    };
    HomeComponent.prototype.registerForTranslate = function () {
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
        }).then(function () {
            console.log("registerForTranslate");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBaUQ7QUFFakQsSUFBTSxzQkFBc0IsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGdDQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBT3pHO0lBRUk7UUFDSSxxREFBcUQ7SUFDekQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNJLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLHNCQUFzQixFQUFFO2FBQ25ELElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELDZCQUFLLEdBQUw7UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDTCxDQUFDO0lBQ00sNENBQW9CLEdBQTNCO1FBRUksc0JBQXNCLENBQUMsU0FBUyxDQUFDO1lBQzdCLFNBQVMsRUFBRSxVQUFDLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBR2pELENBQUM7WUFDRCxRQUFRLEVBQUUsVUFBQyxDQUFDO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFDRCxPQUFPLEVBQUUsVUFBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztTQUNKLENBQUMsQ0FBRSxJQUFJLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBaERRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQWtEekI7SUFBRCxvQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tICdraW52ZXktbmF0aXZlc2NyaXB0LXNkayc7XHJcblxyXG5jb25zdCB0cmFuc2xhdGlvbnNDb2xsZWN0aW9uID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKCd0cmFuc2xhdGlvbnMnLCBLaW52ZXkuRGF0YVN0b3JlVHlwZS5OZXR3b3JrKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyVG9MaXZlU2VydmljZSgpe1xyXG4gICAgICAgIEtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKS5yZWdpc3RlckZvckxpdmVTZXJ2aWNlKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXIuLi5cIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgbG9naW4oKTogUHJvbWlzZTxhbnk+IHtcclxuXHJcbiAgICAgICAgaWYgKCEhS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgYWN0aXZcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dpbihcIm5taWxqYW5jaWNcIiwgXCIxMjM0NTZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlZ2lzdGVyRm9yVHJhbnNsYXRlKCkge1xyXG4gIFxyXG4gICAgICAgIHRyYW5zbGF0aW9uc0NvbGxlY3Rpb24uc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgb25NZXNzYWdlOiAobSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlOiBcIiArIEpTT04uc3RyaW5naWZ5KG0pKTtcclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblN0YXR1czogKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzOiBcIiArIHMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yOiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBtZXNzYWdlIDogXCIgKyBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pIC50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJGb3JUcmFuc2xhdGVcIik7XHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhcIkVycm9yIFwiICsgZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=