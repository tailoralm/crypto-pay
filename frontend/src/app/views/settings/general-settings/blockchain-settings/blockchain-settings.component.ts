import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BlockchainSettingsService} from "./blockchain-settings.service";

@Component({
  selector: 'app-blockchain-settings',
  templateUrl: './blockchain-settings.component.html',
  styleUrl: './blockchain-settings.component.scss'
})
export class BlockchainSettingsComponent implements OnInit{
  blockchainSettingsForm: FormGroup;
  constructor(private blockchainSettingsService: BlockchainSettingsService, private fb: FormBuilder) {
    this.blockchainSettingsForm = this.fb.group({
      useEtherscan: true,
      useSolscan: true,
      useBscscan: true,
      etherscanToken: '',
      solscanToken: '',
      bscscanToken: '',
    });
  }

  ngOnInit() {
    const response = this.blockchainSettingsService.getFormData();
    this.blockchainSettingsForm.setValue(response);
  }

  onChangeCheckbox(checkboxId: string, inputId: string) {
    if (this.blockchainSettingsForm.get(checkboxId).value) this.blockchainSettingsForm.get(inputId).enable();
    else this.blockchainSettingsForm.get(inputId).disable();
  }


  onSubmit() {
    this.blockchainSettingsService.saveData(this.blockchainSettingsForm.value);
  }
}

interface IBlockchain {
  active: boolean;
  token: string;
}
