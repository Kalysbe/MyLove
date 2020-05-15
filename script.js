//raiting
        let box = document.querySelectorAll('.ulrai li');
        let num = document.querySelector('.btn');
        let newBox2;
        let newEvent;
        let newBox = [...box]


        const chan = (input) => {
            
        if (input.type === "mouseover") {
        newEvent=event.target.id
        newBox2 = newBox.slice(0,newEvent)
        console.log(newBox2)
        newBox2.forEach(item => {
            item.style.background="blue"
        })
            num.innerHTML=newEvent
        } else  {
        newBox.forEach(item => {
            item.style.background="red"
        })
            num.innerHTML=0
        }
        }

        box.forEach((item, index) => {
            item.addEventListener('mouseover', chan)
            item.addEventListener('mouseout', chan)
            
  })

//Input range

let Range1 = document.querySelector('.range')
let rangeNum = document.querySelector('.range-value')
Range1.oninput = () => {
    rangeNum.innerHTML = Range1.value
    rangeNum.style.left = Range1.value*2.3 + "px"
}
 


//addElement
        let pros = document.querySelector('.AddOut')
        crt = 5;
        const addDiv = () => {
            crt++
        val0 = document.getElementById('elem4').value;
        let newDiv = document.createElement(val0)
        //newDiv.classList.add('black')
        newDiv.addEventListener('mouseover',chan)
        newDiv.addEventListener('mouseout',chan)
        newDiv.id = crt
        pros.appendChild(newDiv)
        val1 = document.getElementById('elem5').value;
        val2 = document.getElementById('elem6').value;
        val3 = document.getElementById('elem7').value;
        newDiv.style.height=val1 +'px'
        newDiv.style.width=val2 +'px'
        newDiv.style.background=val3
        newDiv.style.display = 'inline-block'
        newDiv.style.margin = 5 + 'px'
        newDiv.style.transition= 0.5 + 's'
        newBox.push(newDiv)
        };

//Calculator 


let Money = document.querySelectorAll('.money');

const calculator = (e) => {
   if(e.target == Money[0]) {
       Money[1].value = Money[0].value/70
   } else {
    Money[0].value = Money[1].value*70
   }
    
}
Money.forEach((item) => {
    item.addEventListener('input',calculator)
})

//Slider

let     slideIndex = 0,
        slides = document.querySelectorAll('.slider-item'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
        
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex].style.display = 'block';

    const SliderBtn = (event) => {
      if(event == 'prev') {
    slideIndex--;
    
      } else if (event == 'next') {
          slideIndex++;
      }

      if (slideIndex > slides.length-1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length-1;
    }

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex].style.display = 'block';

        dots.forEach((item) => item.classList.remove('dot-active'));
        dots[slideIndex].classList.add('dot-active');
  }

  
 
  //SliderBtn(slideIndex)

 dotsWrap.onclick = (event) => {
    for (let i = 0; i < dots.length ; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i]) {
            SliderBtn(slideIndex = i);
        }
    }
};


   // Крестики-нолики
    let Block = document.querySelectorAll('.block');
    let restart = document.querySelector('.restart')

    n=0;
    const blo = (event) => {
      if(event.target.className == "block"&& event.target.textContent == "") {
          if(n%2==0) {
          event.target.innerHTML = "0"
      } else {
          event.target.innerHTML = "X"
      }
      n++;
    }
 newBlock = [...Block];
 v = newBlock
 ;

let winNumber = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]


 
 //Выигрыш Крестиков
if (v[0].innerHTML === "X" && v[1].innerHTML === "X" && v[2].innerHTML === "X" || 
 v[3].innerHTML === "X" && v[4].innerHTML === "X" && v[5].innerHTML === "X" || 
 v[6].innerHTML === "X" && v[7].innerHTML === "X" && v[8].innerHTML === "X" || 
 v[0].innerHTML === "X" && v[3].innerHTML === "X" && v[6].innerHTML === "X" || 
 v[1].innerHTML === "X" && v[4].innerHTML === "X" && v[7].innerHTML === "X" || 
 v[2].innerHTML === "X" && v[5].innerHTML === "X" && v[8].innerHTML === "X" || 
 v[0].innerHTML === "X" && v[4].innerHTML === "X" && v[8].innerHTML === "X" || 
 v[6].innerHTML === "X" && v[4].innerHTML === "X" && v[2].innerHTML === "X") 

