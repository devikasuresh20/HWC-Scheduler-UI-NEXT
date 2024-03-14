/*
* AMRIT – Accessible Medical Records via Integrated Technology 
* Integrated EHR (Electronic Health Records) Solution 
*
* Copyright (C) "Piramal Swasthya Management and Research Institute" 
*
* This file is part of AMRIT.
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see https://www.gnu.org/licenses/.
*/
// import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
// import { RouterModule, Router } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { MaterialModule } from './material.module';
// import { Md2Module } from 'md2';
// import { ChartsModule } from 'ng2-charts';
// import { PaginationModule } from 'ngx-bootstrap/pagination';
// import { FullCalendarModule } from 'ng-fullcalendar';

// import { WebCamComponent } from 'ack-angular-webcam';
// import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
// import { CameraDialogComponent } from './components/camera-dialog/camera-dialog.component';
// import { TextareaDialogComponent } from './components/textarea-dialog/textarea-dialog.component';
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { AppHeaderComponent } from './components/app-header/app-header.component';
// import { PreviousDetailsComponent } from './components/previous-details/previous-details.component';
// import { TextareaDialog } from './components/textarea-dialog/textarea-dialog.service';
// import { SpinnerService } from './services/spinner.service';
// import { ConfirmationService } from './services/confirmation.service';
// import { CameraService } from './services/camera.service';
// import { AuthGuard } from './services/auth-guard.service';
 import { AuthService } from './services/auth.service';
// import { GlobalErrorHandler } from './services/global-error-handler.service';
// import { BeneficiaryDetailsService } from './services/beneficiary-details.service';

// import { myEmail } from './directives/email/myEmail.directive';
// import { myMobileNumber } from './directives/MobileNumber/myMobileNumber.directive';
// import { myName } from './directives/name/myName.directive';
// import { myPassword } from './directives/password/myPassword.directive';
// import { StringValidator } from './directives/stringValidator.directive';
// import { NumberValidator } from './directives/numberValidator.directive';
// import { DisableFormControlDirective } from './directives/disableFormControl.directive';
// import { NullDefaultValueDirective } from './directives/null-default-value.directive';
// import { ShowCommitAndVersionDetailsComponent } from './components/show-commit-and-version-details/show-commit-and-version-details.component'
// import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { HttpServiceService } from './services/http-service.service';
// import { SetLanguageComponent } from './components/set-language.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ConfirmationService } from './services/confirmation.service';
import { SpinnerService } from './services/spinner.service';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth-guard.service';
import { BeneficiaryDetailsService } from './services/beneficiary-details.service';
import { CameraService } from './services/camera.service';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { CameraDialogComponent } from './components/camera-dialog/camera-dialog.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { WebcamModule } from 'ngx-webcam';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    WebcamModule,
    NgChartsModule
    // NgChartsModule
    // PaginationModule.forRoot()
  ],
  declarations: [
    // WebCamComponent,
    CommonDialogComponent,
    CameraDialogComponent,
    // TextareaDialogComponent,
    // SpinnerComponent,
    AppFooterComponent,
    // SetLanguageComponent,
    // AppHeaderComponent,
    // PreviousDetailsComponent,
    // ShowCommitAndVersionDetailsComponent,
    // myEmail, myMobileNumber, myName, myPassword, StringValidator, NullDefaultValueDirective, NumberValidator, DisableFormControlDirective
  ],
  exports: [
    // RouterModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MaterialModule,
    // Md2Module,
    // SetLanguageComponent,
       CommonDialogComponent,
       CameraDialogComponent,
    // TextareaDialogComponent,
    // SpinnerComponent,
      AppFooterComponent,
    // AppHeaderComponent,
    // PreviousDetailsComponent,
    // PaginationModule,
    // FullCalendarModule,ShowCommitAndVersionDetailsComponent,
    // myEmail, myMobileNumber, myName, myPassword, DisableFormControlDirective, StringValidator, NumberValidator, NullDefaultValueDirective
  ],
  //  entryComponents: [
      //  CommonDialogComponent,
  //   CameraDialogComponent,
  //   TextareaDialogComponent,
  //   SpinnerComponent,
  //   SetLanguageComponent,
  //   PreviousDetailsComponent,
  //   ShowCommitAndVersionDetailsComponent
  // ]
})
export class CoreModule {

  

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ConfirmationService,
        CameraService,
        BeneficiaryDetailsService,
        HttpInterceptorService,
        HttpServiceService,
        // TextareaDialog,
        AuthGuard,
        AuthService,
        SpinnerService,
        CanDeactivateGuardService,
        // {
        //   // provide: Http,
        //   // useFactory: HttpInterceptorFactory,
        //   // deps: [XHRBackend, RequestOptions, Router, SpinnerService, ConfirmationService]
        // }
      ]
    };
  }
}

