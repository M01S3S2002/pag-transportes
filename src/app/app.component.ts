import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { CarruselComponent } from "./pages/carrusel/carrusel.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { CoberturaComponent } from "./pages/cobertura/cobertura.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { AlianzasComponent } from "./pages/alianzas/alianzas.component";
import { ServiciosComponent } from "./pages/servicios/servicios.component";
import { FilosofiaComponent } from "./pages/filosofia/filosofia.component";
import { UbicacionComponent } from "./pages/ubicacion/ubicacion.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { Servicios2Component } from "./pages/servicios2/servicios2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarruselComponent, InicioComponent, CoberturaComponent, FooterComponent, AlianzasComponent, ServiciosComponent, FilosofiaComponent, UbicacionComponent, ContactoComponent, Servicios2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gruflosa- Grupo Flores SA';
}
