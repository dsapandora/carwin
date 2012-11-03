#pragma strict
private var startTime : float;
private var textTime : String;
private var startOfRace : boolean = false;

function Start () {
	print("CIAO");
	startOfRace = false;
}

function Update () {
	
}

function OnTriggerEnter (other:Collider)
{
	// the starting time of the timer
	startTime = Time.time;
	startOfRace = true;
    print("AHIAAAAAAAAAAAAAAAAA");
}

// function called every frame to draw GUI objects
function OnGUI () {
	
	if (startOfRace == true)	{
		// guiTime is the number of milliseconds passed from startTime
	   	var guiTime = Time.time - startTime;
		
		// the time is to be printed in a user friendly format
	   	var minutes : int = guiTime / 60;
	   	var seconds : int = guiTime % 60;
	   	var fraction : int = (guiTime * 100) % 100;
	
	   	var textTime = String.Format ("{0:00}:{1:00}:{2:000}", minutes, seconds, fraction); 
	   	GUI.Label (Rect (Screen.width -200, 25, 100, 30), textTime); 
   	}

}