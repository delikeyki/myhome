<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>

<main>
    <form>
      <h2>연간 예산 현황</h2>
      <div class="view_type">
        <label for="viewTy1">분류 </label>
        <select id="viewTy1" title="예산항목 분류">
            <option>전체</option>
            <option>통신비</option>
            <option>지급수수료</option>
        </select>
        <label for="viewTy2">담당자 </label>
        <select id="viewTy2" title="예산 담당자">
            <option>전체</option>
            <option>홍길동</option>
            <option>고길동</option>
        </select>
      </div>
      <table class="baseTy">
        <caption>연간 예산 현황 리스트</caption>
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" name="allcheck" title="전체선택" /></th>
            <th scope="col">분류</th>
            <th scope="col">항목
                <span class="btn_sort">
                    <button type="button" class="fa fa-arrow-circle-down" title="내림차순 정렬" style="display:none;"></button>
                    <button type="button" class="fa fa-arrow-circle-up" title="오름차순 정렬"></button>
                </span>
            </th>
            <th scope="col">부서
                <span class="btn_sort">
                    <button type="button" class="fa fa-arrow-circle-down" title="내림차순 정렬" style="display:none"></button>
                    <button type="button" class="fa fa-arrow-circle-up" title="오름차순 정렬"></button>
                </span>
            </th>
            <th scope="col">담당자</th>
            <th scope="col">구분?</th>
            <th scope="col" id="m1">1월</th>
            <th scope="col" id="m2">2월</th>
            <th scope="col" id="m3">3월</th>
            <th scope="col" id="m4">4월</th>
            <th scope="col" id="m5">5월</th>
            <th scope="col" id="m6">6월</th>
            <th scope="col" id="m7">7월</th>
            <th scope="col" id="m8">8월</th>
            <th scope="col" id="m9">9월</th>
            <th scope="col" id="m10">10월</th>
            <th scope="col" id="m11">11월</th>
            <th scope="col" id="m12">12월</th>
            <th scope="col">합계
                <span class="btn_sort">
                    <button type="button" class="fa fa-arrow-circle-down" title="내림차순 정렬"></button>
                    <button type="button" class="fa fa-arrow-circle-up" title="오름차순 정렬" style="display:none"></button>
                </span>
            </th>
          </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="5">합계</td>
                <td>계획<div class="line_div">실적</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
                <td class="alignR">10,123,456,789<div class="line_div">10,123,456,789</div></td>
            </tr>
        </tfoot>
        <tbody>
          <tr>
            <td><input type="checkbox" name="itm" /></td>
            <td>통신비</td>
            <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
            <td>기술전략팀</td>
            <td>홍길동</td>
            <td>계획<div class="line_div">실적</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
            <td>
                <a href="파일경로" download="파일명">&#91;파일명1&#93;</a>
                <div class="line_div"><a href="파일경로" download="파일명">&#91;파일명2&#93;</a></div>
            </td>
            <td><a href="파일경로" download="파일명">&#91;파일명1&#93;</a></td>
            <td class="ssum">10,123,456,789<div class="line_div">10,123,456,789</div></td>
          </tr>
          <tr>
              <td><input type="checkbox" name="itm" /></td>
              <td>통신비</td>
              <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
              <td>기술전략팀</td>
              <td>홍길동</td>
              <td>계획<div class="line_div">실적</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="ssum">10,123,456,789<div class="line_div">10,123,456,789</div></td>
          </tr>
          <tr>
              <td><input type="checkbox" name="itm" /></td>
              <td>통신비</td>
              <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
              <td>기술전략팀</td>
              <td>홍길동</td>
              <td>계획<div class="line_div">실적</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="alignR">123,456,789<div class="line_div">123,456,789</div></td>
              <td class="ssum">10,123,456,789<div class="line_div">10,123,456,789</div></td>
          </tr>
        </tbody>
      </table>
      <div class="btn_wrap">
        <div class="left alignL">
            <button type="button" onclick="deleteItems()" class="btn_cm">삭제</button>
        </div>
        <div class="right alignR">
            <button type="button" class="btn_cm blue">등록&#47;수정</button>
            <a href="파일경로" class="btn_cm" download="파일명">다운로드</a>
        </div>
      </div>
    </form>
</main>

<script>
    $(document).ready(function() {
        $('nav>ul>li:nth-child(1)').addClass('on');
        $('.wrap').css('width','100%');
    });
</script>
<?php include 'footer.html'; ?>