{alert('Вин Х ')}
// Выигрыш ноликов

else if (v[0].innerHTML === "0" && v[1].innerHTML === "0" && v[2].innerHTML === "0" ||
 v[3].innerHTML === "0" && v[4].innerHTML === "0" && v[5].innerHTML === "0" || 
 v[6].innerHTML === "0" && v[7].innerHTML === "0" && v[8].innerHTML === "0" || 
 v[0].innerHTML === "0" && v[3].innerHTML === "0" && v[6].innerHTML === "0" || 
 v[1].innerHTML === "0" && v[4].innerHTML === "0" && v[7].innerHTML === "0" || 
 v[2].innerHTML === "0" && v[5].innerHTML === "0" && v[8].innerHTML === "0" || 
 v[0].innerHTML === "0" && v[4].innerHTML === "0" && v[8].innerHTML === "0" || 
 v[2].innerHTML === "0" && v[4].innerHTML === "0" && v[6].innerHTML === "0")  
 {alert('Вин О')}  
  if (n===9) {
    vin.innerHTML = 'Ничья'
}
}


   

const res = () => {
   v.forEach((item) => {
       item.innerHTML=''
   })
}


Block.forEach((item) => {
        item.addEventListener('click',blo);
 });

 restart.addEventListener('click',res)


