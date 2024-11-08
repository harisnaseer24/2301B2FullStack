import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-medicine',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-medicine.component.html',
  styleUrl: './edit-medicine.component.css'
})
export class EditMedicineComponent {

  companies :any[] =[];
  id:any=0;

  medicine={
    id:0,
    name: "",
    description:"" ,
    companyId: 0,
    price: 0,
    formula: "",
    power:"" ,
    expiry:"",
  }
  constructor(private http:HttpClient, private route:ActivatedRoute){
    this.GetCompanies();
    this.GetMedicine();
   
  }
  
  GetCompanies(){
    this.http.get("http://localhost:5112/api/Company").subscribe((result:any)=>{
      this.companies=result;
      
      // console.log(result);
    })}

    GetMedicine(){
      this.id=this.route.snapshot.paramMap.get("id");
      console.log(this.id);
      this.http.get("http://localhost:5112/api/Medicine/Details/"+this.id).subscribe((result:any)=>{
        
        this.medicine.companyId=result.companyId;
    
        console.log(this.medicine);
        // console.log(result);
      })}
  
      EditMedicine(medicine:any ){
      
      this.http.put("http://localhost:5112/api/Medicine",this.medicine).subscribe((res:any)=>{
  if(res != null){
  alert("Medicine updated succesfully.");
  window.location.href="/";
  
  }
      })
    }
  
  
  
}
