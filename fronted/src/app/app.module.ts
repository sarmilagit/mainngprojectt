import { appRoutes } from './routes/app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductInterceptor } from './Home/interceptor/product.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
  provide:HTTP_INTERCEPTORS,
  useClass:ProductInterceptor,
  multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
