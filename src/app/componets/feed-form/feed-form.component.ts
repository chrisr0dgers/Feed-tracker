import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedDataService } from 'src/app/services/feed-data.service';

@Component({
  selector: 'app-feed-form',
  templateUrl: './feed-form.component.html',
  styleUrls: ['./feed-form.component.scss'],
})
export class FeedFormComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() closeModal = new EventEmitter<boolean>();
  feedForm: FormGroup;

  constructor(private feedDataService:FeedDataService) {}

  ngOnInit(): void {
    this.initForm();
  }

  hideModal() {
    this.closeModal.emit(!this.visible);
  }

  initForm() {
    this.feedForm = new FormGroup({
      time: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const formData = {
      ...this.feedForm.value,
      date: new Date()
    };
    this.feedDataService.saveFeed(formData);
    this.feedForm.reset();
    this.closeModal.emit(!this.visible);
  }
}
