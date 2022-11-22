$('#copy').click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#copyID').text()).select();
    document.execCommand("copy");
    $temp.remove();

    alert("User ID copied") 
});