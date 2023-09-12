import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule]

})
export class NewsComponent {
  news:News = {
    content: '',
  }
  constructor(
    private dialogRef : MatDialogRef<NewsComponent>,
    private newsService: NewsService,
  ){}

   

  optionValues:string[] = ['Service','Status','Event','Travel','Market','Job','Family','Overnight','Knowledge','Other']
  add(e:any){

  }
  cancel(e:any){
    this.dialogRef.close();
  }
  post(e:any,news:News){
    console.log(news);
    this.newsService.createNews(news);
    this.dialogRef.close(news);
  }
}
