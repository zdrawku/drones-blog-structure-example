import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxBadgeComponent, IGX_CAROUSEL_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective } from 'igniteui-angular';
import { DJIDroneArticlePageComponent } from './dji-drone-article-page.component';

describe('DJIDroneArticlePageComponent', () => {
  let component: DJIDroneArticlePageComponent;
  let fixture: ComponentFixture<DJIDroneArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DJIDroneArticlePageComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxBadgeComponent, IGX_CAROUSEL_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DJIDroneArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
