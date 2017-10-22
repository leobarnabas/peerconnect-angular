import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchMentorComponent} from './search-mentor/search-mentor.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {TermsComponent} from './terms/terms.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { MentorSigninComponent } from './mentor-signin/mentor-signin.component';
import {ControlMessagesComponent } from './sign-up/control-messages.component';
import {ValidationService} from './sign-up/validation.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchMentorComponent,
    SignInComponent,
    SignUpComponent,
    TermsComponent,
    FooterComponent,
    AboutComponent,
    SearchDisplayComponent,
    MentorSigninComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'search-display',
        component: SearchDisplayComponent
      },

      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
    ])
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
