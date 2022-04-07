import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HomeComponent} from './home.component';


@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule, IonicModule],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule {
}
