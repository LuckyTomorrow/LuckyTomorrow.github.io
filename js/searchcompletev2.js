var _originsearchkeyword = '';
var _isSearchHistory = false;
var _isSearchHistoryTitleAdd = false;
var _strRecentlySearched = 'Recently Searched';
$(document).ready(function () {
    try{

        $("#Header1_txtSearchBox").autocomplete({
            //source: "/acl_common/products/searchresults.ashx",
            source: function (request, response) {
            },
            open: function () {
            },
            minLength: 0,
            search: function (event, ui) {
                _originsearchkeyword = $("#Header1_txtSearchBox").val();
                _isSearchHistory = false;
                _isSearchHistoryTitleAdd = false;
                if (_originsearchkeyword == '') {
                    _isSearchHistory = true;
                    var logs = loadCookie("searchhistorylog");
                    var searchlogs = [];
                    if (logs != "") {
                        searchlogs = JSON.parse(logs);
                    }
                    $(this).autocomplete("option", "source", searchlogs);
                } else {
                    if (_originsearchkeyword.length >= 2) {
                        $(this).autocomplete("option", "source", "/acl_common/products/searchresults.ashx");
                    }
                }
            },
            focus: function (event, ui) {
                if (ui.item.categoryID.indexOf("support") < 0) {
                    $("#Header1_txtSearchBox").val(ui.item.displayName);
                }
                return false;
            },
            select: function (event, ui) {
                saveSearchLog();
                if (ui.item.categoryID.indexOf("support") == 0) {
                    var link = getSearchSupportURL(ui.item);
                    window.location.href = link;
                } else if (ui.item.resultType == 'paps') {
                    window.location.href = ('/certified-peripherals/Products/' + ui.item.categoryID + '/?utm_source=corpsite&utm_medium=search&utm_term=' + ui.item.displayName + '&utm_campaign=SearchComplete').toLowerCase();
                } else if (ui.item.resultType == 'Category') {
                    window.location.href = ('/products/' + encodeNameStrict(ui.item.displayName.replace("/", "-")) + '/sub_' + ui.item.categoryID + '?utm_source=corpsite&utm_medium=search&utm_term=' + ui.item.displayName + '&utm_campaign=SearchComplete').toLowerCase();
                } else if (ui.item.resultType == 'recentlysearch') {
                    window.location.href = ('/products/search.aspx?keyword=' + encodeName(ui.item.displayName)).toLowerCase();
                } else if (ui.item.resultType == 'thinmanager') {
                    window.location.href = '/partner/thinmanager/product.aspx';
                } else {
                    window.location.href = ('/products/' + encodeNameStrict(ui.item.displayName.replace("/", "-")) + '/mod_' + ui.item.categoryID + '?utm_source=corpsite&utm_medium=search&utm_term=' + ui.item.displayName + '&utm_campaign=SearchComplete').toLowerCase();
                }
                return false;
            },
            position: { offset: "-74 10" }
        }).focus(function () {
            if ($(this).val() == '') {
                _isSearchHistory = true;
                $(this).autocomplete("search", "");
            }
        }).data("autocomplete")._renderItem = function (ul, item) {
            var link;

            ul.attr("id", "searchtop");

            if (item.categoryID.indexOf("support,") == 0) {

                link = getSearchSupportURL(item);

                return $("<li></li>")
				    .data("item.autocomplete", item)
				    .append("<a href='" + link + "'>" +
                    "<div class='autoTextContent supportContent'><div class='supportIdicator'></div><div class='supportResult'><b>" + item.displayName + "</b><br />" + item.prodDesc + "</div></div><div style='clear:both;'></div></a>")
				    .appendTo(ul);
            } else if (item.resultType == 'paps') {
                link = ("/certified-peripherals/Products/" + item.categoryID + "/?utm_source=corpsite&utm_medium=search&utm_term=" + item.displayName + "&utm_campaign=SearchComplete").toLowerCase();

                return $("<li></li>")
				    .data("item.autocomplete", item)
				    .append("<a href='" + link + "'>" +
                    "<img src='" + item.img + "' />" +
                    "<div class='autoTextContent'><b>" + item.displayName + "</b><br />" + item.prodDesc + "</div><div style='clear:both;'></div></a>")
				    .appendTo(ul);
            } else if (item.resultType == 'Category') {
                link = ("/products/" + encodeNameStrict(item.displayName.replace("/", "-")) + "/sub_" + item.categoryID + "?utm_source=corpsite&utm_medium=search&utm_term=" + item.displayName + "&utm_campaign=SearchComplete").toLowerCase();

                return $("<li></li>")
				    .data("item.autocomplete", item)
				    .append("<a href='" + link + "'>" +
                    "<img src='" + item.img + "' />" +
                    "<div class='autoTextContent'><b>" + item.displayName + "</b><br />" + item.prodDesc + "</div><div style='clear:both;'></div></a>")
				    .appendTo(ul);
            } else if (item.resultType == 'recentlysearch') {
                link = ("/products/search.aspx?keyword=" + encodeName(item.displayName)).toLowerCase();

                if (_isSearchHistoryTitleAdd == false) {
                    ul.prepend("<li class='recentlysearchtitle'>" + _strRecentlySearched + "</li>");
                }
                _isSearchHistoryTitleAdd = true;

                return $("<li class='recentlysearchitem'></li>")
                    .data("item.autocomplete", item)
                    .append("<a href='" + link + "'>" +
                    "<div class='autoTextContent supportContent'><div class='supportIdicator'></div><div class='supportResult'>" + item.displayName + "</div></div><div style='clear:both;'></div></a>")
                    .appendTo(ul);
            } else if (item.resultType == 'thinmanager') {
                link = "/partner/thinmanager/product.aspx";

                return $("<li></li>")
                    .data("item.autocomplete", item)
                    .append("<a href='" + link + "'>" +
                        "<img src='" + item.img + "' />" +
                        "<div class='autoTextContent'><b>" + item.displayName + "</b><br />" + item.prodDesc + "</div><div style='clear:both;'></div></a>")
                    .appendTo(ul);

            } else {
                link = ("/products/" + encodeNameStrict(item.displayName.replace("/", "-")) + "/mod_" + item.categoryID + "?utm_source=corpsite&utm_medium=search&utm_term=" + item.displayName + "&utm_campaign=SearchComplete").toLowerCase();

                return $("<li></li>")
				    .data("item.autocomplete", item)
				    .append("<a href='" + link + "'>" +
                    "<img src='" + item.img + "' />" +
                    "<div class='autoTextContent'><b>" + item.displayName + "</b><br />" + item.prodDesc + "</div><div style='clear:both;'></div></a>")
				    .appendTo(ul);
            }

        };

        $("#Header1_txtSearchBox").keydown(function (event) {
            if (event.keyCode == 13) {
                var keyword = $(this).val();
                if (keyword) {
                    keyword = encodeName(keyword);
                    window.location.href = "/products/search.aspx?keyword=" + keyword;
                }
                return false;
            }
        });

    } catch (err) {
    }

});

