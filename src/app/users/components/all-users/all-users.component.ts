import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(private service: UsersService) {}
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: number = 2;
  users: any[] = [];
  allUsers: any[] = [];
  SearchedUsers: any[] = [];
  ngOnInit(): void {
    this.getUsers(this.currentPage);
    this.getAllUsers();
  }
  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      this.allUsers = res;
      console.log(this.allUsers);
    });
  }
  getUsers(page: number) {
    this.service.getUsers(page).subscribe(
      (res: any) => {
        this.loading = true;
        this.users = res.data;
        this.totalPages = res.total_pages;
        this.currentPage = res.page;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  pageChanging(page: number) {
    this.currentPage = page;
    this.getUsers(this.currentPage);
  }

  filterUsers(event: any) {
    let id = event.target.value;
    this.getFilteredUser(id);
  }
  exist: any = {};
  existedUser: boolean = false;
  getFilteredUser(id: any) {
    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].id == id) {
        this.existedUser = false;
        this.exist = this.allUsers[i];
        if (this.SearchedUsers.length > 0) {
          this.SearchedUsers.pop();
          this.SearchedUsers.push(this.exist);
        } else {
          this.SearchedUsers.push(this.exist);
        }
        this.users = this.SearchedUsers;
      } else {
        this.existedUser = true;
      }
    }
  }
}
