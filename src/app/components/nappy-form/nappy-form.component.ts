import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nappy } from 'src/app/nappy.model';
import { NappyDataService } from 'src/app/services/nappy-data.service';

@Component({
  selector: 'app-nappy-form',
  templateUrl: './nappy-form.component.html',
  styleUrls: ['./nappy-form.component.scss'],
})
export class NappyFormComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() newNappy = new EventEmitter<Nappy>();
  nappyForm: FormGroup;

  constructor(private nappyDataService: NappyDataService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.nappyForm = new FormGroup({
      time: new FormControl(null, Validators.required),
      type: new FormControl('', Validators.required),
      notes: new FormControl(null),
    });
  }

  hideModal() {
    this.closeModal.emit(!this.visible);
    this.nappyForm.reset();
  }

  onSubmit() {
    const nappyData = {
      ...this.nappyForm.value,
      date: new Date(),
    };

    if (this.nappyForm.valid && this.nappyForm.value.type != '') {
      this.nappyDataService.saveNappy(nappyData);
      this.nappyForm.reset();
      this.closeModal.emit(!this.visible);
      this.newNappy.emit(nappyData);
    }
  }
}
