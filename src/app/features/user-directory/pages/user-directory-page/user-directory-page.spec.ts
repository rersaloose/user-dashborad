import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectoryPage } from './user-directory-page';

describe('UserDirectoryPage', () => {
  let component: UserDirectoryPage;
  let fixture: ComponentFixture<UserDirectoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDirectoryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDirectoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
