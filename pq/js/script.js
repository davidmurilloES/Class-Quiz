
/* Loading functions */

function openDelayUser(){

  setTimeout(function (){       /* function that adds a time delay on pages being loaded */
        window.location.href = "../view/quizHomepage.php";}, 2000);
}


function incorrectUserDelay(){

  setTimeout(function (){       /* function that adds a time delay on pages being loaded */
        window.location.href = "../index.php";}, 2000);
}

function logoutUser(){

  $.ajax({                      /* ajax call that runs the logoutProcess web service which clears all session varibles that were set */
    url: '../controller/logoutProcess.php',
    success: function logout(){
      window.location.href = "../index.php";
    }
  });
}


/*    Show/Hide Functions */

function openStats(){       /* All of the show/hide functions just determine which elements are meant to be rendered */
  document.getElementById('regiButton').style.display = "none";
  document.getElementById('loginButton').style.display = "none";
  document.getElementById('regiContainer').style.display = "none";
  document.getElementById('regiLogin').style.display = "none";
  document.getElementById('statsContainer').style.display = "block";
  document.getElementById('goBackStatsButton').style.display = "inline-block";
  document.getElementById('statsButton').style.display = "none";
}

function displayRegi(){
  document.getElementById('regiButton').style.display = "none";
  document.getElementById('loginButton').style.display = "none";
  document.getElementById('regiContainer').style.display = "block";
  document.getElementById('statsButton').style.display = "none";
}

function displayLogin(){
  document.getElementById('regiButton').style.display = "none";
  document.getElementById('loginButton').style.display = "none";
  document.getElementById('loginContainer').style.display = "block";
  document.getElementById('regiLogin').style.display = "block";
  document.getElementById('statsButton').style.display = "none";
}

function goBackRegi(){
  document.getElementById('regiButton').style.display = "inline-block";
  document.getElementById('loginButton').style.display = "inline-block";
  document.getElementById('regiContainer').style.display = "none";
  document.getElementById('statsButton').style.display = "inline-block";
}

function goBackLogin(){
  document.getElementById('regiButton').style.display = "inline-block";
  document.getElementById('loginButton').style.display = "inline-block";
  document.getElementById('loginContainer').style.display = "none";
  document.getElementById('statsButton').style.display = "inline-block";
}

function goBackStats(){
  document.getElementById('regiButton').style.display = "inline-block";
  document.getElementById('loginButton').style.display = "inline-block";
  document.getElementById('statsContainer').style.display = "none";
  document.getElementById('regiLogin').style.display = "block";
  document.getElementById('statsButton').style.display = "inline-block";
  document.getElementById('goBackStatsButton').style.display = "none";
}

/* AJAX */

function addUserAjax(){

  $.ajax({                          /* ajax call that enable the user to register an account through a web service, also has a time delay animation for the confirmation */
    url: './controller/addUserProcess.php',
    method: 'POST',
    data: $('#regi').serialize(),
    success: function confirmUserAdded(){

      document.getElementById('regi').reset();
      document.getElementById('regiButton').style.display = "inline-block";
      document.getElementById('loginButton').style.display = "inline";
      document.getElementById('statsButton').style.display = "inline";
      document.getElementById('regiContainer').style.display = "none";
      $("#confirm").fadeIn().delay(1500).fadeOut().html("Register Successful");

      }
  });
}

/*    Insert Data AJAX     */

function insertQandA(radioQuestion, radioAnswer){
    $.post({                      /* ajax call inserts the user's input per question, take the questionID and answerID */
      url: '../controller/updateQandAProcess.php',
      data: {checkedQuestion:radioQuestion, checkedAnswer:radioAnswer},
      success: function (){
        }
    });
  }

function insertResult(resultClassName){
    $.post({                     /* ajax call that insert the end result of the quiz per run */
      url: '../controller/updateResult.php',
      data: {result:resultClassName},
      success: function (){
        }
    });
}

