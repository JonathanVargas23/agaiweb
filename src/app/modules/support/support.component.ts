import { Component, OnInit ,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformID: any
  ) { }

  public section = {
    title: '¿Necesitas ayuda? Contáctanos',
    description: 'Llámanos o escríbenos y con gusto te atenderemos.',
    phoneDescription: 'Canal telefónico:',
    phoneNumber: '(+57) 256 2030 Ext 138',
    mobileDescription: 'Canal móvil:',
    mobileNumber1: '(+57) 318 4665591',
    mobileNumber2: '(+57) 315 2665817',
    emailDescription: 'Correo electrónico:',
    emailAddress: 'comunicaciones@agrodatai.com',
    onlineDescription: 'Mesa de ayuda On line:',
    buttonDescription: 'Accede aqui'
  };

  ngOnInit(): void {
    // console.log('sucessfully');
  };

  goSupport() {
    if ( isPlatformBrowser(this.platformID) ) {
      window.open(environment.SUPPORT.URL, '_blank');
    }
  }
}
