import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: any;
  selectedUser: any;
  loading: boolean = false;
  constructor(private service: UsersService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit(): void {
    this.getSingleUser();
  }

  getSingleUser() {
    this.service.getUserById(this.id).subscribe(
      (res) => {
        this.loading = true;
        this.selectedUser = res;
        console.log(this.selectedUser);
      },
      (error) => {
        this.loading = true;
      }
    );
  }
}
