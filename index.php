<?php
  header("Content-Type: text/html; charset=UTF-8");
  $conn = mysqli_connect('localhost','delikeyki','ahdtlf95!');
  mysqli_select_db($conn,'delikeyki');
?>
<!DOCTYPE html>
<html lang="ko">
 <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>Factory keyki</title>
  <link href="default.css" rel="stylesheet">
  <link rel="SHORTCUT ICON" href="img/favicon.ico">
  <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
  <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
  <script src="ui_js.js"></script>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>

	<!-- <div class="skip">
		<a href="#content" id="goto_main">본문 바로가기</a>
	</div> -->

	<header class="head_wrap">
		<div class="head" id="head_move">
			<div class="logo">
				<!-- <h1><i class="fa fa-refresh fa-spin fa-1x fa-fw margin-bottom"></i>Factory keyki</h1> -->
        <div style="float:left;width:120px;height:53px;">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 viewBox="0 0 231.5 152" style="enable-background:new 0 0 231.5 152;" xml:space="preserve">
          <style type="text/css">
          	.st0{fill:#050B3D;}
          	.st1{fill:#152D57;}
          	.st2{fill:#173364;}
          	.st3{fill:#E50A0A;}
          	.st4{fill:#FCFCFC;}
          	.st5{fill:#FAFBFC;}
          </style>
          <g id="레이어_1">
          </g>
          <g id="레이어_2">
          	<path class="st0" d="M-35.2,80.1L-35.2,80.1C-35.2,80.1-35.2,80.1-35.2,80.1C-35.2,80.1-35.2,80.1-35.2,80.1z"/>
          	<path class="st0" d="M-37.3,78.1L-37.3,78.1L-37.3,78.1C-37.2,78.1-37.2,78.1-37.3,78.1z"/>
          	<g>
          		<path class="st1" d="M207.3,79.8c2.6-1.6,4.6-1.4,6.9-0.8c2.1,0.6,4.4,0.7,6.6,0.3c1.6-0.3,2.7-2.1,4.7-0.8c0.3,0.2,0.3,0.9,0,1.3
          			c-1.1,1.4-3.1,2-5.2,1.8C216.1,81.1,212,80.4,207.3,79.8z"/>
          		<path class="st2" d="M208,84.2c0.4-1.2-0.4-2.6,0.7-3.7c1.5,2.5,4.1,1.6,6.2,2.3c1.4,0.4,4.1-0.6,3.8,1.8
          			c-0.3,1.9-2.5,0.3-3.8,0.3C212.7,84.8,210.4,84.4,208,84.2z"/>
          		<path class="st3" d="M97.5,18.8c0.8-0.9,1.3-1.8,1.3-3c1.3-2.3,0.4-4.9,0.8-7.3c0.8-4.1,3.5-5.5,6.9-3.4c0.4,0.2,0.9,1,1.1,0.9
          			c5.6-3.3,7.7,1,10.6,4.5c1,1.2,2.8,1.9,2.2,3.9c-0.5,1.7-1.8,2.8-3.6,3.1c-2.8,0.4-5.6,0.5-8.4,0.7c-3.8,0.2-5.6,1.1-3,5.4
          			c2.7,4.5,2.2,9.5-0.6,14.2c0-1.2,0-2.4,0-3.5c0.2-4.8-0.4-9.3-5.1-12.2C98.8,21.4,98.2,19.9,97.5,18.8z"/>
          		<path class="st0" d="M224.5,127.7c-2.7-0.1-4.3-1.9-6-3.6c-0.2-0.2-0.5-0.3-0.8-0.4c-1.1-0.2-1.7-0.9-1.8-1.9
          			c-0.1-0.6-0.4-1-0.9-1.2c-2.4-0.9-4.5-2.5-4.9-4.6c-0.5-3.3-2.9-5.2-4.7-7c-9.5-9.1-21.3-11.5-34-10.5c-4.5,0.4-8.9,0.1-13.4-0.4
          			c-4.5-0.5-3.7-4.1-4.5-6.4c-0.7-2.2,2.3-2.4,3.8-2.9c10.9-3.1,22.2-3.9,33.4-4.2c8.1-0.2,16,1.9,23.7,4.5c1.2,0.4,3.4,2,3.9,0.2
          			c0.6-2.2-2-1.3-3.2-1.8c-2.4-1-5.4-1-6.6-3.8c-0.1-0.2-0.1-0.5-0.1-0.7c0.1-1.1-0.4-2.4,0.6-3.3c0.2-1.5-0.8-0.9-1.5-0.9
          			c-3.1-0.1-6.3,0-9.4-1.1c-1-0.4-1.3-1.7-0.4-2.4c1.3-1.2,2.5-2.4,3.2-3.8c0.5-1-0.3-2.2-1.5-2.1c-1.5,0.2-2.7,1.1-3.9,1.7
          			c-1.2,0.6-2.5-0.7-1.9-1.9c0.3-0.6,0.4-1.2-0.5-1.6c-1.4-0.6-2.4,1.1-3.1,2.1c-1.1,1.7-5.1,2.1-2.4,5.8c0.7,1-2.4,0.4-3.9,1.9
          			c-2.4,2.5-6.6,4.6-10.4,2.9c-5.6-2.5-10.9-5.6-16.3-8.6c-1.1-0.6-2.8-1.2-2.3-2.8c0.4-1.2,1.9-1,3.1-1.1c3.5-0.3,4.7-2.2,3.6-5.4
          			c-2.1-6.4-8.5-8.5-14-4.5c-1.2,0.9-2.2,2-3.4,3c-6,5.4-10.2,4.6-14.5-2.1c-3.9-6.1-7.6-12.4-14.4-15.3c-1.2-0.5-1.2-2.2,0-2.6
          			c3.6-1.4,6.6-3.9,9.3-7.3c0.6-0.8,0.3-2-0.7-2.2c-1.2-0.4-2-1.1-3-1.8c-4.5-3.5-6.7-9.3-12.2-11.4c-0.2-0.1-0.4-0.1-0.6-0.1
          			c-3.6,0.2-5.2,1.2-2.7,5.3c2.7,4.5,2.2,9.5-0.6,14.2c0-1.2,0-2.4,0-3.5c0.2-4.8-0.4-9.3-5.1-12.2c-0.9-0.5-1.4-1.7-2-2.7
          			c-0.2-0.3-0.4-0.5-0.7-0.6c-0.5-0.3-0.7-0.6-0.8-1c-0.2-1.5-2.3-1.8-2.8-0.4c0,0,0,0,0,0c-0.4,1.1,0,3.7-2.1,0.9
          			c-0.5-0.7-0.8,0.4-1,1c-1.1,4.5-1.8,9.1-1.3,13.8c0.2,1.7-0.7,3.3-0.6,4.8c0.2,5.7,3.2,8,9.1,7.2c0.9-0.1,1.7,0.1,2.4,0.4
          			c0.7,0.3,1,1.2,0.7,1.9c-2.4,5.1-5.9,9.3-10,13c-0.3,0.3-0.5,0.7-0.5,1.1c0.1,2,0.4,4.1-0.8,5.8c-0.5,0.9-1.3,2.3-1.8,3.3
          			c-4.2,10.9-10.6,13.3-21.8,7.6c-2.6-1.3-5.5-1.4-8-3c-0.2-0.1-0.4-0.2-0.6-0.2c-3.2-0.4-6.3-1.2-9.3-2.7c-0.1-0.1-0.2-0.1-0.3-0.1
          			c-9.6-1.9-18.8-5-28.2-7.7c-3.8-1-7.7-2.1-11.5-3.2c-1.2-0.3-2.5-0.6-3,0.8c-0.6,1.7,0.9,2.3,2.2,2.6c3.6,1.1,7.3,2,11,3.1
          			c1.4,0.4,3.1,0.3,3.7,2.1c0.3-0.1,0.5,0,0.8,0.1c0.7-0.5,1.3-0.5,2,0c7,1.3,13.8,3.4,20.5,5.8c0,0,0.1,0,0.1,0
          			c7.1,1.9,14.2,3.7,21.3,5.6c0.9,0.2,1.3,1.2,1,2c-1.1,2.5-2.7,3.3-5.7,1.8c-1.7-0.9-3.1-0.7-2.6,2.2c0.8,4.7,0.8,9.4-0.8,14.1
          			c-1.7,5-0.9,10.2,0.7,15.2c1.3,4.2,3.3,8.2,2.5,12.7c-0.1,0.5,0,0.9,0.4,1.3l1,1.1c1.5-0.1,1.7,1,2.1,2c3.6,0.3,6.7,1.7,9.5,3.8
          			c0.4,0.3,0.9,0.4,1.3,0.2c0.2-0.1,0.4-0.1,0.5-0.2c0,0,0.1,0,0.1,0c4.9-1.2,9.9-2.3,14.8-3.5c0.2-0.1,0.4-0.2,0.6-0.3
          			c2.7-2.5,6-4.2,8-7.5c0.5-0.9,1.4-0.3,1.9,0.5c2.9-0.6,5-2.3,6.6-4.7c0.1-0.1,0.2-0.2,0.3-0.3l0.9-0.7c-0.3-2.9,3.1-4.9,2.1-8
          			c0-0.3,0-0.7,0-1c-2.2-3.8-4.3-7.1-9.9-6.4c-2.7,0.4-4.7-1.5-6.8-4c-0.8-1-0.1-2.5,1.2-2.4c3.9,0.3,7.2,0.5,10.6,0.7
          			c1.2-0.1,3.2-0.3,4.5-0.4c3.4-0.8,6.8-0.8,10.1,0.4c0.2,0.1,0.3,0.1,0.5,0.1c4.1-0.1,5,2.4,4.7,5.8c0.1,0.8,0.3,2.1,0.5,3
          			c0.6,1.4,1.1,3,2.9,1c0.2-0.2,0.4-0.6,0.4-0.9c0.1-1.1,0.1-2.2,0.3-3.3c0.6-3.4,1.9-5.2,4.8-1.9c0.1,0.1,0.3,0.2,0.4,0.3
          			c2.5,1.3,4.7,3.1,6.7,5.1c0.1,0.1,0.1,0.1,0.2,0.2c6.8,4.7,12.8,10.5,18.9,16c6,5.4,12.2,10.4,19.3,14.4c0.2,0.1,0.3,0.3,0.5,0.4
          			c1.2,1.6,3.6,0.3,5,1.5c0.2,0.2,0.5,0.3,0.9,0.3c0.8,0,1.4,0.3,1.8,0.8c1.2,0.4,2,0.7,3.2,1c1.4-0.5,2.9,0.1,4.3,0.4
          			c-4.4-2.5-7.5-4.1-7.4-4.4c0.2-0.3,4.5,2.6,10.7,2.7c-0.5-1.1-1.2-2.2,0.5-2.4c0.2,0,0.4,0,0.7,0c-2.2-0.4-3.9-1.1-3.8-1.4
          			c0-0.2,0.8-0.3,3.9-0.1c1.1-0.3,3-0.7,5.2-1c0.8-0.1,1.5-0.2,2.1-0.3c1.9-1.3,4.1-2.1,6.1-3.3c0.1-0.1,0.3-0.1,0.5-0.2
          			c1.3-0.3,2.6-0.5,3.8-0.8c-4.7-0.5-14.1,0-14.1-0.3c0-0.2,2-0.3,5.9-0.9c4.4-0.6,8.2-1.1,8.2-1.6c0-0.3-1.8-0.2-4.4-0.9
          			c-4.2-1.2-7.4-3.7-7.3-4c0.1-0.3,2.3,1,5.6,2c6.6,2,10.1,0.8,12.7,1.2C224.9,128.1,224.5,128,224.5,127.7z M193,72.5
          			c0.5,0,0.9,0.3,0.9,0.7s-0.4,0.7-0.9,0.7s-0.9-0.3-0.9-0.7S192.5,72.5,193,72.5z M189.3,72.1c0.4,0,0.8,0.2,0.8,0.5
          			s-0.4,0.5-0.8,0.5s-0.8-0.2-0.8-0.5S188.9,72.1,189.3,72.1z M90.3,94.5c-3.7-3.3-6.4-5.5-9.8-7.2c2.2-1.1,3.6,0.2,4.9,0.9
          			c1.8,1.1,3.1-0.6,5.1-0.5C90.6,89.9,88.9,91.4,90.3,94.5z M107,74.6c-5.2,1.7-9.3,5-12.8,9c-1,1.2-2.3,1.8-3.4,0.9
          			c-1.6-1.3,0.2-2.3,0.8-3.1c2.2-3.1,3.9-6.9,9-6.1c2.3,0.3,4-2.1,5.6-3.7c0.5-0.5,1.1-0.9,1.7-0.5c0.3,0.2,0.4,0.8,0.5,1.1
          			C108.6,73.6,108,74.3,107,74.6z"/>
          		<path class="st4" d="M108,71.1c-0.6-0.4-1.2,0-1.7,0.5c-1.6,1.7-3.2,4.1-5.6,3.7c-5.2-0.7-6.8,3-9,6.1c-0.6,0.9-2.4,1.9-0.8,3.1
          			c1.2,0.9,2.4,0.2,3.4-0.9c3.5-4.1,7.5-7.4,12.8-9c1.1-0.3,1.7-1,1.5-2.5C108.4,71.9,108.3,71.3,108,71.1z"/>
          		<path class="st4" d="M90.5,87.8c-2-0.1-3.3,1.6-5.1,0.5c-1.3-0.8-2.7-2.1-4.9-0.9c3.4,1.6,6.1,3.9,9.8,7.2
          			C88.9,91.4,90.6,89.9,90.5,87.8z"/>
          		<ellipse class="st5" cx="189.3" cy="72.6" rx="0.8" ry="0.5"/>
          		<ellipse class="st5" cx="193" cy="73.1" rx="0.9" ry="0.7"/>
          	</g>
          </g>
          </svg>

          <!-- TEXT Svg
          <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          	 y="0px" viewBox="0 0 99 21" style="enable-background:new 0 0 99 21;" xml:space="preserve">
          <style type="text/css">
          	.st0{fill:#0099cc;}
          </style>
          <path class="st0" d="M13.8,6v2.1c-1.5-0.7-3-1.1-4.3-1.1c-1.6,0-2.8,0.6-3.8,1.7s-1.5,2.6-1.5,4.4c0,1.8,0.6,3.2,1.7,4.4
          	s2.6,1.7,4.3,1.7c0.4,0,0.9,0,1.5-0.1v-4H8.9v-1.7H14v7c-1.6,0.5-3.1,0.8-4.5,0.8c-2.3,0-4.2-0.7-5.7-2.2s-2.2-3.3-2.2-5.6
          	c0-2.4,0.7-4.3,2.2-5.8s3.4-2.2,5.7-2.2C10.9,5.3,12.3,5.6,13.8,6z"/>
          <path class="st0" d="M22.5,21c-1.9,0-3.3-0.6-4.4-1.8s-1.6-2.8-1.6-4.9c0-2.1,0.5-3.7,1.6-4.9s2.5-1.8,4.4-1.8
          	c1.9,0,3.3,0.6,4.4,1.8s1.6,2.8,1.6,4.9c0,2.1-0.5,3.7-1.6,4.9S24.3,21,22.5,21z M22.5,19.3c1.1,0,2-0.4,2.6-1.3s0.9-2.1,0.9-3.6
          	c0-1.5-0.3-2.7-0.9-3.6s-1.5-1.3-2.6-1.3s-2,0.4-2.6,1.3s-0.9,2.1-0.9,3.6c0,1.5,0.3,2.8,0.9,3.6S21.4,19.3,22.5,19.3z"/>
          <path class="st0" d="M37.3,20.7v-15h4.2c1.8,0,3,0.1,3.6,0.4c1.5,0.6,2.2,1.7,2.2,3.2c0,1-0.3,1.9-0.8,2.6s-1.3,1.3-2.5,2l5.2,6.8
          	h-2.8l-4.7-6.3h-2.1v6.3H37.3z M39.6,12.7h1.2c1.2,0,2.2-0.3,3-0.8c0.7-0.5,1.1-1.3,1.1-2.2c0-0.9-0.3-1.5-0.8-1.8
          	c-0.5-0.3-1.6-0.5-3-0.5h-1.4V12.7z"/>
          <path class="st0" d="M54.3,20.7v-11h-4.6V8h6.9v12.7H54.3z M54,5.1V2.2h2.9v2.9H54z"/>
          <path class="st0" d="M65.1,20.7L59.8,8h2.4l4.2,10.2L70.8,8h2.1l-5.4,12.7H65.1z"/>
          <path class="st0" d="M85.4,20.2C83.8,20.8,82.3,21,81,21c-2.2,0-3.9-0.6-5-1.7s-1.8-2.7-1.8-4.8c0-2,0.6-3.6,1.7-4.9
          	s2.6-1.9,4.3-1.9c1.8,0,3.1,0.5,3.9,1.6s1.2,2.7,1.2,4.9V15h-8.7c0.2,2.9,1.7,4.3,4.7,4.3c1.2,0,2.6-0.3,4.1-0.9V20.2z M76.7,13.2
          	h6.1v-0.3c0-2.3-1-3.4-2.9-3.4c-0.9,0-1.7,0.3-2.2,1S76.8,12,76.7,13.2z"/>
          <path class="st0" d="M88.6,20.7V8h2.3v2.4c1.2-1.8,2.7-2.7,4.7-2.7c0.7,0,1.5,0.1,2.4,0.3v3.6h-1.7V9.8c-0.3-0.1-0.7-0.1-0.9-0.1
          	c-0.9,0-1.7,0.2-2.3,0.6s-1.4,1.1-2.1,2.1v8.3H88.6z"/>
          </svg> -->
        </div>
        <h1>Factory kiki</h1>
        <p class="sub_txt"><i class="fa fa-refresh fa-spin fa-1x fa-fw margin-bottom"></i> A river runs through it.</p>
			</div>
		</div>
		<div class="head_bg">
			<div class="head2">
				<nav id="menu" class="m_menu">
					<ul>
						<li>
							<a href="#id_study" class="mscroll">study</a>
						</li>
						<li>
							<a href="#id_work" class="mscroll">work</a>
						</li>
						<li>
							<a href="#id_about" class="mscroll">about</a>
						</li>
					</ul>
				</nav>

				<button type="button" id="side_onoff"><i class="fa fa-bars"></i><span class="hidden">메뉴</span></button>
			</div>
		</div>
	</header>

	<main id="content">

	<div class="slideshow" id="id_study">
		<div class="slideshow-slides">
			<a href="#" class="pic"><img src="img/study/pic01.jpg"  alt="비행기에서 본 하늘" /></a>
			<a href="#" class="pic"><img src="img/study/pic02.jpg"  alt="유럽 어딘가" /></a>
			<a href="#" class="pic"><img src="img/study/pic03.jpg"  alt="짤쯔부르크 거리" /></a>
			<a href="#" class="pic"><img src="img/study/pic04.jpg"  alt="할슈타트 거리" /></a>
			<a href="#" class="pic"><img src="img/study/pic05.jpg"  alt="홍콩 피크" /></a>
			<a href="#" class="pic"><img src="img/study/pic06.jpg"  alt="소호거리 피자와 맥주" /></a>
		</div>
		<div class="slideshow-nav">
			<a href="#" class="prev">prev</a>
			<a href="#" class="next">next</a>
		</div>
		<div class="slideshow-indicator"></div>
	</div>

	 <section class="main_content">
		<h1>study</h1>
		<article>
			<img src="img/study/pic.jpg" alt="" />
			<h2>Study Note</h2>This area is study note. It's not meanning. and I used by RWD, HTML5, CSS3, JQuery. Thesedays, I study Javascript basic and PHP basic. It's very interasting to me. Life is same as. I hope so~ ^^
			<br>Love looks not with the eyes, but with the mind.
		</article>
	 </section>

	 <section class="sub_content">
		<h1>accordian</h1>
		<dl class="acco">
			<dt>Item1</dt>
			<dd>Item1 conents some where over the rainbow</dd>
			<dt>Item2</dt>
			<dd>Item2 conents some where over the rainbow</dd>
			<dt>Item3</dt>
			<dd>Item3 conents some where over the rainbow</dd>
			<dt>Item4</dt>
			<dd>Item4 conents some where over the rainbow</dd>
		</dl>
	 </section>


	<!--
	<section>
		<h2>GET,POST</h2>
		<form action="do_calc_get.php" method="POST">
			<input type="text" name="arg1" size="8">
			+
			<input type="text" name="arg2" size="8">
			=
			<input type="submit" value="계산">
		</form>
	</section> -->

		<section id="id_work">
			<h1>work</h1>
			<ul class="work_list">
				<li>
					<a href="http://www.pantech.co.kr" target="_blank">
						<img src="img/work/thumb05.png" alt="" />
						<span>팬택 기업 사이트</span>
						<div class="lay_hover">
							<p>- 신규제작<br>- PC,Mobile 100% 작업<br>- 2016.08<br>- html,css,javascript</p>
						</div>
					</a>
				</li>
				<li>
					<a href="work/otwojob/buyer_list2.html" target="_blank">
						<img src="img/work/thumb04.png" alt="" />
						<span>오투잡 역거래</span>
						<div class="lay_hover">
							<p>- 기존 레이아웃 서비스 추가<br>- PC,Mobile 80% 작업<br>- 2016.02<br>- html,css,SCSS</p>
						</div>
					</a>
				</li>
				<li>
					<a href="work/itbudget/cont1.php" target="_blank">
						<img src="img/work/thumb03.png" alt="" />
						<span>사람인 IT예산관리자</span>
						<div class="lay_hover">
							<p>- 신규 단독작업<br>- 2016.01<br>- html,css,jquery</p>
						</div>
					</a>
				</li>
				<li>
					<a href="http://www.saraminhr.co.kr/10th" target="_blank">
						<img src="img/work/thumb01.png" alt="" />
						<span>사람인 10주년 micro</span>
						<div class="lay_hover">
							<p>- 신규 단독작업<br>- 2015.10<br>- html,css,javascript</p>
						</div>
					</a>
				</li>
				<li>
					<a href="http://bizest.ytmall.co.kr/front/ytmall/skin/images/new_main/main_test.html" target="_blank">
						<img src="img/work/thumb02.png" alt="" />
						<span>YTmall 쇼핑몰</span>
						<div class="lay_hover">
							<p>- 기존 레이아웃, 부분 리뉴얼, 단독작업<br>- 2015.07<br>- html,css,jquery</p>
						</div>
					</a>
				</li>
			</ul>
		</section>

		<section id="id_about">
			<h1>about me</h1>
			<p class="intro_txt">
			오래 전(?) 웹디자인을 시작으로 IT에 발을 담근 후 현재 퍼블리셔로 일하고 있습니다.<br>
			웹사이트 성능개선TF, 오픈마켓 사이트 구축, 장차법 대응 웹접근성 고도화 프로젝트 진행, 접근성가이드&코딩가이드 구축, 모바일 웹사이트 구축, 사이트 유지보수 등을 경험해보았고,
			<strong>웹표준, 웹접근성을 준수하며 Simantic Markup을 지향</strong>하고자 노력합니다.<br>
			HTML5 기반의 다양한 웹기능을 지원하며 가볍고 유용한 사이트를 구축해보고 싶습니다.
			</p>
			<ul class="about">
				<li><b>name</b> Kang eunyoung</li>
				<li><b>cell</b> 01062915225 </li>
				<li><b>e-mail</b> delikeyki@naver.com</li>
				<li><b>skills</b> HTML5, CSS3, SCSS, JavaScript, JQuery, SVN, Git</li>
			</ul>

			<form action="send.php" method="POST">
				<fieldset>
					<legend class="sm_txt">send message</legend>
					<em class="rq_txt">* required input</em>
					<div class="rq_box">
						<label for="name">name*</label>
						<input type="text" name="ip_name" placeholder="NAME">
					</div>
          <div class="rq_box">
            <label for="email">phone*</label>
            <input type="text" name="ip_phone" placeholder="title">
          </div>
					<div class="rq_box">
						<label for="email">e-mail*</label>
						<input type="text" name="ip_email" placeholder="E-MAIL">
					</div>
					<div class="rq_box">
						<label for="message">message*</label>
						<textarea name="ip_message" placeholder="MESSAGE" rows="5"></textarea>
					</div>
					<div class="rq_box">
						<input type="submit" value="SEND" class="send_msg">
					</div>
				</fieldset>
			</form>
		</section>

	</main>


	<footer>
		<address><a href="mailto:delikeyki@naver.com">©Factory keyki</a> All Rights Reserved</address>
		<button type="button" id="scrollTop" class="top"><i class="fa fa-caret-square-o-up"></i><span class="hidden">top</span></button>
	</footer>
</body>
</html>
