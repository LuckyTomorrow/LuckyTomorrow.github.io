
$(function () {
    if (isAppleDevice() == true) {
        $('#topbannerFlash').hide();
        //$('#topbannerVideo').show();
    } else {
        $('#topbannerFlash').show();
        $('#topbannerVideo').hide();
        $('#topbannerVideo').html('');
    }
});

