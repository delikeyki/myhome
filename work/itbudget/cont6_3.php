<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>

<main>
    <form>
      <h2>초기 예산 관리</h2>
        <div class="view_type">
            <select id="viewTy1" title="연도 선택">
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
            </select>
            <label for="viewTy1">년 </label>
        </div>

      <h3>항목(계정) 목록</h3>
      <table class="baseTy">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" name="allcheck" title="전체선택" /></th>
            <th scope="col">항목명</th>
            <th scope="col">예상금액(총 금액)</th>
            <th scope="col">분류</th>
            <th scope="col">담당자</th>
            <th scope="col">추가 일시</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td class="alignR">123,456</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td class="alignR">123,456</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td class="alignR">123,456</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td class="alignR">123,456</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td class="alignR">123,456</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
        </tbody>
      </table>
      <div class="btn_wrap">
        <div class="left alignL">
            <button type="button" class="btn_cm">초기예산으로 등록</button>
        </div>
      </div>
    </form>
</main>

<script>
    $(document).ready(function() {
        $('nav>ul>li:nth-child(6)').addClass('on');
        $('#cont6_sub').show();
        $('.cont_sub>li:nth-child(3)').addClass('on');
    });
</script>
<?php include 'footer.html'; ?>