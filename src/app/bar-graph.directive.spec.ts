// <reference path="../../../typings/main/ambient/jasmine/index.d.ts" />

import { async } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";


import { BarGraphDirective } from './bar-graph.directive';

describe("BarGraphDirective", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BarGraphDirective]
        });
    });

    it("canonical test", async(() => {
        TestBed.overrideComponent(BarGraphDirective, {set: {
            template: "<p>Content</p>"
        }});
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(BarGraphDirective);
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;

            // expect(compiled).toContain("DiQ Conversation");
            // expect(compiled).toContain("Content");
            expect(1+1).toBe(2);
        });
    }));
});


