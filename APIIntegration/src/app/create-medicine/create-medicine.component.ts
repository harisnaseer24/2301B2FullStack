import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-medicine',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
companies :any[] =[];
medicine={
  name: "",
  description:"" ,
  companyId: 0,
  price: 0,
  formula: "",
  power:"" ,
  expiry:""
}
constructor(private http:HttpClient){
  this.GetCompanies();
}

GetCompanies(){
  this.http.get("http://localhost:5112/api/Company").subscribe((result:any)=>{
    this.companies=result;
    // console.log(result);
  })}

  addMedicine(){
    console.log(this.medicine);
    this.http.post("http://localhost:5112/api/Medicine",this.medicine).subscribe((res:any)=>{
if(res != null){
alert("Medicine added succesfully.");
window.location.href="/"

}
    })
  }




}
