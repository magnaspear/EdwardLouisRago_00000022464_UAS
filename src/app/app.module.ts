import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

var firebaseConfig = {
  apiKey: "AIzaSyDIQHCxFezR49_jzKnGxhJnAcSEvNTbhLA",
  authDomain: "mobile-uas-22464.firebaseapp.com",
  projectId: "mobile-uas-22464",
  storageBucket: "mobile-uas-22464.appspot.com",
  messagingSenderId: "970191873228",
  appId: "1:970191873228:web:9a97a40316ccad80e34e69",
  measurementId: "G-FSBZWRXLC1"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
