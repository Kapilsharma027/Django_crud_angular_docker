import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatSnackBar } from '@angular/material';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes:any;
  message = null;
  constructor(private appService: AppService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
   this.getjokesData();

  }
  getjokesData(){
    this.appService.getjokes().subscribe(data => {
      console.log(data);
      this.jokes = data['data'];
    },
      error => {
        this.message = 'Error in access'
        console.log('error in tab data', error);
        this.openSnackBar(this.message);
      });
  }

  addJokes(joke){
    const data = {
      'desc':joke
    }
    this.appService.addjokes(data).subscribe(data => {
      console.log(data);
      this.message = 'Added successfully'
      this.openSnackBar(this.message);
      this.getjokesData();
    },
      error => {
        this.message = 'Error in Add Joke'
        this.openSnackBar(this.message);
        console.log('error in tab data', error);
      });
      
  }
  deleteJoke(id){
    this.appService.deletejokes(id).subscribe(data => {
      console.log(data);
      this.message = 'Deleted successfully'
      this.openSnackBar(this.message);
      this.getjokesData();
    },
      error => {
        this.message = 'Error in Delete Joke'
        this.openSnackBar(this.message);
        console.log('error in tab data', error);
      });
  }
  
  
  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
    });
  }
}


