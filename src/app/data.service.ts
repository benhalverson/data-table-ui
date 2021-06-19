import { Injectable } from '@angular/core';
import { Table } from './table';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  inMemoryData() {
    const data: Table[] = [
      {
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'scheduled',
        isChecked: false,
      },
      {
        name: 'netsh.exe',
        device: 'Targaryen',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
        status: 'available',
        isChecked: false,
      },
      {
        name: 'uxtheme.dll',
        device: 'Lannister',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
        status: 'available',
        isChecked: false,
      },
      {
        name: 'cryptbase.dll',
        device: 'Martell',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
        status: 'scheduled',
        isChecked: false,
      },
      {
        name: '7za.exe',
        device: 'Baratheon',
        path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
        status: 'scheduled',
        isChecked: false,
      },
    ];
    return data;
  }
}
