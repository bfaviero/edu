$(document).ready(function() {
    //function to make a text box appear when click to add new class
    $("#classbutton").click(function () {
        event.preventDefault(); 
        //alert("hi");

        //query user to see all classes enrolled in

        var newTextBoxDiv = $('<div/>').attr("id", 'TextBoxDiv');
        var inputText = $("<input/>").attr("name", "newClassText").attr("placeholder", "Enter course number");
        var inputBtn = $("<button/>").attr("id", "submitnewclass");
        inputBtn.val("Submit");
        var formThing = $("<form/>").attr("method", "post").attr("id", "newclassform");
        formThing.append(inputText);
        formThing.append(inputBtn);
        $(inputBtn).click(function(event) {
            event.preventDefault();
            alert("clicking newTextBoxDiv");
            ////post data entered in text box
            //$.ajax({
            //type: "POST",
            //url: "i'm not sure",
            //cache: false
            //data: formData
            ////success: onSuccess
            ////error: onError
        //});
        });
        newTextBoxDiv.append(formThing);
        //newTextBoxDiv.html('<form method="post" id="newclassform"><input type="text" name="newClassText" placeholder="Enter course number"><button id="submitnewclass">Submit</button></form>');
        //console.log(newTextBoxDiv);
        $(".lead").append(newTextBoxDiv);
        //newTextBoxDiv.after().html('<input type="text" class="input-block-level" placeholder="Enter course number">');
        

    });

    //function to send data to server when enter a new class number
    //$("newclassform").submit(function () {
    //  alert("submitted");
    //});

    //$("#submitnewclass").click(function () {
    //  event.preventDefault();
    //  alert("Alert!");
        
    //});

    //function onSuccess(data, status) {
       // data = $.trim(data);
           //make a div with id "notification" before running this code
       // $("#notification").html(data);
       // $.mobile.hidePageLoadingMsg(); //used on jquery mobile to hide a loader
    //}

   // function onError(data, status) {
        //data = $.trim(data);
        //$("#notification").html(data);
        //$.mobile.hidePageLoadingMsg(); //used on jquery mobile to hide a loader

    //$("#newclassform").submit(function () {
        //var formData= $("newclassform").serialize();



        //return false;
    //});

});