import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
//import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { User }  from '../../../../clases/user';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UsersService]
})
export class ListUsersComponent implements OnInit {

  public gridOptions: GridOptions;
  public usuarios: User[];
  public mensajeError:any;

  constructor(private usersService: UsersService) {
        this.gridOptions = {
                    columnDefs: this.createColumnDefs(),
                    enableColResize: true,
                    enableSorting: true,
                    enableFilter: true
                }
  }

  createColumnDefs() {
        return [
            {headerName: "Rut", field: "IdUsuario", width: 200},
            {headerName: "Nombre",field: "Nombres", width: 500},
            {headerName: "Estado", field: "Estado", width: 200},
        ];
    }

    ngOnInit() {

        this.usersService.ListUsers()
                .subscribe( (rslt:User[])=>{
                                this.usuarios = rslt;
                            }, 
                            error=>this.mensajeError=<any>error);

    }

}
