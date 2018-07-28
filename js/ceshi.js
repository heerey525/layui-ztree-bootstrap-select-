// var zNodes =[
//     {id:4, pId:0, name:"河北省", open:false, nocheck:true},
//     {id:41, pId:4, name:"石家庄"},
//     {id:411, pId:41, name:"石家庄1"},
//     {id:42, pId:4, name:"保定"},
//     {id:5, pId:0, name:"广东省", open:false, nocheck:true},
//     {id:51, pId:5, name:"广州"},
//     {id:52, pId:5, name:"深圳"},
//     {id:6, pId:0, name:"福建省", open:false, nocheck:true},
//     {id:61, pId:6, name:"福州"},
//     {id:62, pId:6, name:"厦门"},
// ];

var zNodes =
    [{"id": 11, "name": "北京市", "nocheck": true, "open": false, "pId": 0}, {
        "id": 12,
        "name": "天津市 ",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 13, "name": "河北省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 14,
        "name": "山西省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 15, "name": "内蒙古自治区", "nocheck": true, "open": false, "pId": 0}, {
        "id": 21,
        "name": "辽宁省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 22, "name": "吉林省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 23,
        "name": "黑龙江省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 31, "name": "上海市", "nocheck": true, "open": false, "pId": 0}, {
        "id": 32,
        "name": "江苏省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 33, "name": "浙江省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 34,
        "name": "安徽省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 35, "name": "福建省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 36,
        "name": "江西省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 37, "name": "山东省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 41,
        "name": "河南省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 42, "name": "湖北省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 43,
        "name": "湖南省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 44, "name": "广东省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 45,
        "name": "广西壮族自治区",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 46, "name": "海南省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 50,
        "name": "重庆市",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 51, "name": "四川省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 52,
        "name": "贵州省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 53, "name": "云南省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 54,
        "name": "西藏自治区",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 61, "name": "陕西省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 62,
        "name": "甘肃省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 63, "name": "青海省", "nocheck": true, "open": false, "pId": 0}, {
        "id": 64,
        "name": "宁夏回族自治区",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 65, "name": "新疆维吾尔自治区", "nocheck": true, "open": false, "pId": 0}, {
        "id": 71,
        "name": "台湾省",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 81, "name": "香港特别行政区", "nocheck": true, "open": false, "pId": 0}, {
        "id": 82,
        "name": "澳门特别行政区",
        "nocheck": true,
        "open": false,
        "pId": 0
    }, {"id": 6, "name": "测试组", "nocheck": true, "open": false, "pId": 11}, {
        "id": 1060,
        "name": "未安装组",
        "nocheck": true,
        "open": false,
        "pId": 12
    }]


// function getStoreList(){
//     $.ajax({
//         type:'GET',
//         url:'http://192.168.5.4:9998/memdata/barinfo/find_group',
//         dataType:'jsonp',
//
//         success:function(data){
//             var html = '';
//             if(data.successful){
//                 value = data.value.list;
//                 if(value.length){
//                     $.each(value,function(i,v){
//                         html+='<option value="'+ v.barId+'">'+ v.barName+'</option>';
//                     })
//                 }
//             }else{
//                 if(data.url){
//                     window.location.href=data.url;
//                     return;
//                 }
//             }
//             if(html){
//                 $(".inner").append(html);
//                 $('.inner').selectpicker('refresh');
//             }
//         }
//     })
// }
// getStoreList()
// console.log(nid)

// $.ajax({
//     type:"POST",
//     url:"/memdata/barinfo/find_group",
//     dataType:"json",
//
// })
