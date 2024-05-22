import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { Guion } from 'src/app/services/auth/user';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent   implements OnInit {

  user?:Guion[];
  router: any;

  constructor (private guionService: UserService) {

  }


    ngOnInit(): void {
      this.listGetUser();
    }

    eliminar(id: number): void {
      this.guionService.eliminarGuion(id).subscribe(
        () => {
          console.log('Guion eliminado con éxito');
          this.listGetUser(); // Llama al método listGetUser() aquí
        },
        error => {
          console.error('Error al eliminar el guion', error);
          // Aquí puedes agregar más código para manejar el error, como mostrar un mensaje al usuario
        }
      );

    }

    listGetUser():void{
      this.guionService.getUser().subscribe({
        next: (userData: any) => {
          this.user = userData;
        }
      }
    )
    }


  // errorMessage:String="";
  // user?:User;
  // userLoginOn:boolean=false;
  // editMode:boolean=false;

  // registerForm=this.formBuilder.group({
  //   id:[''],
  //   lastname:['',Validators.required],
  //   firstname:['', Validators.required],
  //   country:['',Validators.required]
  // })

  // constructor(private userService:UserService, private formBuilder:FormBuilder, private loginService:LoginService  ){
  //   this.userService.getUser(environment.userId).subscribe({
  //     next: (userData) => {
  //       this.user=userData;
  //       this.registerForm.controls.id.setValue(userData.id.toString());
  //       this.registerForm.controls.firstname.setValue( userData.firstname);
  //       this.registerForm.controls.lastname.setValue( userData.lastname);
  //       this.registerForm.controls.country.setValue( userData.country);
  //     },
  //     error: (errorData) => {
  //       this.errorMessage=errorData
  //     },
  //     complete: () => {
  //       console.info("User Data ok");
  //     }
  //   })

  //   this.loginService.userLoginOn.subscribe({
  //     next:(userLoginOn) => {
  //       this.userLoginOn=userLoginOn;
  //     }
  //   })

  // }

  // get firstname()
  // {
  //   return this.registerForm.controls.firstname;
  // }

  // get lastname()
  // {
  //   return this.registerForm.controls.lastname;
  // }

  // get country()
  // {
  //   return this.registerForm.controls.country;
  // }

  // savePersonalDetailsData()
  // {
  //   if (this.registerForm.valid)
  //   {
  //     this.userService.updateUser(this.registerForm.value as unknown as User).subscribe({
  //       next:() => {
  //         this.editMode=false;
  //         this.user=this.registerForm.value as unknown as User;
  //       },
  //       error:(errorData)=> console.error(errorData)
  //     })
  //   }
  // }

}
