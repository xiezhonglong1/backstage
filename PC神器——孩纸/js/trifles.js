jQuery(document).ready(function ($) {
    //’占扑‘控制ol.ul的显隐
    $('.zhanPu').click(function () {
        $('.olNoon').hide()
        $('.ulBlock').show()
    })
    //’中心‘控制ol.ul的显隐
    $('.centerBox_objctCenter').click(function () {
        $('.olNoon').show()
        $('.ulBlock').hide()
    })
    // 切换主题
    $('#app').addClass('appclass2')
    $('.centerBox_objctCenter').css({
        'borderColor': '#f3cece',
        'boxShadow': '0px 0px 20px #f6eeee'
    }).children("input").css({
        'color': '#f1b6b6'
    })
    $('.sreachBox').addClass('sreachBox_smsx')
    $('.subject_a2').css({
        'color': '#fff'
    })
    // 激情之上
    $('.subject_a1').click(function () {
        $(this).parent().children().css({
            'color': '#6ef812'
        })
        $(this).css({
            'color': '#fff'
        })
        $('#app').addClass('appclass1')
        $('#app').removeClass('appclass2')
        $('.centerBox_objctCenter').css({
            'borderColor': 'red',
            'boxShadow': '0px 0px 45px red'
        }).children("input").css({
            'color': 'red'
        })
        $('.sreachBox').removeClass('sreachBox_smsx')
    })
    // 似梦似雪
    $('.subject_a2').click(function () {
        $(this).parent().children().css({
            'color': '#6ef812'
        })
        $(this).css({
            'color': '#fff'
        })
        $('#app').addClass('appclass2')
        $('#app').removeClass('appclass1')
        $('.centerBox_objctCenter').css({
            'borderColor': '#f3cece',
            'boxShadow': '0px 0px 20px #f6eeee'
        }).children("input").css({
            'color': '#f1b6b6'
        })
        $('.sreachBox').addClass('sreachBox_smsx')
    })

    //infer
    $('.infer').hide()
    $('.centerBox_objctCenter').click(function () {
        $('.infer').show()
        setTimeout(function () {
            $('.infer').hide()
        }, 3000)
    })
})
