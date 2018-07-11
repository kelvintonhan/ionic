import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Nome",
    data: "11 de julho de 2018"
  }


  public nome_usuario: string = "Kelvin";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider)
  {
  
  }

  public soma(): void{
   // alert("Alerta");
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=> {
        const response = (data as any); 
        const objeto_retorno = JSON.parse (response._body);
        console.log(objeto_retorno);
      },
      error=> {
        console.log(error);
      }
    )
  }

}
