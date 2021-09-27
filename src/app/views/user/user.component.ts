import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: UserService,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      telefone: ['']
    });
  }

  createUser() {
    this.rest.postUser(this.userForm.value).subscribe();
    this.userForm.reset();
  }

}
