/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);



/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 0.2
 */
(function(e){e.fn.onePageNav=function(l){var g=e.extend({},e.fn.onePageNav.defaults,l),c={};c.sections={};c.bindNav=function(a,b,d,f){a.find("a").bind("click",function(m){var h=e(this),i=h.parent(),j=h.attr("href"),k=e(document);if(!i.hasClass(b)){c.adjustNav(a,i,b);k.unbind(".onePageNav");e.scrollTo(j,f,{onAfter:function(){if(d)window.location.hash=j;k.bind("scroll.onePageNav",function(){c.scrollChange(a,b)})}})}m.preventDefault()})};c.adjustNav=function(a,b,d){a.find("."+d).removeClass(d);b.addClass(d)};
c.getPositions=function(a){a.find("a").each(function(){var b=e(this).attr("href"),d=e(b).offset();d=d.top;c.sections[b.substr(1)]=Math.round(d)})};c.getSection=function(a){var b="",d=Math.round(e(window).height()/2);for(var f in c.sections)if(c.sections[f]-d<a)b=f;return b};c.scrollChange=function(a,b){c.getPositions(a);var d=e(window).scrollTop();d=c.getSection(d);d!==""&&c.adjustNav(a,a.find("a[href=#"+d+"]").parent(),b)};c.init=function(a,b){c.bindNav(a,b.currentClass,b.changeHash,b.scrollSpeed);
c.getPositions(a);e(document).bind("scroll.onePageNav",function(){c.scrollChange(a,b.currentClass)})};return this.each(function(){var a=e(this),b=e.meta?e.extend({},g,a.data()):g;c.init(a,b)})};e.fn.onePageNav.defaults={currentClass:"current",changeHash:false,scrollSpeed:750}})(jQuery);