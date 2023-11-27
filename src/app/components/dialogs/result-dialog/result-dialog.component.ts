import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      description: string
    },
    private dialogRef: MatDialogRef<ResultDialogComponent>
  ){}

  public close(){
    this.dialogRef.close()
  }


}
