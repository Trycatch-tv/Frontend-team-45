import { ChangeDetectionStrategy } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/app.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() productoSeleccionado: Producto = {
    nombre: '',
    descripcion: '',
    precioVenta: 0,
    costo: 0,
    estado: true,
  };
  @Output() guardarProductoEvent = new EventEmitter<any>();
  @Output() cerrarModalEvent = new EventEmitter<any>();

  guardarProducto() {
    this.guardarProductoEvent.emit(this.productoSeleccionado);
  }

  cerrarModal() {
    this.cerrarModalEvent.emit();
  }
}
