let input_pswrd = document.getElementById('inp1');
let ok_btn = document.getElementById('inp2');
let check_box = document.getElementsByName('checkbox');
let levers = document.getElementsByName('levers');
let launch_btn = document.getElementById('launch');
let count = 0;

ok_btn.addEventListener('click',function (){
    check_password(input_pswrd.value);

});

launch_btn.addEventListener('click',function (){
    let rocket = document.querySelector(".rocket");
    rocket.animate([
        { // current position of your rocket
            left: '600px',
            bottom: '270px'
        },
        { //  final position of your rocket
            left: '700px',
            bottom: '1100px'
        }
    ], {
        // timing options
        duration: 2000,
        iterations:2
    })

});




function checkMax(selected){
    if((selected.type == 'range' && selected.value == 100) ||
        (selected.type == 'checkbox' && selected.checked)){
        count++;

    }
    if (count == 11){
        //alert('All_on');
        launch_btn.disabled = false;
    }
    console.log(selected.value);
}


function check_password(pass){
    if(pass == 'TrustNo1'){
        for (let i = 0; i < check_box.length; i++){
            check_box[i].disabled = false;
        }
        for (let i = 0; i < levers.length; i++){
            levers[i].disabled = false;
        }
        input_pswrd.disabled = true;
        ok_btn.disabled = true;
    }else {
        input_pswrd.value ="";
        input_pswrd.placeholder ="WRONG PASSWORD!";
    }
}