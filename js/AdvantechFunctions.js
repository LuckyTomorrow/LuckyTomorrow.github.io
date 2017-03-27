// JScript File

function DisplayObj(xId,status){
    if (xId!=''){
	document.getElementById(xId).style.display=status;}
}

function DisplayObjAuto(xId){
    if (document.getElementById(xId).style.display=='none'){
        document.getElementById(xId).style.display='block';
    }else{
        document.getElementById(xId).style.display='none';
    }
}


// 20070327 rory 建立 變色文字 作為 PDMenu 測試用
//function mouseOver(controlID, BUtype){ 
function mouseOver(controlID){
    if (document.getElementById(controlID).style.backgroundColor !="url(../images2007/PDmenubg.jpg)" ){
        document.getElementById(controlID).style.backgroundImage ="url(../images2007/PDmenubg.jpg)" ;
        document.getElementById(controlID).style.backgroundColor = "" ;
    }
}


// 20070327 rory 建立 變色文字 作為 PDMenu 測試用
function mouseOut(controlID){
    if (document.getElementById(controlID).style.backgroundImage =="url(../images2007/PDmenubg.jpg)"){
       // document.getElementById(controlID).style.backgroundColor ='#f2e2f0'; 
        document.getElementById(controlID).style.backgroundImage = "" ;
    }
}

// 20070912, Jack, change object background color
function changeBGColor(obj,c){
    obj.style.backgroundColor=c;
}

//Get Random BU for homepage.
function getDefaultBU(sS) {
    //var sS = Math.round(Math.random()*4)+1;
    //var cdate=new Date(); 
    //var sS = Math.round(cdate.getSeconds(Date())/12);
    //alert(sS);

    //if (sS==0){sS=5;}
    //if (sS==5){sS=1;}        

    //saveCookie("HomeBU","2");

    newS = loadCookie("HomeBU");

    if (newS != '') { sS = newS; }

    document.getElementById("divEmbeddedComputing").style.display = 'none';

    if (sS == 1) {
        document.getElementById("divHomeBanner_Embedded").style.display = 'block';
        document.getElementById("divEmbeddedComputing").style.display = 'block';
        document.getElementById("ctl00_CPH1_ctl01_tdEC").style.backgroundColor = '#5B2B6E';
        document.getElementById("tdEC2").style.backgroundColor = '#5B2B6E';
        document.getElementById("ctl00_CPH1_ctl01_tdEC").style.backgroundImage = '';
    }
    //if(sS==2){    
    //    document.getElementById("divHomeBanner_Applied").style.display='block';
    //    document.getElementById("divAppliedComputing").style.display='block';
    //    document.getElementById("tdAC").style.backgroundColor='#731631';  
    //    document.getElementById("tdAC2").style.backgroundColor='#731631';              
    //    document.getElementById("tdAC").style.backgroundImage='';               
    //}
    if (sS == 4) {
        document.getElementById("divHomeBanner_INC").style.display = 'block';
        document.getElementById("divINC").style.display = 'block';
        document.getElementById("ctl00_CPH1_ctl01_tdINC").style.backgroundColor = '#0082D1';
        document.getElementById("tdINC2").style.backgroundColor = '#0082D1';
        document.getElementById("ctl00_CPH1_ctl01_tdINC").style.backgroundImage = '';
    }
    if (sS == 2) {
        document.getElementById("divHomeBanner_eAutomation").style.display = 'block';
        document.getElementById("divEA").style.display = 'block';
        document.getElementById("ctl00_CPH1_ctl01_tdEA").style.backgroundColor = '#008736';
        document.getElementById("tdEA2").style.backgroundColor = '#008736';
        document.getElementById("ctl00_CPH1_ctl01_tdEA").style.backgroundImage = '';
    }
    if (sS == 3) {
        document.getElementById("divHomeBanner_eVideo").style.display = 'block';
        document.getElementById("divEVIDEO").style.display = 'block';
        document.getElementById("ctl00_CPH1_ctl01_tdEVIDEO").style.backgroundColor = '#F98800';
        document.getElementById("tdEVIDEO2").style.backgroundColor = '#F98800';
        document.getElementById("ctl00_CPH1_ctl01_tdEVIDEO").style.backgroundImage = '';
    }

}

