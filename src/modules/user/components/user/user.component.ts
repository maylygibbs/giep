import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { UserModel } from '../../models';
import { UserService } from '../../services';

import { UserDeleteComponent } from '../user-delete/user-delete.component';

@Component({
    selector: 'sb-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user.component.html',
    styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
    //dataSource = new MatTableDataSource<UserModel>(ELEMENT_DATA);
    dataSource = new MatTableDataSource<UserModel>();
    //dataSource = ELEMENT_DATA;
    userDisplayedColumns: string[] = ['username', 'roles', 'status', 'actions'];

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

    constructor(
        private userService: UserService,
        private dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.refresh();
    }

    refresh(){
      this.userService.getAll().subscribe(res => {
         this.dataSource.data = res;
     });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    onDelele(id: number, username: string) {
      const dialogRef = this.dialog.open(UserDeleteComponent, {
        data: { id: id, username: username }
      }); 

      dialogRef.afterClosed().subscribe(result => {
        this.refresh();
      });
    }
}
