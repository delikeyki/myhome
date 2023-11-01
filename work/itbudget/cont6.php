<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>

<main>
    <form>
      <h2>담당자 관리</h2>

      <h3>담당자 검색</h3>
      <div class="txt_box">
          <label for="manager_name">담당자 이름</label>
          <span class="wrap_find">
            <input type="search" id="manager_name" placeholder="엔터로 검색" autocomplete="off" />
            <div class="lay_result">
              <ul>
                  <li>홍길동</li>
                  <li>고길동</li>
                  <li>정파리</li>
                  <li>희동이</li>
              </ul>
            </div>
          </span>
          <!-- case -->
          <label for="manager_id">아이디</label> <input type="text" id="manager_id" value="gildong" />
          <label for="manager_team">부서</label>
          <select id="manager_team">
              <option>기술전략팀</option>
          </select>
          <button type="button" class="btn_cm">추가</button>
          <!-- //case -->
          <button type="button" class="btn_cm"><i class="fa fa-search"></i> 검색</button>
      </div>

      <hr />

      <h3>담당자 목록</h3>
      <table class="baseTy">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" name="allcheck" title="전체선택" /></th>
            <th scope="col">아이디</th>
            <th scope="col">이름</th>
            <th scope="col">부서</th>
            <th scope="col">관리자 여부</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>abcmarket</td>
                <td>홍길동</td>
                <td>기술전략팀</td>
                <td>Y</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>abcmarket</td>
                <td>홍길동</td>
                <td>기술전략팀</td>
                <td>N</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>abcmarket</td>
                <td>홍길동</td>
                <td>기술전략팀</td>
                <td>Y</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>abcmarket</td>
                <td>홍길동</td>
                <td>기술전략팀</td>
                <td>Y</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>abcmarket</td>
                <td>홍길동</td>
                <td>기술전략팀</td>
                <td>Y</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="itm" /></td>
                <td>abcmarket</td>
                <td>홍길동</td>
                <td>기술전략팀</td>
                <td>Y</td>
            </tr>
        </tbody>
      </table>
        <div class="more_list"><button>더보기</button></div>
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
        $('.cont_sub>li:nth-child(1)').addClass('on');
    });
</script>
<?php include 'footer.html'; ?>