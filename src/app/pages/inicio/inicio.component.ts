import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Gruflosa ofrece servicios de transporte de carga pesada y maquinaria con la más alta calidad, tecnología y puntualidad. Cubrimos todo México, brindando soluciones logísticas seguras y eficientes, adaptadas a las necesidades de cada cliente, con un equipo moderno y comprometido.' });
    this.meta.updateTag({ name: 'keywords', content: 'Transporte de carga,fletes,Servicios de transporte,Logística en México,Transporte seguro,Soluciones logísticas' });

 
  }
}
