	
		var arr = [];
		var roki = 0;
		
		function check() {
			document.getElementById("myform").addEventListener("submit", function (event) {
				event.preventDefault()
			});
			var tinput = document.getElementById("tinput").value;
			var dinput = document.getElementById("dinput").value;

			if (tinput == "" || dinput == "") {
				document.getElementById("status").innerText = "please complete the field";		

			} else {
				document.getElementById("myform").reset();
				document.getElementById("status").innerText = "";
				
				
			
				var info = {"text": tinput, "date": dinput };
				console.log(arr);
				arr.push(info);
				var myJSON = JSON.stringify(arr);
				localStorage.setItem("forminput", myJSON);
				
				// creat the elements
					var mydiv = document.createElement('div');
					var datepara = document.createElement('P');
					var textpara = document.createElement('P');
					var btn = document.createElement("button");
					var t = document.createTextNode(tinput);
					var p = document.createTextNode(dinput);
						datepara.appendChild(p);
						textpara.appendChild(t);
						mydiv.appendChild(textpara);
						mydiv.appendChild(datepara);
						mydiv.appendChild(btn);
							var mainbody= document.getElementById("mainbody");
							mainbody.appendChild(mydiv);
								mydiv.className = 'noteani notat main col-xm-12 col-sm-6 col-md-4 col-lg-3';
								datepara.className = 'para';
								textpara.className = 'textpara';
								btn.className = " glyphicon glyphicon-remove remove "
								btn.addEventListener("click" , removefunction);
								btn.id = roki;
								console.log(roki);
								roki++;
				
			};
		};

		function loading() {
			arr = JSON.parse(localStorage.getItem("forminput"));

			if (!arr) {
				arr = [];
							
			} else {
				roki=0;
				document.getElementById("mainbody").innerHTML="";
				for (i = 0; i < arr.length; i++) {
					var mydiv = document.createElement('div');
					var datepara = document.createElement('P');
					var textpara = document.createElement('P');
					var btn = document.createElement("BUTTON");
					var t = document.createTextNode(arr[i].text);
					var p = document.createTextNode(arr[i].date);
						datepara.appendChild(p);
						textpara.appendChild(t);
						mydiv.appendChild(textpara);
						mydiv.appendChild(datepara);
						mydiv.appendChild(btn);
							var mainbody= document.getElementById("mainbody");
							mainbody.appendChild(mydiv);
							document.body.appendChild(mainbody);
								mydiv.className = 'notat main col-xm-12 col-sm-6 col-md-4 col-lg-3';
								textpara.className = 'textpara';
								datepara.className = 'para';
								btn.className = " glyphicon glyphicon-remove remove";
								btn.addEventListener("click" , removefunction);
								btn.id=roki;
								console.log(roki);
								roki++;
						
				}
			}
		};

		 function removefunction(evt){
			var x =(this.id);
			var newarr = JSON.parse(localStorage.getItem("forminput"));
				newarr.splice(x,1);
			localStorage.forminput=JSON.stringify(newarr);
			var parent = this.parentNode;
			parent.classList.add("fadeout");
			setTimeout(function(){
				 parent.parentNode.removeChild(parent);
				 loading();
				}, 2600);
			
		};				
	
		