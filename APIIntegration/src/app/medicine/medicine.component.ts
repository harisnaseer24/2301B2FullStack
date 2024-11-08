import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, RouterLink],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {

MyPost:any[]=[];
MyMedicines:any[]=[];


constructor(private http:HttpClient){
  // this.GetPost();
  this.GetMedicines();

}

// GetPost(){
//   this.http.get("https://jsonplaceholder.typicode.com/posts?_limit=10").subscribe((result:any)=>{
//     this.MyPost=result;
//     console.log(result);
//   })}

GetMedicines(){
  this.http.get("http://localhost:5112/api/Medicine").subscribe((result:any)=>{
    this.MyMedicines=result;
    console.log(result);
  })

}
EditMedicine(med:any){
console.log(med);

}

DeleteMedicine(med:any){

console.log(med);

this.http.delete("http://localhost:5112/api/Medicine?id="+med.id).subscribe((result:any)=>{
  alert(result);
    console.log(result.text);
    // this.GetMedicines();

  })
}

}
