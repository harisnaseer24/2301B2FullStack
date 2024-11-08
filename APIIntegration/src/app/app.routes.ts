import { Routes } from '@angular/router';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';

export const routes: Routes = [

    {
        path:"",
        component:MedicineComponent,
    },
    
    {
        path:"addMedicine",
        component:CreateMedicineComponent,
    },
    {
        path:"editMedicine/:id",
        component:EditMedicineComponent,
    },

];
