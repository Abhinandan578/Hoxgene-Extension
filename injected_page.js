
function changeUrl(tab)
{
	var url=tab[0].url;
	var res=url.split("/");
	if(res[2]=="www.flipkart.com"||res[2]=="www.amazon.in"||res[2]=="www.shopclues.com"||res[2]=="www.myntra.com"||res[2]=="www.ebay.in"||res[2]=="www.jabong.com"||res[2]=="www.agoda.com"||res[2]=="www.airtel.in"||res[2]=="www.expedia.co.in"||res[2]=="www.homeshop18.com"||res[2]=="www.oyorooms.com"||res[2]=="shopping.rediff.com"||res[2]=="www.zoomcar.com"||res[2]=="paytm.com")
	{
		// console.log("res="+res[2]+"res[3]="+res[3]+"final");
	 	if((res[2]=="www.amazon.in"||res[2]=="www.myntra.com")&&res[3]=="")
		{
			console.log("amazon wala page");
			var myNewUrl='http://linksredirect.com/?pub_id=14235CL12841&source=linkkit&url=https%3A//' + res[2] + '/';
			browser.tabs.update(tab[0].id, {url: myNewUrl});
		}
		else if(res[2]=="paytm.com"&&res[3]=="")
		{
			var myNewUrl="https://linksredirect.com/?pub_id=14235CL12841&source=linkkit&url=https%3A//paytm.com/shop";
			browser.tabs.update(tab[0].id, {url: myNewUrl});
		}
		else if(res[3]=="")
		{
			console.log("ye myntra ka try ha"+res[2]);
			var myNewUrl='http://linksredirect.com/?pub_id=14235CL12841&source=linkkit&url=http%3A//' + res[2] + '/';	
			browser.tabs.update(tab[0].id,{url: myNewUrl});	
		}	
	}

}
function onError(error) {
  console.log(`Error: ${error}`);
}
function myListener(tabId,changeInfo,tabInfo)
{ 
	// console.log(tabInfo.status+" "+tabInfo.url);
	if(tabInfo.status=="loading")
	{
		var querying = browser.tabs.query({active: true,currentWindow: true });
		querying.then(changeUrl,onError);
		
	}
	browser.tabs.onUpdated.removeListener(myListener);
	browser.runtime.reload();

    return;
}		
browser.tabs.onUpdated.addListener(myListener);

