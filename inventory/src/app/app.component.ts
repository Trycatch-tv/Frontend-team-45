import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Producto {
  id?: number;
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
  productoSeleccionado: Producto = {
    nombre: '',
    descripcion: '',
    precioVenta: 0,
    costo: 0,
    estado: false,
  };

  title = 'inventory';
  productos: Producto[] = [
    {
      id: 0,
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precioVenta: 100,
      costo: 50,
      estado: true,
    },
    {
      id: 1,
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precioVenta: 200,
      costo: 100,
      estado: false,
    },
    {
      id: 2,
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precioVenta: 150,
      costo: 75,
      estado: true,
    },
    {
      id: 3,
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
  mostrarModal: boolean = false;
  modalVisible = false;

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

  abrirModal(producto: any) {
    this.productoSeleccionado = producto as Producto;
    // Aquí se debe mostrar el modal.
  }

  guardarProducto() {
    // Aquí se debe guardar el producto.
    // ...
    this.cerrarModal();
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  editarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }

  guardarCambios() {
    // Realizar aquí la lógica para guardar los cambios
    // Por ejemplo, actualizar los datos en la base de datos
    // ...

    // Actualizar la lista de productos en la tabla
    const index = this.productos.findIndex(
      (p) => p.id === this.productoSeleccionado.id
    );
    if (index !== -1) {
      this.productos[index] = this.productoSeleccionado;
    }

    // Cerrar el modal de edición
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      const modalBackdrop =
        document.getElementsByClassName('modal-backdrop')[0];
      modalBackdrop?.parentNode?.removeChild(modalBackdrop);
    }

    // Limpiar la selección de producto
    this.productoSeleccionado = {
      nombre: '',
      descripcion: '',
      precioVenta: 0,
      costo: 0,
      estado: true,
    };
  }
}
