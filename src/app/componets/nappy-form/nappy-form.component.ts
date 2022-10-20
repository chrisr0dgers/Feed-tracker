import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nappy-form',
  templateUrl: './nappy-form.component.html',
  styleUrls: ['./nappy-form.component.scss'],
})
export class NappyFormComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  hideModal() {
    this.closeModal.emit(!this.visible);
  }
}
