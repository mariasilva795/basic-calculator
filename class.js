class calculator 
{
	constructor(color, background, keysBackground)
		{
			this.operation = ['+', '-', 'x', '÷'];
			this.color  = color;
			this.background = background;
			this.keysBackground = keysBackground;
			this.calculator_container = document.getElementById('calculadora');
			this.keis = document.createElement('div');
			this.decimal = 
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

//Funcion para generar las teclas
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

//Funcion para controlar la salida de los datos en pantalla
		init()
		{
		
		var keys = document.getElementsByTagName('span');

		//Recorrer las teclas.
		for (var i = 0; i < keys.length; i++) 
			{
					//Agregar evento cuando se pulsa
					keys[i].addEventListener("click",(e) => {
					var screen_top = document.querySelector('.screen');
					var screen_text = screen_top.innerHTML;
					var _this = e.currentTarget;
					var button = _this.innerHTML;

			if (button == "C") 
				{
					screen_top.innerText = '';
					this.inputMode = false;							
				}
			
			else if (button == '=') 
				{
					this.result(screen_text);
				}

			else if (screen_text == "" && button == "-") 
				{
					screen_top.innerHTML = screen_top.innerHTML + button;
				}

			else if(this.operation.indexOf(button) > -1)
					{
					var lastChar = screen_text[screen_text.length - 1];
						if (screen_text != '' && this.operation.indexOf(lastChar) == -1) 
							{
								screen_top.innerHTML = screen_top.innerHTML + button;
							}
						if (this.operation.indexOf(lastChar) > -1 && screen_text.length > 1) 
							{
								screen_top.innerHTML = screen_text.replace(/.$/, button);
							}
					}
			else
				{
					screen_top.innerText = screen_top.innerText + button;
				}

			});
			}
			}	

//Funcion para validar e imprimir el resultado
		result(screen_text)
		{
			var screen_top = document.querySelector('.screen');
			var lastChar = screen_text[screen_text.length - 1];
			var equation = screen_text;

			equation = equation.replace(/x/g,'*').replace(/÷/,'/');

			if (this.operation.indexOf(lastChar) > -1 || lastChar == '.' ) 
				{
					 equation = equation.replace(/.$/,'')
				}

			try
				{
					var x = screen_top.innerHTML = eval(equation);
				}
			catch(e)
				{
					screen_top.innerHTML = "System error";
				}
		}
}	

//El símbolo dólar indica que la letra anterior ha de ser obligatoriamente última letra de la cadena
//El símbolo punto indica existencia de cualquier carácter.


var calculadoraa = new calculator('');

calculadoraa.general_desing();

var a = ['9' ,'8' ,'7','+'];
var b = ['6','5','4','-'];		
var c = ['3','2','1','x'];
var d = ['0','.','=','÷'];


calculadoraa.keys(a);
calculadoraa.keys(b);
calculadoraa.keys(c);
calculadoraa.keys(d);
calculadoraa.init();

