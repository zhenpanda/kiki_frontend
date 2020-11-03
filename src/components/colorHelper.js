import $ from 'jquery';

const colorHelper = (input) => {
    let color = "#303030";

    switch(input+"") {
        case "0":
            color = "#303030";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "1":
            color = "#0e079c";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "2":
            color = "#0d9f1f";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "3":
            color = "#139f9f";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "4":
            color = "#9f0e12";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "5":
            color = "#a0109d";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "6":
            color = "#9f4c17";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "7":
            color = "#a0a0a0";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "8":
            color = "#4e4cf8";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "9":
            color = "#25bf2f";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "10":
            color = "#5dbcbb";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "11":
            color = "#f96f0a";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "12":
            color = "#fe4ffa";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "13":
            color = "#c9ca5a";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        case "14":
            color = "#ffffff";
            $("body").css({"background-color": color});
            $(".market-page").css({"background-color": color});
            $(".market-bottom").css({"background": color});
            localStorage.removeItem('myPcColor');
            localStorage.setItem('myPcColor', color);
            break;
        default: break;
    }

}

export default colorHelper;