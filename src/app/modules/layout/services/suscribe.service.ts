import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscribeService {
  save(email: string): void {
    console.log(`email ingresado correcto: ${email}`);
  }
}
