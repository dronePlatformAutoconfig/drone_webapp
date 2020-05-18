import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronePanelComponent } from './drone-panel.component';

describe('DronePanelComponent', () => {
  let component: DronePanelComponent;
  let fixture: ComponentFixture<DronePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
