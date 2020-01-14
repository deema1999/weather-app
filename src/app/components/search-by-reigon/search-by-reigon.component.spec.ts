import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByReigonComponent } from './search-by-reigon.component';

describe('SearchByReigonComponent', () => {
  let component: SearchByReigonComponent;
  let fixture: ComponentFixture<SearchByReigonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByReigonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByReigonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
