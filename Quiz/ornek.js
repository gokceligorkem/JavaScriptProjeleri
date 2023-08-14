// OOP: Nesne Tabanlı Programlama

const uı=new UI();
const quiz=new Quiz(sorular);

uı.btn_start.addEventListener("click",function(){
    uı.quiz_box.classList.add("active")
    startTimer(10);
    startTimerLine();
    uı.SorularıGoster(quiz.soruGetir());
    uı.SoruSayısınıGoster(quiz.soruIndex+1,quiz.sorular.length)
    document.querySelector(".next_btn").classList.remove("show")
    
})




function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterline);
    let cevap=option.querySelector("span b").textContent;
    let soru=quiz.soruGetir();
    
    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogrucevapSayısı +=1;
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend",uı.corretIcon)
    }
    else{
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend",uı.incorretIcon)
    }
    for(let i=0;i<uı.option_list.children.length;i++){
    uı.option_list.children[i].classList.add("disable")
    }
   uı.next_btn.classList.add("show")

}

uı.next_btn.addEventListener("click",function(){
   
    if(quiz.sorular.length !=quiz.soruIndex + 1){
        uı.quiz_box.classList.add("active")
        quiz.soruIndex +=1;
        clearInterval(counter);
        startTimer(10)
        clearInterval(counterline);
        startTimerLine();
       uı.  SorularıGoster(quiz.soruGetir());
        uı.SoruSayısınıGoster(quiz.soruIndex+1,quiz.sorular.length)
        uı.next_btn.classList.remove("show")
        
    }
    else{
        clearInterval(counter);
        uı.quiz_box.classList.remove("active")
        uı.score_box.classList.add("active")
        uı.skoruGoster(quiz.sorular.length,quiz.dogrucevapSayısı)
    }   
})

uı.btn_quit.addEventListener("click",function(){
    window.location.reload();
})
uı.btn_replay.addEventListener("click",function(){
    quiz.soruIndex=0;
    quiz.dogrucevapSayısı=0;
    uı.btn_start.click();
    uı.score_box.classList.remove("active")
})
let counter;
function startTimer(time){
    counter=setInterval(timer,1000)
    function timer(){
        uı.time_second.textContent=time;
        time--; 
        if(time<0){
            clearInterval(counter);
            uı.time_text.textContent="Süre bitti"

            let cevap=quiz.soruGetir().dogruCevap;
            for(let option  of uı.option_list.children){
                if(option.querySelector("span b").textContent==cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",uı.corretIcon)
                    
                }
                option.classList.add("disable");
            }
            uı.next_btn.classList.add("show");
        }
    }
}
let counterline;
function startTimerLine(){
    let line_time=0;
    counterline = setInterval(timer,20);
    function timer(){
        line_time +=1;
        uı.time_line.style.width =line_time+ "px";
        if(line_time>540){
            clearInterval(counterline)
        }
    }
}