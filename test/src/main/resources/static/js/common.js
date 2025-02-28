/**
 * 공통 js
 */
function gfn_ajax(options, successCallback, errorCallback) {
	$.ajax({
        url : options.url,
        type : gfn_nvl(options.type) == "" ? "POST" : options.type,
        dataType : "json",
        contentType:"application/json",
        data : gfn_nvl(options.data) == "" ? "" : JSON.stringify(options.data),
        timeout: 10000,
        beforeSend:function(xhr){
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

//null 처리
function gfn_nvl(oldValue, newValue) {
	if(oldValue == null || oldValue == undefined) {
		newValue = "";
	}else{
		newValue = oldValue;
	}
	return newValue;
}