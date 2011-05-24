 

/**
* Service Proxy for CpProxyAvOpenhomeOrgInfo1
* @module Zapp
* @class Info
*/
	
var CpProxyAvOpenhomeOrgInfo1 = function(udn){	

	this.url = window.location.protocol + "//" + window.location.host + "/" + udn + "/av.openhome.org-Info-1/control";  // upnp control url
	this.domain = "av-openhome-org";
	this.type = "Info";
	this.version = "1";
	this.serviceName = "av.openhome.org-Info-1";
	this.subscriptionId = "";  // Subscription identifier unique to each Subscription Manager 
	this.udn = udn;   // device name
	
	// Collection of service properties
	this.serviceProperties = {};
	this.serviceProperties["TrackCount"] = new Zapp.ServiceProperty("TrackCount","int");
	this.serviceProperties["DetailsCount"] = new Zapp.ServiceProperty("DetailsCount","int");
	this.serviceProperties["MetatextCount"] = new Zapp.ServiceProperty("MetatextCount","int");
	this.serviceProperties["Uri"] = new Zapp.ServiceProperty("Uri","string");
	this.serviceProperties["Metadata"] = new Zapp.ServiceProperty("Metadata","string");
	this.serviceProperties["Duration"] = new Zapp.ServiceProperty("Duration","int");
	this.serviceProperties["BitRate"] = new Zapp.ServiceProperty("BitRate","int");
	this.serviceProperties["BitDepth"] = new Zapp.ServiceProperty("BitDepth","int");
	this.serviceProperties["SampleRate"] = new Zapp.ServiceProperty("SampleRate","int");
	this.serviceProperties["Lossless"] = new Zapp.ServiceProperty("Lossless","bool");
	this.serviceProperties["CodecName"] = new Zapp.ServiceProperty("CodecName","string");
	this.serviceProperties["Metatext"] = new Zapp.ServiceProperty("Metatext","string");
}



/**
* Subscribes the service to the subscription manager to listen for property change events
* @method Subscribe
* @param {Function} serviceAddedFunction The function that executes once the subscription is successful
*/
CpProxyAvOpenhomeOrgInfo1.prototype.subscribe = function (serviceAddedFunction) {
    Zapp.SubscriptionManager.addService(this,serviceAddedFunction);
}


/**
* Unsubscribes the service from the subscription manager to stop listening for property change events
* @method Unsubscribe
*/
CpProxyAvOpenhomeOrgInfo1.prototype.unsubscribe = function () {
    Zapp.SubscriptionManager.removeService(this.subscriptionId);
}


	

