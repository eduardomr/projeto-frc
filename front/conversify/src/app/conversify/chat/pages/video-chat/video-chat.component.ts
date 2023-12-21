import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Conversation, Session, Stream, UserAgent } from '@apirtc/apirtc';

interface Devide {
  deviceId: number;
  name: string;
}

@Component({
  selector: 'video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.scss'],
})
export class VideoChatComponent implements OnInit {
  constructor() {}
  selectedVideoDevice: string = '';
  selectedAudioDevice: string = '';

  showText: boolean = false;
  showError: boolean = false;
  canJoinMeeting: boolean = false;
  joined: boolean = false;
  errorMessage: string = '';

  availableVideoDevices: Array<{ deviceId: string; name: string }> = [];
  availableAudioDevices: Array<{ deviceId: string; name: string }> = [];

  public ngOnInit() {
    this.showText = false;
    this.showError = false;
    this.availableVideoDevices = [];
    this.availableAudioDevices = [];
    this.detectDevices();
    //this.canJoin();
  }

  getConversation() {
    return this.conversation;
  }

  canJoin() {
    if (
      this.availableAudioDevices.length > 0 ||
      this.availableVideoDevices.length > 0
    ) {
      this.canJoinMeeting = true;
    }
  }

  private detectDevices() {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          if (device.kind === 'audioinput') {
            if (!this.selectedAudioDevice) {
              this.selectedAudioDevice = device.deviceId;
            }
            this.availableAudioDevices.push({
              deviceId: device.deviceId,
              name:
                device.label ||
                `microphone ${this.availableAudioDevices.length + 1}`,
            });
          } else if (device.kind === 'videoinput') {
            if (!this.selectedVideoDevice) {
              this.selectedVideoDevice = device.deviceId;
            }
            this.availableVideoDevices.push({
              deviceId: device.deviceId,
              name:
                device.label ||
                `camera ${this.availableVideoDevices.length + 1}`,
            });
          }
        });
        this.canJoin();
      })
      .catch((error) => this.handleError(error));
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

  private handleError(error: any) {
    this.showError = true;
    this.errorMessage = error.toString();
  }

  conversation: any;
  remotesCounter = 0;

  @ViewChild('localVideo') videoRef: ElementRef = {} as ElementRef;

  startVideoChat() {
    this.joined = true;
    let localStream: Stream = {} as Stream;
    let userAgent = new UserAgent({
      uri: 'apiKey:myDemoApiKey',
    });

    userAgent.register().then((session: Session) => {
      const conversation: Conversation = session.getConversation('chatroom');
      this.conversation = conversation;

      conversation.on('streamListChanged', (streamInfo: any) => {
        if (streamInfo.listEventType === 'added') {
          if (streamInfo.isRemote === true) {
            conversation
              .subscribeToMedia(streamInfo.streamId)
              .then((stream: Stream) => {
                console.log('Sucesso em conectar mídia', stream);
              })
              .catch((err) => {
                console.error('Erro ao conectar mídia', err);
              });
          }
        }
      });

      conversation
        .on('streamAdded', (stream: Stream) => {
          this.remotesCounter += 1;
          stream.addInDiv(
            'remote-container',
            'remote-media-' + stream.streamId,
            {},
            false
          );
        })
        .on('streamRemoved', (stream: any) => {
          this.remotesCounter -= 1;
          stream.removeFromDiv(
            'remote-container',
            'remote-media-' + stream.streamId
          );
        });

      userAgent
        ?.createStream({
          constraints: {
            audio: true,
            video: true,
          },
        })
        .then((stream: Stream) => {
          localStream = stream;
          localStream.attachToElement(this.videoRef?.nativeElement);

          conversation
            .join()
            .then(() => {
              conversation
                .publish(localStream)
                .then((stream: Stream) => {
                  console.log('Publicado', stream);
                })
                .catch((err: any) => {
                  console.error('Erro na publicação', err);
                });
            })
            .catch((err: any) => {
              console.error('Não conseguiu dar join', err);
            });
        })
        .catch((err: any) => {
          console.error('Erro ao criar stream', err);
        });
    });
  }

  getRemotesCounter() {
    return this.remotesCounter;
  }
}
