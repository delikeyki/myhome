<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>

<main>
    <form>
      <h2>월별 예산 현황</h2>
      <div class="view_type">
        <select id="viewTy1" title="연도 선택">
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
        </select>
        <label for="viewTy1">년 </label>
        <select id="viewTy2" title="월 선택">
          <option>12</option>
          <option>11</option>
          <option>10</option>
        </select>
        <label for="viewTy2">월 </label>
      </div>
      <table class="baseTy">
        <caption>예산 리스트</caption>
          <colgroup>
              <col style="width:2%"><col style="width:9%"><col style="width:9%"><col style="width:9%"><col style="width:5%"><col style="width:16%"><col style="width:9%"><col style="width:9%"><col style="width:9%"><col style="width:11%"><col style="width:12%">
          </colgroup>
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" name="allcheck" title="전체선택" /></th>
            <th scope="col">분류</th>
            <th scope="col">항목</th>
            <th scope="col">부서</th>
            <th scope="col">담당자</th>
            <th scope="col">계약기간</th>
            <th scope="col">12월&#40;실적&#41;</th>
            <th scope="col">1월&#40;계획&#41;</th>
            <th scope="col">합계</th>
            <th scope="col">품의서</th>
            <th scope="col">세금계산서</th>
          </tr>
        </thead>
        <tfoot>
            <tr>
                <td></td>
                <td>합계</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="alignR">123,456,789</td>
                <td class="alignR"></td>
                <td class="alignR"></td>
                <td class="alignR"></td>
                <td class="alignR"></td>
            </tr>
        </tfoot>
        <tbody>
          <tr>
            <td><input type="checkbox" name="itm" /></td>
            <td>통신비</td>
            <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
            <td>기술전략팀</td>
            <td>홍길동</td>
            <td>2015-12 ~ 2016-12</td>
            <td class="alignR">123,456,789</td>
            <td class="alignR"><span class="confirm">123,456,789</span></td>
            <td class="alignR">123,456,789</td>
            <td>
                <a href="파일경로" download="파일명">&#91;파일명1&#93;</a><br />
                <a href="파일경로" download="파일명">&#91;파일명2&#93;</a>
            </td>
            <td><a href="파일경로" download="파일명">&#91;파일명1&#93;</a></td>
          </tr>
          <tr>
              <td><input type="checkbox" name="itm" /></td>
              <td>통신비</td>
              <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
              <td>기술전략팀</td>
              <td>홍길동</td>
              <td>2015-12 ~ 2016-12</td>
              <td class="alignR">123,456,789</td>
              <td class="alignR">123,456,789</td>
              <td class="alignR">123,456,789</td>
              <td>
                  <a href="파일경로" download="파일명">&#91;파일명1&#93;</a>
              </td>
              <td><a href="파일경로" download="파일명">&#91;파일명1&#93;</a></td>
          </tr>
        </tbody>
      </table>
      <div class="btn_wrap">
        <div class="left alignL">
            <button type="button" onclick="deleteItems()" class="btn_cm">삭제</button>
            <button type="button" onclick="confirmItems()" class="btn_cm blue">확정</button>
        </div>
        <div class="right alignR">
            <a href="파일경로" class="btn_cm" download="파일명">다운로드</a>
        </div>
      </div>
    </form>
</main>

<script>
    $(document).ready(function() {
        $('nav>ul>li:nth-child(2)').addClass('on');
    });
</script>
<?php include 'footer.html'; ?>