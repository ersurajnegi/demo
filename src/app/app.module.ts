import { ApiService } from 'app/services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AppRoutingModule } from 'app/app.routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-toggle-switch/src';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
        declarations: [
                AppComponent,
                LoginComponent,
                NotFoundComponent,
                StudentListComponent,
                StudentDetailsComponent,
                ProfileComponent,
                SignupComponent
        ],
        imports: [
                BrowserModule,
                HttpClientModule,
                AppRoutingModule,
                UiSwitchModule,
                FormsModule
        ],
        providers: [ApiService],
        bootstrap: [AppComponent]
})
export class AppModule { }
