import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TextComponent } from '../text/text.component';

@Component({
  selector: 'both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.scss'],
})
export class BothComponent implements OnInit {
  dialogRef = this.dialog.open(TextComponent, {
    width: '40%',
  });

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dialogRef.close();
  }

  openChat() {
    this.dialogRef = this.dialog.open(TextComponent, {
      width: '40%',
    });
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
