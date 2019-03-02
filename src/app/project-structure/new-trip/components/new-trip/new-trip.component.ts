/***
 *    ███╗   ██╗███████╗██╗    ██╗
 *    ████╗  ██║██╔════╝██║    ██║
 *    ██╔██╗ ██║█████╗  ██║ █╗ ██║
 *    ██║╚██╗██║██╔══╝  ██║███╗██║
 *    ██║ ╚████║███████╗╚███╔███╔╝
 *    ╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝
 *
 *    ████████╗██████╗ ██╗██████╗
 *    ╚══██╔══╝██╔══██╗██║██╔══██╗
 *       ██║   ██████╔╝██║██████╔╝
 *       ██║   ██╔══██╗██║██╔═══╝
 *       ██║   ██║  ██║██║██║
 *       ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝
 *
 *     ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
 *    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
 *    ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║
 *    ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║
 *    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║
 *     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝
 *
 *    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
 *    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
 *    ███████╗██║     ██████╔╝██║██████╔╝   ██║
 *    ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║
 *    ███████║╚██████╗██║  ██║██║██║        ██║
 *    ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝
 *
 */
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material';
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'fg-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ro-RO' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class NewTripComponent implements OnInit {

/***
 *    ┌─┐┬─┐┌─┐┌─┐┌─┐┬─┐┌┬┐┬┌─┐┌─┐
 *    ├─┘├┬┘│ │├─┘├┤ ├┬┘ │ │├┤ └─┐
 *    ┴  ┴└─└─┘┴  └─┘┴└─ ┴ ┴└─┘└─┘
 */
  public personalDataForm: FormGroup;
  public contactDataForm: FormGroup;
  public locationDataForm: FormGroup;
  public travelingDatesForm: FormGroup;


/***
 *    ┌─┐┌─┐┌┐┌┌─┐┌┬┐┬─┐┬ ┬┌─┐┌┬┐┌─┐┬─┐
 *    │  │ ││││└─┐ │ ├┬┘│ ││   │ │ │├┬┘
 *    └─┘└─┘┘└┘└─┘ ┴ ┴└─└─┘└─┘ ┴ └─┘┴└─
 */
  public constructor() { }

/***
 *    ┬  ┬┌─┐┌─┐
 *    │  │├┤ ├┤
 *    ┴─┘┴└  └─┘
 *    ┌─┐┬ ┬┌─┐┬  ┌─┐
 *    │  └┬┘│  │  ├┤
 *    └─┘ ┴ └─┘┴─┘└─┘
 *    ┬ ┬┌─┐┌─┐┬┌─┌─┐
 *    ├─┤│ ││ │├┴┐└─┐
 *    ┴ ┴└─┘└─┘┴ ┴└─┘
 */
  public ngOnInit(): void {
    // Creating model for Personal Data Form
    this.personalDataForm = new FormGroup({
      firstName: new FormControl(null, [ Validators.required ]),
      lastName: new FormControl(null, [ Validators.required ]),
      birthDate: new FormControl(null, [ Validators.required ]),
      gender: new FormControl(null)
    });

    // Creating model for Contact Data Form
    this.contactDataForm = new FormGroup({
      phoneNumber: new FormControl(null, [ Validators.required ]),
      email: new FormControl(null, [ Validators.required ]),
      address: new FormControl(null, [ Validators.required ])
    });

    // Creating model for Location Data Form
    this.locationDataForm = new FormGroup({
      country: new FormControl(null, [ Validators.required ]),
      city: new FormControl(null, [ Validators.required ]),
      notes: new FormControl(null)
    });

    // Creating model for Traveling Dates Form
    this.travelingDatesForm = new FormGroup({
      departureDate: new FormControl(null),
      departureHour: new FormControl(null),
      arrivalDate: new FormControl(null),
      arrivalHour: new FormControl(null)
    });
}

 /***
 *    ┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
 *    │││├┤  │ ├─┤│ │ ││└─┐
 *    ┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
 */

}