/*    Populate Quiz Functions */ /* All of these functions are all the same in terms of what they render, only values are changed to dynamically render */

function populateQuizPageOne(){

  $.ajax({                                                                              /* ajax call to populate the quiz container dynamically from the database */
    url: '../controller/popQuizPageOne.php',
    dataType: 'json',
    success: function popPageOne(pageOneData){

      document.getElementById('questionZone').innerHTML = pageOneData[0].question;    /* assigns the question text from the json object */
      document.getElementById('qIDHidden').value = pageOneData[0].questionID;         /* assigns the question text from the json object */

      if(pageOneData[0].questionID == '1'){                                           /* if the ID of the text matches the checked radio button */

        var frag = document.createDocumentFragment();                                 /* creating fragments helps with altering parts of the DOM without... */
                                                                                      /* re-rendering the DOM everytime, only the fragment is re-rendered */
        for(i = 0; i < pageOneData.length; i++){                                      /* for loop that count how many objects are in the array "pageOneData" */
            var answerZ = document.getElementById('answerZone');                      /* creating a set of varibles to be used with createDocumentFragment */
            var alignA = document.createElement("div");
            var radio = document.createElement("input");
            var label = document.createElement("label");

            frag.appendChild(alignA);                                                 /* creates the div "alignA" for input alignment */

            radio.type = "radio";                                                     /* assigning attributes to the "radio" element for rendering */
            radio.id = pageOneData[i].answerID;
            radio.className = "radioStyle";
            radio.name = "aRadio";
            radio.value = pageOneData[i].answer;

            label.className = "radioLabel";                                           /* assigning attributesto the "label" element for rendering */
            label.innerHTML = pageOneData[i].answer;

            frag.appendChild(radio);                                                  /* append the elements with their new attributes */
            frag.appendChild(label);
          }
        answerZ.appendChild(frag);                                                    /* appends the fragment with all its changes to the div */
        }
      }
  });
}

