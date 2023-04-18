import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ErrorDialogComponent } from 'app/shared/error-dialog/error-dialog.component';
import { InfoDialogComponent } from 'app/shared/info-dialog/info-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class InfoDialogService {

  private opened = false;

  constructor(
    private dialog: MatDialog
  ) {}

  openDialog(message: string, level: string, status?: number): void {
    let componentDialog;
    if(level == 'error') {
      componentDialog = ErrorDialogComponent;
    } else if(level == 'success') {
      componentDialog = InfoDialogComponent;
    } else {
      throw new Error(`${level} - Invalid option of level infoDialog`);
    }

    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(componentDialog, {
        data: { message, level, status },
        maxHeight: '100%',
        width: '540px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }

}
