import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get all content
  getContenido(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contenido`);
  }

  // Get specific section content
  getSeccionContenido(seccion: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${seccion}`);
  }

  // Update content (admin)
  updateContenido(seccion: string, content: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${seccion}`, content);
  }

  // Submit contact form
  submitContactForm(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/formularios/contacto`, formData);
  }

  // Submit quote form
  submitQuoteForm(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/formularios/cotizacion`, formData);
  }

  // Submit support form
  submitSupportForm(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/formularios/soporte`, formData);
  }

  // Upload image
  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }
}