/**
* Adds a listener to handle "TrackCount" property change events
* @method TrackCount_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.TrackCount_Changed = function (stateChangedFunction) {
    this.serviceProperties.TrackCount.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readIntParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "DetailsCount" property change events
* @method DetailsCount_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.DetailsCount_Changed = function (stateChangedFunction) {
    this.serviceProperties.DetailsCount.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readIntParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "MetatextCount" property change events
* @method MetatextCount_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.MetatextCount_Changed = function (stateChangedFunction) {
    this.serviceProperties.MetatextCount.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readIntParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "Uri" property change events
* @method Uri_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Uri_Changed = function (stateChangedFunction) {
    this.serviceProperties.Uri.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readStringParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "Metadata" property change events
* @method Metadata_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Metadata_Changed = function (stateChangedFunction) {
    this.serviceProperties.Metadata.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readStringParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "Duration" property change events
* @method Duration_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Duration_Changed = function (stateChangedFunction) {
    this.serviceProperties.Duration.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readIntParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "BitRate" property change events
* @method BitRate_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.BitRate_Changed = function (stateChangedFunction) {
    this.serviceProperties.BitRate.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readIntParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "BitDepth" property change events
* @method BitDepth_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.BitDepth_Changed = function (stateChangedFunction) {
    this.serviceProperties.BitDepth.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readIntParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "SampleRate" property change events
* @method SampleRate_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.SampleRate_Changed = function (stateChangedFunction) {
    this.serviceProperties.SampleRate.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readIntParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "Lossless" property change events
* @method Lossless_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Lossless_Changed = function (stateChangedFunction) {
    this.serviceProperties.Lossless.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readBoolParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "CodecName" property change events
* @method CodecName_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.CodecName_Changed = function (stateChangedFunction) {
    this.serviceProperties.CodecName.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readStringParameter(state)); 
	});
}
	

/**
* Adds a listener to handle "Metatext" property change events
* @method Metatext_Changed
* @param {Function} stateChangedFunction The handler for state changes
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Metatext_Changed = function (stateChangedFunction) {
    this.serviceProperties.Metatext.addListener(function (state) 
	{ 
		stateChangedFunction(Zapp.SoapRequest.readStringParameter(state)); 
	});
}


/**
* A service action to Counters
* @method Counters
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Counters = function(successFunction, errorFunction){	
	var request = new Zapp.SoapRequest("Counters", this.url, this.domain, this.type, this.version);		
    request.send(function(result){
		result["TrackCount"] = Zapp.SoapRequest.readIntParameter(result["TrackCount"]);	
		result["DetailsCount"] = Zapp.SoapRequest.readIntParameter(result["DetailsCount"]);	
		result["MetatextCount"] = Zapp.SoapRequest.readIntParameter(result["MetatextCount"]);	
	
		if (successFunction){
			successFunction(result);
		}
	}, function(message, transport) {
		if (errorFunction) {errorFunction(message, transport);}
	});
}


/**
* A service action to Track
* @method Track
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Track = function(successFunction, errorFunction){	
	var request = new Zapp.SoapRequest("Track", this.url, this.domain, this.type, this.version);		
    request.send(function(result){
		result["Uri"] = Zapp.SoapRequest.readStringParameter(result["Uri"]);	
		result["Metadata"] = Zapp.SoapRequest.readStringParameter(result["Metadata"]);	
	
		if (successFunction){
			successFunction(result);
		}
	}, function(message, transport) {
		if (errorFunction) {errorFunction(message, transport);}
	});
}


/**
* A service action to Details
* @method Details
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Details = function(successFunction, errorFunction){	
	var request = new Zapp.SoapRequest("Details", this.url, this.domain, this.type, this.version);		
    request.send(function(result){
		result["Duration"] = Zapp.SoapRequest.readIntParameter(result["Duration"]);	
		result["BitRate"] = Zapp.SoapRequest.readIntParameter(result["BitRate"]);	
		result["BitDepth"] = Zapp.SoapRequest.readIntParameter(result["BitDepth"]);	
		result["SampleRate"] = Zapp.SoapRequest.readIntParameter(result["SampleRate"]);	
		result["Lossless"] = Zapp.SoapRequest.readBoolParameter(result["Lossless"]);	
		result["CodecName"] = Zapp.SoapRequest.readStringParameter(result["CodecName"]);	
	
		if (successFunction){
			successFunction(result);
		}
	}, function(message, transport) {
		if (errorFunction) {errorFunction(message, transport);}
	});
}


/**
* A service action to Metatext
* @method Metatext
* @param {Function} successFunction The function that is executed when the action has completed successfully
* @param {Function} errorFunction The function that is executed when the action has cause an error
*/
CpProxyAvOpenhomeOrgInfo1.prototype.Metatext = function(successFunction, errorFunction){	
	var request = new Zapp.SoapRequest("Metatext", this.url, this.domain, this.type, this.version);		
    request.send(function(result){
		result["Value"] = Zapp.SoapRequest.readStringParameter(result["Value"]);	
	
		if (successFunction){
			successFunction(result);
		}
	}, function(message, transport) {
		if (errorFunction) {errorFunction(message, transport);}
	});
}



