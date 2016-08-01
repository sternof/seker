import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from 'components/app.component';
import {Logger} from "./models/logger";
import {Storage} from './common/network';


bootstrap(AppComponent, [
    Logger,
    {provide: Storage, useValue: new Storage(sessionStorage, 'VICTOR_APP')}
]);
