<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<?php include 'header.html'; ?>

<section class="login">
  <h1>IT예산관리 전산화 시스템</h1>

  <form name="" method="">
    <fieldset>
      <legend>ITS 로그인</legend>
      <label for="userId">ID</label>
      <input type="text" id="userId" placeholder="아이디를 입력하세요" />
      <label for="userPw">PW</label>
      <input type="password" id="userPw" placeholder="비밀번호를 입력하세요" />
      <button type="submit" class="btn_cm blue">Login</button>
    </fieldset>
  </form>
</section>

  <script>
    $(document).ready(function() {
      $('header').hide();
      $('.wrap').css('width','100%');
    });
  </script>
<?php include 'footer.html'; ?>