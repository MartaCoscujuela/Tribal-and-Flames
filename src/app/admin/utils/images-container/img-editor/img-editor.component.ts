import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { DataService } from 'src/app/data-bridge/data.service';
import { ImgData } from 'src/app/data-bridge/img.model';
import { mimeType } from "./mime-type.validator";

@Component({
  selector: 'app-img-editor',
  host: {
    class: 'col-lg-4 col-md-6 p-2 mt-3'
  },
  templateUrl: './img-editor.component.html',
  styleUrls: ['./img-editor.component.css']
})
export class ImgEditorComponent implements OnInit {

  constructor(public dataService: DataService) { }

  langs: string[] = ["esp", "eng"]
  currentLang: string = "esp";
  imgData: ImgData;
  status: string = "";

  @Input() name;

  form: FormGroup;
  imagePreviews = [
    {
      lang: "esp",
      preview: ""
    },
    {
      lang: "eng",
      preview: ""
    }
  ];
  currentPreview: string;


  ngOnInit(): void {
    this.form = new FormGroup({
      'esp': new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }),
      'eng': new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }),
    });
    this.getImg();
  }

  getImg(){
    this.dataService.getImg(this.name).subscribe(result =>{
      this.imgData = result;
      this.setImg();
    },
    error=>{
      console.log(error);
    });
  }

  setImg(){
    this.form.patchValue({esp: this.imgData.esp});
    this.form.patchValue({eng: this.imgData.eng});

    this.imagePreviews = [
      {
        lang: "esp",
        preview: this.imgData.esp
      },
      {
        lang: "eng",
        preview: this.imgData.eng
      }
    ];
    this.getLangPreview();
  }
  oppositeLang(){
    return this.currentLang === "esp" ? "eng" : "esp";
  }

  changeLang(){
    this.currentLang = this.oppositeLang();
    this.getLangPreview();
  }

  getLangPreview(){
    const currentLangPreview = this.imagePreviews.find(imgpv => (imgpv.lang === this.currentLang));
    this.currentPreview = currentLangPreview.preview
  }

  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    const field = this.currentLang;
    this.form.patchValue({[field]: file});
    this.form.get(field).updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () =>{
      const preview = this.imagePreviews.find(imgpv => (imgpv.lang == this.currentLang));
      preview.preview = reader.result as string;
      this.currentPreview = preview.preview;
    }
    reader.readAsDataURL(file);
  }


  onSubmit(){
    const espValue = this.form.value.esp
    if (!this.form.controls['eng'].value){
      this.form.patchValue({eng: espValue});
    }

    if (this.form.invalid){
      this.status = 'postingErr'

      return
    }

    this.dataService.postImg(this.name, this.form.value.esp, this.form.value.eng )
    .subscribe((response)=>{
      console.log(response);
      this.imgData = response;
      this.setImg();
      this.status = 'success'
    },
    error =>{
      console.log(error)
      this.status = 'postingErr'
    });
    /*
    this.isLoading = true;
    if (this.mode === "create"){
      this.postService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
    } else {
      this.postService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
    }*/
  }
}
