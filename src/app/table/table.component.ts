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
  allChecked = false;

  ngOnInit(): void {
    this.tableData = this.dataService.inMemoryData();
  }

  /** Displays message with list of downloade file names. */
  onDownload(): void {
    alert(`downloading files(s): ${this.status()}`);
  }

  /** returns an array of names selected */
  private status(): string[] {
    return this.tableData
      .filter((data) => data.status.includes('available'))
      .map((data) => data.name);
  }

  /**
   * @param checked setting to true sets all other checkboxes to true
   */
  setAll(checked: boolean) {
    this.allChecked = checked;
    this.tableData.forEach((data) => (data.isChecked = checked));
  }

  /**
   * returns a truthy value that sets the indeterminate value of the select all checkbox
   * @returns boolean
   */
  someChecked(): boolean {
    return (
      this.tableData.filter((data) => {
        if (data.isChecked) {
          data.status = 'available';
          return true;
        } else {
          data.status = 'scheduled';
          return false;
        }
      }).length > 0 && !this.allChecked
    );
  }

  /**
   * Sets the state for isChecked
   * @returns boolean
   */
  updateAllChecked(): boolean {
    return (this.allChecked = this.tableData.every((data) => data.isChecked));
  }

  /**
   * Counts the number of selected rows
   * @returns number
   */
  countChecked(): number {
    return this.tableData.filter((data) => data.isChecked).length;
  }
}
