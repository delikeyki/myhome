<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>

<main>
    <form>
      <h2>연간 통계 요약</h2>

       <nav>
           <ul class="cont_sub">
               <li class="on"><a href="cont3.php">분류별 요약</a></li>
               <li><a href="cont3_2.php">부서별 요약</a></li>
           </ul>
       </nav>

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

    </form>
</main>

<script>
    $(document).ready(function() {
        $('nav>ul>li:nth-child(3)').addClass('on');
    });
</script>
<?php include 'footer.html'; ?>