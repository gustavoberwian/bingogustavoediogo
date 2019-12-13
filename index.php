<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>BINGO</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./javascript/script.js" charset="utf-8"></script>
  </head>
  <body>
    <header>
      <h1>Bingo Online</h1>
    </header>
    <main>
      <button type="button" name="gera" id="geraTabela" onclick="gerarTabela()">Mostrar tabela</button>
      <button type="button" name="num" id="geranum" onclick="gerarNumero()">Sortear número</button>
      <h2>SORTEIO:</h2>
      <div class="ng">

      </div>
    </main>
    <footer>
      <h1>Regras:</h1>
      <div class="sing">
        <p>Para jogar aperte o botão "GERAR TABELA" apenas uma vez e, logo após, aperte em "GERAR NÚMEROS" para sortear os números do bingo.</p>
        <p>Serão sorteados 50 números, se você não houver ganhado neste espaço de tempo, perderá o jogo.</p>
      </div>
    </footer>
  </body>
</html>
