import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Country } from 'app/model/country';
import { DocumentType } from 'app/model/documentType';
import { ConsigneeService, CountryService, DocumentTypeService } from 'app/service/services';


@Component({
  selector: 'app-consignee-profile',
  templateUrl: './consignee-profile.component.html',
  styleUrls: ['./consignee-profile.component.css']
})
export class ConsigneeProfileComponent implements OnInit {

  countries: Country[];
  docTypes: DocumentType[];
  formConsignee: FormGroup;
  consigneeDocTypeSelec: DocumentType

  constructor(
    private consigneService: ConsigneeService,
    private countryService: CountryService,
    private docTypeService: DocumentTypeService
  ) { }

  ngOnInit(): void {
    this.listCountries();
    this.listDocumentTypes();
    this.formConsigneeInitializer();
  }

  formConsigneeInitializer() {
    this.formConsignee = new FormGroup({
      'consigneeName': new FormControl('', [Validators.required]),
      'documentNumber': new FormControl('', [Validators.required]),
      'documentType': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'phoneNumber': new FormControl('', [Validators.required]),
      'cellNumber': new FormControl('', [Validators.required]),
      'documentImg': new FormControl('', [Validators.required]),
      'country': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
    });
  }

  listCountries() {
    this.countryService.listCountries()
      .subscribe((result: Country[]) => this.countries = result);
  }

  listDocumentTypes() {
    this.docTypeService.listDocumentTypes()
      .subscribe((result: DocumentType[]) => this.docTypes = result);
  }

  regConsignee(formDirective: FormGroupDirective) {}

}
