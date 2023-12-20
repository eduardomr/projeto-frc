import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Devide {
  deviceId: number;
  name: string;
}

@Component({
  selector: 'video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.scss']
})

export class VideoChatComponent implements OnInit {

  @ViewChild('video')
  public video: ElementRef = {} as ElementRef;

  selectedVideoDevice: string = '';
  selectedAudioDevice: string = '';

  showText: boolean = false;
  showError: boolean = false;
  canJoinMeeting: boolean = false;
  errorMessage: string = '';

  availableVideoDevices: Array<{deviceId: string, name: string}> = [];
  availableAudioDevices: Array<{deviceId: string, name: string}> = [];

  public ngOnInit() {
    this.showText = false;
    this.showError = false;
    this.availableVideoDevices = [];
    this.availableAudioDevices = [];
    this.detectDevices();
    //this.canJoin();
  }

  canJoin(){
    if(this.availableAudioDevices.length > 0 || this.availableVideoDevices.length > 0){
      this.canJoinMeeting = true;
    }
  }

  private detectDevices() {
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
        devices.forEach( device => {
          if (device.kind === 'audioinput') {
            if (!this.selectedAudioDevice) {
              this.selectedAudioDevice = device.deviceId;
            }
            this.availableAudioDevices.push({
              deviceId: device.deviceId,
              name: device.label || `microphone ${this.availableAudioDevices.length + 1}`
            });
          } else if (device.kind === 'videoinput') {
            if (!this.selectedVideoDevice) {
              this.selectedVideoDevice = device.deviceId;
            }
            this.availableVideoDevices.push({
              deviceId: device.deviceId,
              name: device.label || `camera ${this.availableVideoDevices.length + 1}`
            });
          }
      });
      this.canJoin();
    })
    .catch(error => this.handleError(error));
  }

  onStart() {
    this.startMeeting();
  }

  onVideoDeviceChange(event: any) {
    var videoDevice = event.target.value;
    
    this.selectedVideoDevice = videoDevice;
    this.canJoinMeeting = true;
  }
  onAudioDeviceChange(event: any) {
    var audioDevice = event.target.value;
    this.selectedAudioDevice = audioDevice;
    this.canJoinMeeting = true;
  }

  startMeeting() {
    this.showError = false;
    this.canJoinMeeting = false;
    const audioSource = this.selectedAudioDevice;
    const videoSource = this.selectedVideoDevice;
    const constraints = {
      audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
      video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    };
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.muted = true;
        this.video.nativeElement.play();
        this.showText = true;
        this.canJoinMeeting = false;
      })
      .catch(error => this.handleError(error));
    }
  }

  private handleError(error: any) {
    this.showError = true;
    this.errorMessage = error.toString();
  }

}
