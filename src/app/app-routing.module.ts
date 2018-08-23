import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { PanelComponent } from './panel/panel.component';
import { SearchGithubComponent } from './search-github/search-github.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { BotinakComponent } from './botinak/botinak.component';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full'},
  { path: 'table', component: TableComponent },
  { path: 'list', component: ListComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'search-github', component: SearchGithubComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'album/:albumId', component: AlbumDetailsComponent },
  { path: 'botinak', component: BotinakComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
