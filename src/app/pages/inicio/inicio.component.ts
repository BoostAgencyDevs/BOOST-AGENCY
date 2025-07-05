import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../shared/services/contenido.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  contenido: any = {
    hero: {
      titulo: '',
      subtitulo: '',
      descripcion: '',
      cta_texto: '',
      cta_link: '',
      imagen: ''
    },
    servicios_destacados: [],
    estadisticas: {
      clientes_satisfechos: '',
      proyectos_completados: '',
      años_experiencia: '',
      equipo_profesional: ''
    }
  };

  constructor(private contenidoService: ContenidoService) {}

  ngOnInit(): void {
    this.loadContent();
  }

  private loadContent(): void {
    this.contenidoService.getContenido().subscribe({
      next: (data) => {
        if (data && data.inicio) {
          this.contenido = data.inicio;
        }
      },
      error: (error) => {
        console.error('Error loading content:', error);
      }
    });
  }
}
