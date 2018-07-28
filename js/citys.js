/**
 * 时间:2016年11月27日
 * 作者:707200833
 * 说明:依赖与jQuery和layui, 是基于layui开发的一个省市区联动的小插件, 使用上要基于layui的表单进行使用
 */

(function ($) {
    var pca = {};
    pca.keys = {};
    pca.ckeys = {};

    pca.init = function (province, city, area, initprovince, initcity, initarea) {//jQuery选择器, 省-市-区
        if (!province || !$(province).length) return;
        $(province).html('');
        $(province).append('<option selected>全部</option>');
        for (var i in citys) {
            $(province).append('<option>' + citys[i].name + '</option>');
            pca.keys[citys[i].name] = citys[i];
        }
        layui.form('select').render();
        if (initprovince) $(province).next().find('[lay-value="' + initprovince + '"]').click();
        if (!city || !$(city).length) return;
        pca.formRender(city);
        layui.form().on('select(province)', function (data) {
            var cs = pca.keys[data.value];
            $(city).html('');
            $(city).append('<option>全部</option>');
            if (cs) {
                cs = cs.city;
                for (var i in cs) {
                    $(city).append('<option>' + cs[i].name + '</option>');
                    pca.ckeys[cs[i].name] = cs[i];
                }
                $(city).find('option:eq(1)').attr('selected', true);
            }
            layui.form('select').render();
            $(city).next().find('.layui-this').removeClass('layui-this').click();
            pca.formHidden('province', data.value);
            $('.pca-label-province').html(data.value);//此处可以自己修改 显示的位置, 不想显示可以直接去掉
        });
        if (initprovince) $(province).next().find('[lay-value="' + initprovince + '"]').click();
        if (initcity) $(city).next().find('[lay-value="' + initcity + '"]').click();
        if (!area || !$(area).length) return;
        pca.formRender(area);
        layui.form().on('select(city)', function (data) {
            var cs = pca.ckeys[data.value];
            $(area).html('');
            $(area).append('<option>全部</option>');
            if (cs) {
                cs = cs.area;
                for (var i in cs) {
                    $(area).append('<option>' + cs[i] + '</option>');
                }
                $(area).find('option:eq(1)').attr('selected', true);
            }
            layui.form('select').render();
            $(area).next().find('.layui-this').removeClass('layui-this').click();
            pca.formHidden('city', data.value);
            $('.pca-label-city').html(data.value);	//此处可以自己修改 显示的位置, 不想显示可以直接去掉
        });
        layui.form().on('select(area)', function (data) {
            pca.formHidden('area', data.value);
            $('.pca-label-area').html(data.value);	//此处可以自己修改 显示的位置, 不想显示可以直接去掉
        });
        if (initprovince) $(province).next().find('[lay-value="' + initprovince + '"]').click();
        if (initcity) $(city).next().find('[lay-value="' + initcity + '"]').click();
        if (initarea) $(area).next().find('[lay-value="' + initarea + '"]').click();
    }

    pca.formRender = function (obj) {
        $(obj).html('');
        $(obj).append('<option>全部</option>');
        layui.form('select').render();
    }

    pca.formHidden = function (obj, val) {
        if (!$('#pca-hide-' + obj).length)
            $('body').append('<input id="pca-hide-' + obj + '" type="hidden" value="' + val + '" />');
        else
            $('#pca-hide-' + obj).val(val);
    }

    var citys =
        [
            {
                "name": "——彭埠",
                "city": [
                    {
                        "name": "彭埠1店",
                    },
                    {
                        "name": "彭埠2店",
                    },
                    {
                        "name": "彭埠3店",
                    },
                    {
                        "name": "彭埠4店",
                    },
                    {
                        "name": "彭埠5店",
                    },

                ]
            },
            {
                "name": "——下沙",
                "city": [
                    {
                        "name": "下沙1店",
                    },
                    {
                        "name": "下沙2店",
                    },
                    {
                        "name": "下沙3店",
                    },
                    {
                        "name": "下沙4店",
                    },
                    {
                        "name": "下沙5店",
                    },

                ]
            },
            {
                "name": "华北战区",
                "city": [
                    {
                        "name": "北京",
                    },
                    {
                        "name": "天津",
                    },
                    {
                        "name": "太原",
                    },
                    {
                        "name": "西安",
                    },
                    {
                        "name": "郑州",
                    },

                ]
            },
            {
                "name": "华南战区",
                "city": [
                    {
                        "name": "广州",
                    },
                    {
                        "name": "厦门",
                    },
                    {
                        "name": "深圳",
                    },
                    {
                        "name": "桂林",
                    },
                    {
                        "name": "三亚",
                    },

                ]
            },


        ];

    window.pca = pca;
    return pca;
})($);