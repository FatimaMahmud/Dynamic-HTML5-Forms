function adds(){
		
		}
		
		function addingForm(type) {

			//Create an input type dynamically.
			//var element = document.createElement("input");
			var element1 = document.createElement("form");
			//Assign different attributes to the element.
			element.setAttribute("type", type);
			element.setAttribute("value", type);
			element.setAttribute("name", type);

			var foo = document.getElementById("fooBar");

			//Append the element in page (in span).
			foo.appendChild(element);

		}
		
		function promptMsg(){
		var name = prompt("Enter the Form ID","type name");
		var element1 = document.createElement('FORM');
		element1.name='myForm';
		element1.method='POST';
		element1.action='http://www.another_page.com/index.htm';
		
		button1=document.createElement('INPUT');
		button1.type='button';
		button1.name='myInput';
		button1.value='Name input';
		button1.onclick=function(){
								NameInputID = prompt("Enter the Name Input id","type input");
								text=document.createElement('INPUT');
								text.type='text';
								text.name='nameinput';
								text.value='Name';
								text.id='Name';
								
								element1.appendChild(text);
						};
		
		
		
		button1.id='';
		
		radiobox=document.createElement('INPUT');
		radiobox.type= "Button";
		radiobox.value="Radio Button";
		radiobox.onclick=function(){
									createRadioButton = prompt("Enter the radio button id","type input");
									checkB=document.createElement('INPUT');
									checkB.type='radio';
									checkB.name='myInput1';
									checkB.value='Radio1';
									element1.appendChild(checkB);
									};
									
		button2=document.createElement('INPUT');
		button2.type='button';
		button2.name='myInput';
		button2.value='Password Input';
		button2.onclick= function() {
							PassInputID = prompt("Enter the Password id","type input");
							
							password=document.createElement('INPUT');
							password.type='password';
							password.name='passinput';
							password.value='fsdfs';
							password.id='password';
							
							
							element1.appendChild(password);
							
							};
		
		button2.id='';
		
		//button1.setAttribute("id", NameInputID);
		//button2.setAttribute("id", PassInputID);
		
		element1.appendChild(button1);
		element1.appendChild(button2);
		element1.appendChild(radiobox);
		
		
		
		
		
		Number=document.createElement('INPUT');
		Number.type='button';
		Number.onclick=function(){
		createRadioButton = prompt("Enter the radio button id","type input");
		checkB=document.createElement('INPUT');
		Num.type='number';
		Num.name='Number';
		Num.value='Number';
		element1.appendChild(Num);
		};
		
		var foo1 = document.getElementById("fooBar1");
		foo1.appendChild(element1);
		
		}
				