import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public contactForm: FormGroup = new FormGroup({});
  public topNavbar = [
    { key: 'photos', description: 'Fotos' },
    { key: 'news', description: 'Noticias' },
    { key: 'solutions', description: 'Soluciones' },
    { key: 'contact', description: 'Contáctanos' }
  ];
  public leftNavbar = [
    { key: 'terms', description: 'Terminos y condiciones' },
    { key: 'policy', description: 'Politica de tratamiento de datos' },
    { key: 'authorization', description: 'Autorización de tratamiento de datos' },
    { key: 'warning', description: 'Advertencia Legal Don Tulio' }
  ];
  
  constructor (
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createNewForm();
  };

  createNewForm() {
    this.contactForm = this._formBuilder.group({
      name: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      phone: ['', [ Validators.required ]]
    });
  };

  sendNewForm() {
    console.info('ejecucion', this.contactForm);
    if ( this.contactForm.valid ) {
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched()
    }
  };

  get name() {
    return this.contactForm.get('name');
  };
  get email() {
    return this.contactForm.get('email');
  };
  get phone() {
    return this.contactForm.get('phone');
  };
}
