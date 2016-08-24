import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { A2d3BarAppComponent }  from "./a2d3-bar.component";
import { BarGraphDirective } from "./bar-graph.directive";


@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        A2d3BarAppComponent,
        BarGraphDirective
    ],
    bootstrap:    [
        A2d3BarAppComponent
    ]
})
export class AppModule { }

