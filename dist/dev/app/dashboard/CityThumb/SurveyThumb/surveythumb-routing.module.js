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
var surveythumb_component_1 = require("./surveythumb.component");
var SurveyThumbRoutingModule = (function () {
    function SurveyThumbRoutingModule() {
    }
    return SurveyThumbRoutingModule;
}());
SurveyThumbRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'surveythumb', component: surveythumb_component_1.SurveyThumbComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], SurveyThumbRoutingModule);
exports.SurveyThumbRoutingModule = SurveyThumbRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL1N1cnZleVRodW1iL3N1cnZleXRodW1iLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyxpRUFBK0Q7QUFVL0QsSUFBYSx3QkFBd0I7SUFBckM7SUFBd0MsQ0FBQztJQUFELCtCQUFDO0FBQUQsQ0FBeEMsQUFBeUMsSUFBQTtBQUE1Qix3QkFBd0I7SUFScEMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7YUFDekQsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csd0JBQXdCLENBQUk7QUFBNUIsNERBQXdCIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL1N1cnZleVRodW1iL3N1cnZleXRodW1iLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdXJ2ZXlUaHVtYkNvbXBvbmVudCB9IGZyb20gJy4vc3VydmV5dGh1bWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICdzdXJ2ZXl0aHVtYicsIGNvbXBvbmVudDogU3VydmV5VGh1bWJDb21wb25lbnQgfVxuICAgIF0pXG4gIF0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFN1cnZleVRodW1iUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==
