const toastLiveExample = document.getElementById('liveToast')

$( "#m" ).on( "click", ()=> {
    $("#name").css("display","block")
    $("#space").css("display","none")

    setTimeout(()=>{
        // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        $(".toast").show()
        $("#mm").css("z-index","99999999999999999999");
        $("#mm div").css("background-color","black");
        $("#mm div").css("opacity","0.3");
        $("#mm div").css("user-select","none");
    },500)
} );

// const toastTrigger = document.getElementById('liveToastBtn')


// if (toastTrigger) {
  
//   toastTrigger.addEventListener('click', () => {
    
//   })
// }
