
class Calculator {

    constructor() {

        this.operators = ['+', '-', 'x', '÷'];
        this.tmpScreen = '';
        this.inputMode = false;
        this.inputModeCleared = false;
        this.inputModeOperation = false;

    }
    init() {
        var keys = document.querySelectorAll('#calculator span');
        var decimalAdded = false;

        for(var i = 0; i < keys.length; i++) 
        {

                continue;
        }



            $(keys[i]).click((e) => {
                var _this = e.currentTarget;
                var input = document.querySelector('.screen');
                var inputVal = input.innerHTML;
                var btnVal = _this.innerHTML;


                if(btnVal == 'C') {

                    this.closeInputModeIfNeeded();
                    input.innerHTML = '';
                    this.decimalAdded = false;

                } 

                else if(btnVal == '=') {

                    if (this.inputMode) {

                        this.inputModeOperation();

                    } else {

                        this.solve(inputVal);
                    }

                } 







            else {

                    if (this.inputMode && this.inputModeCleared == false) 

                    {

                        input.innerHTML = '';
                        this.inputModeCleared = true;
                    }

                    input.innerHTML += btnVal;
                }

                // prevent page jumps
                e.preventDefault();

            });
        }

         }


    closeInputModeIfNeeded() {

        if (!this.inputMode) {

            return;
        }

        this.closeInputMode(false);
    }


}


calculadora = new Calculator();
calculadora.init();