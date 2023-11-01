/* IT예산 관리시스템 UI관련 js */

function deleteItems() {
    confirm("선택한 항목을 삭제하시겠습니까?");
}

function confirmItems() {
    confirm("선택한 항목을 확정처리 하시겠습니까?");
}

function editConfirm() {
    confirm("수정하시겠습니까?");
}


$(document).ready(function() {

    /* input checkbox 전체선택 */
    $("input[name='allcheck']").click(function() {

        var chk = $(this).is(':checked');

        //alert($('input[name="allcheck"]').is(':checked') );

        if(chk){
            $("input[name='itm']:checkbox").each(function() {
                $(this).attr("checked", true);
                $(this).parents("tr").addClass("selected");

            });
        }else{
            $("input[name='itm']:checkbox").each(function() {
                $(this).attr("checked", false);
                $(this).parents("tr").removeClass("selected");

            });
        }
    });

    /* input checkbox 선택 */
    $("input[name='itm']").click(function() {

        var thIpt = $(this);

        if( thIpt.is(':checked')){
            //alert('true');
            thIpt.attr("checked","cheched");
            thIpt.parents("tr").addClass("selected");

        } else {
            //alert('false');
            thIpt.removeAttr("checked");
            thIpt.parents("tr").removeClass("selected");

        }
    });

    /* 항목 삭제 */
    $('.btn_item_minus').on("click",function(){
        $(this).parent('div.apply_item').hide();
        return false;
    });

    /* tr 추가 삭제 */
    $('button.trplus').live("click",function(){

        var thTbl = $(this).parent().siblings('table').children('tbody'),
            rowTag = thTbl.find('tr:last').html();

        thTbl.append("<tr>"+ rowTag +"</tr>");
        return false;
    });

    $('button.trminus').live("click",function(){

        var delTr = $(this).parent().parent('tr'),
            trCount = delTr.parent('tbody').children('tr').length;

        if( trCount == 1) {                            /* tr이 1개일때 해당 div 삭제 */
            $(this).parents('div.apply_item').hide();
        }
        delTr.remove();
        return false;
    });


    /* 정렬아이콘 토글 */
    $('.btn_sort>button').on("click",function(){
        $(this).hide();
        $(this).siblings().show();
    });

    /* 검색레이어 */
    $('#manager_name').on("keypress",function(){
        $(this).next('div.lay_result').show();
    });
    $('.lay_result').on("mouseleave",function(){
        $(this).hide();
    });

    /* 신규예산 추가 버튼 */
    $('#btn_an').on("click",function(){
        $('#applyNew').fadeIn();
        return false;
    });
    $('.btn_lay_close').on("click",function(){
        $('#applyNew').hide();
        return false;
    });


    /* open popup */
    $('.viewItm').click(function(){
        window.open(this.href, '', 'width=700,height=610,top=0,left=0,location=no,menubar=no,toolbar=no,status=no');
        return false;
    });

    /* close popup */
    $('#winClose').click(function(){
        self.close();
    });

});

