import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  } from '@angular/material';
  
const BREADCRUMBS: any[] = [
  {
    title: 'Assessment',
    link: '#'
  },
  {
    title: 'Core Readiness',
    link: '#'
  }
];

@Component({
  selector: 'page-dom-core',
  templateUrl: './dom-core.component.html',
  styleUrls: ['./dom-core.component.scss'],
  providers: [ SharedService ]
})
export class DomCoreComponent implements OnInit {
  pageTitle: string = 'Core Readiness';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
