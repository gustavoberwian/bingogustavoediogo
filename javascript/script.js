var cont=0,v=0,ve=0,ven=0,venc=0,vence=0,nums,nu,n,nume,numer,num,cot=0;



function gerarTabela() {


  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

 	  if (this.readyState == 4 && this.status == 200 && cot==0) {
      nums=this.responseText;
      nums = nums.split(",");
      nums[0]=nums[0].replace("[", "");
      nums[24]=nums[24].replace("]", "");
      document.getElementsByTagName('main')[0].innerHTML+="<table><tr><td>"+nums[0]+"</td><td>"+nums[1]+"</td><td>"+nums[2]+"</td><td>"+nums[3]+"</td><td>"+nums[4]+"</td></tr><tr><td>"+nums[5]+"</td><td>"+nums[6]+"</td><td>"+nums[7]+"</td><td>"+nums[8]+"</td><td>"+nums[9]+"</td></tr><tr><td>"+nums[10]+"</td><td>"+nums[11]+"</td><td>"+nums[12]+"</td><td>"+nums[13]+"</td><td>"+nums[14]+"</td></tr><tr><td>"+nums[15]+"</td><td>"+nums[16]+"</td><td>"+nums[17]+"</td><td>"+nums[18]+"</td><td>"+nums[19]+"</td><tr><tr><td>"+nums[20]+"</td><td>"+nums[21]+"</td><td>"+nums[22]+"</td><td>"+nums[23]+"</td><td>"+nums[24]+"</td></tr></table>";
      cot++;


 		}

    else if (this.readyState == 4 && this.status == 200 && cot==1) {
      nu=this.responseText;
      nu = nu.split(",");
      nu[0]=nu[0].replace("[", "");
      nu[24]=nu[24].replace("]", "");
      document.getElementsByTagName('main')[0].innerHTML+="<table><tr><td>"+nu[0]+"</td><td>"+nu[1]+"</td><td>"+nu[2]+"</td><td>"+nu[3]+"</td><td>"+nu[4]+"</td></tr><tr><td>"+nu[5]+"</td><td>"+nu[6]+"</td><td>"+nu[7]+"</td><td>"+nu[8]+"</td><td>"+nu[9]+"</td></tr><tr><td>"+nu[10]+"</td><td>"+nu[11]+"</td><td>"+nu[12]+"</td><td>"+nu[13]+"</td><td>"+nu[14]+"</td></tr><tr><td>"+nu[15]+"</td><td>"+nu[16]+"</td><td>"+nu[17]+"</td><td>"+nu[18]+"</td><td>"+nu[19]+"</td><tr><tr><td>"+nu[20]+"</td><td>"+nu[21]+"</td><td>"+nu[22]+"</td><td>"+nu[23]+"</td><td>"+nu[24]+"</td></tr></table>";
      cot++;
 		}

    else if (this.readyState == 4 && this.status == 200 && cot==2) {
      n=this.responseText;
      n = n.split(",");
      n[0]=n[0].replace("[", "");
      n[24]=n[24].replace("]", "");
      document.getElementsByTagName('main')[0].innerHTML+="<table><tr><td>"+n[0]+"</td><td>"+n[1]+"</td><td>"+n[2]+"</td><td>"+n[3]+"</td><td>"+n[4]+"</td></tr><tr><td>"+n[5]+"</td><td>"+n[6]+"</td><td>"+n[7]+"</td><td>"+n[8]+"</td><td>"+n[9]+"</td></tr><tr><td>"+n[10]+"</td><td>"+n[11]+"</td><td>"+n[12]+"</td><td>"+n[13]+"</td><td>"+n[14]+"</td></tr><tr><td>"+n[15]+"</td><td>"+n[16]+"</td><td>"+n[17]+"</td><td>"+n[18]+"</td><td>"+n[19]+"</td><tr><tr><td>"+n[20]+"</td><td>"+n[21]+"</td><td>"+n[22]+"</td><td>"+n[23]+"</td><td>"+n[24]+"</td></tr></table>";
      cot++;
 		}

             else if (this.readyState == 4 && this.status == 200 && cot==3) {
                nume=this.responseText;
                  nume = nume.split(",");
                    nume[0]=nume[0].replace("[", "");
                     nume[24]=nume[24].replace("]", "");
                         document.getElementsByTagName('main')[0].innerHTML+="<table><tr><td>"+nume[0]+"</td><td>"+nume[1]+"</td><td>"+nume[2]+"</td><td>"+nume[3]+"</td><td>"+nume[4]+"</td></tr><tr><td>"+nume[5]+"</td><td>"+nume[6]+"</td><td>"+nume[7]+"</td><td>"+nume[8]+"</td><td>"+nume[9]+"</td></tr><tr><td>"+nume[10]+"</td><td>"+nume[11]+"</td><td>"+nume[12]+"</td><td>"+nume[13]+"</td><td>"+nume[14]+"</td></tr><tr><td>"+nume[15]+"</td><td>"+nume[16]+"</td><td>"+nume[17]+"</td><td>"+nume[18]+"</td><td>"+nume[19]+"</td><tr><tr><td>"+nume[20]+"</td><td>"+nume[21]+"</td><td>"+nume[22]+"</td><td>"+nume[23]+"</td><td>"+nume[24]+"</td></tr></table>";
      cot++;
      numer=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

 		}

    else if (this.readyState == 4 && this.status == 200 && cot==4) {
             numer=this.responseText;
                 numer = numer.split(",");
                    numer[0]=numer[0].replace("[", "");
                      numer[24]=numer[24].replace("]", "");
                        document.getElementsByTagName('main')[0].innerHTML+="<table><tr><td>"+numer[0]+"</td><td>"+numer[1]+"</td><td>"+numer[2]+"</td><td>"+numer[3]+"</td><td>"+numer[4]+"</td></tr><tr><td>"+numer[5]+"</td><td>"+numer[6]+"</td><td>"+numer[7]+"</td><td>"+numer[8]+"</td><td>"+numer[9]+"</td></tr><tr><td>"+numer[10]+"</td><td>"+numer[11]+"</td><td>"+numer[12]+"</td><td>"+numer[13]+"</td><td>"+numer[14]+"</td></tr><tr><td>"+numer[15]+"</td><td>"+numer[16]+"</td><td>"+numer[17]+"</td><td>"+numer[18]+"</td><td>"+numer[19]+"</td><tr><tr><td>"+numer[20]+"</td><td>"+numer[21]+"</td><td>"+numer[22]+"</td><td>"+numer[23]+"</td><td>"+numer[24]+"</td></tr></table>";
                        cot++;
 		}
  };

  xhttp.open("GET", "geranum.php", true);
  xhttp.send();
  return cot;
}
        var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {



  if (this.readyState == 4 && this.status == 200) {

    num=this.responseText;

    num = num.split(",");

    num[0]=num[0].replace("[", "");

    num[99]=num[99].replace("]", "");

  }
}
    xhttp.open("GET", "aleatorio.php", true);
      xhttp.send();
    function gerarNumero() {

    if (cot==0) {

    alert("Nenhuma tabela foi gerada!");

  }


  else{



    if (cot==1) {

      nu=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      nume=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      numer=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


    }
    else if (cot==2) {

      n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      nume=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      numer=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    }

    else if (cot==3) {

      nume=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      numer=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    }
    else if (cot==4) {

      numer=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    }
    if (cot==1&&cont==50) {

      alert("O jogo acabou! Você perdeu!");

    }
    else{

      document.getElementsByClassName('ng')[0].innerHTML+="<p>"+num[cont]+"</p>";

      if (cont>11) {

        document.getElementsByClassName('ng')[0].style.height="200px";

      }

      if (cont>23) {

        document.getElementsByClassName('ng')[0].style.height="300px";

      }
      if (cont>36) {

        document.getElementsByClassName('ng')[0].style.height="400px";

      }
      if (cont>49) {

        document.getElementsByClassName('ng')[0].style.height="500px";
      }

      if (cont>62) {

        document.getElementsByClassName('ng')[0].style.height="600px";

      }
      if (cont>75) {

        document.getElementsByClassName('ng')[0].style.height="700px";

      }
      if (cont>88) {

        document.getElementsByClassName('ng')[0].style.height="800px";
      }
      var tabela;

      for (var i = 0; i < nums.length; i++) {

        if (nums[i]==num[cont]) {

          nums[i]='X';

          document.getElementsByTagName('table')[0].innerHTML="<table><tr><td>"+nums[0]+"</td><td>"+nums[1]+"</td><td>"+nums[2]+"</td><td>"+nums[3]+"</td><td>"+nums[4]+"</td></tr><tr><td>"+nums[5]+"</td><td>"+nums[6]+"</td><td>"+nums[7]+"</td><td>"+nums[8]+"</td><td>"+nums[9]+"</td></tr><tr><td>"+nums[10]+"</td><td>"+nums[11]+"</td><td>"+nums[12]+"</td><td>"+nums[13]+"</td><td>"+nums[14]+"</td></tr><tr><td>"+nums[15]+"</td><td>"+nums[16]+"</td><td>"+nums[17]+"</td><td>"+nums[18]+"</td><td>"+nums[19]+"</td><tr><tr><td>"+nums[20]+"</td><td>"+nums[21]+"</td><td>"+nums[22]+"</td><td>"+nums[23]+"</td><td>"+nums[24]+"</td></tr></table>";
          v++;

          if (v==25) {

            document.getElementsByTagName('table')[0].innerHTML="<h1>BINGO!</h1>";
            alert("Jogador 1 ganhou!");
          }

        }

        if (cot>=1) {

          if (nu[i]==num[cont]) {

            nu[i]='X';

            document.getElementsByTagName('table')[1].innerHTML="<table><tr><td>"+nu[0]+"</td><td>"+nu[1]+"</td><td>"+nu[2]+"</td><td>"+nu[3]+"</td><td>"+nu[4]+"</td></tr><tr><td>"+nu[5]+"</td><td>"+nu[6]+"</td><td>"+nu[7]+"</td><td>"+nu[8]+"</td><td>"+nu[9]+"</td></tr><tr><td>"+nu[10]+"</td><td>"+nu[11]+"</td><td>"+nu[12]+"</td><td>"+nu[13]+"</td><td>"+nu[14]+"</td></tr><tr><td>"+nu[15]+"</td><td>"+nu[16]+"</td><td>"+nu[17]+"</td><td>"+nu[18]+"</td><td>"+nu[19]+"</td><tr><tr><td>"+nu[20]+"</td><td>"+nu[21]+"</td><td>"+nu[22]+"</td><td>"+nu[23]+"</td><td>"+nu[24]+"</td></tr></table>";
            ve++;

            if (ve==25) {

              document.getElementsByTagName('table')[1].innerHTML="<h1>BINGO!</h1>";

              alert("Jogador 2 ganhou!");
            }

          }

        }
        if (cot>=2) {

          if (n[i]==num[cont]) {

            n[i]='X';

            document.getElementsByTagName('table')[2].innerHTML="<table><tr><td>"+n[0]+"</td><td>"+n[1]+"</td><td>"+n[2]+"</td><td>"+n[3]+"</td><td>"+n[4]+"</td></tr><tr><td>"+n[5]+"</td><td>"+n[6]+"</td><td>"+n[7]+"</td><td>"+n[8]+"</td><td>"+n[9]+"</td></tr><tr><td>"+n[10]+"</td><td>"+n[11]+"</td><td>"+n[12]+"</td><td>"+n[13]+"</td><td>"+n[14]+"</td></tr><tr><td>"+n[15]+"</td><td>"+n[16]+"</td><td>"+n[17]+"</td><td>"+n[18]+"</td><td>"+n[19]+"</td><tr><tr><td>"+n[20]+"</td><td>"+n[21]+"</td><td>"+n[22]+"</td><td>"+n[23]+"</td><td>"+n[24]+"</td></tr></table>";
            ven++;

            if (ven==25) {

              document.getElementsByTagName('table')[2].innerHTML="<h1>BINGO!</h1>";
              alert("Jogador 3 ganhou!");

            }

          }

        }
        if (cot>=3) {

          if (nume[i]==num[cont]) {

            nume[i]='X';

            document.getElementsByTagName('table')[3].innerHTML="<table><tr><td>"+nume[0]+"</td><td>"+nume[1]+"</td><td>"+nume[2]+"</td><td>"+nume[3]+"</td><td>"+nume[4]+"</td></tr><tr><td>"+nume[5]+"</td><td>"+nume[6]+"</td><td>"+nume[7]+"</td><td>"+nume[8]+"</td><td>"+nume[9]+"</td></tr><tr><td>"+nume[10]+"</td><td>"+nume[11]+"</td><td>"+nume[12]+"</td><td>"+nume[13]+"</td><td>"+nume[14]+"</td></tr><tr><td>"+nume[15]+"</td><td>"+nume[16]+"</td><td>"+nume[17]+"</td><td>"+nume[18]+"</td><td>"+nume[19]+"</td><tr><tr><td>"+nume[20]+"</td><td>"+nume[21]+"</td><td>"+nume[22]+"</td><td>"+nume[23]+"</td><td>"+nume[24]+"</td></tr></table>";
            venc++;

            if (venc==25) {

              document.getElementsByTagName('table')[3].innerHTML="<h1>BINGO!</h1>";
              alert("Jogador 4 ganhou!");

            }

          }

        }

        if (cot>=4) {

          if (numer[i]==num[cont]) {

            numer[i]='X';

            document.getElementsByTagName('table')[4].innerHTML="<table><tr><td>"+numer[0]+"</td><td>"+numer[1]+"</td><td>"+numer[2]+"</td><td>"+numer[3]+"</td><td>"+numer[4]+"</td></tr><tr><td>"+numer[5]+"</td><td>"+numer[6]+"</td><td>"+numer[7]+"</td><td>"+numer[8]+"</td><td>"+numer[9]+"</td></tr><tr><td>"+numer[10]+"</td><td>"+numer[11]+"</td><td>"+numer[12]+"</td><td>"+numer[13]+"</td><td>"+numer[14]+"</td></tr><tr><td>"+numer[15]+"</td><td>"+numer[16]+"</td><td>"+numer[17]+"</td><td>"+numer[18]+"</td><td>"+numer[19]+"</td><tr><tr><td>"+numer[20]+"</td><td>"+numer[21]+"</td><td>"+numer[22]+"</td><td>"+numer[23]+"</td><td>"+numer[24]+"</td></tr></table>";
            vence++;

            if (vence==25) {

              document.getElementsByTagName('table')[4].innerHTML="<h1>BINGO!</h1>";
              alert("Jogador 5 ganhou!");

            }

          }

        }

      }

      cont++;
    }

  }

}


