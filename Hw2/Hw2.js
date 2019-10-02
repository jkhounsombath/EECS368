//index.html
<html>
  <body>
      <form>
        Value 1: <input type= "text" id="Val1" oninput="addValues.updateValues()" ><br>
        Value 2: <input type= "text" id="Val2" oninput="addValues.updateValues()" ><br>
        <button type= "button" onclick="addValues.addEm()"> Add the values </button><br>
        Result:
        <p id= "result"></p>
      </form>
  <script src= "Hw2.js"></script>
  </body>
</html>
