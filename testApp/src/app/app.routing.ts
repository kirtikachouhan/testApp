import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CreateFolderComponent } from './create-folder/create-folder.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BodyAppComponent } from './body-app/body-app.component';
export const appRoutes: Routes = [
    { path: '', component:  BodyAppComponent},
    { path: 'createFolder', component:  CreateFolderComponent},
  ];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(appRoutes);