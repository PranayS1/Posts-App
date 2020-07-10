import { BrowserModule, HAMMER_LOADER } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
  ],
    providers: [
      {
      provide: HAMMER_LOADER,
      useValue: () => new Promise(() => {})
      },
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
    // {providedIn: 'root'} is optional which is equivalent to adding Service class to providers in app.module.
    //  Hence we've not added serveice here.
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent] // As we haven't used selector tag or route for the component anywhere, 
                                    // this will inform the app that it can be used anywhere 
})
export class AppModule { }
