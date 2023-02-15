import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PaisesService} from "../../services/paises.service";
import {PaisData} from "../../interfaces/paises.interface";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  multipleSelect !: FormGroup;
  regions : string[] = [];
  countries : PaisData[] = [];

  constructor(private formBuilder : FormBuilder,
              private paisesService : PaisesService) {

    this.multipleSelect = this.formBuilder.group({
      region : ['',Validators.required],
      country : ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.regions = this.paisesService.regions;

    //When region changes
    this.multipleSelect.get('region')?.valueChanges.subscribe((region) => {
      this.multipleSelect.get('country')?.setValue('')
      this.paisesService.getCountriesByRegion(region).subscribe(paises => {
        this.countries = paises;
      })
    })
  }

  save() : void{
    console.log('a')
  }
}
