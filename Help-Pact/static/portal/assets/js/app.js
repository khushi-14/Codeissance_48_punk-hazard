var popupWindow = null;
function positionedPopup(url,winName,w,h,t,l,scroll){
settings =
'height='+h+',width='+w+',top='+t+',left='+l+',scrollbars='+scroll+',resizable'
popupWindow = window.open(url,winName,settings)
}
<p><a href="https://www.quackit.com/javascript/examples/sample_popup.cfm" onclick="positionedPopup(this.href,'myWindow','700','300','100','200','yes');return false">Positioned Popup</a></p>