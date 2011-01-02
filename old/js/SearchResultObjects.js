/**
	@Class
	Represents a single Web Search Result
**/
function WebResult(){
	this.title=null;
	this.summary=null;	
	this.index=null;	
	this.museStormID=null;
	this.totalCount=null;		
}
/**
	@Description
	returns the object's ID
	
	@Returns
	ID
**/
WebResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	returns the result's title
	
	@Returns
	Title
**/
WebResult.prototype.getTitle=function(){return this.title;}
/**
	@Description
	returns the result's summary text
	
	@Returns
	Summary
**/
WebResult.prototype.getSummary=function(){return this.summary;}
/**
	@Description
	returns the result's index
	
	@Returns
	Index
**/
WebResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	returns the total number of results for the term
	
	@Returns
	Total number of results
**/
WebResult.prototype.getTotalCount=function(){return this.totalCount;}
//------------------------------------------------------------
/**
	@Class
	Represents a single Image Search Result
**/
function ImageResult(){
	this.museStormID=null;
	this.index=null;
	this.picName=null;
	this.picDetails=null;
	this.thumbnail=null;
	this.totalCount=null;
}
/**
	@Description
	return's the object's ID
	
	@Returns
	ID string
**/
ImageResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	returns the result's index
	
	@Returns
	Index
**/
ImageResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	returns the image name
	
	@Returns
	Name
**/
ImageResult.prototype.getPicName=function(){return this.picName;}
/**
	@Description
	returns the image details: size, Kb weight
	
	@Returns
	Image details string
**/
ImageResult.prototype.getPicDetails=function(){return this.picDetails;}
/**
	@Description
	returns the image thumbnail data:<br>
	.url - thumbnail url
	.width - width of thumbnail
	.height - height of thumbnail
	
	@Returns
	Thumbnail object
**/
ImageResult.prototype.getThumbnail=function(){return this.thumbnail;}
/**
	@Description
	returns the total count of results for the term
	
	@Returns
	Total number of results
**/
ImageResult.prototype.getTotalCount=function(){return this.totalCount;}
//------------------------------------------------------------
/**
	@Class
	Represents a single Photo Search Result
**/
function PhotoResult(){
	this.museStormID=null;
	this.title=null;
	this.userName=null;
	this.userUrl=null;
	this.thumbnail=null;
	this.index=null;
	this.totalCount=null;
}
/**
	@Description
	returns the object's ID
	
	@Returns
	ID string
**/
PhotoResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	returns the photo title
	
	@Returns
	Title
**/
PhotoResult.prototype.getTitle=function(){return this.title;}
/**
	@Description
	returns the username for the user who uploaded thew photo
	
	@Returns
	Username
**/
PhotoResult.prototype.getUserName=function(){return this.userName;}
/**
	@Description
	returns url of user's page
	
	@Returns
	URL
**/
PhotoResult.prototype.getUserUrl=function(){return this.userUrl;}
/**
	@Description
	returns the result's index
	
	@Returns
	Index
**/
PhotoResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	returns the photo thumbnail data:<br>
	.url - thumbnail url
	.width - width of thumbnail
	.height - height of thumbnail
	
	@Returns
	Thumbnail object
**/
PhotoResult.prototype.getThumbnail=function(){return this.thumbnail;}
/**
	@Description
	return the total count of results for the search term
	
	@Returns
	Total number of results
**/
PhotoResult.prototype.getTotalCount=function(){return this.totalCount;}
//------------------------------------------------------------
/**
	@Class
	Represents a single Auction Search Result
		
**/
function AuctionResult(){
	this.museStormID=null;
	this.title=null;
	this.price=null;
	this.timeLeft=null;
	this.thumbnail=null;
	this.index=null;
	this.totalCount=null;
}
/**
	@Description
	return the object's ID
	
	@Returns
	ID string
**/
AuctionResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	return the item's title
	
	@Returns
	Title
**/
AuctionResult.prototype.getTitle=function(){return this.title;}
/**
	@Description
	return the item's price
	
	@Returns
	Price string
**/
AuctionResult.prototype.getPrice=function(){return this.price;}
/**
	@Description
	return the time left for the auction (String)
	
	@Returns
	Time string
**/
AuctionResult.prototype.getTimeLeft=function(){return this.timeLeft;}
/**
	@Description
	returns the auction thumbnail data:<br>
	.url - thumbnail url
	.width - width of thumbnail
	.height - height of thumbnail
	
	@Returns
	Thumbnail object
**/
AuctionResult.prototype.getThumbnail=function(){return this.thumbnail;}
/**
	@Description
	return the result's index
	
	@Returns
	Index 
**/
AuctionResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	return the total count of auctions for the term
	
	@Returns
	Total number of results
