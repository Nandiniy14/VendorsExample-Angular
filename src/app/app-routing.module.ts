import { RouterModule, Routes } from '@angular/router';
import { VendorComponent } from './vendor/vendor.component';
import {VendorListComponent} from './vendor-list/vendor-list.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '', redirectTo:'vendor', pathMatch:"full"},
    { path: 'vendor', component: VendorComponent},
    { path: 'vendor-list', component: VendorListComponent}
];

export const routing = RouterModule.forRoot(routes);
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
})
    
export class AppRoutingModule{

}