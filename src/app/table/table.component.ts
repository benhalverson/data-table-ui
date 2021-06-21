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
  allchecked = false;
  indeterminate = false;

  ngOnInit(): void {
    this.tableData = this.dataService.inMemoryData();
  }

  onDownload() {
    alert(`downloading files(s): ${this.status()}`);
  }

  private status(): string[] {
    return this.tableData
      .filter((data) => data.status.includes('available'))
      .map((data) => data.name);
  }

  setAll(checked: boolean) {
    this.allchecked = checked;
    this.tableData.forEach((data) => (data.isChecked = checked));
  }

  someChecked() {
    return (
      this.tableData.filter((data) => {
        if (data.isChecked) {
          data.status = 'available';
        } else {
          data.status = 'scheduled';
        }
      }).length > 0 && !this.allchecked
    );
  }

  updateAllChecked() {
    this.allchecked = this.tableData.every((data) => data.isChecked);
    // this.status();
  }

  countChecked(): number {
    return this.tableData.filter((data) => data.isChecked).length;
  }
}
