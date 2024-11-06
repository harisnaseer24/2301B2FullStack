import { Routes } from '@angular/router';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';

export const routes: Routes = [

    {
        path:"",
        component:MedicineComponent,
    },
    
    {
        path:"addMedicine",
        component:CreateMedicineComponent,
    },

];
