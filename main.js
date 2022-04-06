const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) +32 );
        return fahrenheit;
    }
    const celToKel = (cel) => {
        let kelvin = Math.round(cel + 273.15);
        return kelvin;
    }

    const fahToCel = (fah) => {
        let celcius = Math.round((fah - 32) * 5/9 );
        return celcius;
    }
    const fahToKel = (fah) => {
        let kelvin = Math.round((fah - 32) / 1.8);
        return kelvin;
    }

    const kelToCel = (kel) => {
        let celcius = Math.round(kel - 273.15);
        return celcius;
    }
    const kelToFah = (kel) => {
        let fahrenheit = Math.round(((kel - 273.15) * 1.8) + 32);
        return fahrenheit;
    }

    let result1, result2;
    
     if(valueTemp == 'cel'){
         document.getElementById('cel').innerHTML = numberTemp+" "+'C';
         result1 = celToFah(numberTemp);
         document.getElementById('fah').innerHTML = `${result1} F`;
         result2 = celToKel(numberTemp);
         document.getElementById('kel').innerHTML = ` ${result2} K`;
     }
     else if(valueTemp == 'fah'){
        document.getElementById('fah').innerHTML = numberTemp+" "+'F';
        result1 = fahToCel(numberTemp);
        document.getElementById('cel').innerHTML = ` ${result1} C`;
        result2 = fahToKel(numberTemp);
        document.getElementById('kel').innerHTML = `${result2} K`;

     }
     else{
        document.getElementById('kel').innerHTML = numberTemp+" "+'K';
        result1 = kelToCel(numberTemp);
        document.getElementById('cel').innerHTML = `${result1} C`;
        result2 = kelToFah(numberTemp);
        document.getElementById('fah').innerHTML = `${result2} F`;

     }
}