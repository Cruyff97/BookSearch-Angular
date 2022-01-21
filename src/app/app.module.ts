import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import { JobDetailsComponent } from './job-details/job-details.component';
import { FooterComponent } from './footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import { SpinnerRoundModule } from 'spinners-angular/spinner-round';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobDetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    SpinnerRoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
