var flag=0;
function INITFB(){
   function loadscript(callback){
 
	var script4= document.createElement('script');
	var script5= document.createElement('script');
	var script6= document.createElement('script');

	script4.src="https://j2apps.s.llnwi.net/j2apps-ios/client/scripts/mx-game-emulator.js";
	    script5.src="https://j2apps.s.llnwi.net/j2apps-ios/client/scripts/mx-game-manager.js";
		script6.src="https://j2apps.s.llnwi.net/j2apps-ios/client/scripts/encryption.js";
		
    script4.onload=function(){callback()};
    script5.onload=function(){callback()};
	script6.onload=function(){callback()};
	
	document.getElementsByTagName('head')[0].appendChild(script4);
	document.getElementsByTagName('head')[0].appendChild(script5);
		document.getElementsByTagName('head')[0].appendChild(script6);
      }
  function Init(){
    // Initialize Firebase
    var script= document.createElement('script');
        document.getElementsByTagName('head')[0].appendChild(script);
	  
  }
  // request an ad when the DOM is loaded


      document.addEventListener("DOMContentLoaded", () => {

});
 flag=1;
  loadscript(Init);
}