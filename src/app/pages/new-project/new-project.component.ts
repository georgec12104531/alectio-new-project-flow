import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';

interface DataType {
  value: string;
  viewValue: string;
}

interface DataSource {
  value: string;
  viewValue: string;
}

interface trainingSize {
  value: string;
  viewValue: string;
}

interface problemType {
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

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  dataTypes: DataType[] = [
    {value: 'image-data', viewValue: 'Image Data'},
    {value: 'text-data', viewValue: 'Text Data'},
    {value: 'numberica-data', viewValue: 'Numerical Data'}
  ];

  dataSources: DataSource[] = [
     {value: 'on-prem', viewValue: 'On Premis'},
     {value: 'dataset-library', viewValue: 'Dataset Library'},
  ];

  trainingSizes: trainingSize[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
  ];

  problemTypes: problemType[] = [
    {value: 'object-detection', viewValue: 'Object Detection'},
    {value: 'classification', viewValue: 'Classification'},
    {value: 'text-classification', viewValue: 'Text Classification'}
  ]

  constructor(private _formBuilder: FormBuilder, private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
    });
  }

  handleDataType() {
    this.ngRedux.dispatch({ type: 'EDIT_DATA_TYPE', dataType: this.newProject.dataType});
  }
  
  handleProjectName() {
    this.ngRedux.dispatch({ type: 'EDIT_PROJECT_NAME', projectName: this.newProject.projectName});
  }

  handleDataSource() {
    this.ngRedux.dispatch({ type: 'EDIT_DATA_SOURCE', dataSource: this.newProject.dataSource});
  }

  handleOnPremInfo() {
    this.ngRedux.dispatch(
      {
        type: 'EDIT_ON_PREM_INFO',
        payload: {
          publicAddress: this.newProject.dataSource,
          port: this.newProject.port,
          trainingSize: this.newProject.trainingSize,
          problemType: this.newProject.problemType
        }
      }
    );
  }

  handleReset() {
    // console.log('handle reset called')
    this.ngRedux.dispatch({type: 'RESET_NEW_PROJECT'});
  }
}
