import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [
        AppComponent,
        PageHomeComponent,
        PageLoginComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CardModule,
        ButtonModule,
        MenubarModule,
        TieredMenuModule,
        AvatarModule,
        AvatarGroupModule,
        CheckboxModule,
        InputTextModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
