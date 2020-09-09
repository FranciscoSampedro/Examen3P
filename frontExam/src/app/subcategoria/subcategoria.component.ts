import { Component, OnInit } from '@angular/core';
import { Subcategoria } from 'src/model/subcategoria';
import { SubcategoriaService} from '../service/Subcategoria.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css']
})
export class SubcategoriaComponent implements OnInit {

  subcategorias: Subcategoria[];
  cols: any[];
  items: MenuItem[];
  displaySaveDialog: boolean = false;
  Subcategoria: Subcategoria = {
    cod_sub_categoria:null,
    nombre:null,
    fecha_creacion:null
  };

  selectedSubcategoria: Subcategoria = {
    cod_sub_categoria:null,
    nombre:null,
    fecha_creacion:null
  };
  constructor(private subcategoriaservice: SubcategoriaService, private messageService: MessageService, private confirmService: ConfirmationService) { }

  getAll() {
    this.subcategoriaservice.getAll().subscribe(
      (result: any) => {
        let subcategorias: Subcategoria[] = [];
        for (let i = 0; i < result.length; i++) {
          let subcategoria = result[i] as Subcategoria;
          subcategorias.push(subcategoria);
        }
        this.subcategorias = subcategorias;
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getAll();
    this.cols = [
      { field: "cod_sub_categoria", header: "Cod_sub_categoria"},
      { field: "NOMBRE", header: "Nombre" },
      { field: "fecha_creacion", header: "fecha_creacion" },
    ];

    this.items = [
      {
        label: "Nuevo",
        icon: 'pi pi-fw pi-plus',
        //command: () => this.showSaveDialog(false)
      },
      {
        label: "Editar",
        icon: "pi pi-fw pi-pencil",
        //command: () => this.showSaveDialog(true)
      },
      {
        label: "Eliminar",
        icon: "pi pi-fw pi-times",
        //command: () => this.delete()
      }
    ]

  }


}
