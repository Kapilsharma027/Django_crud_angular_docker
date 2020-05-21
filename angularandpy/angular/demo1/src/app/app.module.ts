
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntlCro } from './customClass';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxPaginateModule } from 'ngx-paginate';
import {CdkTableModule} from '@angular/cdk/table';
import { JokesComponent } from './jokes/jokes.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    BrowserModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CdkTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxPaginationModule,
    NgxPaginateModule,
    TranslateModule.forRoot(),
    HttpClientModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro , deps: [TranslateService]},
],
  bootstrap: [AppComponent]
})
export class AppModule { }
