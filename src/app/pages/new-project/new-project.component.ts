import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';

interface DataType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class NewProject implements OnInit {
  @select('newProject') newProject;
  // @select(['newProject', 'dataType']) dataType

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
   dataTypes: DataType[] = [
    {value: 'image-data', viewValue: 'Image Data'},
    {value: 'text-data', viewValue: 'Text Data'},
    {value: 'numberica-data', viewValue: 'Numerical Data'}
  ];
  constructor(private _formBuilder: FormBuilder, private ngRedux: NgRedux<IAppState>) {}


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  handleDataType() {
    this.ngRedux.dispatch({ type: 'EDIT_DATA_TYPE', dataType: this.newProject.dataType});
  }
  
  handleProjectName() {
    console.log(this.newProject.projectName)
    this.ngRedux.dispatch({ type: 'EDIT_PROJECT_NAME', projectName: this.newProject.projectName});
  }
}