//LocalStorage 
var todoList = [];
	

	if ( localStorage.getItem('todo') != undefined ){
		todoList = JSON.parse(localStorage.getItem('todo') );
		out();
	}





	document.getElementById('add').onclick = function(){
		var inp    = document.getElementById('in').value;

		var temp   = {};
		temp.todo  = inp;
		temp.check = false;

		var i = todoList.length;
		todoList[i] = temp;

		out();
		// checkPruf();

		localStorage.setItem('todo', JSON.stringify(todoList) );
	}

	function out () {
		var out ='';

		for (var key in todoList) {

			if ( todoList[key].check == true ) {
				out += '<input type="checkbox" class="che" checked>'
			} else {
				out += '<input type="checkbox" class="che" >'
			}

			out += todoList[key].todo +'<br>';
		}
		document.getElementById('out-stor').innerHTML = out;
	}



    //Slider 2

    let number02 = 0;

    let slideDiv = document.querySelectorAll('.tar');
    document.querySelector('.btn02').onclick = () => {
        slideDiv[number02].classList.remove('tar-active')
        if(number02 +1 == slideDiv.length) {
            number02=0
        } else {
            number02++
        }
        slideDiv[number02].classList.add('tar-active')
    }
 
    //clock 
    let sec = document.querySelector('.sec');
    let min = document.querySelector('.min');
    let hour = document.querySelector('.hour')
    
    tsec = 0;
    tmin = 0;
    thour=0;

    const sclock = () => {
        if (tsec+6 == 366) {
            tsec = 0;
            tmin = tmin + 6
        } 
        else if (tmin == 360) {
            tmin = 0;
            thour = thour + 30;
        if ( thour == 360) {
            thour = 0;
        }
        }
        sec.style.transform = 'rotate('+tsec+'deg)';
        min.style.transform = 'rotate('+tmin+'deg)';
        hour.style.transform = 'rotate('+thour+'deg)';
        tsec = tsec+6
    }
    setInterval(sclock,1000 )

    //vkladki

    let Tab = document.querySelectorAll('.tab-h');
    const Tab1 = (event) => {
        let dataTab = event.target.getAttribute('data-tab')
        Tab.forEach((item) => {
            item.classList.remove("active")
        })
        event.target.classList.add("active")

        let Tshow = document.querySelectorAll('.show')

        for (i=0;i<Tshow.length;i++) {
            if (dataTab == i) {
                Tshow[i].style.display = 'block'
            }  else {
                Tshow[i].style.display = 'none'
            }
        }
    }
    Tab.forEach((item) => {
        item.addEventListener('click',Tab1)
    })
    let Menu = document.querySelector('.tab') 
  
    const Big = (event) => {
        if(event.type == 'mouseover' && window.pageYOffset > 0) {
        Menu.style.top = 0 + "px"
        } 
        else if (event.type == 'mouseout' && window.pageYOffset > 0) {
            Menu.style.top = -85 + "px" 
        }
    }


    Menu.addEventListener('mouseover',Big)
    Menu.addEventListener('mouseout',Big)
                        

    window.addEventListener('scroll', function() {
        if(pageYOffset == 0) {
            Menu.style.top = 0 + "px"
        } else if (pageYOffset > 100) {
            Menu.style.top = -85 + "px" 
        };
      });
    //Contact
     let sklad = [
         {
             "name":"Alex",
             "age":22,
             "email":"test@mail.ru",
             "avatar": "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/madcampos\/128.jpg",
         },
         {
            "name":"Jack",
            "age":32,
            "email":"tes2t@mail.ru",
            "avatar": "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/michaelcolenso\/128.jpg",
        }
     ]
     

     let Out = document.getElementById('out');
    let Div,Name,Button12
    for (i=0;i<sklad.length;i++) {
       
        let Div = document.createElement('div')
        let Name = document.createElement('h3')
        let Button12 = document.createElement('button')
        let Input = document.createElement('input')

        Div.classList = 'pantera'
      
        Button12.classList= 'Button-conta'
        Button12.innerHTML="Изменить"
        Input.placeholder = "Введите имя"

        Div.appendChild(Name)
        Div.appendChild(Input)
        Div.appendChild(Button12)
        Out.appendChild(Div)

        Name.innerHTML = sklad[i].name
   
    Button12.onclick = () => {    
        Name.innerHTML = Input.value    
   }
  
    }
  


    //Прокрутка
     let scrolled;
     let timer;
    
        const ButtonScr = (event) => {
            if(event == 'top') {
             scrolled =  window.pageYOffset;
            Scroll1();
            }
            else if (event == 'bottom') {
                scrolled =  window.pageYOffset;
                Scroll2();
            }
        }
            const Scroll1 = () => {
                if(scrolled > 0) {  
                    window.scrollTo(0, scrolled)
                    scrolled = scrolled - 30;
                    requestAnimationFrame(Scroll1)
                }else {
                    clearTimeout(timer)
                    window.scrollTo(0,0)
                }
             }
             requestAnimationFrame(Scroll1)

             const Scroll2 = () => {
             if (scrolled < 760) {
                    window.scrollTo(0, scrolled)
                    scrolled = scrolled + 30;
                    timer = setTimeout(Scroll2,50)
             }
             }

        
        
//Угадай число
let randomNum = Math.floor(10*Math.random())
console.log(randomNum)
let count = 3;
document.querySelector(".check-button").onclick = () => {
    
     GameValue = document.querySelector('.game-value').value
     GameValue = Number(GameValue)
     CheckWin = document.querySelector(".checkwin");
         if (GameValue === randomNum) {
            CheckWin.innerHTML= "Красавчик,угадал" 
          }
         else if (GameValue > randomNum) {
           CheckWin.innerHTML= "Больше"
        } else {
           CheckWin.innerHTML= "Меньше"
        }
        count = count - 1;
        document.querySelector(".attempt").innerHTML = "Осталось попыток: " + count;
       
        console.log(count)
        if (count == 0 && GameValue !== randomNum) {
            alert("Вы проиграли,игра начинается заново")
            location.reload();
        }
}


        
//Search

document.querySelector('.button-search').onclick = function () {
    let val = document.getElementById('elastic').value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                    
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
     else {
         elasticItems.forEach(function (elem) {
             elem.classList.remove('hide');  
                 
         });
     }
 
}



function insertMark(s, p, l) {
    return s.slice(0, p) + '<mark>' + s.slice(p, p + l) + '</mark>' + s.slice(p + l);
}