function populateQuizPageTwo(){

  var radioQuestion = document.getElementById('qIDHidden').value;
  var radioAnswer = $('input[name=aRadio]:checked').attr('id');

  $("#questionZone").empty();                                                       /* clears the elements so they can have the new data appending to them */
  $("#answerZone").empty();
  $("#qIDHidden").empty();

  $.ajax({
    url: '../controller/popQuizPageTwo.php',
    method: 'POST',
    dataType: 'json',
    data: {checkedQuestion:radioQuestion, checkedAnswer:radioAnswer},               /* passes the values of the varibles into the webservice */
    success: function popPageTwo(pageTwoData){

      document.getElementById('q2Button').style.display = 'none';
      document.getElementById('q3Button').style.display = 'block';
      document.getElementById('qIDHidden').value = pageTwoData[0].questionID;

      if(radioAnswer == '5'){

        document.getElementById('q2Button').style.display = 'none';
        document.getElementById('q3Button').style.display = 'block';

        var obj1 = pageTwoData[0];                                                  /* assigned the objects to a varible which is then used to create another.. */
        var obj2 = pageTwoData[1];                                                  /* object. With this new object I can then use the array to dynamically populate.. */
        var obj3 = pageTwoData[2];                                                  /* the fragment without reloading the page or having the need to create multiple pages */
        var obj4 = pageTwoData[3];
        var objLength = Object.assign([obj1, obj2, obj3, obj4]);

        document.getElementById('questionZone').innerHTML = pageTwoData[0].question;

        var frag = document.createDocumentFragment();

        for(i = 0; i < objLength.length; i++){
            var answerZ = document.getElementById('answerZone');
            var alignA = document.createElement("div");
            var radio = document.createElement("input");
            var label = document.createElement("label");

            frag.appendChild(alignA);

            radio.type = "radio";
            radio.id = objLength[i].answerID;
            radio.className = "radioStyle";
            radio.name = "aRadio";
            radio.value = objLength[i].answer;

            label.className = "radioLabel";
            label.innerHTML = objLength[i].answer;

            frag.appendChild(radio);
            frag.appendChild(label);
          }

          answerZ.appendChild(frag);

      } else if(radioAnswer == '6'){

            document.getElementById('q3Button').style.display = 'none';
            document.getElementById('q4Button').style.display = 'block';
            document.getElementById('questionZone').innerHTML = pageTwoData[0].question;

            var obj1 = pageTwoData[1];
            var obj2 = pageTwoData[3];
            var objLength = Object.assign([obj1, obj2]);

            var frag = document.createDocumentFragment();

            for(i = 0; i < objLength.length; i++){
                var answerZ = document.getElementById('answerZone');
                var alignA = document.createElement("div");
                var radio = document.createElement("input");
                var label = document.createElement("label");

                frag.appendChild(alignA);

                radio.type = "radio";
                radio.id = objLength[i].answerID;
                radio.className = "radioStyle";
                radio.name = "aRadio";
                radio.value = objLength[i].answer;

                label.className = "radioLabel";
                label.innerHTML = objLength[i].answer;

                frag.appendChild(radio);
                frag.appendChild(label);
                }
            answerZ.appendChild(frag);

          } else if(radioAnswer == '7'){

                document.getElementById('q3Button').style.display = 'none';
                document.getElementById('q5Button').style.display = 'block';
                document.getElementById('qIDHidden').value = pageTwoData[0].questionID;

                var obj1 = pageTwoData[0];
                var obj2 = pageTwoData[1];
                var obj3 = pageTwoData[2];
                var obj4 = pageTwoData[3];
                var objLength = Object.assign([obj1, obj2, obj3, obj4]);

                document.getElementById('questionZone').innerHTML = pageTwoData[0].question;

                var frag = document.createDocumentFragment();

                for(i = 0; i < objLength.length; i++){
                    var answerZ = document.getElementById('answerZone');
                    var alignA = document.createElement("div");
                    var radio = document.createElement("input");
                    var label = document.createElement("label");

                    frag.appendChild(alignA);

                    radio.type = "radio";
                    radio.id = objLength[i].answerID;
                    radio.className = "radioStyle";
                    radio.name = "aRadio";
                    radio.value = objLength[i].answer;

                    label.className = "radioLabel";
                    label.innerHTML = objLength[i].answer;

                    frag.appendChild(radio);
                    frag.appendChild(label);
                  }
                  answerZ.appendChild(frag);
                }
        }
      });

      insertQandA(radioQuestion, radioAnswer);                                     /* call the ajax function to insert the question and answers from the users input */

    }

