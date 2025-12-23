import { Component } from '@angular/core';
import { IGX_CAROUSEL_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective } from 'igniteui-angular';

@Component({
  selector: 'app-dji-drone-article-page',
  imports: [IGX_CAROUSEL_DIRECTIVES, IgxBadgeComponent, IgxAvatarComponent, IgxButtonDirective],
  templateUrl: './dji-drone-article-page.component.html',
  styleUrls: ['./dji-drone-article-page.component.scss']
})
export class DJIDroneArticlePageComponent {}
