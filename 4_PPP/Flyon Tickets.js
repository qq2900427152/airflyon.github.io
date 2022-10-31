$(document).ready(function () {
    $("#rangeCalendar").rangeCalendar({
        startRangeWidth: 1,
        start: "+1",

    });
});

$(document).ready(function () {
    $("#rangeCalendar2").rangeCalendar({
        startRangeWidth: 1,
        start: "+7",
    });
});



const contentPricebox1 = document.querySelector("#contentPricebox1");
const selectdate1 = document.querySelector("#selectdate1");
const contentPrice1 = document.querySelector("#contentPrice1");
const contentPrice2 = document.querySelector("#contentPrice2");
const ctpbrightBtn1 = document.querySelector("#ctpbrightBtn1");
const pricebox = document.querySelector("#pricebox");
const pricebox2span = document.querySelector("#pricebox2span");
const back = document.querySelector("#back");
const guests = document.querySelector("#guests");
const pay = document.querySelector("#pay");


contentPricebox1.addEventListener("click", function () {
    selectdate1.style.display = "none";
    contentPrice1.style.display = "none";
    contentPrice2.style.display = "";
    pricebox.style.color = "#ba3e3c";
    pricebox2span.innerHTML = "10,000"
    back.style.display = "";
    contentboxtextH2H3.style.display = "";
})

ctpbrightBtn1.addEventListener("click", function () {
    selectdate1.style.display = "";
    contentPrice1.style.display = "";
    contentPrice2.style.display = "none";
    pricebox.style.color = "gray";
    pricebox2span.innerHTML = "00,000"
    back.style.display = "none";
    guests.style.display = "none";
    pay.style.display = "none";
    contentPrice4.style.display = "none";
})

const contentPricebox2 = document.querySelector("#contentPricebox2");
const selectdate2 = document.querySelector("#selectdate2");
const contentPrice3 = document.querySelector("#contentPrice3");
const contentPrice4 = document.querySelector("#contentPrice4");
const ctpbrightBtn2 = document.querySelector("#ctpbrightBtn2");
const guestsboxBtn1_1 = document.querySelector("#guestsboxBtn1-1");
const contentboxtextH2H3 = document.querySelector("#contentboxtextH2H3");

contentPricebox2.addEventListener("click", function () {
    selectdate2.style.display = "none";
    contentPrice3.style.display = "none";
    contentPrice4.style.display = "";
    guests.style.display = "";
    pricebox2span.innerHTML = "20,000"
    contentboxtextH2H3.style.display = "none";
})

ctpbrightBtn2.addEventListener("click", function () {
    selectdate2.style.display = "";
    contentPrice3.style.display = "";
    contentPrice4.style.display = "none";
    pricebox2span.innerHTML = "10,000"
    guests.style.display = "none";
    pay.style.display = "none";

})

guestsboxBtn1_1.addEventListener("click", function () {
    pay.style.display = "";
})


// ---------按鈕跳轉畫面-------------


$(document).ready(function () {
    $("#contentPricebox1").click(function () {
        $("html, body").animate({
            scrollTop: $("#back").offset().top
        }, { duration: 500, easing: "swing" });
        return false;
    });
    $("#contentPricebox2").click(function () {
        $("html, body").animate({
            scrollTop: $("#guests").offset().top
        }, { duration: 500, easing: "swing" });
        return false;
    });
    $("#guestsboxBtn1-1").click(function () {
        $("html, body").animate({
            scrollTop: $("#pay").offset().top
        }, { duration: 500, easing: "swing" });
        return false;
    });
});

// ---------上面的三個按鈕-----------

$(document).ready(function () {
    $("#selectBarbox2").click(function () {
        $("html, body").animate({
            scrollTop: $("#guests").offset().top
        }, { duration: 500, easing: "swing" });
        return false;
    });
    $("#selectBarbox3").click(function () {
        $("html, body").animate({
            scrollTop: $("#pay").offset().top
        }, { duration: 500, easing: "swing" });
        return false;
    });
    $("#selectBarbox1").click(function () {
        $("html, body").animate({
            scrollTop: $("#priceboxtest").offset().top
        }, { duration: 500, easing: "swing" });
        return false;
    });

});
// $('#selectBarbox1').click(function () {
//     $('html,body').animate({ scrollTop: 15 }, 300);
// });


const payboxBtn1  = document.querySelector("#payboxBtn1");

payboxBtn1.addEventListener("click", function () {
    let timerInterval
    Swal.fire({
      title: '支付驗證中!',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    }).then(function(){
        Swal.fire({
            title: '訂位成功!',
            html: `您已於飛昂航空完成機票訂購<br>代號:KR1943<br>
            9月24日11:00起飛 KT501 臺灣往南韓<br>
            10月7日11:10起飛 KT502 南韓往臺灣<br>
            共1位旅客
            本公司不會以電話通知旅客因付款等問題而要求提供信用卡、轉帳等資訊。
            訂位購票或退票相關事宜請洽客服專線412-8008(手機先撥02)。<br>
            <br>
            <button class="OKbtn" onclick="window.location.href='../1_首頁/flyon.html'">回首頁</button>`,
            showConfirmButton: false,
            timer: 5000,
        }).then(function () { window.location.href = "../1_首頁/flyon.html" 
          })
    })
    
})