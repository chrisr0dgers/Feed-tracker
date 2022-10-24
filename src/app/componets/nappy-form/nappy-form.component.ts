import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NappyDataService } from 'src/app/services/nappy-data.service';

@Component({
  selector: 'app-nappy-form',
  templateUrl: './nappy-form.component.html',
  styleUrls: ['./nappy-form.component.scss'],
})
export class NappyFormComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() closeModal = new EventEmitter<boolean>();
  nappyForm: FormGroup;

  constructor(private nappyDataService: NappyDataService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.nappyForm = new FormGroup({
      time: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      notes: new FormControl(null),
    });
  }

  hideModal() {
    this.closeModal.emit(!this.visible);
  }

  onSubmit() {
    const nappyData = {
      ...this.nappyForm.value,
      date: new Date(),
    };

    if (this.nappyForm.valid) {
      this.nappyDataService.saveNappy(nappyData);
      this.nappyForm.reset();
      this.closeModal.emit(!this.visible);
    }
  }
}
