import { Injectable, inject } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Injectable({
    providedIn: 'root'
})
export class DeviceDetectService {
    private deviceService = inject(DeviceDetectorService);

    get isMobile() {
        return this.deviceService.isMobile();
    }

    get isTablet() {
        return this.deviceService.isTablet();
    }

    get isDekstop() {
        return this.deviceService.isDesktop();
    }
}