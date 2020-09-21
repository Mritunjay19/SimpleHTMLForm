function validate(op){
    if(op==1){
        var fname=document.getElementById("fname").value;
        if(fname.length==0){
            document.getElementById("s_fname").style.color="red";
            document.getElementById("s_fname").innerHTML="Please enter a valid Name";
            return false;
        }
        else {
            document.getElementById("s_fname").style.color="green";
            document.getElementById("s_fname").innerHTML="OK";
            return true;
        }
    }
    else if(op==2){
        var fname=document.getElementById("lname").value;
        if(fname.length==0){
            document.getElementById("s_lname").style.color="red";
            document.getElementById("s_lname").innerHTML="Please enter a valid Name";
            return false;
        }
        else {
            document.getElementById("s_lname").style.color="green";
            document.getElementById("s_lname").innerHTML="OK";
            return true;
        }
    }
    else if(op==3){
        var email=document.getElementById("eid").value;
        if(email.indexOf("@")==-1||email.indexOf(".com")==-1){
            document.getElementById("s_eid").style.color="red";
            document.getElementById("s_eid").innerHTML="Please enter a valid EMail";
            return false;
        }
        else {
            document.getElementById("s_eid").style.color="green";
            document.getElementById("s_eid").innerHTML="OK";
            return true;
        }
    }
    else if(op==4){
        var pt=/^\d{10}$/;
        var a=document.getElementById("phno").value;
        if(a.match(pt)==null){
            document.getElementById("s_phno").style.color="red";
            document.getElementById("s_phno").innerHTML="Pleae enter a valid Ph.No.";
            return false;
        }
        else{
            document.getElementById("s_phno").style.color="green";
            document.getElementById("s_phno").innerHTML="OK";
            return true;
        }
    }
    else{
            var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if(checkboxes.length==0){
                alert("You need to Select at least one language.");
                return false;
            }
            else if(validate(1)&&validate(2)&&validate(3)&&validate(4)){
                return true;
            }
            else{
                alert("Please Fill All Details Correctly.");
                return false;
            }
    }
}