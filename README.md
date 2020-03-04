# Angular 2/Typescript/AngularCLI/Bootstrap D3 Bar Chart

This demo illustrates the basics of creating a simple bar chart using Angular 2 (updated to RC5), Typescript, and D3.  Bootstrap is used for layout and the entire application was scaffolded, built, and served with the (beta) [Angular CLI].

This demo is visually the same as the previous Angular2/D3 demo, and retains is similarity to the [ng-Vegas demo].  The current demo modernizes that original D3 example using the Angular CLI and the current Angular 2 Release Candidate.


Since this is a basic demo, the application is built in 'dev' mode only.  I am currently experiementing (and deconstructing) production builds with the new CLI

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular 2: RC1 (RC5 via Rodrigo Silveira)
Angular CLI: 1.0 Beta 5 (updated beta 10 - V1.0.1)

## Installation

Installation involves some of the usual suspects and a newbie

  - npm, [Angular CLI], and typings globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)

## Introduction

The goals of this demo are 

* Add to the body of knowledge on how to create and run Angular 2/Typescript applications, particularly with the new CLI
* Begin a demo series on Angular2/Typescript and D3
* Create an excuse for another cup of coffee

I hope that you find something instructive from the code and are interested in improving the demo in some way.

### Version
1.0.2

### Building and Running the demo

One of the benefits of the CLI is keeping in line with best practices.  I've tried to do that in the past, but some prior habits always seemed to creep in :)  This demo was scaffolded with the CLI and only modified as necessary to to incorporate third party application libraries and styling.  If you have not used the CLI, then read through the basic documentation as well as the [Wiki on 3rd party libraries].  Then, dig into the configuration files of the current project to see how the setup was modified to incorporate Bootstrap and D3.

Finally, we have a build process that does not involve dozens of gulp plugins and a plethora of commands!

**ng build**

Yes, that's it :)


After building, execute **ng serve** .  Once the server is up, hit localhost:4200 to view the demo.  You should get something similar to the following:

![Image of Angular2 D3 Demo]
(http://algorithmist.net/image/d3-bar.png)
 

This demo uses the same chart styles as the [ng-Vegas demo].  Modify the styling as you see fit.


The demo has been tested in late-model Chrome on a Mac.  If you experience the [Broccoli Merge Trees Error] if building this project after updating the CLI, then you may have to implement a one-line hack to a config file.


### Contributions

Contributions and coffee are highly encouraged as I believe the best demo is one that allows ample room for improvement. In particular, the UI could use some visual enhancement :)

Pull requests to theAlgorithmist [at] gmail [dot] com.


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <https://www.linkedin.com/in/jimarmstrong>
[ng-Vegas demo]: <https://github.com/gdi2290/ng-vegas-angular2-d3>
[Angular CLI]: <https://www.npmjs.com/package/angular-cli>
[Wiki on 3rd party libraries]: <https://github.com/angular/angular-cli/wiki/3rd-party-libs>
[Broccoli Merge Trees Error]: <http://www.algorithmist.net/programming/broccoli-merge-trees-error/>
