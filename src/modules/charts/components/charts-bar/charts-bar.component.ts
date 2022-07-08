import { DashboardService } from './../../../dashboard/services/dashboard.service';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'sb-charts-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-bar.component.html',
    styleUrls: ['charts-bar.component.scss'],
})
export class ChartsBarComponent implements OnInit, AfterViewInit {
    @ViewChild('myBarChart') myBarChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;

    @Input()
    questionTitle!:string

    @Input()
    questionId!: number;

    @Input()
    color!:string

    labels!:string[];
    values!:number[];

    constructor(private dashboardService:DashboardService) {}
    async ngOnInit() {
        console.log('questionId',this.questionId)
        console.log('color',this.color);
        const resp = await this.dashboardService.getValuesMenu(this.questionId);
        this.labels = resp.map((item:any)=>{
            return item.Respuesta
        });
        this.values = resp.map((item:any)=>{
            return parseInt(item.total);
        });
    }

    async ngAfterViewInit() {
        const resp = await this.dashboardService.getValuesMenu(this.questionId);

        this.labels = resp.map((item:any)=>{
            return item.Respuesta
        });
        this.values = resp.map((item:any)=>{
            return parseInt(item.total);
        });

        this.chart = new Chart(this.myBarChart.nativeElement, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [
                    {
                        label: this.questionTitle,
                        backgroundColor: this.color,
                        borderColor: this.color,
                        data: this.values ,
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: 'month',
                            },
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                maxTicksLimit: 6,
                            },
                        },
                    ],

                },
                legend: {
                    display: false,
                },
            },
        });
    }
}
