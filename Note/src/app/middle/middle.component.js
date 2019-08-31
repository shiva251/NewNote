"use strict";
/*
*Modifcation Details:
* 1. This component used to show the data for Middle panel
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MiddleComponent = /** @class */ (function () {
    function MiddleComponent(route, router, employeeService) {
        this.route = route;
        this.router = router;
        this.employeeService = employeeService;
        // router: any;
        this.details = [];
    }
    MiddleComponent.prototype.ngOnInit = function () {
        this.getAllEmployee();
    };
    MiddleComponent.prototype.getAllEmployee = function () {
        this.employeeService.getAllEmployee();
    };
    MiddleComponent.prototype.createEmployee = function (currentEmployee) {
        var _this = this;
        if (currentEmployee.id === null) {
            console.log('Create');
            this.employeeService.createEmployee(currentEmployee).subscribe(function (data) {
                _this.employeeService.getAllEmployee();
            });
        }
        else {
            console.log('Update');
            this.employeeService.updateEmployee(currentEmployee).subscribe(function (data) {
                _this.employeeService.getAllEmployee();
            });
        }
    };
    MiddleComponent.prototype.updateEmployee = function (employee) {
        var _this = this;
        this.employeeService.updateEmployee(employee).subscribe(function (data) {
            _this.employeeService.currentEmployee = Object.assign({}, employee);
        });
    };
    MiddleComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.employeeService.deleteEmployee(id).subscribe(function (data) {
            _this.getAllEmployee();
        });
    };
    MiddleComponent.prototype.showDetails = function () {
        this.router.navigate(['link'], { relativeTo: this.route });
        // let obj = this.employeeService.allEmployee.filter(m => m.title == title);
        // this.details = obj;
        // console.log(obj);
    };
    MiddleComponent.prototype.show = function (title) {
        var obj = this.employeeService.allEmployee.filter(function (m) { return m.title == title; });
        this.details = obj;
        this.selectedRow = title;
    };
    MiddleComponent = __decorate([
        core_1.Component({
            selector: 'app-middle',
            templateUrl: './middle.component.html',
            styleUrls: ['./middle.component.css']
        })
    ], MiddleComponent);
    return MiddleComponent;
}());
exports.MiddleComponent = MiddleComponent;
