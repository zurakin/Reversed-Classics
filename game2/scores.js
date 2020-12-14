function submitScore(){
  var data = {
    name: username,
    score: s.score
  }
  reference.push(data);
}
function getData(data){
  var scoresOnline = data.val();
  var keys = Object.keys(scoresOnline);
  window.leaderBoard = [];
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var user = scoresOnline[k].name;
    var score = scoresOnline[k].score;
    leaderBoard.push([user,score]);
  }

  leaderBoard.sort(sortScore);
  console.log(leaderBoard);
}

function errData(err){
  console.log('Error');
  console.log(err);

}

function sortScore(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}