**/
AuctionResult.prototype.getTotalCount=function(){return this.totalCount;}
//------------------------------------------------------------
/**
	@Class
	Represents a single Blog Search Result
**/
function BlogsResult(){
	this.museStormID=null;
	this.title=null;
	this.excerpt=null;
	this.blogName=null;
	this.blogUrl=null;
	this.created=null;	
	this.index=null;
	this.totalCount=null;	   
}
/**
	@Description
	return the object's ID
	
	@Returns
	ID
**/
BlogsResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	return the blog item's title
	
	@Returns
	Title
**/
BlogsResult.prototype.getTitle=function(){return this.title;}
/**
	@Description
	return blog item's excerpt
	
	@Returns
	Excerpt
**/
BlogsResult.prototype.getExcerpt=function(){return this.excerpt;}
/**
	@Description
	return the blog name
	
	@Returns
	Name
**/
BlogsResult.prototype.getBlogName=function(){return this.blogName;}
/**
	@Description
	return the blog url
	
	@Returns
	URL
**/
BlogsResult.prototype.getBlogUrl=function(){return this.blogUrl;}
/**
	@Description
	return the item creation date
	
	@Returns
	Date string
**/
BlogsResult.prototype.getCreated=function(){return this.created;}
/**
	@Description
	return the index of the result
	
	@Returns
	Index
**/
BlogsResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	return the total count of blog items for the term
	
	@Returns
	Total number of results
**/
BlogsResult.prototype.getTotalCount=function(){return this.totalCount;}
//------------------------------------------------------------
/**
	@Class
	Represents a single News Search Result
**/
function NewsResult(){
	this.title=null;
	this.summary=null;
	this.index=null;
	this.museStormID=null;		
	this.source=null;
	this.newsTime=null;
	this.thumbnail=null;
	this.totalCount=null;
}
/**
	@Description
	return the object's ID
	
	@Returns
	ID
**/
NewsResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	return the news story's title
	
	@Returns
	Title
**/
NewsResult.prototype.getTitle=function(){return this.title;}
/**
	@Description
	return the result index
	
	@Returns
	Index
**/
NewsResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	return the total count of news stories for the term
	
	@Returns
	Total number of results
**/
NewsResult.prototype.getTotalCount=function(){return this.totalCount;}
/**
	@Description
	returns the news item thumbnail data:<br>
	.url - thumbnail url
	.width - width of thumbnail
	.height - height of thumbnail
	
	@Returns
	Thumbnail object
**/
NewsResult.prototype.getThumbnail=function(){return this.thumbnail;}
/**
	@Description
	return summary of news story
	
	@Returns
	Summary
**/
NewsResult.prototype.getSummary=function(){return this.summary;}
/**
	@Description
	return the source for the news story
	
	@Returns
	Source string
**/
NewsResult.prototype.getSource=function(){return this.source;}
/**
	@Description
	return the time the news story was published
	
	@Returns
	Time string 
**/
NewsResult.prototype.getNewsTime=function(){return this.newsTime;}
//------------------------------------------------------------
/**
	@Class
	Represents a single Definition Search Result
**/
function DefinitionResult(){
	this.def=null;
	this.url=null;
	this.index=null;
	this.totalCount=null;
}
/**
	@Description
	return the total count of definitions for the term
	
	@Returns
	Total number of results
**/
DefinitionResult.prototype.getTotalCount=function(){return this.totalCount;}
/**
	@Description
	get definition url if it exists
	
	@Returns
	URL or null
**/
DefinitionResult.prototype.getUrl=function(){return this.url;}
/**
	@Description
	return the definition text
	
	@Returns
	Definition
**/
DefinitionResult.prototype.getDefinition=function(){return this.def;}
/**
	@Description
	return the index of the result
	
	@Returns
	Index
**/
DefinitionResult.prototype.getIndex=function(){return this.index;}
//------------------------------------------------------------
/**
	@Class
	Represents a single Favorites (bookmark) Search Result
**/
function FavoritesResult(){
	this.museStormID=null;
	this.title=null;	
	this.tags=null;
	this.otherPeople=null;
	this.index=null;
	this.totalCount=null;
}
/**
	@Description
	get the object's ID
	
	@Returns
	ID string 
**/
FavoritesResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	return the bookmark title
	
	@Returns
	Title
