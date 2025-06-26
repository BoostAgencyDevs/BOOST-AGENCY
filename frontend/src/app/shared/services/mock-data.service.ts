import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockData = {
    inicio: {
      hero: {
        titulo: 'Impulsa tu Negocio al Siguiente Nivel',
        subtitulo: 'Agencia Digital de Marketing y Desarrollo',
        descripcion: 'Transformamos tu presencia digital con estrategias innovadoras y soluciones tecnológicas de vanguardia.',
        cta_texto: 'Comienza Ahora',
        cta_link: '/contacto',
        imagen: 'assets/images/hero-image.jpg'
      },
      servicios_destacados: [
        {
          titulo: 'Marketing Digital',
          descripcion: 'Estrategias personalizadas para aumentar tu visibilidad online y atraer clientes potenciales.',
          icono: 'fas fa-chart-line',
          link: '/servicios/marketing-digital'
        },
        {
          titulo: 'Desarrollo Web',
          descripcion: 'Sitios web modernos y aplicaciones que destacan tu marca y mejoran la experiencia del usuario.',
          icono: 'fas fa-code',
          link: '/servicios/desarrollo-web'
        },
        {
          titulo: 'Gestión de Redes Sociales',
          descripcion: 'Manejo profesional de tus redes sociales para construir una comunidad comprometida.',
          icono: 'fas fa-share-alt',
          link: '/servicios/redes-sociales'
        }
      ],
      estadisticas: {
        clientes_satisfechos: '500+',
        proyectos_completados: '1000+',
        años_experiencia: '10+',
        equipo_profesional: '50+'
      }
    }
  };

  constructor() { }

  getContenido(): Observable<any> {
    return of(this.mockData);
  }

  updateContenido(content: any): Observable<any> {
    this.mockData = { ...this.mockData, ...content };
    return of(this.mockData);
  }
}
