import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../redux/store/store';

import { dataTypeAction, projectNameAction, dataSourceAction, onPremInfoAction, resetNewProjectAction } from '../../redux/actions/new-project-actions';

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
      useValue: { displayDefaultIndicatorType: false},
    },
  ],
})
export class NewProject implements OnInit {
  @select('newProject') newProject;

  selectedFile = null;

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
     {value: 'on-prem', viewValue: 'On-Prem'},
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
  ];

  constructor(private _formBuilder: FormBuilder, private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['asdf', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['asdf', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({ 
      thirdCtrl: ['asdf', Validators.required],
      fourthCtrl: ['asdf', Validators.required],
      fifthCtrl: ['asdf', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fifthCtrl: ['asdf', Validators.required],
    });
  }

  handleDataType() {
    this.ngRedux.dispatch(dataTypeAction(this.newProject.dataType));
  }

  handleProjectName() {
    this.ngRedux.dispatch(projectNameAction(this.newProject.projectName));
  }

  handleDataSource() {
    this.ngRedux.dispatch(dataSourceAction(this.newProject.dataSource));
  }

  handleOnPremInfo() {
    this.ngRedux.dispatch(onPremInfoAction(
      this.newProject.dataSource,
      this.newProject.port,
      this.newProject.trainingSize,
      this.newProject.problemType,
      this.newProject.classLabelFile,
      this.newProject.classLabelFile.name.toString()));
  }

  handleReset() {
    this.ngRedux.dispatch(resetNewProjectAction());
  }

  onFileSelected(e) {
    this.newProject.classLabelFile = e.target.files[0];
    this.newProject.fileName = e.target.files[0].name;
  }

}
