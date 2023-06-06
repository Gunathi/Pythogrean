function Pythogrean(){
    let a = parseFloat(document.getElementById('Leg1').value);
    let b = parseFloat(document.getElementById('Leg2').value);

    document.getElementById('Leg3').value = (a**2 + b**2)**(0.5);
}