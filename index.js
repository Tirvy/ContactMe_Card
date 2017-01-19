/**
 * Created by root on 18.01.17.
 */
var allInputList = [];
var checkNotEmptyList = [];
var checkPhoneList = [];
var checkMailList = [];
var checkAddressList = [];
var checkDateList = [];
var checkNumberList = [];
var errorField;
var arrowRemoveTimeout;

$( document ).ready(function () {
    eAttendeesInput.defaultValue = '0';

    errorField = $(errorField);

    allInputList.push($(fNameInput));
    allInputList.push($(lNameInput));
    allInputList.push($(cNameInput));
    allInputList.push($(cIndustryInput));
    allInputList.push($(cPhoneInput));
    allInputList.push($(cMailInput));
    allInputList.push($(cAddressInput));
    allInputList.push($(eDateInput));
    allInputList.push($(eAttendeesInput));
    allInputList.push($(eInfoInput));

    checkNotEmptyList.push($(fNameInput));
    checkNotEmptyList.push($(lNameInput));
    checkNotEmptyList.push($(cNameInput));
    checkNotEmptyList.push($(cIndustryInput));
    checkNotEmptyList.push($(cAddressInput));
    checkNotEmptyList.push($(eDateInput));

    checkPhoneList.push($(cPhoneInput));

    checkMailList.push($(cMailInput));

    checkAddressList.push($(cAddressInput));

    checkDateList.push($(eDateInput));

    checkNumberList.push($(eAttendeesInput));

    $(resetButton).click(function () {
        allInputList.forEach(function (elem) {
            elem[0].value = elem[0].defaultValue;
        })
    });

    $(sendButton).click(function () {
        if (checkInputs()) {
            sendInputs();
        }
    });
});

function checkInputs() {
    var erroredFields = [];

    removeErrorArrows();

    checkNotEmptyList.forEach(function (elem) {
        elem.removeClass('form-input__text_border_red');
    });

    var regExp = /[(]\d{3}[)]\s\d{3}-\d{4}/;
    checkPhoneList.forEach(checkError);

    regExp = /\S+@\S+\.\S+/;
    checkMailList.forEach(checkError);

    regExp = /\w+,\w+,\w+,\w+/;
    checkAddressList.forEach(checkError);

    regExp = /\d{2}[/]\d{2}[/]\d{4}/;
    checkDateList.forEach(checkError);

    regExp = /\d+/;
    checkNumberList.forEach(checkError);

    checkNotEmptyList.forEach(function (elem) {
        if (elem.val().length === 0){
            addError(elem);
            putError(elem, 'Must be filled', '*');
        }
    });

    if (erroredFields.length > 0){
        $( body ).scrollTop(erroredFields[0][0].offsetTop);
        clearTimeout(arrowRemoveTimeout);
        arrowRemoveTimeout = setTimeout(removeErrorArrows, 5000);
        return false;
    }
    return true;

    function checkError(elem) {
        if ((elem[0].value.length > 0)&&(!regExp.test(elem[0].value))){
            addError(elem);
            putError(elem, 'Wrong ' + elem.attr('validate') + ' format');
        }else {
            elem.removeClass('form-input__text_border_red');
        }
    }

    function putError(elem, text1, text2) {
        var $errArrow = createErrorArrow(text1, text2);
        elem.parent().append($errArrow);
        $errArrow.show();
        $errArrow.attr('id', 'errArrow');
    }

    function createErrorArrow(text1, text2){
        var $new_elem = $('<div class="error-pointer"></div>');
        var $arr_elem = $('<div class="error-pointer__arrow"></div>').text(text1);
        $new_elem.append($arr_elem);
        return $new_elem;
    }

    function removeErrorArrows() {
        clearTimeout(arrowRemoveTimeout);
        if (document.getElementById('errArrow'))
            $(errArrow).remove();
    }

    function addError(elem) {
        erroredFields.push(elem);
        elem.addClass('form-input__text_border_red');
    }
}

function sendInputs() {
    console.log('SUCCESSSSS!!!!');
}