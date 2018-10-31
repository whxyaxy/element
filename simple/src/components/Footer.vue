<template>
	<div class="footer">
		@copyRight by axy
	</div>
</template>
<script>
	// function _fetch(url, data, method = 'GET',options={}) {
	//     const body = o2s(data);
	//     let params = {
	//         method: method,
	//     };
	//     if (method === 'GET') { // 如果是GET请求，拼接url
	//         url += '?' + body;
	//     } else {
	//          params.body=body
	//     }
	//     if(options.cookie!=undefined){
	//         params.credentials='include'
	//     }
	//     if(options.headers!=undefined && typeof options.headers=="object"){
	//         params.headers=new Headers(options.headers);
	//     }else{
	//         params.headers=new Headers({
	//             'Accept': 'application/json',
	//             'Content-Type': 'application/x-www-form-urlencoded'
	//         });
	//     }
	//     fetch(url, params).then(r => options.dataType=="text"?r.text():r.json()).then(r => r);
	// }
	// export function o2s(obj, arr = [], idx = 0) {
	//     for (let item in obj) {
	//         arr[idx++] = [item, obj[item]];
	//     }
	//     return new URLSearchParams(arr).toString();
	// }
	// export function get(url, data,,options={}) {
	//     return _fetch(url, data, 'GET',options);
	// }

	// export function post(url, data,options={}) {
	//     return _fetch(url, data, 'POST',options);
	// }
	// post("/api/test",{title:"标题"},{
	//     dataType:"json",
	//     cookie:true,
	//     headers:{
	//         'Accept': 'application/json',
	//         'Content-Type': 'application/x-www-form-urlencoded'
	//     }  
	// });
</script>
<style>
	.footer{
		width:80%;padding:0 10%;height:40px;line-height: 40px;background: #fff;text-align: center;
	}
</style>