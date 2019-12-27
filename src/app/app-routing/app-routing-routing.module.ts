import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DisplayComponent } from 'src/app/components/home/display/display.component';
import { AddComponent } from 'src/app/components/home/add/add.component';
const routes: Routes = [
	{
		path : '',
		redirectTo : 'home',
		pathMatch : 'full'
	},
	{
		path : 'home',
		component : HomeComponent,
		children : [
			{
				path : 'display',
				component : DisplayComponent
			},
			{
				path : 'add',
				component : AddComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
