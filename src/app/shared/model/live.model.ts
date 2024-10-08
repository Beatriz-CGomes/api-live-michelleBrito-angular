import { SafeResourceUrl } from "@angular/platform-browser";

export interface Live{
    id: number;
    liveName: string;
    channelName: string;
    liveDate: string;
    liveLink: string;
    registrationDate: string; 
    urlSafe: SafeResourceUrl;
}