**/
FavoritesResult.prototype.getTitle=function(){return this.title;}
/**
	@Description
	return the index of the result
	
	@Returns
	Index
**/
FavoritesResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	return the total count of results for the term
	
	@Returns
	Total number of results
**/
FavoritesResult.prototype.getTotalCount=function(){return this.totalCount;}
/**
	@Description
	return an array of tags for the bookmark
	
	@Returns
	Array of tags
**/
FavoritesResult.prototype.getTags=function(){return this.tags;}
/**
	@Description
	return data about other people bookmarking this page:<br>
	.url - url to the list of people
	.count - number of people bookmarking this
	
	@Returns
	Thumbnail object
**/
FavoritesResult.prototype.getOtherPeople=function(){return this.otherPeople;}
//------------------------------------------------------------
/**
	@Class
	Represents a single Book Search Result
**/
function BookResult(){
	this.museStormID=null;
	this.title=null;
	this.pageURL=null;
	this.author=null;
	this.price=null;;
	this.publisher=null;			
	this.thumbnail=null;
	this.index=null;
	this.totalCount=null;
}
/**
	@Description
	return the object's ID
	
	@Returns
	ID string 
**/
BookResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	return the book's title
	
	@Returns
	Title
**/
BookResult.prototype.getTitle=function(){return this.title;}
/**
	@Description
	return the result's index
	
	@Returns
	Index
**/
BookResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	return the total count of results for the term
	
	@Returns
	Total number of results
**/
BookResult.prototype.getTotalCount=function(){return this.totalCount;}
/**
	@Description
	return book author
	
	@Returns
	Author
**/
BookResult.prototype.getAuthor=function(){return this.author;}
/**
	@Description
	return book price (String)
	
	@Returns
	Price string
**/
BookResult.prototype.getPrice=function(){return this.price;}
/**
	@Description
	return book publisher
	
	@Returns
	Publisher
**/
BookResult.prototype.getPublisher=function(){return this.publisher;}
/**
	@Description
	returns the book thumbnail data:<br>
	.url - thumbnail url
	.width - width of thumbnail
	.height - height of thumbnail
	
	@Returns
	Thumbnail object
**/
BookResult.prototype.getThumbnail=function(){return this.thumbnail;}
//------------------------------------------------------------
/**
	@Class
	Represents a single Video Search Result
**/
function VideosResult(){
	this.museStormID=null;
	this.title=null;		
	this.description=null;
	this.length=null;
	this.viewCount=null;
	this.commentCount=null;
	this.ratingAvg=null;
	this.uploadTime=null;
	this.index=null;
	this.totalCount=null;
	this.thumbnail=null;  
}
/**
	@Description
	return the object's ID
	
	@Returns
	ID String
**/
VideosResult.prototype.getMuseStormID=function(){return this.museStormID;}
/**
	@Description
	return video title
	
	@Returns
	Title
**/
VideosResult.prototype.getTitle=function(){return this.title;}
/**
	@Description
	return index of result
	
	@Returns
	Index
**/
VideosResult.prototype.getIndex=function(){return this.index;}
/**
	@Description
	return index of result
	
	@Returns
	Total number of results
**/
VideosResult.prototype.getTotalCount=function(){return this.totalCount;}
/**
	@Description
	returns the video thumbnail data:<br>
	.url - thumbnail url
	.width - width of thumbnail
	.height - height of thumbnail
	
	@Returns
	Thumbnail object
**/
VideosResult.prototype.getThumbnail=function(){return this.thumbnail;}
/**
	@Description
	return video description
	
	@Returns
	Description
**/
VideosResult.prototype.getDescription=function(){return this.description;}
/**
	@Description
	return view count (String)
	
	@Returns
	Count as string
**/
VideosResult.prototype.getViewCount=function(){return this.viewCount;}
/**
	@Description
	return number of comments for video
	
	@Returns
	Number of comments 
**/
VideosResult.prototype.getCommentCount=function(){return this.commentCount;}
/**
	@Description
	return avergae rating of video
	
	@Returns
	Rating string
**/
VideosResult.prototype.getRatingAvg=function(){return this.ratingAvg;}
/**
	@Description
	return upload date (String)
	
	@Returns
	Date string
**/
VideosResult.prototype.getUploadTime=function(){return this.uploadTime;}
/**
	@Description
	return video length
	
	@Returns
	Length string
**/
VideosResult.prototype.getLength=function(){return this.length;}
