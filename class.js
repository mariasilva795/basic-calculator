class calculator {

	constructor(color, background, keysBackground)
		{
			/*Las variables que estan en los metodos pueden pasar hacia el constructor este lo ire definiendo a medida que vaya 
			realizandola*/

			this.color  = color;
			this.background = background;
			this.keysBackground = keysBackground;
			this.calculator_container = document.getElementById('calculadora');
			this.keis = document.createElement('div');
			this.inputMode  = false;
		}

	general_desing()
	{	
			var name = document.createElement("div");
			var top_container = document.createElement('div');
			var screen = document.createElement('div');
			var clear= document.createElement('span');

		/*Desing container the screen and clear*/
			var text = document.createTextNode('Calculadora Basica');
			name.classList.add('name');
			name.appendChild(text);
			this.calculator_container.appendChild(name);

			top_container.classList.add('contenedor');
			this.calculator_container.appendChild(top_container);

			clear.classList.add('clear');
			var name_clear = document.createTextNode('C');
			clear.appendChild(name_clear);
			top_container.appendChild(clear);

			screen.classList.add('screen');
			top_container.appendChild(screen);


			this.calculator_container.style.backgroundColor = this.background;
			//this.calculator_container.style.heigth = this.heigth;
			//this.calculator_container.style.width = this.width;
			this.calculator_container.style.color = this.color;
	

		/*key desing */
			this.keis.classList.add('keis');
			this.calculator_container.appendChild(this.keis);
}

	keys(x)
		{
			this.calculator_container.appendChild(this.keis);
			var press = document.createElement('div');
			this.keis.appendChild(press);
			press.classList.add('press');

			for (let i = 0; i < x.length; i++) 
			{
				let key = document.createElement('span');
				press.appendChild(key);	
				key.classList.add('a');

				let add = document.createTextNode(x[i]);
				key.appendChild(add);
			}

			
		}

		init()
		{
			var keys = document.getElementsByTagName('span');
			var screen_top = document.querySelector('.screen');
			var screen_text = screen_top.innerHTML;


			for (var i = 0; i < keys.length; i++) 
			{
				keys[i].addEventListener("click",(e) => {
					var _this = e.currentTarget;
					var button = _this.innerHTML;

					if (button == "C") 
						{
							screen_top.innerText = '';
							this.inputMode = false;							
						}
					else if (button == ".") 
					{
						
					}


				});
			}


/*	var keys = document.getElementsByTagName('span');
for (var i = 0; i < keys.length; i++) 
{
	keys[i].addEventListener("click", function(evento)
	{
		console.log("hola");
	});
}*/

		}
	}	



//var calculadoraa = new calculator();
var calculadoraa = new calculator('yellow','black','');

calculadoraa.general_desing();

var a = ['9' ,'8' ,'7','+'];
var b = ['6','5','4','-'];		
var c = ['3','2','1','+'];
var d = ['0','.','=','÷'];


calculadoraa.keys(a);
calculadoraa.keys(b);
calculadoraa.keys(c);
calculadoraa.keys(d);
calculadoraa.init();



/*Es una funcion especial que nos ayuda a definir o 
que define el patro de un objeto que no permite reutilizarlo
para crear muchos objetos con las misma propiedadaes o funciones
*/
