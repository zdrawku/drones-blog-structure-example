import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { DJIDroneArticlePageComponent } from './dji-drone-article-page/dji-drone-article-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dji-drone-article-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'dji-drone-article-page', component: DJIDroneArticlePageComponent, data: { text: 'Djidrone-Article-Page' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
