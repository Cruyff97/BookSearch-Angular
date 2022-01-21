import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  {
    path: 'BookDetails/:key',
    component: JobDetailsComponent
  },
  {
    path: '',
    component: SearchBarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
