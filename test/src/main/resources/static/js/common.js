/**
 * 공통 js
 */
function gfn_ajax(options) {
	$.ajax({
        url : options.url,
        type : 'POST',
        dataType : "json",
        contentType:"application/json",
        data : JSON.stringify(options.data),
        timeout: 10000,
        beforeSend:function(){
            $('#loading').removeClass('display-none');
        },
        success : function(result, status, xhr){
			options.callBack = result;
			//fn_ajaxSuccess(result, status, xhr);
			//window.location.href = data.redirectUrl;
		},
        error : function(request, status, error){
            var err=JSON.parse(request.responseText);
            console.log(err.resData[0].errorMsg);
            $('#loading').addClass('display-none');
        },
        complete:function(){
            $('#loading').addClass('display-none');
        }
	});
	
	return options;
}