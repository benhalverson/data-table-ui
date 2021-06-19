import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Table } from '../table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private readonly dataService: DataService) {}
  tableData: Table[] = [];
  checked = false;
  indeterminate = false;

  ngOnInit(): void {
    this.tableData = this.dataService.inMemoryData();
  }

  onDownload() {
    alert('downloading file(s)');
  }

  onSelect() {
    console.log('selecting a row...');
  }

  checkAllCheckBox(e) {
    this.tableData.forEach((x) => (x.isChecked = e.target.checked));
    console.log('checked', e.target.checked);
  }

  isAllCheckBoxChecked() {
    return this.tableData.every((p) => p.isChecked);
  }
}
