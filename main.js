$(function () {

  // ハンバーガーメニュー
  $(".toggle-btn").on("click", function () {
    ($("#header").toggleClass("open"));
  });

  $("#navi").on("click", function () {
    $("#header").toggleClass("open");
  });


  // キャスト選択ON/OFF
  //全選択ボタンを取得する
  const checkBtn = document.getElementById("check-btn");
  //全解除ボタンを取得する
  const uncheckBtn = document.getElementById("uncheck-btn");
  //チェックボックスを取得する
  const el = document.getElementsByClassName("checks");

  //全てのチェックボックスにチェックを付ける
  const checkAll = () => {
    for (let i = 0; i < el.length; i++) {
      el[i].checked = true;
    }
  };
  //全てのチェックボックスのチェックを外す
  const uncheckAll = () => {
    for (let i = 0; i < el.length; i++) {
      el[i].checked = false;
    }
  };
  //全選択ボタンをクリックした時「checkAll」を実行
  checkBtn.addEventListener("click", checkAll, true);
  //全選択ボタンをクリックした時「uncheckAll」を実行
  uncheckBtn.addEventListener("click", uncheckAll, false);


});