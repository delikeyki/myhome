<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>

<main class="summary_month">
    <form>
      <h2>월별 통계</h2>
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

      <div class="summary_wrap">
        <div class="inner_wrap" id="innerWrap">
          <div class="left">
              <h3>분류별 요약</h3>

              <table class="baseTy">
                  <caption>분류별 요약 리스트</caption>
                  <thead>
                  <tr>
                      <th scope="col">분류별</th>
                      <th scope="col">초기 예산</th>
                      <th scope="col">현재 실적</th>
                      <th scope="col">집행률</th>
                  </tr>
                  </thead>
                  <tfoot>
                  <tr>
                      <td>합계</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  </tfoot>
                  <tbody>
                  <tr>
                      <td>통신비</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  <tr>
                      <td>지급수수료</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  <tr>
                      <td>통신비</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  <tr>
                      <td>통신비</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  <tr>
                      <td>통신비</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  </tbody>
              </table>
          </div>
          <div class="right">
              <h3>부서별 요약</h3>

              <table class="baseTy">
                  <caption>부서별 요약 리스트</caption>
                  <thead>
                  <tr>
                      <th scope="col">부서별</th>
                      <th scope="col">초기 예산</th>
                      <th scope="col">현재 실적</th>
                      <th scope="col">집행률</th>
                  </tr>
                  </thead>
                  <tfoot>
                  <tr>
                      <td>합계</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  </tfoot>
                  <tbody>
                  <tr>
                      <td>정보보안</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  <tr>
                      <td>인프라기술</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  <tr>
                      <td>기술전략</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  <tr>
                      <td>모바일개발</td>
                      <td class="alignR">123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  <tr>
                      <td>웹개발</td>
                      <td class="alignR" >123,456,789</td>
                      <td class="alignR">123,456,789</td>
                      <td>100%</td>
                  </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </div>

      <span class="btn_sort">
        <button type="button" class="fa fa-arrow-circle-down" title="요약 접기" onclick="document.getElementById('innerWrap').style.display='none';"></button>
        <button type="button" class="fa fa-arrow-circle-up" title="요약 펼치기" onclick="document.getElementById('innerWrap').style.display='block';" style="display:none"></button>
      </span>

      <hr />

      <table class="baseTy">
        <caption>예산 리스트</caption>
        <thead>
          <tr>
            <th scope="col">분류</th>
            <th scope="col">항목명</th>
            <th scope="col">부서명</th>
            <th scope="col">담당자</th>
            <th scope="col">12월&#40;실적&#41;</th>
            <th scope="col">1월&#40;계획&#41;</th>
            <th scope="col">집행률</th>
            <th scope="col">합계</th>
          </tr>
        </thead>
        <tfoot>
            <tr>
                <td>합계</td>
                <td></td>
                <td></td>
                <td></td>
                <td class="alignR">123,456,789</td>
                <td class="alignR">123,456,789</td>
                <td>99%</td>
                <td class="alignR"><strong>123,456,789</strong></td>
            </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>통신비</td>
            <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
            <td>기술전략팀</td>
            <td>홍길동</td>
            <td class="alignR">123,456,789</td>
            <td class="alignR">123,456,789</td>
            <td>99%</td>
            <td class="alignR">123,456,789</td>
          </tr>
          <tr>
              <td>통신비</td>
              <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
              <td>기술전략팀</td>
              <td>홍길동</td>
              <td class="alignR">123,456,789</td>
              <td class="alignR">123,456,789</td>
              <td>99%</td>
              <td class="alignR">123,456,789</td>
          </tr>
          <tr>
              <td>통신비</td>
              <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
              <td>기술전략팀</td>
              <td>홍길동</td>
              <td class="alignR">123,456,789</td>
              <td class="alignR">123,456,789</td>
              <td>99%</td>
              <td class="alignR">123,456,789</td>
          </tr>
          <tr>
              <td>통신비</td>
              <td><a href="pop_detail.php" target="_blank" class="viewItm">호스팅비</a></td>
              <td>기술전략팀</td>
              <td>홍길동</td>
              <td class="alignR">123,456,789</td>
              <td class="alignR">123,456,789</td>
              <td>99%</td>
              <td class="alignR">123,456,789</td>
          </tr>
        </tbody>
      </table>
      <div class="btn_wrap">
        <div class="right alignR">
            <a href="파일경로" class="btn_cm" download="파일명">다운로드</a>
        </div>
      </div>
    </form>
</main>

<script>
    $(document).ready(function() {
        $('nav>ul>li:nth-child(4)').addClass('on');
    });
</script>
<?php include 'footer.html'; ?>