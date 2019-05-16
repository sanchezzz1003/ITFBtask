$("#rightbut").click(function () {
	$("div.mid").toggleClass("mid midtoleft");
	$("div.left").toggleClass("left leftexit");
	$("div.right").toggleClass("right righttomid");
	$("div.rightout").toggleClass("rightout rightappear");
	$("div.leftout").toggleClass("rightout leftout");
	$('.md-btn').prop('disabled', true);
	setTimeout(function () { $('.md-btn').prop('disabled', false)}, 250);
	setTimeout(function() { $("div.righttomid").toggleClass("mid righttomid") }, 250);
	setTimeout(function() { $("div.midtoleft").toggleClass("left midtoleft") }, 250);
		setTimeout(function() { $("div.leftexit").toggleClass("leftout leftexit") }, 250);
		setTimeout(function() { $("div.rightappear").toggleClass("right rightappear") }, 250);
});
$("#leftbut").click(function () {
	$("div.mid").toggleClass("mid midtoright");
	$("div.left").toggleClass("left lefttomid");
	$("div.right").toggleClass("right rightexit");
	$("div.leftout").toggleClass("leftout leftappear");
	$("div.rightout").toggleClass("rightout leftout");
	$('.md-btn').prop('disabled', true);
	setTimeout(function () { $('.md-btn').prop('disabled', false)}, 250);
	setTimeout(function() { $("div.lefttomid").toggleClass("mid lefttomid") }, 250);
	setTimeout(function() { $("div.midtoright").toggleClass("right midtoright") }, 250);
		setTimeout(function() { $("div.rightexit").toggleClass("rightout rightexit") }, 250);
		setTimeout(function() { $("div.leftappear").toggleClass("left leftappear") }, 250);
});
function goNext() {
	$("div.mid").toggleClass("mid midtoleft");
	$("div.left").toggleClass("left leftexit");
	$("div.right").toggleClass("right righttomid");
	$("div.rightout").toggleClass("rightout rightappear");
	$("div.leftout").toggleClass("rightout leftout");
	$('.md-btn').prop('disabled', true);
	setTimeout(function () { $('.md-btn').prop('disabled', false)}, 250);
	setTimeout(function() { $("div.righttomid").toggleClass("mid righttomid") }, 250);
	setTimeout(function() { $("div.midtoleft").toggleClass("left midtoleft") }, 250);
		setTimeout(function() { $("div.leftexit").toggleClass("leftout leftexit") }, 250);
		setTimeout(function() { $("div.rightappear").toggleClass("right rightappear") }, 250);
}
function goPrev() {
	$("div.mid").toggleClass("mid midtoright");
	$("div.left").toggleClass("left lefttomid");
	$("div.right").toggleClass("right rightexit");
	$("div.leftout").toggleClass("leftout leftappear");
	$("div.rightout").toggleClass("rightout leftout");
	$('.md-btn').prop('disabled', true);
	setTimeout(function () { $('.md-btn').prop('disabled', false)}, 250);
	setTimeout(function() { $("div.lefttomid").toggleClass("mid lefttomid") }, 250);
	setTimeout(function() { $("div.midtoright").toggleClass("right midtoright") }, 250);
		setTimeout(function() { $("div.rightexit").toggleClass("rightout rightexit") }, 250);
		setTimeout(function() { $("div.leftappear").toggleClass("left leftappear") }, 250);
}
document.onkeydown = function (e) {
	if (e.keyCode == 39) {
		goNext();
	}
	if (e.keyCode == 37) {
		goPrev();
	}
}