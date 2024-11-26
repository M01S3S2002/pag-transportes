import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavbarComponent, CarruselComponent, InicioComponent,
    CoberturaComponent, FooterComponent, AlianzasComponent, ServiciosComponent,
    FilosofiaComponent, UbicacionComponent, ContactoComponent, Servicios2Component, RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gruflosa - Grupo Flores SA';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const routeData = this.getRouteData(this.activatedRoute);
        
        if (routeData?.['title']) {
          this.titleService.setTitle(routeData['title']);
        }
        if (routeData?.['description']) {
          this.metaService.updateTag({ name: 'description', content: routeData['description'] });
        }
      });
  }

  private getRouteData(route: ActivatedRoute) {
    let activeRoute = route;
    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }
    return activeRoute.snapshot.data;
  }
}
