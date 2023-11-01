<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>

<main>
    <form>
      <h2>항목(계정) 관리</h2>

      <h3>신규 신청 내역</h3>
      <table class="baseTy">
        <thead>
            <tr>
                <th scope="col">항목명</th>
                <th scope="col">분류</th>
                <th scope="col">신청자</th>
                <th scope="col">신청일시</th>
                <th scope="col">승인하기</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="text" value="유지보수B" /></td>
                <td>
                    <select title="분류 선택">
                        <option>지급수수료</option>
                    </select>
                </td>
                <td>홍길동</td>
                <td>2015-12-13 15:00</td>
                <td>
                    <button type="button" class="btn_cm ssize">승인</button>
                    <button type="button" class="btn_cm ssize">삭제</button>
                </td>
            </tr>
            <tr>
                <td><input type="text" value="유지보수A" /></td>
                <td>
                    <select title="분류 선택">
                        <option>지급수수료</option>
                    </select>
                </td>
                <td>홍길동</td>
                <td>2015-12-13 15:00</td>
                <td>
                    <button type="button" class="btn_cm ssize">승인</button>
                    <button type="button" class="btn_cm ssize">삭제</button>
                </td>
            </tr>
        </tbody>
    </table>

    <hr />

    <h3>항목(계정) 목록</h3>
    <table class="baseTy">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" name="allcheck" title="전체선택" /></th>
            <th scope="col">항목명</th>
            <th scope="col">분류</th>
            <th scope="col">신청자</th>
            <th scope="col">추가 일시</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>통신비</td>
                <td>지급수수료</td>
                <td>홍길동</td>
                <td>2015-12-12 15:00</td>
            </tr>
        </tbody>
    </table>
    <div class="btn_wrap">
      <div class="left alignL">
         <button type="button" onclick="deleteItems()" class="btn_cm">삭제</button>
      </div>
    </div>
  </form>
</main>

<script>
    $(document).ready(function() {
        $('nav>ul>li:nth-child(6)').addClass('on');
        $('#cont6_sub').show();
        $('.cont_sub>li:nth-child(2)').addClass('on');
    });
</script>
<?php include 'footer.html'; ?>