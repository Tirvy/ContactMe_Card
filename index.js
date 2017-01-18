/**
 * Created by root on 18.01.17.
 */
var allInputList = [];
var checkNotEmptyList = [];
var checkPhoneList = [];
var checkAddressList = [];

$( document ).ready(function () {
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

    checkAddressList.push($(cAddressInput));

    $(resetButton).click(function () {
        allInputList.forEach(function (elem) {
            elem[0].value = '';
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
        if (!(elem[0].value.length > 0)) {
            erroredFields.push(elem);
            elem.addClass('form-input__text_border_red');
        }else{
            elem.removeClass('form-input__text_border_red');
        }
    })

    checkPhoneList.forEach(function (elem) {
        if (elem[0].value.length == 0)
            return;
    })

    checkAddressList.forEach(function (elem) {
        if (elem[0].value.length == 0)
            return;
    })

    if (erroredFields.length > 0){
        $( body ).scrollTop(erroredFields[0][0].offsetTop);
    }
}

function sendInputs() {
    console.log('SUCCESSSSS!!!!');
}