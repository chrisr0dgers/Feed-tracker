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
  selectedFeedType: string = 'default';

  constructor(private feedDataService: FeedDataService) {}

  ngOnInit(): void {
    this.initForm();
  }

  onFeedTypeChanged(e) {
    this.selectedFeedType = e.target.value;
  }

  hideModal() {
    this.closeModal.emit(!this.visible);
    this.feedForm.reset();
  }

  initForm() {
    this.feedForm = new FormGroup({
      time: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      feedType: new FormControl('default', Validators.required),
      bottleSize: new FormControl(null),
    });
  }

  onSubmit() {
    const formData = {
      ...this.feedForm.value,
      date: new Date(),
    };
    if (this.feedForm.valid) {
      this.feedDataService.saveFeed(formData);
      this.feedForm.reset();
      this.closeModal.emit(!this.visible);
    }
  }
}
