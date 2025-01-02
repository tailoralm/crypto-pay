import { Component, signal } from '@angular/core';
import {
  ProgressComponent,
  ToastBodyComponent,
  ToastComponent,
  ToasterComponent,
  ToastHeaderComponent
} from '@coreui/angular';
import { ToastSampleIconComponent } from './toast-sample-icon.component';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    standalone: true,
    imports: [
      ProgressComponent,
      ToasterComponent,
      ToastComponent,
      ToastHeaderComponent,
      ToastSampleIconComponent,
      ToastBodyComponent
    ]
})
export class AppToastComponent {
  position = 'top-end';
  visible = signal(false);
  percentage = signal(0);
  toastColor = 'info'
  title = '';
  message = '';

  info(message: string) {
    this.toastColor = 'info';
    this.toggleToast('Info', message);
  }

  warning(message: string) {
    this.toastColor = 'warning';
    this.toggleToast('Warning', message);
  }

  error(message: string) {
    this.toastColor = 'danger';
    this.toggleToast('Error', message);
  }

  toggleToast(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.visible.update(() => true);
  }

  onVisibleChange($event: boolean) {
    this.visible.set($event);
    this.percentage.set(this.visible() ? this.percentage() : 0);
  }

  onTimerChange($event: number) {
    this.percentage.set($event * 25);
  }
}
