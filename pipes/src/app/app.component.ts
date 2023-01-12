import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = "Juan Antonio"
  iva: number = 0.21;
  racional: number = 0.346356

  arrayNumeros: any[] = [
    {numero:1, tipo: 'impar'},
    {numero:2, tipo: 'par'},
    {numero:3, tipo: 'impar'},
    {numero:4, tipo: 'par'},
    {numero:5, tipo: 'impar'},
    {numero:6, tipo: 'par'},
  ]

  precio: number = 12345;
  fecha: Date = new Date();

  birthday: string = "2023-03-05"
  arrAnimales: string[] = ['León', 'Gato', 'Periquito', 'Mofeta'];
 min: number = 0;
 max: number = 0;

 textoLargo: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati atque quas velit vel sequi odit cum et eaque quis nulla vitae harum, numquam, corrupti natus debitis consequuntur veritatis excepturi nemo dolore tempore aliquam nesciunt deserunt iusto! Inventore sed voluptatibus harum magnam nisi dicta, officiis consectetur praesentium eligendi, molestias molestiae, obcaecati eveniet saepe esse! Cumque nam voluptatem magni corrupti exercitationem, dolores ullam eum quibusdam in officiis autem nostrum, dolorem minima explicabo nisi! Architecto repudiandae ducimus, reiciendis consectetur omnis sed explicabo! Magni beatae sit, quam accusamus atque expedita accusantium consectetur ducimus deserunt fuga veritatis ad aspernatur quae sequi omnis, repudiandae itaque.';


  ngOnInit() : void{
    //console.log(this.arrayNumeros);
  }

  cambiarFecha(){
    this.fecha = new Date();
  }

  modificarArray($event: any){
    this.max = parseInt($event.target.value)
  }


}
