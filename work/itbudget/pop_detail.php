<?php header('Content-Type: text/html; charset=UTF-8'); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>항목 상세보기 - IT예산 관리시스템</title>
  <meta name="description" content="IT예산 관리시스템">
  <meta name="author" content="SaraminHR Technology Strategy Team">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="default.css" />
  <link href="//sri-its.saraminhr.co.kr/s/ko_KR-aqio4c-1988229788/6262/13/_/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <script src="//www.saraminimage.co.kr/js/libs/jquery-1.8.3.min.js"></script>
  <script src="ui.js"></script>
</head>
<body>

<div class="pop_wrap">
  <h1>항목 상세 보기</h1>

  <form>
    <table class="baseTy popTy">
      <caption>항목 상세내역</caption>
      <colgroup><col class="colw3"><col class="colw4"></colgroup>
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
        <th scope="row">계약기간</th>
        <td>2015-01-01 ~ 2015-12-31</td>
      </tr>
      <tr>
        <th scope="row">담당자</th>
        <td>홍길동</td>
      </tr>
      <tr>
        <th scope="row">메모</th>
        <td>망분리 솔루션 구성변경</td>
      </tr>
      <tr>
        <th scope="row">품의서</th>
        <td>
          <a href="파일경로" download="파일명">&#91;품의서1.pdf&#93;</a>
          <a href="파일경로" download="파일명">&#91;품의서2.pdf&#93;</a>
        </td>
      </tr>
      <tr>
        <th scope="row">세금계산서</th>
        <td>
          <a href="파일경로" download="파일명">&#91;세금계산서1.pdf&#93;</a>
          <a href="파일경로" download="파일명">&#91;세금계산서2.pdf&#93;</a>
        </td>
      </tr>
    </table>

    <hr />

    <h2>변경이력</h2>
    <div class="history_wrap">
      <table class="baseTy">
        <caption>변경이력 리스트</caption>
        <thead>
          <tr>
            <th scope="col">변경일</th>
            <th scope="col">항목</th>
            <th scope="col">금액</th>
            <th scope="col">계약기간</th>
            <th scope="col">담당자</th>
            <th scope="col">메모</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="alignC">2015-01-01</td>
            <td class="alignC">통신비</td>
            <td>123,456,789</td>
            <td class="alignC">2015-01-01 ~ 2015-12-31</td>
            <td class="alignC">홍길동</td>
            <td class="alignC">망분리</td>
          </tr>
          <tr>
            <td class="alignC">2015-01-01</td>
            <td class="alignC">통신비</td>
            <td>123,456,789</td>
            <td class="alignC">2015-01-01 ~ 2015-12-31</td>
            <td class="alignC">홍길동</td>
            <td class="alignC">망분리</td>
          </tr>
          <tr>
            <td class="alignC">2015-01-01</td>
            <td class="alignC">통신비</td>
            <td>123,456,789</td>
            <td class="alignC">2015-01-01 ~ 2015-12-31</td>
            <td class="alignC">홍길동</td>
            <td class="alignC">망분리</td>
          </tr>
          <tr>
            <td class="alignC">2015-01-01</td>
            <td class="alignC">통신비</td>
            <td>123,456,789</td>
            <td class="alignC">2015-01-01 ~ 2015-12-31</td>
            <td class="alignC">홍길동</td>
            <td class="alignC">망분리</td>
          </tr>
          <tr>
            <td class="alignC">2015-01-01</td>
            <td class="alignC">통신비</td>
            <td>123,456,789</td>
            <td class="alignC">2015-01-01 ~ 2015-12-31</td>
            <td class="alignC">홍길동</td>
            <td class="alignC">망분리</td>
          </tr>
          <tr>
            <td class="alignC">2015-01-01</td>
            <td class="alignC">통신비</td>
            <td>123,456,789</td>
            <td class="alignC">2015-01-01 ~ 2015-12-31</td>
            <td class="alignC">홍길동</td>
            <td class="alignC">망분리</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="btn_wrap">
      <a href="pop_edit.php" class="btn_cm">수정</a>
      <button type="button" onclick="deleteItems()" class="btn_cm">삭제</button>
      <button type="button" id="winClose" class="btn_cm">닫기</button>
    </div>
  </form>
</div>

</body>
</html>