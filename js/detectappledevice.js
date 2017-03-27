function isAppleDevice() {

    var ipad = (navigator.userAgent.toLowerCase().indexOf("ipad") > -1);
    var iPhone = (navigator.userAgent.toLowerCase().indexOf("iphone") > -1);
    var iPod = (navigator.userAgent.toLowerCase().indexOf("ipod") > -1);

    return (ipad || iPhone || iPod);
}