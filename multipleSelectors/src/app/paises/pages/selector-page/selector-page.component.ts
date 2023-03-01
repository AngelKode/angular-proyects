import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PaisesService} from "../../services/paises.service";
import {FullPaisData, PaisData} from "../../interfaces/paises.interface";
import {filter, map, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  multipleSelect !: FormGroup;
  regions : string[] = [];
  countries : PaisData[] = [];
  frontiers !: FullPaisData | undefined;
  //Object for handling form operators base on formName parameter
  formOperators : any = {
    resetValue: (formName : string) => {
      this.multipleSelect.get(formName)?.setValue('');
    },
    disableInput : (formName : string) => {
      this.multipleSelect.get(formName)?.disable();
    },
    enableInput : (formName : string) => {
      this.multipleSelect.get(formName)?.enable();
    }
  }

  constructor(private formBuilder : FormBuilder,
              private paisesService : PaisesService) {

    this.multipleSelect = this.formBuilder.group({
      region   : ['',Validators.required],
      country  : ['',[Validators.required]],
      frontier : ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.regions = this.paisesService.regions;
    this.multipleSelect.get('country')?.disable();
    this.multipleSelect.get('frontier')?.disable();

    //When region changes
    this.multipleSelect.get('region')?.valueChanges
      .pipe(
        tap((region) => {
          this.operateFormControlNames(['country','frontier'],'resetValue');
          this.frontiers = undefined;
          if(region === ''){
            this.operateFormControlNames(['country','frontier'],'disableInput');
            return;
          }
          this.operateFormControlNames(['country'],'enableInput');
        }),
        filter((regionValue) => regionValue !== ''),
        switchMap( region => this.paisesService.getCountriesByRegion(region))
      )
      .subscribe((countries) => {
        this.countries = countries
      })

    //When country changes
    this.multipleSelect.get('country')?.valueChanges
      .pipe(
        tap((countryCode) => {
          this.operateFormControlNames(['frontier'],'resetValue');

          if(countryCode === ''){
            this.operateFormControlNames(['frontier'],'disableInput');
            return;
          }
          this.operateFormControlNames(['frontier'],'enableInput');
        }),
        filter((countryCode) => countryCode !== ""),
        switchMap(countryCode => this.paisesService.getCountriesByAlphaCode(countryCode))
      )
      .subscribe((countryData) => {
        this.frontiers = countryData[0];
      })

  }

  save() : void{
    console.log('a')
  }

  operateFormControlNames(formControlNames : string[], operator : string) : void{
    //Verify if formControlNames parameter has any value to operate on
    if(!(formControlNames.length > 0)){
      return;
    }

    //Operate on each control name of formControlNames parameter base on operator parameter
    formControlNames.forEach((controlName) => {
      if(this.formOperators[operator] && this.multipleSelect.get(controlName)){
        this.formOperators[operator](controlName);
      }
    })
  }

}
