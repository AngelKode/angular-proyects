import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {PaisesService} from "../../services/paises.service";
import {FullPaisData, PaisData} from "../../interfaces/paises.interface";
import {delay, filter, forkJoin, from, map, mergeMap, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  multipleSelect !: FormGroup;
  regions: string[] = [];
  countries: FullPaisData[] = [];
  //frontiers : string[] = [];
  frontiers: FullPaisData[] = [];

  //UI FLAGS
  fetchingData: boolean = false;

  //Object for handling form operators base on formName parameter
  formOperators: any = {
    resetValue: (formName: string) => {
      this.multipleSelect.get(formName)?.setValue('');
    },
    disableInput: (formName: string) => {
      this.multipleSelect.get(formName)?.disable();
    },
    enableInput: (formName: string) => {
      this.multipleSelect.get(formName)?.enable();
    },
    setValue : (formName : string, newValue : string) => {
      this.multipleSelect.get(formName)?.setValue(newValue);
    }
  }

  constructor(private formBuilder: FormBuilder,
              private paisesService: PaisesService) {

    this.multipleSelect = this.formBuilder.group({
      region: ['', Validators.required],
      country: ['', [Validators.required]],
      frontier: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.regions = this.paisesService.regions;
    this.formOperators.disableInput('country');
    this.formOperators.disableInput('frontier');

    //When region changes
    this.multipleSelect.get('region')?.valueChanges
      .pipe(
        filter((regionValue) => {
          this.frontiers = [];//Reset frontier countries
          //Cleaning country select input
          this.formOperators.disableInput('country');
          this.formOperators.resetValue('country');
          return regionValue !== '';//Filter if region value is empty
        }),
        tap((region) => {
          this.fetchingData = true;
        }),
        delay(400),
        switchMap(region => this.paisesService.getCountriesByRegion(region)),
        tap(countriesByRegion => {
          //Changing fetchingData flag
          //And enable country input based on region
          this.fetchingData = false;
          if (countriesByRegion.length > 0) {
            this.formOperators.enableInput('country');
            return;
          }
        })
      )
      .subscribe((countries) => {
        this.countries = countries || [];
      })

    //When country changes
    this.multipleSelect.get('country')?.valueChanges
      .pipe(
        filter((countryCode) => {
          this.frontiers = [];//Reset frontier countries
          //Cleaning frontier select input
          this.formOperators.disableInput('frontier');
          this.formOperators.resetValue('frontier');
          return countryCode !== "";//Filter if country code is empty
        }),
        tap((countryCode) => {
          this.fetchingData = true;//Flag for showing fetching data message to user
        }),
        delay(400),
        switchMap(countryCode => this.paisesService.getCountriesByAlphaCode(countryCode)),
        filter(([countryData]) => {
          //Filtering if border information is undefined, meaning the selected country has no borders
          if(countryData.borders === undefined){
            this.fetchingData = false;
            this.formOperators.disableInput('frontier');
            this.formOperators.setValue('frontier','Sin fronteras');
          }
          return countryData.borders !== undefined;
        }),
        switchMap(country => this.paisesService.getCountryByBorders(country[0]?.borders)),
        tap((bordersByCountry) => {
          //Changing fetchingData flag
          //And enable frontier input based on country borders of API response
          this.fetchingData = false;
          if (bordersByCountry.length > 0) {
            this.formOperators.enableInput('frontier');
            return;
          }
        })
      )
      .subscribe((borderCountriesName) => {
        this.frontiers = borderCountriesName || [];
      })

  }

  save() : void{
    console.log('a')
  }

  get isCountryWithBorders() : boolean{
    return this.frontiers.length < 1;
  }

}
