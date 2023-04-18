import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.css"],
})
export class UploadFileComponent implements OnInit {

  @Output() loadFileEvent = new EventEmitter<File>();
  @ViewChild('fileInput') fileInput: ElementRef;

  fileAttr = 'Ningún archivo seleccionado';

  constructor() {}

  ngOnInit(): void {}

  uploadFileEvt(eventUpload: any) {
    let imgFile: File = eventUpload.target.files[0];

    if (eventUpload.target.files && imgFile) {
      /* this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr = file.name;
      }); */
      this.fileAttr = imgFile.name;
      // HTML5 FileReader API
      /* let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = ''; */

      this.loadFileEvent.emit(imgFile);
    } else {
      this.fileAttr = 'Ningún archivo seleccionado';
    }
  }

}
