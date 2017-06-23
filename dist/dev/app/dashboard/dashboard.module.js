"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var surveythumb_component_1 = require("./SurveyThumb/surveythumb.component");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, dashboard_routing_module_1.DashboardRoutingModule],
        declarations: [dashboard_component_1.DashboardComponent, surveythumb_component_1.SurveyThumbComponent],
        exports: [dashboard_component_1.DashboardComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkRBQTJEO0FBQzNELHVFQUFvRTtBQUNwRSw2RUFBMEU7QUFPMUUsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsZUFBZTtJQUwzQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLGlEQUFzQixDQUFDO1FBQy9DLFlBQVksRUFBRSxDQUFDLHdDQUFrQixFQUFFLDRDQUFvQixDQUFDO1FBQ3hELE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO0tBQzlCLENBQUM7R0FDVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZGFzaGJvYXJkLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFN1cnZleVRodW1iQ29tcG9uZW50fSBmcm9tICcuL1N1cnZleVRodW1iL3N1cnZleXRodW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERhc2hib2FyZFJvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFN1cnZleVRodW1iQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTW9kdWxlIHsgfVxuIl19
