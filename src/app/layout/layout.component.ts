import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  // Estado del menú móvil
  isMobileMenuOpen = false;

  constructor(private router: Router) {
    // Cerrar el menú móvil cuando cambie la ruta
    this.router.events.subscribe(() => {
      this.closeMobileMenu();
    });
  }

  // Alternar estado del menú móvil
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Cerrar el menú móvil
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  // Verificar si una ruta está activa
  isActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  // Scroll suave al inicio de la página
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
