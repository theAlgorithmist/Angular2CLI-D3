# 1.0.2 (2016 08 23 - Pull Request Issued)
## Changes
Upgraded to support Angular 2.0.0-rc.1
* Migrated all 2.0.0-rc.1 to 2.0.0-rc.5 versions
* Migrated all additional packages to the same versions as the one used on the [Angular 2.0.0-rc.5 Quick Start](https://angular.io/docs/ts/latest/quickstart.html) tutorial.
* Refactored the software to support Angular 2.0.0-rc.5 modular approach.
* Fixed the unit and e2e tests
* I attempted, but failed to upgrade to D3v-4.2.2, thus I kept it on v3.5.17. I decided to check what happened and learned that D3v.4.* has been modularzied. I believe that with a bit of work we this work can be upgraded to  D3v.4.*.

## Notes
Although this software supports Angular 2.0.0.rc5, angular-cli does so, but in a limited fashion:
* I tried, but failed, to upgrade it to support Angular 2.0.0.rc5 as per instructions on the [Angular RC4 to RC5 Migration](https://angular.io/docs/ts/latest/cookbook/rc4-to-rc5.html).
* Therefore when creating new elements using angular-cli they will have to be re-factored (minor work) to fully function as RC5 citizens.
* I created an [issue](https://github.com/angular/angular-cli/issues/1727) on the angular-cli site and we are having a conversation about it, but no resolution yet.