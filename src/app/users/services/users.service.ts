import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://reqres.in/api/users';
  allUsers: any[] = [];
  constructor(private http: HttpClient) {}

  // Fetch users with pagination
  getUsers(page: number) {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }
  getAllUsers(): Observable<any[]> {
    const page1 = this.getUsers(1);
    const page2 = this.getUsers(2);

    return forkJoin([page1, page2]).pipe(
      map((responses: any[]) => {
        return responses[0].data.concat(responses[1].data);
      })
    );
  }
  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
