import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Producto {
  nombre: string;
  descripcion: string;
  precioVenta: number;
  costo: number;
  estado: boolean;
  seleccionado?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'inventory';
  productos: Producto[] = [
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
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precioVenta: 150,
      costo: 75,
      estado: true,
    },
    {
      nombre: 'Producto 4',
      descripcion: 'Descripción del producto 4',
      precioVenta: 300,
      costo: 150,
      estado: false,
    },
  ];

  producto: Producto = {
    nombre: '',
    descripcion: '',
    precioVenta: 0,
    costo: 0,
    estado: true,
  };

  crearProducto() {
    this.producto.estado = this.producto.estado === true ? true : false;
    this.productos.push(this.producto);
    // Agrega aquí la lógica para enviar el producto al servidor
    this.producto = {
      nombre: '',
      descripcion: '',
      precioVenta: 0,
      costo: 0,
      estado: true,
    };
  }

  eliminarProducto(producto: Producto) {
    this.productos = this.productos.filter((p) => p !== producto);
    // Agrega aquí la lógica para eliminar el producto del servidor
  }

  getEstadoProducto(estado: boolean): string {
    return estado ? 'Activo' : 'Inactivo';
  }
}
