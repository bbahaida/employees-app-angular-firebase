//#region Core & external modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
//#endregion

//#region Application components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeesComponent } from './components/employees/employees.component';
//#endregion

//#region Application Services
import { EmployeeService } from './services/employee.service';
//#endregion

//#region Routes Definition
const appRoutes:Routes=[
  {path:"", component:DashboardComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"employees", component:EmployeesComponent},
  {path:"employee/add", component:AddEmployeeComponent},
  {path:"employee/:id", component:EmployeeInfoComponent},
  {path:"employee/edit/:id", component:EditEmployeeComponent}
];
//#endregion

//#region  Initialize Firebase configurations
export const config = {
  apiKey: "AIzaSyBRsDL6QvYhd_0h-kbKz81PRPsT329UHBM",
  authDomain: "bahaida-projects-bb0304.firebaseapp.com",
  databaseURL: "https://bahaida-projects-bb0304.firebaseio.com",
  projectId: "bahaida-projects-bb0304",
  storageBucket: "bahaida-projects-bb0304.appspot.com",
  messagingSenderId: "650040480360"
};
//#endregion


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config)
  ],
  providers: [
    EmployeeService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
