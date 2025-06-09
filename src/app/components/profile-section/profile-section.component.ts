import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profileService/profile.service';
import { DeleteUserService } from '../../services/deleteUserService/delete-user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-profile-section',
  imports: [ReactiveFormsModule,NgIf,DatePipe,MatCardModule, MatButtonModule ],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.css',
})
export class ProfileSectionComponent implements OnInit {
  private profileService = inject(ProfileService);
  private deleteuserService = inject(DeleteUserService);
  editable = false
  profileId: string | null = null;
  userId: string | null = null;
  profileDetails!: FormGroup;
  profileDetailsArray: any = {}
  success: string | null = null;
  err: string | null = null;
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.profileDetails = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      dob : new FormControl(''),
      profilePhoto: new FormControl(''),

    });
    this.profileId = localStorage.getItem('profileId');
    this.userId = localStorage.getItem('userId');

    if (this.profileId) {
      this.getProfile();
    } else {
      console.error('No profileId found in localStorage');
    }
  }

  getProfile() {
    this.profileService.getProfile(this.profileId!).subscribe({
      next: (res) => {
        this.profileDetails.patchValue(res.profile)
        this.profileDetailsArray = res.profile
      },
      error: (err) => {
        console.error('Failed to fetch profile:', err);
      },
    });
  }
  updateProfile() {
    this.profileService
      .updateProfile(this.profileId, this.profileDetails.value)
      .subscribe({
        next: (res) => {
          this.success = res.msg;
          this.editable = !this.editable
          this.getProfile();
        },
        error: (err) => {
          this.err = err;
        },
      });
  }
  deleteProfile() {
    this.profileService.deleteProfile(this.profileId).subscribe({
      next: (res) => {
        this.success = res.msg;
        this.router.navigate(['register'])
      },
      error: (err) => {
        this.err = err;
      },
    });
    this.deleteuserService.deleteUser(this.userId).subscribe();
  }
  isedit(){
     this.editable = !this.editable
  }
}
