import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from "./store/app.store";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MainEffects } from "./store/main/main.effects";
import { StartAppComponent } from "./pages/start-app/start-app.component";
import { TaskAddFormComponent } from './components/task-add-form/task-add-form.component';

export const EFFECTS = [
  MainEffects
]

@NgModule( {
	declarations: [
		AppComponent,
		StartAppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		StoreModule.forRoot( reducers, {
			metaReducers
		} ),
		EffectsModule.forRoot( EFFECTS ),
		StoreDevtoolsModule.instrument( {maxAge: 25, logOnly: environment.production} ),
	],
	providers: [],
	exports: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
