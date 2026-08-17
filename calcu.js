document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.backgroundColor = '#FFFACD';
document.body.style.minHeight= '1000px';

const container= document.createElement('div')
container.style.border='1px solid'
container.style.width='400px'
container.style.minHeight= '500px';
container.style.backgroundColor='#e5ca9c'

const calculator = document.createElement('div');
calculator.style.display = 'grid';
calculator.style.gridTemplateColumns = 'repeat(4, 1fr)';
calculator.style.gap = '10px';
calculator.style.marginTop = '20px';
calculator.style.width = '300px'; 
calculator.style.minHeight= '350px';
calculator.style.marginLeft = '50px';

container.appendChild(calculator);
document.body.appendChild(container)
const display = document.createElement("input");
display.readOnly = true;
display.placeholder = 'Your Result';
display.style.padding='15px' 
display.style.gridColumn = 'span 4';

display.style.backgroundColor= '#FFFDD0';
calculator.appendChild(display);

const buttons = [
    'X', '+', '-',
    'C','7', '8','9',
    '*', '4', '5',
    '6',  '/','1',
     '2', '3', '.',
     '0','sqr','='];
buttons.forEach((name) => {
    const button = document.createElement('button');

    button.innerHTML = name;

    if (name === '=') {
        button.style.backgroundColor = 'darkgreen';
        button.style.color = 'black';
        button.style.fontSize = '20px';
        button.style.gridColumn = 'span 2';
        button.style.padding = '10px';
    }
    else if (name === 'X') {
        button.style.backgroundColor = 'yellow';
        button.style.color = 'black';
        button.style.fontSize = '20px';
        button.style.padding = '10px';
    }
    else if (name === 'C') {
        button.style.backgroundColor = 'red';
        button.style.color = 'black';
        button.style.fontSize = '20px';
        button.style.padding = '5px';
    }
    else {
        
        button.style.fontSize = '20px';
    }

    button.addEventListener('click', () => {
      
        if(name ==='='){
            display.value =eval(display.value);
        }
        else if(name ==="C"){
            display.value="";
        }
        else if(name ==="X"){
              display.value=display.value.slice(0,-1);
        }
       else if (name === "sqr") {
    display.value = Number(display.value) ** 2;
}
        else{
              display.value += name;
        }
    });

    calculator.appendChild(button);
});