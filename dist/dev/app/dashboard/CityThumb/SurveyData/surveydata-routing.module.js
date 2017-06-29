"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var surveydata_component_1 = require("./surveydata.component");
var SurveyDataRoutingModule = (function () {
    function SurveyDataRoutingModule() {
    }
    return SurveyDataRoutingModule;
}());
SurveyDataRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                { path: 'surveydata', component: surveydata_component_1.SurveyDataComponent }
            ]),
        ],
        exports: [router_1.RouterModule]
    })
], SurveyDataRoutingModule);
exports.SurveyDataRoutingModule = SurveyDataRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL1N1cnZleURhdGEvc3VydmV5ZGF0YS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsK0RBQTZEO0FBVzdELElBQWEsdUJBQXVCO0lBQXBDO0lBQXNDLENBQUM7SUFBRCw4QkFBQztBQUFELENBQXRDLEFBQXVDLElBQUE7QUFBMUIsdUJBQXVCO0lBVG5DLGVBQVEsQ0FBRTtRQUVULE9BQU8sRUFBRTtZQUNQLHFCQUFZLENBQUMsT0FBTyxDQUFDO2dCQUNuQixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFDO2FBQ3JELENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLHVCQUF1QixDQUFHO0FBQTFCLDBEQUF1QiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL0NpdHlUaHVtYi9TdXJ2ZXlEYXRhL3N1cnZleWRhdGEtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1cnZleURhdGFDb21wb25lbnQgfSBmcm9tICcuL3N1cnZleWRhdGEuY29tcG9uZW50JztcblxuQE5nTW9kdWxlICh7XG5cbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgIHtwYXRoOiAnc3VydmV5ZGF0YScsIGNvbXBvbmVudDogU3VydmV5RGF0YUNvbXBvbmVudH1cbiAgICBdKSxcbiAgXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU3VydmV5RGF0YVJvdXRpbmdNb2R1bGUge31cbiJdfQ==
