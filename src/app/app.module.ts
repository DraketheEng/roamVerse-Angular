import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GetInfoComponent } from './get-info/get-info.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ExperiencePostingComponent } from './experience-posting/experience-posting.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'giris', component: LoginComponent },
  { path: 'uye-ol', component: SignUpComponent },
  { path: 'bilgi-al', component: GetInfoComponent },
  { path: 'paylas', component: ExperiencePostingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    GetInfoComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
