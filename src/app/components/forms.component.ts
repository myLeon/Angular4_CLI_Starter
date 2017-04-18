import { Component } from '@angular/core';

import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

    public daterange: any = {};
    public options: any = {
        locale: { format: 'YYYY-MM-DD' },
        alwaysShowCalendars: false,
    };

      public selectedDate1(value: any) {
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    }


  public dateInputs: any = [
    {
      start: moment().subtract(12, 'month'),
      end: moment().subtract(6, 'month')
    },
    {
      start: moment().subtract(9, 'month'),
      end: moment().subtract(6, 'month')
    },
    {
      start: moment().subtract(4, 'month'),
      end: moment()
    },
    {
      start: moment(),
      end: moment().add(5, 'month'),
    }
  ];

  public mainInput = {
    start: moment().subtract(12, 'month'),
    end: moment().subtract(6, 'month')
  }

  public singlePicker = {
    singleDatePicker: true,
    showDropdowns: true,
    "opens": "left"
  }

  public singleDate: any;

  public eventLog = '';

  constructor(private daterangepickerOptions: DaterangepickerConfig) {
    moment.locale("zh-cn");

    

    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      ranges: {
        'Last Month1': [moment().subtract(1, 'month'), moment()],
        'Last 3 Months': [moment().subtract(4, 'month'), moment()],
        'Last 6 Months': [moment().subtract(6, 'month'), moment()],
        'Last 12 Months': [moment().subtract(12, 'month'), moment()],
      }
    };
  }

  ngOnInit() { }

  private selectedDate(value: any, dateInput: any) {
    dateInput.start = value.start;
    dateInput.end = value.end;
    dateInput.label = value.label;
  }

  private singleSelect(value: any) {
    this.singleDate = value.start;
  }

  private applyDate(value: any, dateInput: any) {
    dateInput.start = value.start;
    dateInput.end = value.end;
    dateInput.label = value.label;
  }

  public calendarEventsHandler(e: any) {
    console.log(e);
    this.eventLog += '\nEvent Fired: ' + e.event.type;
  }

}
