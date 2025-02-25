/**
 * 공통 js
 */
function gfn_ajax(options, successCallback, errorCallback) {
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
			if(typeof successCallback === "function") {
				successCallback({
					result : result,
					status : status
				});
			}
		},
        error : function(request, status, error){
            if(typeof errorCallback === "function") {
				errorCallback({
					request : request,
					status  : status,
					error   : error
				});
			}
			$('#loading').addClass('display-none');
        },
        complete:function(){
            $('#loading').addClass('display-none');
        }
	});
	
	return options;
}