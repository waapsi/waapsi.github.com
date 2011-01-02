

/**
	@Class
	The MuseManager is in charge of submitting requests via JSON
**/
function MuseManager(){		
	//storm name
	this.stormName=null;
	//server URL
	this.serverURL="http://www.musestorm.com/IF?";
	//ref to the storm loading the MuseManager
	this.storm=null;
	//start unique request counter
	this.reqOrder=1;
	//script tag ID
	this.scriptId=1;
	// Get the DOM location to put the script tags
    this.headTag = document.getElementsByTagName("head").item(0);
	//MuseManager version
	this.version="1.0";
}

/**
	@Description
	Initialize the MuseManager

	@Parameters	
	strStormKey = Storm Key as defined in the Storm account page	
	storm = reference to the application loading the MuseManager
**/
MuseManager.prototype.init=function(strStormKey, storm){	
	this.stormName=strStormKey;	
	this.storm=storm;	
}

/*
	@Description
	Submit query to server
	
	@Parameters
	caller = a string represeting the manager to call when data is retrieved
	strFunc = function to be called in caller manager object when response is received
	strRequest = the request to send to server		
	strStormFunc = function to call in storm, to be used by manager object 
*/
MuseManager.prototype.submit=function(caller, strRequest){	
	var str=this.serverURL+""+strRequest+"&stormName="+this.stormName+"&output=json&callback="+caller+"&reqOrder="+this.reqOrder+"&tid=json"+this.scriptId;
	this.reqOrder++;	
	// Create the script tag
    this.scriptObj = document.createElement("script");    
    // Add script object attributes
    this.scriptObj.setAttribute("type", "text/javascript");
    this.scriptObj.setAttribute("charset", "utf-8");
    this.scriptObj.setAttribute("src", str);
    this.scriptObj.setAttribute("id", "json"+this.scriptId);
	this.scriptId++;
	// Create the script tag (load the JSON data)	
    this.headTag.appendChild(this.scriptObj);	
}

//create the proper URL to map a museStormID into real address
MuseManager.prototype.loadPage=function(strRequest){
	var str=this.serverURL+""+strRequest+"&stormName="+this.stormName;
	return str;
}

// Remove the script tag
MuseManager.prototype.removeScriptTag = function (id) {
	var ntag=document.getElementById(id);
	if (ntag)
		this.headTag.removeChild(ntag);  
}
