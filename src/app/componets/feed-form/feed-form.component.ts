import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feed-form',
  templateUrl: './feed-form.component.html',
  styleUrls: ['./feed-form.component.scss'],
})
export class FeedFormComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() closeModal = new EventEmitter<boolean>();
  feedForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  hideModal() {
    this.closeModal.emit(!this.visible);
  }

  initForm() {
    this.feedForm = new FormGroup({
      time: new FormControl,
      duration: new FormControl,
    });
    console.log(this.feedForm.value)
  }

  onSubmit() {
    console.log(this.feedForm.value);
  }
}
