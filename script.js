document.write('Hello world!');

  function sayHello(){
    var response = prompt('What is your name?');
    alert('Hello ' + response + ', welcome to the world!');
  };

  function add(a,b){
    return a + b;
  }
  console.log(add(20,40));
  console.log(add(654,569827));

  function showTopic(){
    var x = document.getElementById('demo');
    x.style.fontSize = "55px";
    x.style.color = 'red';

  }
