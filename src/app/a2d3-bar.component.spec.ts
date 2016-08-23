// <reference path="../../../typings/main/ambient/jasmine/index.d.ts" />

import { async } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { A2d3BarAppComponent } from '../app/a2d3-bar.component';

describe("A2d3BarAppComponent", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [A2d3BarAppComponent]
        });
    });

    it("should ...", async(() => {
        TestBed.overrideComponent(A2d3BarAppComponent, {set: {
            template: "<p>Content</p>"
        }});
        TestBed.compileComponents().then(() => {
            let app = TestBed.createComponent(A2d3BarAppComponent);
            app.detectChanges();
            expect(app).toBeTruthy();
        });
    }));
});


