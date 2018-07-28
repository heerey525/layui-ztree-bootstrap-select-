var setting = {
    view: {
        showIcon: showIconForTree,
        showLine:false
    },
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: 0
        }
    },
    callback: {
        onClick:onClick,
    }
};

function showIconForTree(treeId, treeNode) {
    return !treeNode.isParent;
};
function onClick(e, treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes(),
        v = "";
    nodes.sort(function compare(a, b) {
        return a.id - b.id;
    });
    for (var i = 0, l = nodes.length; i < l; i++) {
        v += nodes[i].name + ",";
    }
    if (v.length > 0) v = v.substring(0, v.length - 1);
    var cityObj = $("#citySel");
    cityObj.attr("value", v);
    for (var i = 0; i < nodes.length; i++) {
        v = nodes[i].name + ",";
        var nid = nodes[i].id;
    }

    for (var i = 0; i < zNodes.length; i++) {
        var node = zNodes[i];
    }
    var nid = nid + "";

    var options = "";
    $.each(aaA, function (i, v) {
        if (v.groupId == nid) {
            options += "<option>" + v.barName + "</option>";
        }
    });
    $(".bs-searchbox-add").hide()
    $(".ztree").hide()
    $("#lunchBegins").html(options);
    $('#lunchBegins').selectpicker('refresh');

}
function showMenu() {
    var cityObj = $("#citySel");
    var cityOffset = $("#citySel").offset();
    $("#menuContent").css({left:cityOffset.left + "px", top:40+"px" + cityObj.outerHeight() + "px"}).slideDown("fast");
    $("body").bind("mousedown", onBodyDown);
}
function hideMenu() {
    $("#menuContent").fadeOut("fast");
    $(".bs-searchbox-add").fadeOut("fast");
    $("body").unbind("mousedown", onBodyDown);
}
function onBodyDown(event) {
    if (!(event.target.id == "menuBtn" || event.target.id == "citySel" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
        hideMenu();
    }
}
$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    fuzzySearch('treeDemo','#key',null,true); //initialize fuzzysearch function
});
//-->