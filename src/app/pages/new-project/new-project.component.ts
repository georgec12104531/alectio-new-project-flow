import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../redux/store/store';

import { dataTypeAction, projectNameAction, dataSourceAction, onPremInfoAction, handleSubmitAction } from '../../redux/actions/new-project-actions';

import { handleSubmitNewProject } from '../../api-utils/api-utils';

@Component({
  selector: 'new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true},
    },
  ],
})

export class NewProject implements OnInit {
  @select('newProject') newProject;
  @select(['default', 'dataTypes']) dataTypes;
  @select(['default', 'dataSources']) dataSources;
  @select(['default', 'trainingSizes']) trainingSizes;
  @select(['default', 'problemTypes']) problemTypes;

  selectedFile = null;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['firstCtrl', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['secondCtrl', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['thirdCtrl', Validators.required],
      fourthCtrl: ['fourthCtrl', Validators.required],
      fifthCtrl: ['fiftCtrl', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fifthCtrl: ['sixthCtrl', Validators.required],
    });
  }

  handleProjectName() {
    this.ngRedux.dispatch(projectNameAction(this.newProject.projectName));
  }

  handleDataType() {
    this.ngRedux.dispatch(dataTypeAction(this.newProject.dataType));
  }

  handleDataSource() {
    this.ngRedux.dispatch(dataSourceAction(this.newProject.dataSource));
  }

  handleOnPremInfo() {
    this.ngRedux.dispatch(onPremInfoAction(
      this.newProject.publicAddress,
      this.newProject.port,
      this.newProject.trainingSize,
      this.newProject.problemType,
      this.newProject.classLabelFile,
      this.newProject.classLabelFile.name.toString()));
  }

  onFileSelected(e) {
    this.newProject.classLabelFile = e.target.files[0];
    this.newProject.fileName = e.target.files[0].name;
  }

  handleSubmit() {
    // Make api POST with details from newProject in our store
    // dispatch the data from the DB Back into our store

    // handleSubmitNewProject(
    //   this.newProject.projectName,
    //   this.newProject.dataType,
    //   this.newProject.dataSource,
    //   this.newProject.publicAddress,
    //   this.newProject.port,
    //   this.newProject.trainingSize,
    //   this.newProject.problemType,
    //   this.newProject.classLabelFile,
    //   this.newProject.classLabelFile.name.toString()
    // ).then(({
    //   projectName,
    //   dataType,
    //   dataSource,
    //   publicAddress,
    //   port,
    //   trainingSize,
    //   problemType,
    //   classLabelFile,
    //   fileName}) => this.ngRedux.dispatch(handleSubmitAction(
    //     projectName,
    //     dataType,
    //     dataSource,
    //     publicAddress,
    //     port,
    //     trainingSize,
    //     problemType,
    //     classLabelFile,
    //     fileName)));
  }
}
