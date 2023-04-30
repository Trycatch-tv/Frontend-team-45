import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Producto {
  nombre: string;
  descripcion: string;
  precioVenta: number;
  costo: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'inventory';
  productos = [
    {
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precioVenta: 100,
      costo: 50,
      estado: true,
    },
    {
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precioVenta: 200,
      costo: 100,
      estado: false,
    },
    {
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precioVenta: 100,
      costo: 50,
      estado: true,
    },
    {
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precioVenta: 200,
      costo: 100,
      estado: false,
    },
  ];

  producto: Producto = {
    nombre: '',
    descripcion: '',
    precioVenta: 0,
    costo: 0,
  };

  crearProducto() {
    console.log('Producto creado:', this.producto);
    // Agrega aquí la lógica para enviar el producto al servidor
  }
}
