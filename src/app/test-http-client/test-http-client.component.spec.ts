import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHttpClientComponent } from './test-http-client.component';

describe('TestHttpClientComponent', () => {
  let component: TestHttpClientComponent;
  let fixture: ComponentFixture<TestHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHttpClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
