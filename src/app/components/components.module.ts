import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule  } from '@angular/forms';



import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';

//angular-mdl
import { MdlModule  } from '@angular-mdl/core';

//Daterangepicker
import { DaterangepickerModule } from '../daterangepicker/daterangepicker.module';

import { Daterangepicker } from 'ng2-daterangepicker';

//angular2-moment
import {MomentModule} from 'angular2-moment';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    MdlModule,
    DaterangepickerModule,
    Daterangepicker,
    MomentModule
    
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent
  ]
})
export class ComponentsModule { }
