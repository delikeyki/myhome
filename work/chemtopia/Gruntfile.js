module.exports = function (grunt) {

  grunt.initConfig({
    /*uncss: {
      dist: {
        options: {
          ignore: [
            // 모달 관련
            '.open',
            '.modal-open',
            '.modal',
            '.modal-open .modal',
            '.modal-backdrop',
            '.modal-backdrop.fade',
            '.modal-backdrop.in',
            '.fade.in',
            '.modal.in .modal-dialog',
            '.modal.fade .modal-dialog',
            '.modal.in .modal-brand',
            '.modal.fade .modal-brand',

            // 드롭다운 관련
            '.open>.dropdown-menu',

            // 토글(하트,북마크 아이콘)
            '.fa-heart',
            '.fa-bookmark',

            //// lnb관련
            '.modal-lnb button.lnb-head-left', // lnb X버튼 우측 이동
            '.lnb-menu .lnbbtn-focus', // lnb 선택 메뉴 배경컬러
            '.lnb-slide-in', // lnb fade in관련
            // lbv 닫힐때 x버튼 좌측 위치리셋
            '.lnb-head-left',
            '.modal-lnb button.lnb-head-left-close',

            // notice box X버튼 시 사라지기
            '.off',

            ////forumTopicView.html
            '.article-btngroup-big>ul li>a.active', // 토픽 좋아요(하트) check 컬러
            // 코멘트 슬라이드다운
            '.collapse.in',
            'tr.collapse.in',
            'tbody.collapse.in',
            '.collapsing',

            // Upload file - 파일선택시 'no file chosen'텍스트 사라지게
            '.fileinput.fileinput-exists .fileinput-new',

            //// mypage-Profile 포커스시 인풋창 변화
            // 첫줄 셀렉트 박스 (choose area)
            '.myp-form-edit-view',
            '.editable-field.active-f',
            '.editable-field.my-research.active-f',
            '.myp-contents .user-profile .my-city.active-f',
            '.open-select',
            '.select-box.open-select',
            '.select-box.open-select ul.aList',
            '.myp-contents .user-profile .my-country.active-f',
            // Summary textarea 영역 액션
            '.select-box.open-select ul.aList',
            '.self-intro .myp-form-edit-view+a',
            '.editable-field-summary',
            '.editable-field-summary.active-f',
            '.editable-field-summary.active-f .overlay-icon',
            '.editable-field.active-f .overlay-icon',

            // tooltip 기능 관련(부트스트랩에 있는거)
            '.tooltip',
            '.tooltip.in',
            '.tooltip.top',
            '.tooltip.right',
            '.tooltip.bottom',
            '.tooltip.left',
            '.tooltip-arrow',
            '.tooltip-inner',
            '.source-info .tooltip-inner',
            '.tooltip.left .tooltip-arrow',
            '.tooltip.top .tooltip-arrow',
            '.tooltip.bottom .tooltip-arrow',
            '.tooltip.right .tooltip-arrow',

            '.cheminfo-example.cheminfo-example-hover',
            '.cheminfo-example.cheminfo-example-hover>.cheminfo-example-text',
            '.cheminfo-example.cheminfo-example-hover .cheminfo-example-show',
            '.panel-compound .show-compound.panel-heading-compound',
            '.panel-compound .show-compound',
            '.panel-compound .show-compound .panel-title-compound>a',
            '.panel-compound .show-compound .panel-title-compound>a:hover',
            '.panel-compound .show-compound .panel-title-compound i.fa-angle-right',
            '.select-new.active>.select-new-input',
            '.select-choose-only.active>.select-new-input',
            '.select-new.keyDown>.select-new-layer',
            '.select-choose-only.keyDown>.select-new-layer',

            // 캐러셀 (부트스트랩에 있는것)
            '.carousel-inner>.item>a>img',
            '.carousel-inner>.item.next',
            '.carousel-inner>.item.prev',
            '.carousel-inner>.item.active.right',
            '.carousel-inner>.item.active.left',
            '.carousel-inner>.item.prev.right',
            '.carousel-inner>.item.next.left',
            '.carousel-inner>.active',
            '.carousel-inner>.next',
            '.carousel-inner>.prev',
            '.carousel-inner>.next.left',
            '.carousel-inner>.prev.right',
            '.carousel-inner>.active.left',
            '.carousel-inner>.active.right',


            // 모달 띄울때 body padding-right값(스크롤바 너비) 조정
            '.modal-scrollbar-measure',
          ]
        },
        files: [{
          src:
            [
            'index.html',
            'defaultTemplate.html',
            'lnb.html',
            'search.html',
            'searchNoresult.html',

            'breaktime/breaktime.html',

            'chemcast/chemcastDetail.html',
            'chemcast/chemcastMain.html',
            'chemcast/chemcastnoresult.html',

            'cheminfo/cheminfoMain.html',
            'cheminfo/cheminfoSearchResult.html',
            'cheminfo/cheminfoSearchResult-NoResult.html',
            'cheminfo/cheminfoSearchResultView.html',

            'etc/page-error.html',
            'etc/page-loading.html',
            'etc/notice-popup.html',
            'etc/page-need-signin.html',

            'footer/about.html',
            'footer/contactus.html',
            'footer/email-contactus.html',
            'footer/help.html',
            'footer/help-view.html',
            'footer/help-view2.html',
            'footer/help-view3.html',
            'footer/membership.html',
            'footer/privacy.html',
            'footer/termsOfService.html',

            'forum/forumCommentModify.html',
            'forum/forumCommentWrite.html',
            'forum/forumMain.html',
            'forum/forumMain-logoutside.html',
            'forum/forumMainSearch.html',
            'forum/forumMainSearchNocategory.html',
            'forum/forumMainSearchNoresult.html',
            'forum/forumOpinionModify.html',
            'forum/forumOpinionWrite.html',
            'forum/forumTopicModify.html',
            'forum/forumTopicView.html',
            'forum/forumTopicWrite.html',

            'membership/ChangeYourPassword.html',
            'membership/eamiladdresscheck.html',
            'membership/passwordEmail.html',
            'membership/signIn.html',
            'membership/signUpCompletion.html',
            'membership/signUpFirst.html',
            'membership/signUpNext.html',

            'module/module-main.html',
            'module/module-sub.html',

            'mypage/mypage-bookmark.html',
            'mypage/mypage-bookmark-jtest.html', //테스트성
            'mypage/mypage-bookmark-nocontents.html',
            'mypage/mypage-common.html',
            'mypage/mypage-forum.html',
            'mypage/mypage-forum-nocontents.html',
            'mypage/mypage-myfile.html',
            'mypage/mypage-myfile-anotheruser.html',
            'mypage/mypage-myfile-modify.html',
            'mypage/mypage-myfile-nofile.html',
            'mypage/mypageProfile.html',
            'mypage/mypageProfileEdit.html',
            'mypage/mypageProfileView.html',
            'mypage/mypageProfileWrite.html',
            'mypage/mypageProfileViewOther.html',

            'notifications/notificationsCheminfoForum.html',
            'notifications/notificationsFollow.html',
            'notifications/notificationsMessage.html',
            'notifications/notificationsNoresults.html',
            'notifications/notificationsOther.html',
            'notifications/notificationsReport.html',
            'notifications/notificationsSearchNoresults.html',
            'notifications/notificationsSetting.html',
            'notifications/notificationsSetting-noblocked.html',

            'proleaders/emailOk.html',
            'proleaders/emailRecommand.html',
            'proleaders/emailRecommandconsent.html',
            'proleaders/emailRecommandtarget.html',
            'proleaders/emailRecommandthank.html',
            'proleaders/emailRefusal.html',
            'proleaders/messageChat.html',
            'proleaders/proleadersExpertApplication.html',
            'proleaders/proleadersExpertApplicationApplyComplete.html',
            'proleaders/proleadersExpertApplicationApplyComplete1.html',
            'proleaders/proleadersExpertApplicationApplyComplete2.html',
            'proleaders/proleadersExpertApplicationEdit.html',
            'proleaders/proleadersExpertApplicationLink.html',
            'proleaders/proleadersExpertApplicationPreview.html',
            'proleaders/proleadersExpertApplicationRecommend.html',
            'proleaders/proleadersExpertApplicationrecommendComplete.html',
            'proleaders/proleadersExpertApplicationUpload.html',
            'proleaders/proleadersExpertApplicationWrite.html',
            'proleaders/proleadersExpertDetail.html',
            'proleaders/proleadersExpertDetailmypage.html',
            'proleaders/proleadersExpertDetailnone.html',
            'proleaders/proleadersMaincard.html',

            'datapicker-uncss-set.html',  // datapicker 클래스를 걸러주는 역할만!
            ],
          dest:
            'assets/css/theme.css'
        }]
      },

    },*/
    cssmin: {
      dist: {
        files: [
          { src: 'assets/css/theme.css', dest: 'assets/css/theme.css' } // uncss로 안쓰는 클래스 걸러주고 바로 min(압축)파일로 변환
        ]
      }
    }
  });

  // Load the plugins
  //grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default tasks.
  //grunt.registerTask('default', ['uncss']);
    grunt.registerTask('default', ['cssmin']);
  //grunt.registerTask('default', ['uncss', 'cssmin']);

};
