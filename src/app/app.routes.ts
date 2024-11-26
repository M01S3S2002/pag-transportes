import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
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

export const routes: Routes = [
    {
      path: '',
      data: { title: 'GRUFLOSA-Grupo Flores SA | Servicios Integrales de Transporte y Logística', description: 'Gruflosa ofrece servicios de transporte de carga y logística con la más alta calidad, puntualidad y tecnología. Cubrimos rutas en todo México, brindando soluciones logísticas seguras, eficientes y adaptadas a las necesidades de cada cliente, con un equipo comprometido y moderno.' },
      children: [
        { path: '', component: InicioComponent, outlet: 'inicio' },
        { path: '', component: CarruselComponent, outlet: 'carrusel' },
        { path: '', component: CoberturaComponent, outlet: 'cobertura' },
        { path: '', component: AlianzasComponent, outlet: 'alianzas' },
        { path: '', component: UbicacionComponent, outlet: 'ubicacion' }
      ]
    },
    {
      path: 'nuestros-servicios',
      data: { title: 'Nuestros Servicios', description: 'Gruflosa ofrece servicios de transporte de carga y logística con la más alta calidad, puntualidad y tecnología. Cubrimos rutas en todo México, brindando soluciones logísticas seguras, eficientes y adaptadas a las necesidades de cada cliente, con un equipo comprometido y moderno.' },
      children: [
        { path: '', component: ServiciosComponent, outlet: 'servicios' },
        { path: '', component: Servicios2Component, outlet: 'servicios2'},
      ]
    },
    { path: 'acerca-de-nosotros', component: FilosofiaComponent, data: { title: 'Acerca de Nosotros', description: 'somos una compañía líder en servicios de transporte y logística, dedicada a conectar negocios y personas a través de soluciones logísticas innovadoras, confiables y eficientes. Con más de 16 años de experiencia en el sector, hemos construido una sólida reputación basada en la puntualidad, seguridad y adaptabilidad de nuestros servicios.' } },
    { path: 'contacto', component: ContactoComponent, data: { title: 'Contacto', description: 'estamos aquí para ayudarte con todas tus necesidades de transporte y logística. Nuestro equipo de expertos está listo para responder tus preguntas, brindarte asesoría y ofrecer soluciones personalizadas que se adapten a tu negocio.' } }
  ];
  