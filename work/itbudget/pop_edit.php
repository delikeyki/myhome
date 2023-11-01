<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>항목 수정 - IT예산 관리시스템</title>
  <meta name="description" content="IT예산 관리시스템">
  <meta name="author" content="SaraminHR Technology Strategy Team">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="default.css" />
  <link href="//www.saraminimage.co.kr/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <script src="//www.saraminimage.co.kr/js/libs/jquery-1.8.3.min.js"></script>
  <script src="ui.js"></script>
</head>
<body>

<div class="pop_wrap">
  <h1>항목 수정</h1>

  <form>
    <table class="baseTy popTy">
      <caption>항목 수정</caption>
      <colgroup><col class="colw3"><col class="colw4"></colgroup>
      <tbody>
        <tr>
          <th scope="row">항목명</th>
          <td>항목명</td>
        </tr>
        <tr>
          <th scope="row">예상 총액</th>
          <td>123,456원</td>
        </tr>
        <tr>
          <th scope="row">실제 총액</th>
          <td>123,456원</td>
        </tr>
        <tr>
          <th scope="row"><label for="term">계약기간</label></th>
          <td><input type="date" id="term" title="시작일" min="2015-12-01" /> ~ <input type="date" title="종료일" min="2015-12-01" /></td>
        </tr>
        <tr>
          <th scope="row"><label for="memo">메모</label></th>
          <td><textarea cols="70" rows="4" id="memo"></textarea></td>
        </tr>
        <tr>
          <th scope="row">품의서</th>
          <td>
            <a href="파일경로" download="파일명">&#91;품의서1.pdf&#93;</a><br />
            <input type="file" id="" value="업로드" />
          </td>
        </tr>
        <tr>
          <th scope="row">세금계산서</th>
          <td>
            <a href="파일경로" download="파일명">&#91;세금계산서1.pdf&#93;</a><br />
            <input type="file" id="" value="업로드" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="btn_wrap">
      <button type="button" onclick="editConfirm()" class="btn_cm">수정</button>
      <button type="button" id="winClose" class="btn_cm">닫기</button>
    </div>
  </form>
</div>

</body>
</html>