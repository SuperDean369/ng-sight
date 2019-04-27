import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 34, 80, 91, 34, 56, 40], label: 'Q3 Sales'},
  { data: [25, 47, 45, 88, 34, 56, 41], label: 'Q4 Sales'}
];

const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W1', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scalesShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
