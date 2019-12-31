import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: String;
  img: String;
  description: String;
  Catag: String;
  catTypes;
  selectedFile: ImageSnippet;

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService,
    private authservice: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.catTypes=['ring','brac','pen','ear','neck'];
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.img= this.selectedFile.file['name'];
      //console.log("tts",this.selectedFile.file);
      this.authservice.uploadImage(this.selectedFile.file).subscribe(

        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }


  onProductSubmit() {

    const product = 
    {
      name: this.name,
      img: this.img,
      description: this.description,
      Catag: this.Catag
    }

    // Required Fields
    if (!this.validateService.validateProduct(product)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

  

    this.authservice.addProduct(product).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Successfully Added', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/addproduct']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/addproduct']);
      }
    });
    this.name="";
    this.description="";
    this.Catag="";
    this.img="";

  }

}
