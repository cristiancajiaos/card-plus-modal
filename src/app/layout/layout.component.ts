import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  defaultSettings = {
    size: 'lg',
    centered: true
  };

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openTemplateModal(content: any): void {
    this.modal.open(content, this.defaultSettings)
      .result
      .then((resolve) => {
        console.log(resolve);
      }, (reject) => {
        console.log(reject);
      });
  }
}
