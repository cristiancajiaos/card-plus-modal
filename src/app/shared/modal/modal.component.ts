import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  close(str: string): void {
    this.modal.close(str);
  }

  dismiss(str: string): void {
    this.modal.dismiss(str);
  }
}