function populateQuizPageThree(){

  var radioQuestion = document.getElementById('qIDHidden').value;
  var radioAnswer = $('input[name=aRadio]:checked').attr('id');

  $("#questionZone").empty();
  $("#answerZone").empty();
  $("#qIDHidden").empty();

  $.ajax({
    url: '../controller/popQuizPageThree.php',
    method: 'POST',
    dataType: 'json',
    data: {checkedQuestion:radioQuestion, checkedAnswer:radioAnswer},
    success: function popPageThree(pageThreeData){

      console.log(pageThreeData, radioQuestion, radioAnswer);

      document.getElementById('qIDHidden').value = pageThreeData[0].questionID;

      if(pageThreeData[0].questionID == '3' && radioAnswer == '1'){

        document.getElementById('q3Button').style.display = 'none';
        document.getElementById('resultButton').style.display = 'block';

        document.getElementById('qIDHidden').value = pageThreeData[0].questionID;

        var obj1 = pageThreeData[0];
        var obj2 = pageThreeData[1];
        var obj3 = pageThreeData[2];
        var objLength = Object.assign([obj1, obj2, obj3]);

        document.getElementById('questionZone').innerHTML = pageThreeData[0].question;

        var frag = document.createDocumentFragment();

        for(i = 0; i < objLength.length; i++){
            var answerZ = document.getElementById('answerZone');
            var alignA = document.createElement("div");
            var radio = document.createElement("input");
            var label = document.createElement("label");

            frag.appendChild(alignA);

            radio.type = "radio";
            radio.id = objLength[i].answerID;
            radio.className = "radioStyle";
            radio.name = "aRadio";
            radio.value = objLength[i].answer;

            label.className = "radioLabel";
            label.innerHTML = objLength[i].answer;

            frag.appendChild(radio);
            frag.appendChild(label);
          }
          answerZ.appendChild(frag);

      } else if(pageThreeData[3].questionID == '4' && radioAnswer == '2'){

        document.getElementById('q3Button').style.display = 'none';
        document.getElementById('resultButton').style.display = 'block';
        document.getElementById('qIDHidden').value = pageThreeData[3].questionID;

        var obj1 = pageThreeData[3];
        var obj2 = pageThreeData[4];
        var obj3 = pageThreeData[5];
        var obj4 = pageThreeData[6];
        var objLength = Object.assign([obj1, obj2, obj3, obj4]);

        document.getElementById('questionZone').innerHTML = pageThreeData[3].question;

        var frag = document.createDocumentFragment();

        for(i = 0; i < objLength.length; i++){
            var answerZ = document.getElementById('answerZone');
            var alignA = document.createElement("div");
            var radio = document.createElement("input");
            var label = document.createElement("label");

            frag.appendChild(alignA);

            radio.type = "radio";
            radio.id = objLength[i].answerID;
            radio.className = "radioStyle";
            radio.name = "aRadio";
            radio.value = objLength[i].answer;

            label.className = "radioLabel";
            label.innerHTML = objLength[i].answer;

            frag.appendChild(radio);
            frag.appendChild(label);
          }
          answerZ.appendChild(frag);

        } else if(pageThreeData[7].questionID == '5' && radioAnswer == '3'){

          document.getElementById('q3Button').style.display = 'none';
          document.getElementById('resultButton').style.display = 'block';
          document.getElementById('qIDHidden').value = pageThreeData[7].questionID;

          var obj1 = pageThreeData[7];
          var obj2 = pageThreeData[8];
          var objLength = Object.assign([obj1, obj2]);

          document.getElementById('questionZone').innerHTML = pageThreeData[7].question;

          var frag = document.createDocumentFragment();

          for(i = 0; i < objLength.length; i++){
              var answerZ = document.getElementById('answerZone');
              var alignA = document.createElement("div");
              var radio = document.createElement("input");
              var label = document.createElement("label");

              frag.appendChild(alignA);

              radio.type = "radio";
              radio.id = objLength[i].answerID;
              radio.className = "radioStyle";
              radio.name = "aRadio";
              radio.value = objLength[i].answer;

              label.className = "radioLabel";
              label.innerHTML = objLength[i].answer;

              frag.appendChild(radio);
              frag.appendChild(label);
            }
            answerZ.appendChild(frag);

      } else if(pageThreeData[9].questionID == '5' && radioAnswer == '4'){

        document.getElementById('q3Button').style.display = 'none';
        document.getElementById('resultButton').style.display = 'block';
        document.getElementById('qIDHidden').value = pageThreeData[9].questionID;

        var obj1 = pageThreeData[9];
        var obj2 = pageThreeData[10];
        var obj3 = pageThreeData[11];
        var objLength = Object.assign([obj1, obj2, obj3]);

        document.getElementById('questionZone').innerHTML = pageThreeData[9].question;

        var frag = document.createDocumentFragment();

        for(i = 0; i < objLength.length; i++){
            var answerZ = document.getElementById('answerZone');
            var alignA = document.createElement("div");
            var radio = document.createElement("input");
            var label = document.createElement("label");

            frag.appendChild(alignA);

            radio.type = "radio";
            radio.id = objLength[i].answerID;
            radio.className = "radioStyle";
            radio.name = "aRadio";
            radio.value = objLength[i].answer;

            label.className = "radioLabel";
            label.innerHTML = objLength[i].answer;

            frag.appendChild(radio);
            frag.appendChild(label);
          }
          answerZ.appendChild(frag);
              }
          }
      });

      insertQandA(radioQuestion, radioAnswer);                                    /* call the ajax function to insert the question and answers from the users input */

    }

