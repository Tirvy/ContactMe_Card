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
            putError(elem, 'Must be filled');
        }
    });

    if (erroredFields.length > 0){
        $( body ).scrollTop(erroredFields[0][0].offsetTop);
        return false;
    }
    return true;

    function checkError(elem) {
        if ((elem[0].value.length > 0)&&(!regExp.test(elem[0].value))){
            addError(elem);
            putError(elem, 'Wrong thing format');
        }else {
            elem.removeClass('form-input__text_border_red');
        }
    }

    function putError(elem, text1, text2) {
        var errArrow = createErrorArrow(text1, text2);
        elem.parent().append($(errArrow));
        $(errArrow).offset({ top: (elem.height + 20), left : 20 });
        $(errArrow).show();
    }

    function createErrorArrow(text1, text2){
        var newElem = document.createElement('div');
        newElem.className = 'error-pointer';

        var arrElem = document.createElement('div');
        arrElem.className = 'error-pointer__arrow';
        arrElem.appendChild(document.createTextNode(text1));

        var textElem = document.createElement('div');
        textElem.className = 'error-pointer__text';
        textElem.appendChild(document.createTextNode(text2));

        newElem.appendChild(arrElem);
        newElem.appendChild(textElem);

        return newElem;
    }

    function addError(elem) {
        erroredFields.push(elem);
        elem.addClass('form-input__text_border_red');
    }
}

function sendInputs() {
    console.log('SUCCESSSSS!!!!');
}