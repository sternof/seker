import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from 'components/app.component';
import {provideForms, disableDeprecatedForms} from '@angular/forms';


bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);

