import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetectService } from 'src/services/device-detect.service';
import { LucideAngularModule, Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private deviceDetectService = inject(DeviceDetectService);
  Menu = Menu;

  isMobile!: boolean;

  ngOnInit(): void {
    this.isMobile = this.deviceDetectService.isMobile;
  }

}
