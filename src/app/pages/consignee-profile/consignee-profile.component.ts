import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ConsigneeUpload } from 'app/dto/consignee-upload';
import { Consignee } from 'app/model/consignee';
import { Country } from 'app/model/country';
import { DocumentType } from 'app/model/documentType';
import { 
  ConsigneeService, 
  CountryService, 
  DocumentTypeService, 
  InfoDialogService } 
from 'app/service/services';
import { HOST } from 'app/shared/var.constant';


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
  countrySelec: Country;
  file_upload_config;
  imgFile: File;

  constructor(
    private consigneService: ConsigneeService,
    private countryService: CountryService,
    private docTypeService: DocumentTypeService,
    private infoDialogService: InfoDialogService
  ) {
    this.file_upload_config = {
      /* API: this.global_utilities.getAPI('file_upload'), */
      API: `${HOST}/controlOperativo/cargaArchivo`,
      MIME_types_accepted: "image/jpeg",
      is_multiple_selection_allowed: true,
      data: null,
      recinto: null
    };
  }

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
      'phoneNumber': new FormControl(''),
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

  loadFile(file: File) {
    if (!file) {
      this.infoDialogService.openDialog(
        `Seleccione el Documento Digitalizado`,
        'error'
      );
    }
    this.imgFile = file;

    this.formConsignee.patchValue({
      documentImg: file
    })
  }

  regConsignee(formDirective: FormGroupDirective) {
    const consignee = new Consignee();

    consignee.address = this.formConsignee.value['address'];
    consignee.cellNumber = this.formConsignee.value['cellNumber'];
    consignee.country = this.formConsignee.value['country'];
    consignee.documentNumber = this.formConsignee.value['documentNumber'];
    consignee.documentType = this.formConsignee.value['documentType'];
    consignee.email = this.formConsignee.value['email'];
    consignee.name = this.formConsignee.value['consigneeName'];
    consignee.phoneNumber = this.formConsignee.value['phoneNumber'];

    this.consigneService.registry(consignee, this.imgFile).subscribe(responseConsignee => {
      console.log(responseConsignee);

      this.infoDialogService.openDialog(
        `Consignatario registrado`,
        'success'
      );

      formDirective.resetForm();
      this.formConsignee.reset();
    });
  }

}
