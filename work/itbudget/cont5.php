<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>


    <!--<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.js"></script> js는 다운받아 서버에 올려 사용하세요~ -->
    <script src="//www.saramin.co.kr/js/libs/jqGrid-4.3.2/jquery-ui.min.js"></script>
    <script>
        $(function(){
            $(".to").datepicker({ dateFormat: 'yy-mm-dd' });
            $(".from").datepicker({ dateFormat: 'yy-mm-dd' }).bind("change",function(){
                var minValue = $(this).val();
                minValue = $.datepicker.parseDate("yy-mm-dd", minValue);
                minValue.setDate(minValue.getDate()+1);
                $(".to").datepicker( "option", "minDate", minValue );
            })
        });
    </script>


    <main>
    <form>
      <h2>예산 등록&#47;수정</h2>

      <div class="summary_wrap">
          <div class="inner_wrap">
            <h3>신규 예산을 생성하는 경우</h3>
            <button class="btn_cm" id="btn_an">신규 예산 신청</button> &#8594; 담당자 승인 &#8594; 계획 작성
          </div>
      </div>

      <!-- 예산항목1 -->
      <div class="summary_wrap apply_item">
        <div class="inner_wrap">
          <h4>예산 항목 1</h4>
            <label for="item1_1">회계년도
                <select id="item1_1">
                    <option>2015</option>
                    <option>2014</option>
                </select>
            </label>
            <label for="item1_2">분류-항목명
                <select id="item1_2">
                    <option>무형자산-통신비</option>
                    <option>물품대금-지급수수료</option>
                </select>
            </label>

            <label for="item1_3">계약기간 <input type="text" placeholder="시작일" class="from" id="item1_3" /> ~ <input type="text" placeholder="종료일" class="to" /></label>

            <label for="item1_4">담당부서
                <select id="item1_4">
                    <option>기술전략</option>
                    <option>인프라기술</option>
                </select>
            </label>

            <label for="item1_5">지급방식
                <select id="item1_5">
                    <option>일괄</option>
                </select>
            </label>

            <!-- 서브항목 -->
            <table class="baseTy">
                <caption>항목 당 계획 리스트</caption>
                <colgroup><col style="width:15%"><col style="width:25%"><col style="width:45%"><col style="width:15%"></colgroup>
                <thead>
                    <tr>
                        <th scope="col">월</th>
                        <th scope="col">금액</th>
                        <th scope="col">메모</th>
                        <th scope="col">행 삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select id="item1_6_1">
                                <option>12</option>
                            </select>
                            <label for="item1_6_1">월</label>
                        </td>
                        <td><label for="item1_6_2"><input type="text" placeholder="금액" id="item1_6_2" /> 원</label></td>
                        <td><textarea cols="60" rows="1" placeholder="메모"></textarea></td>
                        <td><button class="btn_cm ssize trminus"><i class="fa fa-minus-circle"></i> 삭제</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="alignR"><button class="btn_cm ssize trplus"><i class="fa fa-plus-circle"></i> 행 추가</button></div>
            <!-- //서브항목 -->

        </div>
        <button class="btn_cm ssize btn_item_minus"><i class="fa fa-minus-circle"></i> 항목 삭제</button>
      </div>
      <!-- //예산항목1 -->

      <!-- 예산항목2 -->
      <div class="summary_wrap apply_item">
            <div class="inner_wrap">
                <h4>예산 항목 2</h4>
                <label for="item2_1">회계년도
                    <select id="item2_1">
                        <option>2015</option>
                        <option>2014</option>
                    </select>
                </label>
                <label for="item2_2">분류-항목명
                    <select id="item2_2">
                        <option>무형자산-통신비</option>
                        <option>물품대금-지급수수료</option>
                    </select>
                </label>

                <label for="item2_3">계약기간 <input type="date" title="시작일" min="2015-12-01" id="item2_3" /> ~ <input type="date" title="종료일" min="2015-12-01" /></label>

                <label for="item2_4">담당부서
                    <select id="item2_4">
                        <option>기술전략</option>
                        <option>인프라기술</option>
                    </select>
                </label>

                <label for="item2_5">지급방식
                    <select id="item2_5">
                        <option>일괄</option>
                    </select>
                </label>

                <!-- 서브항목 -->
                <table class="baseTy">
                    <caption>항목 당 계획 리스트</caption>
                    <colgroup><col style="width:15%"><col style="width:25%"><col style="width:45%"><col style="width:15%"></colgroup>
                    <thead>
                    <tr>
                        <th scope="col">월</th>
                        <th scope="col">금액</th>
                        <th scope="col">메모</th>
                        <th scope="col">행 삭제</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <select id="item2_6_1">
                                <option>12</option>
                            </select>
                            <label for="item2_6_1">월</label>
                        </td>
                        <td><label for="item2_6_2"><input type="text" placeholder="금액" id="item2_6_2" /> 원</label></td>
                        <td><textarea cols="60" rows="1" placeholder="메모"></textarea></td>
                        <td><button class="btn_cm ssize trminus"><i class="fa fa-minus-circle"></i> 삭제</button></td>
                    </tr>
                    </tbody>
                </table>
                <div class="alignR"><button class="btn_cm ssize trplus"><i class="fa fa-plus-circle"></i> 행 추가</button></div>
                <!-- //서브항목 -->

            </div>
            <button class="btn_cm ssize btn_item_minus"><i class="fa fa-minus-circle"></i> 항목 삭제</button>
        </div>
      <!-- //예산항목2 -->

    <!-- 예산항목 다른 케이스 -->
    <div class="summary_wrap apply_item">
        <div class="inner_wrap">
            <label for="item3_2">분류-항목명
                <select id="item3_2">
                    <option>무형자산-통신비</option>
                    <option>물품대금-지급수수료</option>
                </select>
            </label>

            <label for="item3_3">계약기간 <input type="text" placeholder="시작일" class="from" id="item3_3" /> ~ <input type="text" placeholder="종료일" class="to" /></label>

            <label for="item3_4">담당부서
                <select id="item3_4">
                    <option>기술전략</option>
                    <option>인프라기술</option>
                </select>
            </label>

            <label for="item3_5">지급방식
                <select id="item3_5">
                    <option>일괄</option>
                </select>
            </label>

            <!-- 서브항목 -->
            <table class="baseTy">
                <caption>항목 당 계획 리스트</caption>
                <colgroup><col style="width:5%"><col style="width:12%"><col style="width:15%"><col style="width:12%"><col style="width:24%"><col style="width:10%"><col style="width:10%"><col style="width:12%"></colgroup>
                <thead>
                <tr>
                    <th scope="col">월</th>
                    <th scope="col">계획</th>
                    <th scope="col">실적</th>
                    <th scope="col">수정계획</th>
                    <th scope="col">메모</th>
                    <th scope="col">품의서</th>
                    <th scope="col">세금계산서</th>
                    <th scope="col">행 삭제</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>11월</td>
                    <td class="alignR">123,456원</td>
                    <td class="alignR"><label for="item3_6_1"><input type="text" placeholder="금액" id="item3_6_1" /> 원</label></td>
                    <td></td>
                    <td><textarea cols="40" rows="1" placeholder="메모"></textarea></td>
                    <td>
                        <a href="파일경로" download="파일명">[파일명1]</a>
                        <label for="file_up1" class="btn_cm ssize">파일 업로드</label><input type="file" id="file_up1" />
                    </td>
                    <td><label for="file_up2" class="btn_cm ssize">파일 업로드</label><input type="file" id="file_up2" /></td>
                    <td><button class="btn_cm ssize trminus"><i class="fa fa-minus-circle"></i> 삭제</button></td>
                </tr>
                <tr>
                    <td>12월</td>
                    <td class="alignR">123,456원</td>
                    <td class="alignR"><label for="item3_7_1"><input type="text" placeholder="금액" id="item3_7_1" /> 원</label></td>
                    <td></td>
                    <td><textarea cols="40" rows="1" placeholder="메모"></textarea></td>
                    <td><label for="file_up3" class="btn_cm ssize">파일 업로드</label><input type="file" id="file_up3" /></td>
                    <td><label for="file_up4" class="btn_cm ssize">파일 업로드</label><input type="file" id="file_up4" /></td>
                    <td>
                        <button class="btn_cm ssize trminus"><i class="fa fa-minus-circle"></i> 삭제</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="alignR"><button class="btn_cm ssize trplus"><i class="fa fa-plus-circle"></i> 행 추가</button></div>
            <!-- //서브항목 -->

        </div>
        <button class="btn_cm ssize btn_item_minus"><i class="fa fa-minus-circle"></i> 항목 삭제</button>
    </div>
    <!-- //예산항목 다른 케이스 -->

      <button class="btn_cm ssize"><i class="fa fa-plus-circle"></i> 예산 항목 추가</button>

      <div class="btn_wrap alignR">
        <button type="submit" class="btn_cm blue">등록</button>
      </div>
    </form>

    <!-- 신규예산 레이어 -->
    <div class="dimmed" id="applyNew">
        <div class="lay_new">
          <form>
            <h4>신규 예산 추가 신청</h4>
            <table class="baseTy">
             <caption>입력 테이블</caption>
             <colgroup><col class="colw1"><col class="colw2"></colgroup>
             <tbody>
                <tr>
                    <th scope="row" class="alignR"><label for="write1">항목명</label></th>
                    <td class="alignL"><input type="text" id="write1" /> <button class="btn_cm">중복 체크</button></td>
                </tr>
                <tr>
                    <th scope="row" class="alignR"><label for="write2">분류</label></th>
                    <td class="alignL">
                        <select id="write2" title="예산항목 분류">
                            <option>통신비</option>
                            <option>지급수수료</option>
                        </select>
                    </td>
                </tr>
             </tbody>
            </table>
            <div class="btn_wrap">
                <button class="btn_cm blue">생성 요청</button>
            </div>
            <button class="btn_lay_close">레이어 닫기</button>
          </form>
        </div>
    </div>
    <!-- //신규예산 레이어 -->

</main>

<script>
    $(document).ready(function() {
        $('nav>ul>li:nth-child(5)').addClass('on');
    });
</script>
<?php include 'footer.html'; ?>