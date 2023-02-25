import { Component } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private _remoteConfig: AngularFireRemoteConfig,
  ) {}

  // async angularRemoteConfig() {
  //   let { landing } = await this._remoteConfig.strings.toPromise();
  //   let variable;
  //   console.log('Landing ', landing);
  //   let value = JSON.parse(landing) || null;
  //   if (value) {
  //     variable = true;
  //     console.log('variable', variable);
  //   }
  // };

  // async init() {
  //   await this.angularRemoteConfig();
  // }

  name: string = 'Jonathan';
  sectionWelcome = {
    title: "AgrodatAi es una solución digital gratuita para que los productores agropecuarios sean más productivos y entables en sus negocios agro",
    description: "AgrodatAi es una compañía que ofrece soluciones tecnológicas integrales para que los participantes de las cadenas agro, propicien relaciones comerciales y de servicio entre sí, además, de facilitar la toma de decisiones de los productores mediante información y conocimiento que les permita afinar sus competencias para la gestión de sus actividades productivas, comerciales y financieras.",
    button: "Regístrate ahora",
    video: "https://www.youtube.com/watch?v=3kgX81zOjcI"
  };
  sectionStatistics = {
    content: [
      { amount: "+200.000", description: "Productos registrados" },
      { amount: "+200.000", description: "Solicitudes de credito" },
      { amount: "+200.000", description: "Alertas enviadas" }
    ]
  };
  sectionServices = {
    title: "¿Qué encontrarás en AgrodatAi?",
    content: [
      {name: "example"}
    ]
  }
}