//Get Random BU for homepage.
function getDefaultBU2009(sS)
{
        //var sS = Math.round(Math.random()*4)+1;
        //var cdate=new Date(); 
        //var sS = Math.round(cdate.getSeconds(Date())/12);
        //alert(sS);
        
        //if (sS==0){sS=5;}
        //if (sS==5){sS=1;}        
        
        //saveCookie("HomeBU","2");
        
        newS = loadCookie("HomeBU");
        
        if (newS!=''){sS=newS;}
        
        document.getElementById("divEmbeddedComputing").style.display='none';

        if(sS==1) {    
            document.getElementById("divHomeBanner_Embedded").style.display='block';
            document.getElementById("divEmbeddedComputing").style.display='block';
            document.getElementById("ctl00_CPH1_ctl01_tdEC").style.backgroundColor = '#5B2B6E';
            document.getElementById("tdEC2").style.backgroundColor = '#5B2B6E';
            document.getElementById("ctl00_CPH1_ctl01_tdEC").style.backgroundImage = '';                   
        }
        if(sS==4){    
            document.getElementById("divHomeBanner_Medical").style.display='block';
            document.getElementById("divMedical").style.display='block';
            document.getElementById("ctl00_CPH1_ctl01_tdMedical").style.backgroundColor = '#004A84';
            document.getElementById("tdMedical2").style.backgroundColor = '#004A84';
            document.getElementById("ctl00_CPH1_ctl01_tdMedical").style.backgroundImage = '';               
        }
        if(sS==5){    
            document.getElementById("divHomeBanner_INC").style.display='block';
            document.getElementById("divINC").style.display='block';
            document.getElementById("ctl00_CPH1_ctl01_tdINC").style.backgroundColor = '#0082D1';
            document.getElementById("tdINC2").style.backgroundColor = '#0082D1';
            document.getElementById("ctl00_CPH1_ctl01_tdINC").style.backgroundImage = '';               
            }
        if(sS==2){    
            document.getElementById("divHomeBanner_eAutomation").style.display='block';
            document.getElementById("divEA").style.display='block';
            document.getElementById("ctl00_CPH1_ctl01_tdEA").style.backgroundColor = '#008736';
            document.getElementById("tdEA2").style.backgroundColor = '#008736';
            document.getElementById("ctl00_CPH1_ctl01_tdEA").style.backgroundImage = '';               
            }
        if(sS==3) {    
            document.getElementById("divHomeBanner_eVideo").style.display='block';
            document.getElementById("divEVIDEO").style.display='block';
            document.getElementById("ctl00_CPH1_ctl01_tdEVIDEO").style.backgroundColor = '#F98800';
            document.getElementById("tdEVIDEO2").style.backgroundColor = '#F98800';
            document.getElementById("ctl00_CPH1_ctl01_tdEVIDEO").style.backgroundImage = '';
        }
        if (sS == 6) {
            document.getElementById("divHomeBanner_AIS").style.display = 'block';
            document.getElementById("divAIS").style.display = 'block';
            document.getElementById("ctl00_CPH1_ctl01_tdAIS").style.backgroundColor = '#f7b500';
            document.getElementById("tdAIS2").style.backgroundColor = '#f7b500';
            document.getElementById("ctl00_CPH1_ctl01_tdAIS").style.backgroundImage = '';
        }                                                                         

}


function saveCookie(theName, theValue){

	theDay   = 7;
	setDay = new Date();
	setDay.setTime(setDay.getTime()+(theDay*1000*60*60*24));
	expDay = setDay.toGMTString();
	document.cookie = theName + "="+escape(theValue)+";expires="+expDay;

}


function loadCookie(theName){
	theData   = "";
	theName   = theName+"=";
	theCookie = document.cookie+";";
	start = theCookie.indexOf(theName);
	if (start != -1)
	{
		end = theCookie.indexOf(";",start);
		theData = unescape(theCookie.substring(start+theName.length, end));
	}
	return theData;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// for homepage search text
function chkSearch(source,args)
 {
    var obj = document.getElementById("ctl00_Header1_txtSearchBox");
      if ((obj.value=="")||(obj.value.indexOf("<a href")>=0))
        {
            args.IsValid=false;
        }
      else
        { 
            args.IsValid=true;
        }
  }
    
  // for product page' Feedback
    function chkFeedBack(source,args)
    {
         var obj=document.getElementById("ctl00_CPHMain_Grade1_txtFeedback");
         if ((obj.value=="")||(obj.value.indexOf("<a href")>=0))
            {
                args.IsValid=false;
            }
         else
            { 
                args.IsValid=true;
            }

      }
      function getCountry() {
          var ddlCountry = document.getElementById("ctl00_CPHMain_Grade1_DropDownList1");
          var hfCountry = document.getElementById("ctl00_CPHMain_Grade1_hfCountry");
          if (ddlCountry.value) {
              hfCountry.value = ddlCountry.value;
          }
      } 
    //avoid errors when the internal switch teh tabs
    var pageTracker;
    var pageTracker1;
    function GoogleTracking(pathInfo, action, Optional_label) {
        if (typeof (pageTracker) != "undefined") {
            ga('send','event', pathInfo, action, Optional_label);
            return;
        }else{
            return false;
        }
    }
    function search(id) {
        var searchText = document.getElementById(id);
        if ((typeof (searchText) != "undefined")) {
            if (searchText.value == "") {
                alert("Please enter search string,thank you!!");
                return false;
            } else {
                GoogleTracking("/", "Search", "Go to Serach");
                var searchString = "/products/search.aspx?keyword=" + escape(searchText.value);
                window.location.href = searchString;
                return;
            }
        }
    }

    function SubmitKeyClick(obj, e) {
        evt = (window.event) ? window.event : e;
        keyCode = evt.keyCode ? evt.keyCode : (evt.which ? evt.which : evt.charCode);
        if (keyCode == 13) {
            keyCode = 9;
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                // IE
                evt.cancelBubble=true;
                evt.returnValue = false;
                search (obj) 
            }
            else {
                evt.preventDefault();
                evt.stopPropagation();
                var searchText = document.getElementById(obj);
                if ((typeof (searchText) != "undefined")) {
                    if (searchText.value == "") {
                        return false;
                    } else {
                        GoogleTracking("/", "Search", "Go to Serach");
                        var searchString = "/products/search.aspx?keyword=" + searchText.value;
                        window.location.href = searchString;
                        return;
                    }
                }
            }
        }
    }





				



    
  
    
