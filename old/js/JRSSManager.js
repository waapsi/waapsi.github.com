/**
	@Class
	RSSManager provides functionality for reading RSS feeds 
	and managing a list of feeds.	
**/
function RSSManager(){
	//reference to the HTML document
	this.storm=null;
	//list of feeds managed
	this.feedList=null;
	//reference to the MuseManager
	this.manager=null;
	this.ref=null;
	this.version="1.0";
}

/**
	@Description
	Initialize the RSSManager				
	
	@Parameters	
	mng = reference to the MuseManager
	refName = name of the RSSManager instance (string) 
	handler = reference to the event handler for the manager
**/
RSSManager.prototype.init=function(mng, refName, handler){
	this.manager=mng;
	this.ref=refName;
	this.handler=handler;	
	this.feedList=new Array();
}
	
/**
	@Description
	Add new feed. <br>
	Does not return value, calls the onGetFeed callback function when ready.
	
	@Parameters
	url = RSS feed URL		
**/
RSSManager.prototype.addFeed=function(url){
	if (url==null || url.length==0)
		return;
	//if feed already exists, return
	if (this.getFeedByURL(url)!=null)
		return;
	//new feed
	this.addFeedToList(url);
	this.manager.submit(this.ref+".onGetFeed", "opCode=rss&feed="+url);		
}

/**
	@Description
	Implement this function to receive the RSS data.<br>
	
	@Parameters
	feed = the RSSFeed object containing the RSS data
	res = status object
**/
RSSManager.prototype.onGetFeed=function(jsonRes){
	var res=jsonRes.json;
	var newres=new Object();
	//check if error occured while requesting data 
	if (res.status!="OK"){
		newres.status=res.status;
		newres.errorMessage=res.errorMessage;
		this.handler["onGetFeed"](null,newres);
		return;
	}
	else{
		newres.status=res.status;
		newres.errorMessage="";
		var isRss=null;		
		newres.status=res.status;		
		var strTitle, strURL, strDesc, strDate, strLang, strOriginalURL;
		strTitle=unescape(res.title);
		strURL=res.url;
		strDesc=unescape(res.description);		
		strDate=res.date;
		strLang=res.language;
		strOriginalURL=res.originalURL;	
		//get items
		var strItemTitle, strItemURL, strItemDesc, strItemDate, strItemCat, arrItems=new Array();		
		for (var i=0;i<res.results.length;i++){
				//decode title
				strItemTitle=unescape(res.results[i].title);
				//strItemTitle=decodeURIComponent(strItemTitle);
				strItemURL=res.results[i].url;
				strItemDesc=res.results[i].description;	
				//replace encoded + chars in description
				strItemDesc=strItemDesc.replace(/\+/g, " ");
				//decode description			
				strItemDesc=unescape(strItemDesc);
				//strItemDesc=decodeURIComponent(strItemDesc);				
				strItemCat=res.results[i].category;
				strItemDate=res.results[i].date;
				var item=new RSSItem(strItemTitle, strItemURL, strItemDesc, strItemCat, strItemDate);					
				arrItems.push(item);							
		}	
		var feed=new RSSFeed(strOriginalURL, strTitle, strURL, strDesc, strLang, strDate, arrItems);							
		this.handler["onGetFeed"](feed,newres);
	}
		
}
	
/**
	@Description
	Retrieve a previsouly read feed object stored in the RSSManager by its URL.
	
	@Parameters
	url = RSS feed URL		
**/
RSSManager.prototype.getFeedByURL=function(url){	
	//look for a feed in the list 
	for (var i=0;i<this.feedList.length;i++){		
		if (this.feedList[i].url==url){		//match found
			return this.feedList[i];
		}
	}
	//no match found
	return null;
}


RSSManager.prototype.addFeedToList=function(url){		
	var obj=new Object();		
	obj.url=url;
	obj.feed=null;
	this.feedList.push(obj);
}

/**
	@Description
	Remove a feed from the RSSManager feed list
	
	@Parameters
	url = RSS feed url 
**/
RSSManager.prototype.removeFeed=function(url){
	var i=-1;
	for (i=0;i<this.feedList.length;i++){
		if (this.feedList[i].url==url)		//match found
			break;
	}
	if (i==this.feedList.length)	//no match found
		return false;
	var newa=new Array();
	for (var j=0;j<this.feedList.length;j++){
		if (j==i)
			continue;
		//copy feed object
		newa.push(this.feedList[i]);
	}
	delete this.feedList;
	this.feedList=null;
	this.feedList=newa;
	return true;
}
	
	
//----------------------------- RSSItem -------------------------------
/**
	@Class
	Holds an RSS feed item
**/
function RSSItem(title,url,description,category,pubDate){	
	//item title
	this.title=title;
	//item link
	this.url=url;
	//item description
	this.description=description;
	//item category
	this.category=category;
	//item publish date
	this.pubDate=pubDate;
}
/**
	@Description
	Returns the feed item title
	
	@Returns
	Title 
**/
RSSItem.prototype.getTitle=function(){return this.title;}
/**
	@Description
	Return's the feed item direct URL (permanent link)
	
	@Returns
	URL
**/
RSSItem.prototype.getUrl=function(){return this.url;}
/**
	@Description
	Return's the item's description
	
	@Returns
	Description
**/
RSSItem.prototype.getDescription=function(){return this.description;}
/**
	@Description
	Return the item's category as defined by the blog owner
	
	@Returns
	Category 
**/
RSSItem.prototype.getCategory=function(){return this.category;}
/**
	@Description
	Return the publication date of the item
	
	@Returns
	Date as string
**/
RSSItem.prototype.getPubDate=function(){return this.pubDate;}


//------------------------------- RSSFeed ----------------------------
/**
	@Class
	Represents an RSS feed		
**/	
function RSSFeed(strOriginalURL, strTitle, strURL, strDescription, strLanguage, strPubDate, arrItems){	
	this.originalURL=strOriginalURL;
	this.title=strTitle;
	this.url=strURL;
	this.description=strDescription;
	this.language=strLanguage;
	this.pubDate=strPubDate;
	this.arrItems=arrItems;
}
/**
	@Description
	Return the feed's RSS URL
	
	@Returns
	URL
**/
RSSFeed.prototype.getFeedUrl=function(){return this.originalURL;}
/**
	@Description
	Return the feed's title
	
	@Returns
	Title
**/
RSSFeed.prototype.getTitle=function(){return this.title;}
/**
	@Description
	Return the blog's web URL
	
	@Returns
	URL
**/
RSSFeed.prototype.getSiteUrl=function(){return this.url;}
/**
	@Description
	Return the blog's description
	
	@Returns
	Description
**/
RSSFeed.prototype.getDescription=function(){return this.description;}
/**
	@Description
	Return the blog's language
	
	@Returns
	Language
**/
RSSFeed.prototype.getLanguage=function(){return this.language;}
/**
	@Description
	Return the blog's last update
	
	@Returns
	Date as string
**/
RSSFeed.prototype.getPubDate=function(){return this.pubDate;}
/**
	@Description
	Return the feed's items 
	
	@Returns
	Array of RSSItem objects
**/
RSSFeed.prototype.getItems=function(){return this.arrItems;}