function populateQuizPageFour(){

  var radioQuestion = document.getElementById('qIDHidden').value;
  var radioAnswer = $('input[name=aRadio]:checked').attr('id');

  $("#questionZone").empty();
  $("#answerZone").empty();
  $("#qIDHidden").empty();

  $.ajax({
    url: '../controller/popQuizPageFour.php',
    method: 'POST',
    dataType: 'json',
    data: {checkedQuestion:radioQuestion, checkedAnswer:radioAnswer},
    success: function popPageFour(pageFourData){

      console.log(pageFourData, radioQuestion, radioAnswer);


      if(pageFourData[0].questionID == '6' && radioAnswer == '2'){

        document.getElementById('q4Button').style.display = 'none';
        document.getElementById('resultButton').style.display = 'block';
        document.getElementById('qIDHidden').value = pageFourData[0].questionID;

        var obj1 = pageFourData[0];
        var obj2 = pageFourData[1];
        var obj3 = pageFourData[2];
        var objLength = Object.assign([obj1, obj2, obj3]);

        document.getElementById('questionZone').innerHTML = pageFourData[0].question;

        var frag = document.createDocumentFragment();

        for(i = 0; i < objLength.length; i++){
            var answerZ = document.getElementById('answerZone');
            var alignA = document.createElement("div");
            var radio = document.createElement("input");
            var label = document.createElement("label");

            frag.appendChild(alignA);

            radio.type = "radio";
            radio.id = objLength[i].answerID;
            radio.className = "radioStyle";
            radio.name = "aRadio";
            radio.value = objLength[i].answer;

            label.className = "radioLabel";
            label.innerHTML = objLength[i].answer;

            frag.appendChild(radio);
            frag.appendChild(label);
          }
          answerZ.appendChild(frag);
        } if(pageFourData[0].questionID == '6' && radioAnswer == '4'){

          document.getElementById('q4Button').style.display = 'none';
          document.getElementById('resultButton').style.display = 'block';
          document.getElementById('qIDHidden').value = pageFourData[0].questionID;

          var obj1 = pageFourData[3];
          var obj2 = pageFourData[4];
          var obj3 = pageFourData[5];
          var objLength = Object.assign([obj1, obj2, obj3]);

          document.getElementById('questionZone').innerHTML = pageFourData[0].question;

          var frag = document.createDocumentFragment();

          for(i = 0; i < objLength.length; i++){
              var answerZ = document.getElementById('answerZone');
              var alignA = document.createElement("div");
              var radio = document.createElement("input");
              var label = document.createElement("label");

              frag.appendChild(alignA);

              radio.type = "radio";
              radio.id = objLength[i].answerID;
              radio.className = "radioStyle";
              radio.name = "aRadio";
              radio.value = objLength[i].answer;

              label.className = "radioLabel";
              label.innerHTML = objLength[i].answer;

              frag.appendChild(radio);
              frag.appendChild(label);
            }
            answerZ.appendChild(frag);
      }
    }
    });

    insertQandA(radioQuestion, radioAnswer);                                      /* call the ajax function to insert the question and answers from the users input */

  }

  function populateQuizPageFive(){

    var radioQuestion = document.getElementById('qIDHidden').value;
    var radioAnswer = $('input[name=aRadio]:checked').attr('id');

    $("#questionZone").empty();
    $("#answerZone").empty();
    $("#qIDHidden").empty();

    $.ajax({
      url: '../controller/popQuizPageFive.php',
      method: 'POST',
      dataType: 'json',
      data: {checkedQuestion:radioQuestion, checkedAnswer:radioAnswer},
      success: function popPageFour(pageFiveData){

        console.log(pageFiveData, radioQuestion, radioAnswer);

        if(radioAnswer == "1"){
          document.getElementById('questionZone').innerHTML = "Priest";
          document.getElementById('resultButton').style.display = 'none';
          document.getElementById('q5Button').style.display = 'none';
        } else if(radioAnswer == "3"){
          document.getElementById('questionZone').innerHTML = "Shaman";
          document.getElementById('resultButton').style.display = 'none';
          document.getElementById('q5Button').style.display = 'none';

        } else if(radioAnswer == "4"){
          document.getElementById('questionZone').innerHTML = "Paladin";
          document.getElementById('resultButton').style.display = 'none';
          document.getElementById('q5Button').style.display = 'none';
        }

        if(pageFiveData[0].questionID == '7' && radioAnswer == '2'){

          document.getElementById('q5Button').style.display = 'none';
          document.getElementById('resultButton').style.display = 'block';
          document.getElementById('qIDHidden').value = pageFiveData[0].questionID;

          var obj1 = pageFiveData[0];
          var obj2 = pageFiveData[1];
          var objLength = Object.assign([obj1, obj2]);

          document.getElementById('questionZone').innerHTML = pageFiveData[0].question;

          var frag = document.createDocumentFragment();

          for(i = 0; i < objLength.length; i++){
              var answerZ = document.getElementById('answerZone');
              var alignA = document.createElement("div");
              var radio = document.createElement("input");
              var label = document.createElement("label");

              frag.appendChild(alignA);

              radio.type = "radio";
              radio.id = objLength[i].answerID;
              radio.className = "radioStyle";
              radio.name = "aRadio";
              radio.value = objLength[i].answer;

              label.className = "radioLabel";
              label.innerHTML = objLength[i].answer;

              frag.appendChild(radio);
              frag.appendChild(label);
            }
            answerZ.appendChild(frag);

          } if(pageFiveData[0].questionID == '6' && radioAnswer == '4'){

            document.getElementById('q4Button').style.display = 'none';
            document.getElementById('resultButton').style.display = 'block';
            document.getElementById('qIDHidden').value = pageFiveData[0].questionID;

            var obj1 = pageFiveData[3];
            var obj2 = pageFiveData[4];
            var obj3 = pageFiveData[5];
            var objLength = Object.assign([obj1, obj2, obj3]);

            document.getElementById('questionZone').innerHTML = pageFiveData[0].question;

            var frag = document.createDocumentFragment();

            for(i = 0; i < objLength.length; i++){
                var answerZ = document.getElementById('answerZone');
                var alignA = document.createElement("div");
                var radio = document.createElement("input");
                var label = document.createElement("label");

                frag.appendChild(alignA);

                radio.type = "radio";
                radio.id = objLength[i].answerID;
                radio.className = "radioStyle";
                radio.name = "aRadio";
                radio.value = objLength[i].answer;

                label.className = "radioLabel";
                label.innerHTML = objLength[i].answer;

                frag.appendChild(radio);
                frag.appendChild(label);
              }
              answerZ.appendChild(frag);
        }
      }
      });

      insertQandA(radioQuestion, radioAnswer);                                      /* call the ajax function to insert the question and answers from the users input */

    }


    /*    End Result Function */

    function getQuizResult(){                                                      /* this function uses the last checked radio to deteremine which result the use gets */

      var radioQuestion = document.getElementById('qIDHidden').value;
      var radioAnswer = $('input[name=aRadio]:checked').attr('id');

      $("#questionZone").empty();                                                  /* clears the elements on the page so only the result is shown at the end */
      $("#answerZone").empty();
      $("#qIDHidden").empty();
      document.getElementById('resultButton').style.display = 'none';

      if(radioAnswer =="8"){                                                                                /* each condition checks the id of the radio that was.. */
        document.getElementById('questionZone').innerHTML = "Mage";                                         /* at the end of each quiz path to deteremine the end result */
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/mage.png" />')
        var resultClassName = "Mage";
        insertResult(resultClassName);
      } else if(radioAnswer == "9"){
        document.getElementById('questionZone').innerHTML = "Priest";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/priest.png" />')
        var resultClassName = "Priest";
        insertResult(resultClassName);
      } else if(radioAnswer == "10"){
        document.getElementById('questionZone').innerHTML = "Warlock";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/warlock.png" />')
        var resultClassName = "Warlock";
        insertResult(resultClassName);
      } else if(radioAnswer == "11" || radioAnswer == "17" || radioAnswer == "24"){
        document.getElementById('questionZone').innerHTML = "Druid";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/druid.png" />')
        var resultClassName = "Druid";
        insertResult(resultClassName);
      } else if(radioAnswer == "12" || radioAnswer == "19"){
        document.getElementById('questionZone').innerHTML = "Demon Hunter";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/demonhunter.png" />')
        var resultClassName = "Demon Hunter";
        insertResult(resultClassName);
      } else if(radioAnswer == "13"){
        document.getElementById('questionZone').innerHTML = "Rogue";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/rogue.png" />')
        var resultClassName = "Rogue";
        insertResult(resultClassName);
      } else if(radioAnswer == "14" || radioAnswer == "18" || radioAnswer == "23"){
        document.getElementById('questionZone').innerHTML = "Monk";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/monk.png" />')
        var resultClassName = "Monk";
        insertResult(resultClassName);
      } else if(radioAnswer == "15"){
        document.getElementById('questionZone').innerHTML = "Shaman";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/shaman.png" />')
        var resultClassName = "Shaman";
        insertResult(resultClassName);
      } else if(radioAnswer == "16"){
        document.getElementById('questionZone').innerHTML = "Hunter";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/hunter.png" />')
        var resultClassName = "Hunter";
        insertResult(resultClassName);
      } else if(radioAnswer == "20" || radioAnswer == "25"){
        document.getElementById('questionZone').innerHTML = "Paladin";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/paladin.png" />')
        var resultClassName = "Paladin";
        insertResult(resultClassName);
      } else if(radioAnswer == "21" || radioAnswer == "26" ){
        document.getElementById('questionZone').innerHTML = "Warrior";
        $('#pictureContainer').prepend('<img width="400px" height="500px" src="../img/warrior.png" />')
        var resultClassName = "Warrior";
        insertResult(resultClassName);
      } else if(radioAnswer == "22" || radioAnswer == "27" ){
        document.getElementById('questionZone').innerHTML = "Death Knight";
        $('#pictureContainer').prepend('<img width="400px" height="500px"src="../img/deathknight.png" />')
        var resultClassName = "Death Knight";
        insertResult(resultClassName);
      }
    }

/*    Stats Graph via canvasJS Plugin   */

function loadStats() {                                                            /* ajax call that collects all the data from the resultclasses table.. */
                                                                                  /* then uses that data to be dynamically displayed in a  line graph */
$.ajax({
  url: './controller/acquireResults.php',
  dataType: 'JSON',
  success: function (resultData){

    var uniqueClass = {};                                                                                       /* creates an object to be used in finding the unique.. */
    for(i = 0; i < resultData.length; i++){                                                                     /* class names */
      uniqueClass[resultData[i].resultClassName] = 1 + (uniqueClass[resultData[i].resultClassName] || 0);
    }

    var graphArray = [];                                                                                        /* creates an array that is used to dynamically change.. */
    for(var input in uniqueClass){                                                                              /* the x and y axis */
      graphArray.push({label:input, y:uniqueClass[input]});
    }

    var chart = new CanvasJS.Chart("chartContainer", {                                                           /* The plugin for rendering the line graph */
  		title:{
  			text: "Number of Results"
  		},
  		data: [
  		    {
  			type: "line",
  			dataPoints: graphArray
    		  }
    		    ]
    	 });
    	chart.render();
      }
  });
}
