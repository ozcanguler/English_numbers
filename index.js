
$("button").click(function()
{
  var userChosenNumber=$(this).attr("id");
  playSound(userChosenNumber);
  buttonAnimation(userChosenNumber);
});

function playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function buttonAnimation(currentKey)
{
var activeButton=  document.querySelector("#" + currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){ activeButton.classList.remove("pressed"); }, 500);

}
