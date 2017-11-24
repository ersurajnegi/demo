import { StudentListComponent } from './components/student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'app/components/not-found/not-found.component';
import { LoginComponent } from 'app/components/login/login.component';
import { ProfileComponent } from 'app/components/profile/profile.component';


const appRoutes: Routes = [
        { path: '', component: LoginComponent },
        { path: 'list', component: StudentListComponent },
        { path: 'profile/:id', component: ProfileComponent },
        { path: '**', component: NotFoundComponent }
]
@NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
