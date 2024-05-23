import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZcMapServiceService {

  zc_map:string[][] = [];
  constructor() {
    this.zc_map = [
      ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','G2','G2','G2','G2','G2','G2','G2','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','#','#',],
['#','#','#','r','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','r','r','#','#',],
['#','#','#','r','|','#','#','#','#','#','#','#','#','#','#','#','#','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','|','|','*','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#',],
['#','#','#','r','|','#','D','D','D','D','D','D','D','D','D','D','D','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','#','#','#','#','#','#','Ds','Ds','|','|','|','|','|','|','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#',],
['#','#','#','r','|','#','D','D','D','D','D','D','D','D','D','D','D','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','#','w','w','w','w','#','#','Ds','#','#','#','#','#','#','#','#','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#',],
['#','#','#','r','|','#','#','D','#','#','#','#','#','#','#','#','#','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','#','w','w','w','w','w','#','Ds','#','e','e','e','e','e','e','#','Ds','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#',],
['#','#','#','#','r','|','|','D','D','D','D','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','|','|','*','r','Ds','Ds','Ds','Ds','Ds','#','w','w','w','w','w','#','Ds','#','e','e','e','e','e','e','#','Ds','Ds','Ds','|','|','Ds','Ds','Ds','Ds','|','r','#','#','#','#',],
['#','#','#','#','#','r','|','#','D','D','#','#','Ds','Ds','#','#','#','#','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','#','w','w','w','w','w','#','Ds','#','e','e','e','e','e','#','#','Ds','Ds','Ds','Ds','Ds','|','|','Ds','Ds','|','r','#','#','#','#',],
['#','#','#','#','#','r','|','#','D','D','#','Ds','Ds','Ds','#','D','D','D','#','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','#','#','#','w','#','w','#','Ds','#','#','e','e','e','e','#','#','#','#','S','#','#','|','|','|','Ds','|','r','#','#','#','#',],
['#','#','#','#','#','r','|','#','D','D','D','Ds','Ds','Ds','#','#','#','#','D','#','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','|','|','*','r','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','#','#','Ds','Ds','#','#','e','e','e','#','#','#','S','S','S','#','#','#','|','|','|','r','#','#','#','#',],
['#','#','#','#','#','r','|','#','D','D','#','Ds','Ds','Ds','Ds','Ds','Ds','#','D','D','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','|','|','|','|','|','|','r','r','r','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','#','e','e','#','#','S','S','S','S','S','S','#','#','|','|','r','#','#','#','#',],
['#','#','#','#','#','r','|','#','D','D','#','#','Ds','Ds','Ds','Ds','Ds','#','D','D','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','*','*','*','*','*','*','*','*','|','|','|','r','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','e','#','#','C','C','S','S','S','S','S','S','#','#','|','r','#','#','#','#',],
['#','#','#','#','#','r','|','#','#','D','D','#','Ds','Ds','Ds','Ds','Ds','#','D','D','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','|','*','*','|','|','|','|','|','|','|','|','*','*','*','|','|','r','r','r','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','#','C','C','S','S','S','A','S','S','S','#','|','r','#','#','#','#',],
['#','#','#','#','#','#','r','|','#','D','D','#','#','#','#','#','#','#','D','D','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','*','*','*','|','|','|','Ds','Ds','|','Ds','Ds','Ds','|','|','|','|','*','*','|','|','|','|','r','Ds','Ds','Ds','Ds','Ds','Ds','|','*','#','#','S','S','S','S','S','S','S','#','#','r','#','#','#','#','#',],
['#','#','#','#','#','#','r','|','#','D','D','D','D','D','D','D','D','D','D','D','#','Ds','Ds','Ds','Ds','Ds','|','|','|','*','|','|','|','Ds','Ds','Ds','Ds','Ds','|','Ds','Ds','Ds','Ds','Ds','Ds','|','|','|','*','*','*','*','|','r','r','r','Ds','Ds','Ds','|','r','*','#','#','S','S','S','S','S','#','#','|','r','#','#','#','#','#',],
['#','#','#','#','#','#','r','|','#','D','D','D','D','D','D','D','D','D','D','D','#','Ds','Ds','Ds','Ds','|','|','*','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','|','|','*','*','|','|','|','r','r','|','r','r','*','r','#','#','S','S','S','#','#','|','|','r','#','#','#','#','#',],
['#','#','#','#','#','#','r','|','#','#','#','#','#','#','#','#','#','#','#','#','#','Ds','Ds','|','|','*','*','|','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','|','*','*','*','|','|','r','r','r','r','r','r','#','S','S','S','#','|','|','r','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','r','|','r','*','*','*','*','*','*','*','*','Ds','Ds','|','|','|','*','*','|','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','*','*','|','r','r','r','r','r','*','#','S','S','S','#','|','|','r','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','r','|','r','*','*','*','*','*','*','*','*','|','|','*','*','*','|','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','*','|','|','|','*','|','r','r','r','r','r','#','S','S','S','#','|','|','r','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','r','|','r','*','*','*','*','*','*','*','*','|','*','|','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','*','|','r','r','r','*','#','#','S','#','#','|','|','r','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','r','|','r','*','*','*','*','*','*','*','|','*','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','#','#','#','#','|','#','#','#','#','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','|','|','*','|','r','r','*','r','r','|','|','|','|','|','r','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','r','|','r','*','*','*','*','*','*','*','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','#','#','#','AC','AC','AC','AC','AC','AC','AC','AC','AC','#','#','#','#','Ds','Ds','Ds','Ds','Ds','Ds','*','*','r','*','*','|','|','*','|','r','r','*','r','|','|','|','|','|','r','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','r','|','r','*','*','*','*','*','*','|','*','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','#','#','AC','AC','AC','AC','AC','#','#','Ca','#','#','AC','AC','AC','AC','AC','#','#','Ds','Ds','Ds','Ds','Ds','*','r','*','*','*','*','|','*','|','r','r','r','r','r','|','|','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','*','*','Ds','Ds','Ds','|','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','#','#','#','#','#','Ca','Ca','Ca','#','#','#','AC','AC','AC','AC','#','#','Ds','Ds','Ds','*','r','*','*','*','*','*','|','|','*','|','r','r','|','|','|','|','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','Ds','*','Ds','Ds','|','|','*','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','#','AC','AC','#','#','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','#','#','#','#','AC','AC','#','#','Ds','Ds','r','*','*','*','*','*','*','*','|','|','*','|','r','|','|','|','|','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','Ds','*','Ds','Ds','Ds','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','#','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','#','AC','AC','AC','#','Ds','r','*','*','*','*','*','*','*','*','*','|','|','*','|','|','|','|','|','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','Ds','*','Ds','Ds','|','*','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','#','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','#','AC','AC','AC','#','r','*','*','*','*','*','*','*','*','*','*','*','|','*','|','|','|','|','|','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','Ds','*','Ds','|','*','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','#','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','Ca','#','AC','AC','AC','#','r','*','*','*','*','*','*','*','*','*','*','*','|','*','|','|','|','|','|','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','Ds','*','Ds','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','#','#','#','#','#','#','#','Ca','#','#','#','#','#','#','#','AC','AC','AC','#','*','*','*','*','*','*','*','*','*','*','*','*','|','*','|','|','|','|','|','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','Ds','*','|','*','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','G3','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','G4','r','|','*','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','AC','#','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','G3','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','G4','r','|','|','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','#','AC','AC','AC','AC','AC','#','AC','#','AC','AC','AC','AC','AC','#','AC','AC','AC','#','r','r','*','*','*','*','*','*','*','*','*','*','|','*','|','*','*','*','*','|','G3','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','G4','r','|','|','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','#','#','#','#','AC','AC','AC','AC','AC','#','r','#','AC','AC','AC','AC','AC','#','#','#','#','#','*','r','r','r','r','*','*','*','*','*','*','*','|','*','|','*','*','*','*','|','G3','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','G4','r','|','|','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','#','AC','AC','AC','AC','AC','#','r','#','AC','AC','AC','AC','AC','#','#','Ds','Ds','Ds','Ds','Ds','*','r','r','*','*','*','*','*','*','*','|','*','|','*','*','*','*','|','G3','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','G4','r','|','|','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','AC','AC','#','r','#','AC','AC','AC','AC','AC','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','*','*','r','r','*','*','*','*','*','|','*','|','*','*','*','*','|','G3','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','G4','r','|','|','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','*','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','#','AC','AC','AC','AC','AC','#','r','#','AC','AC','AC','AC','AC','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','*','r','*','r','*','*','|','*','|','*','*','*','*','|','G3','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','G4','r','|','|','|','*','|','Ds','Ds','Ds','Ds','Ds','*','Ds','#','#','#','#','Ds','Ds','Ds','Ds','Ds','#','#','#','#','#','#','#','r','#','#','#','#','#','#','#','r','Ds','Ds','Ds','Ds','Ds','Ds','#','#','#','|','*','r','*','r','*','|','*','|','*','*','*','*','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','|','|','|','*','|','Ds','Ds','Ds','Ds','*','Ds','#','#','N','N','#','#','Ds','Ds','Ds','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','Ds','r','r','Ds','Ds','Ds','#','H','H','#','#','|','*','*','*','r','|','*','|','*','*','*','|','|','r','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','|','|','|','*','|','Ds','Ds','Ds','*','Ds','#','N','N','N','N','N','#','#','Ds','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','r','Ds','Ds','r','r','r','#','H','H','H','#','#','|','*','*','r','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','|','|','|','*','|','Ds','Ds','*','Ds','#','#','N','N','N','N','N','N','#','r','#','#','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','#','#','#','r','r','Ds','Ds','Ds','#','#','H','H','H','H','#','|','*','r','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','|','|','|','|','*','|','Ds','Ds','#','#','N','N','N','N','N','N','#','#','r','#','CC','CC','CC','#','#','#','CC','CC','CC','CC','CC','CC','CC','CC','CC','#','#','#','#','r','Ds','Ds','r','#','#','H','H','H','#','#','|','*','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','r','|','|','|','|','|','|','|','|','Ds','#','N','N','N','N','N','N','#','#','r','#','#','#','#','#','#','r','#','CC','CC','CC','CC','CC','#','#','#','CC','CC','CC','CC','#','r','Ds','Ds','Ds','r','#','#','H','H','H','#','#','|','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','r','|','|','|','|','|','|','|','*','#','#','N','N','N','N','#','#','Ds','r','#','#','#','r','r','r','r','#','CC','CC','CC','CC','CC','#','r','#','#','#','CC','CC','#','r','Ds','Ds','Ds','Ds','r','#','#','H','H','H','#','*','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','r','|','P','P','P','|','*','|','*','#','#','N','N','#','#','Ds','r','r','r','r','r','Ds','Ds','Ds','r','#','CC','CC','CC','CC','CC','#','r','r','r','#','#','#','#','r','Ds','Ds','Ds','Ds','Ds','r','#','H','H','#','#','*','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','r','|','*','P','P','P','|','*','|','*','#','#','#','#','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','#','CC','CC','CC','CC','CC','#','r','Ds','Ds','r','r','r','r','r','Ds','Ds','Ds','Ds','Ds','r','#','#','#','#','*','|','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','r','|','P','*','P','P','P','|','*','|','*','*','r','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','#','CC','CC','CC','CC','CC','#','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','r','r','*','*','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','r','|','P','*','P','P','P','P','|','*','|','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','#','CC','CC','CC','CC','CC','#','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','|','|','*','|','*','*','*','|','r','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','r','|','P','*','*','*','P','P','|','*','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','#','CC','CC','CC','CC','CC','#','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','*','|','*','*','*','*','|','r','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','r','|','P','*','*','P','P','*','P','|','*','|','|','Ds','Ds','Ds','r','r','r','r','r','r','r','r','r','#','CC','CC','CC','CC','CC','#','r','r','r','r','r','r','r','r','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','*','|','*','*','*','*','*','|','r','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','r','|','*','P','P','*','P','P','P','|','*','|','|','Ds','r','#','#','#','#','#','#','#','#','#','#','CC','CC','CC','CC','CC','#','#','#','#','#','#','#','#','#','#','r','Ds','Ds','Ds','Ds','Ds','Ds','|','|','*','|','*','|','r','*','*','|','r','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','r','|','P','P','P','P','P','P','P','P','|','*','|','Ds','r','#','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','#','#','r','Ds','Ds','Ds','Ds','Ds','|','*','|','*','|','r','|','|','r','|','r','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','r','|','P','*','P','P','P','P','P','P','P','|','*','|','r','#','#','#','#','#','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','#','#','#','CC','CC','#','r','Ds','Ds','|','|','|','*','|','*','|','r','|','|','r','*','|','r','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','r','|','*','P','P','P','P','P','P','P','P','P','|','*','|','r','#','#','r','#','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','#','r','#','#','#','#','r','Ds','|','|','*','*','|','*','|','r','|','|','r','|','|','r','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','r','|','P','P','P','P','P','#','#','#','#','*','|','*','|','r','r','r','#','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','CC','#','r','r','r','r','r','Ds','|','|','*','|','|','*','|','r','|','|','r','|','|','|','r','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','r','|','P','P','P','P','#','#','O','O','#','#','*','|','*','|','r','r','#','#','#','#','#','#','CC','CC','CC','CC','CC','#','#','#','#','#','#','r','Ds','Ds','Ds','Ds','Ds','|','*','|','*','*','*','|','|','|','r','|','|','r','|','r','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','r','|','P','P','P','#','O','O','O','O','O','#','Ds','*','|','*','|','r','r','r','r','r','r','#','CC','CC','CC','CC','CC','#','r','r','r','r','r','r','Ds','Ds','Ds','|','|','|','*','|','*','Ds','Ds','*','|','r','|','|','r','|','|','r','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','r','|','P','P','#','#','O','O','O','O','#','#','Ds','Ds','*','|','*','|','Ds','Ds','Ds','Ds','r','#','CC','CC','CC','CC','CC','#','r','Ds','Ds','Ds','Ds','Ds','|','|','|','|','*','*','|','*','*','Ds','Ds','Ds','*','|','|','r','|','|','r','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','#','#','O','O','O','O','#','#','Ds','Ds','Ds','Ds','*','|','*','|','Ds','Ds','Ds','r','#','#','#','CC','#','#','#','r','Ds','Ds','Ds','|','|','|','*','*','*','|','|','*','Ds','Ds','Ds','Ds','Ds','r','*','|','|','|','|','r','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','#','O','O','O','O','#','#','Ds','Ds','Ds','Ds','Ds','Ds','*','|','*','|','Ds','Ds','r','r','r','r','r','r','r','r','r','Ds','|','|','|','*','*','|','|','|','*','*','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','*','|','|','|','r','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','#','O','O','O','#','#','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','*','|','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','|','*','*','*','|','*','*','*','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','*','|','|','r','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','#','#','#','#','#','*','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','*','|','*','|','|','|','|','|','|','|','|','|','|','*','*','*','|','|','*','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','*','*','r','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','*','|','*','*','*','*','*','*','*','*','*','*','*','*','|','|','*','*','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','|','|','r','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','*','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','*','*','|','|','|','|','|','*','*','*','|','|','|','|','*','*','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','r','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','*','*','r','*','|','*','|','*','r','*','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','|','|','*','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','Ds','r','r','r','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','r','r','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','r','r','Ds','Ds','r','*','|','|','|','*','r','r','r','r','Ds','Ds','r','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','r','r','Ds','Ds','r','r','r','*','B','*','B','*','r','r','r','r','Ds','Ds','r','r','r','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','Ds','r','Ds','Ds','r','r','r','*','|','*','|','*','r','Ds','Ds','Ds','r','r','Ds','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','Ds','Ds','r','r','Ds','Ds','Ds','r','r','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','r','Ds','Ds','Ds','Ds','|','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','|','|','*','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','r','Ds','Ds','Ds','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','Ds','Ds','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','*','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','r','|','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','r','|','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','r','*','|','*','|','3','r','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','|','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','r','|','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','Ds','*','*','*','*','|','*','|','*','*','*','*','*','*','*','*','*','*','*','*','*','Ds','|','r','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','r','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','G1','G1','G1','G1','G1','G1','G1','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',],
];
      
   }

   getMap(){
    return this.zc_map;
   }

  

   getMapAt(x: number, y: number){
    return this.zc_map[x][y];
   }
}
