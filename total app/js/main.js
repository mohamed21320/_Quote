function Qoutes(){

    var writterImage=[
'<img src="image/Wayne Gretzy.jpg" alt="Wayne Gretzy">',
'<img src="image/Nelson Mandela.jpg" alt="Nelson Mandela">',
'<img src="image/Elbert Hubbard.jpg" alt="Elbert Hubbard">',
'<img src="image/Epictetus.jpg" alt="Epictetus">',
'<img src="image/Jim Rohn.jpg" alt="Jim Rohn">',

    ]
    var arrOfQoutes=[
        "You miss 100% of the shots you don't take.<br/>--Wayne Gretzy",
    
        "Resentment is like drinking poison and waiting for your enemies to die.<br/>--Nelson Mandela",
    
        "Do not take life too seriously. You will not get out alive.<br/>--Elbert Hubbard",
    
        "It's not what happens to you, but how you react to it that matters.<br/>--Epictetus",
        
        "Beware of what you become in pursuit of what you want.<br/>--Jim Rohn",
    ]

    var num= Math.floor(Math.random()*arrOfQoutes.length);
    document.getElementById("qoute-image").innerHTML=(writterImage[num]);

    document.getElementById("demo").innerHTML=(arrOfQoutes[num]);
}