function getSearchSupportURL(item) {
    var itemType = item.categoryID.split(",");
    var link = "";
    if (item.displayName == "Datasheet") {
        link = "http://support.advantech.com/support/DownloadDatasheet_New.aspx?Literature_ID=" + itemType[1];
    } else if (item.displayName.toUpperCase() == "FAQ") {
        link = "http://support.advantech.com/support/KnowledgeBaseSRDetail_New.aspx?Doc_Source=Knowledge+Base&SR_ID=" + encodeURIComponent(itemType[1]);
    } else {
        if (itemType[1] == "") {
            link = "http://support.advantech.com/support/SearchResult.aspx?keyword=" + $("#Header1_txtSearchBox").val() + "&searchtabs=BIOS,Certificate,Datasheet,Driver,Firmware,Manual,Online Training,Specification,Utility,FAQ,Installation,Software API,Software API Manual";
        } else {
            link = "http://support.advantech.com/support/DownloadSRDetail_New.aspx?SR_ID=" + itemType[1];
        }
    }
    return link;
}

function encodeName(str) {
    return encodeURI(str);
}

function encodeNameStrict(str) {
    return encodeURI(str.replace("& ", "").replace("&", "").replace(",", "").replace(";", "").replace("/ ", "-").replace("/", "-").replace(" ", "-").replace("\"", "").replace("®", "").replace("™", "").replace(":", "").replace(".", "").replace("*", "").replace("#", "").replace("?", "").replace(">", "").replace("+", ""));
}

function saveSearchLog() {
    var selectkeyword = $("#Header1_txtSearchBox").val();
    if (typeof ga != 'undefined') {
        ga('send', 'Search-Autocomplete', _originsearchkeyword, selectkeyword);
    }
    advWTTrackingEventFrame('Search-Autocomplete', _originsearchkeyword, selectkeyword, 0);

    $.ajax({
        type: "POST",
        url: "/acl_common/products/searchhistory.ashx",
        data: { term: _originsearchkeyword }
    }).done(function (msg) {
    });
}

