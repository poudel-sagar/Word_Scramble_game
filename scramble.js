//scrumble game
<html>
<head>

<title>word scramble game</title>
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
<style> 
*{ margin: 0; padding:0; box-sizing: border-box;}
header{
    width: 100%;
    line-height: 15vh;
    background-color: #20bfcb;
}
h1{
text-align: center;
color: white;
font-size: 1.8rem;
font-family:'Carter One',cursive;
text-transform: uppercase;
letter-spacing: 15px;
text-shadow: 0 1px 0 #efefef,
             0 1px 0 #efefef,
             0 1px 0 #efefef,
             0 1px 0 #efefef,
             0 30px 5px rgba(0,0,0,.1);


}
section{
    height:85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#7bed9f;

}

.gameArea{
    width: 50%;
    height:400px;
    padding: 20px 0;
    background-color:#2ed573;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family:'Source Sans Pro', sans-serif;
    box-shadow: 0 8px 6px -6px black;
}
h3{
    text-align: center;
    font-size: 1.5rem;
}
input{
width: 40%;
padding: 15px 0;
text-align:center;
border-radius: 25px;
outline: 25px;
border: none;
background-color: #dff9fb;
color:black;
margin: 2rem 0;
font-size: 1.1rem;
}

button{
    font-size: 1rem;
    cursor:pointer;
    outline:none;
    border:#2f3542;
    margin-top: 10px;
    color:#eb4d4b;

}

button.btn{
    font-weight:600;
    padding:1rem 2rem;
    background:white;
    text-transform:uppercase;
    transition-property:all;
    transition-duration: 0.5s;
    transition-timing-function:cubic-bezier(0.65.-0.25,0.)
}

button.btn:hover,button.btn:focus, button.btn:active{
    letter-spacing: 0.125rem;
    word-spacing: 0.2rem;
}
.hideen{
    display:none;
}

</style>
</head>
<body>
    <header>
        <h1>Guess the word game</h1>
    </header>

    <section>
        <div class="gameArea">
            <h3 class="msg"> </h3>
            <input type="text" class="hidden">
            <button class="btn">click here to start</button>



        </div>
    </section>
<script>
    const msg=document.querySelector('.msg');
    const guess=document.querySelector('input');
    const btn=document.querySelector('.btn');
    let play = false;
    let newWords = "";
    let randomWords="";
    let sWords = ['python','javascript','c++','php','java','c#','html','css','reactjs','angular','swift','android','sql'];

    const createNewWords = ()=>{
        let ranNum = Math.floor(Math.random() * sWords.length);
        console.log(random);
        let newTemoSwords= sWords[ranNum];
        console.log(newTempSwords.split(""));
        return newTempSwords;

    }
const scrambleWords=(arr) =>{
    for(let i=arr.length-1;i>0;i++){
        let temp = arr[i];
        console.log(temp);
       let j=Math.floor(Math.random()*(i+1));
       console.log(i);
       console.log(j);
       arr[i]=arr[j];
       arr[j]=remp;
    }
    return arr;

}

    btn.addEventListener('click', function()
    {
        if(!play)
        {
            play=true;
            btn.innerHTML = "GUESS";
            guess.classList.toggle('hidden');
            newWords=createNewWords();
            randomWords=scrambleWords(newWords.split("")).join("");
            console.log(randWords.join(""));
            msg.innerHTML='Guess the word: ${randomWords}';


        }
        else{
            let tempWord=guess.value;
            if(tempWord==newWords)
            {
                console.log('correct');
                play =false;
                msg.innerHTML='Awesome it is correct dude.it is $(randWords)';
                btn.innerHTML="Start Again";
                guess.classList.toggle('hidden');
                guess.value="";

            }
            else{
                console.log('incorrect');
                msg.innerHTML = 'SOrry it is ${newWords}';
            }

            }
        

    }

</script>


</body>



</html>
