import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agApp';

  // columnDefs = [
  //   {headerName: 'Make', field: 'make' },
  //   {headerName: 'Model', field: 'model' },
  //   {headerName: 'Price', field: 'price'}
  // ];

  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;

  constructor(private http:HttpClient){ 
    this.columnDefs=[
      {
        headerName:"API Number",
        field:"apinumber",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Well Name",
        field:"wellName",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Operator Name",
        field:"operatorName",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Latitude",
        field:"latitude",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Longitude",
        field:"longitude",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Depth",
        field:"tvd",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"State Name",
        field:"stateName",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"County Name",
        field:"countyName",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Federal Well",
        field:"federalWell",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Indian Well",
        field:"indianWell",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Ingredient Name",
        field:"ingredientName",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Trade Name",
        field:"tradeName",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Supplier",
        field:"supplier",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Purpose",
        field:"purpose",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"CAS Number",
        field:"casnumber",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Percent in Total Volume",
        field:"percentHfjob",
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Ingredient MSDS",
        field:"ingredientMsds",
        sortingOrder:["asc","desc"]
      }      
    ];
    
    this.sortingOrder=["asc", "desc"]
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
        .get("http://fracfocusapi.azurewebsites.net/")
        .subscribe(data => {
          params.api.setRowData(data);
        })
  }

}
