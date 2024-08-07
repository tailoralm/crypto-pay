import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainSettingsComponent } from './blockchain-settings.component';

describe('BlockchainSettingsComponent', () => {
  let component: BlockchainSettingsComponent;
  let fixture: ComponentFixture<BlockchainSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockchainSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchainSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
