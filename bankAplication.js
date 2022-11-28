// hide all cards except card 1
for (let i = 2; i <= 6; i++) {
    document.getElementById('id-' + i).style.display = "none";
}


// handeling  card display
let createAccount = document.getElementById("accounts");
createAccount.addEventListener('change', function () {
    if (createAccount.value === "createAccount") {
        //console.log(createAccount.value);
        for (let i = 2; i <= 6; i++) {
            //console.log('id-' + i);
            if (i === 2) {
                document.getElementById('id-' + i).style.display = "block";
            } else {
                document.getElementById('id-' + i).style.display = "none";
            }


        }
    }
    if (createAccount.value === "withdrawAmount") {
        //console.log(createAccount.value);
        for (let i = 2; i <= 6; i++) {
            //console.log('id-' + i);
            if (i === 3) {
                document.getElementById('id-' + i).style.display = "block";
            } else {
                document.getElementById('id-' + i).style.display = "none";
            }
        }
    }
    if (createAccount.value === "depositeAmount") {
        //console.log(createAccount.value);
        for (let i = 2; i <= 6; i++) {
            //console.log('id-' + i);
            if (i === 4) {
                document.getElementById('id-' + i).style.display = "block";
            } else {
                document.getElementById('id-' + i).style.display = "none";
            }
        }
    }
    if (createAccount.value === "checkBalance") {
        //console.log(createAccount.value);
        for (let i = 2; i <= 6; i++) {
            // console.log('id-' + i);
            if (i === 5) {
                document.getElementById('id-' + i).style.display = "block";
            } else {
                document.getElementById('id-' + i).style.display = "none";
            }
        }
    }




});
//handeling create account
let userContainer = [];
let createAccountBtn = document.getElementById('createAccountBtn');
createAccountBtn.addEventListener('click', function () {
    let username = document.getElementById('name').value;
    let accountNumber = document.getElementById('accountNumber').value;
    let pancardnumber = document.getElementById('pancardnumber').value;
    let depositeAmt = document.getElementById('depositeAmt').value;
    if (username == "" || accountNumber == "" || pancardnumber == "" || depositeAmt == "") {
        alert('fill all the data')
    }
    else {
        let data = {
            'name': username,
            'account': accountNumber,
            'pan': pancardnumber,
            'balance': depositeAmt
        };
        let obj = userContainer.find(o => o.account === accountNumber, o => o.pan === pancardnumber);
        if (obj) {
            alert('duplicate data')
        } else {
            userContainer.push(data);
            document.getElementById('name').value = "";
            document.getElementById('accountNumber').value = "";
            document.getElementById('pancardnumber').value = "";
            document.getElementById('depositeAmt').value = "";
            console.log(userContainer);
            document.getElementById('id-6').style.display = "block";
            document.getElementById('Profilname').innerHTML = userContainer[0].name;
            document.getElementById('ProfileAccountnumber').innerHTML = userContainer[0].account;
            document.getElementById('ProfilePancardnumber').innerHTML = userContainer[0].pan;
            document.getElementById('ProfileAccountBalance').innerHTML = userContainer[0].balance;
        }
    }
});


// withdraw Amount

let withdrawAccountBtn = document.getElementById('withdrawAccountBtn');
withdrawAccountBtn.addEventListener('click', function () {
    let accNumber = document.getElementById('acnumber').value;
    let pNumber = document.getElementById('pncrdnumber').value;
    let withAmt = document.getElementById('withdrawAmt').value;
    if (accNumber == "" || pNumber == "" || withAmt == "") {
        alert('fill all the data')
    }
    else {
        let obj = userContainer.find(o => o.account === accNumber, o => o.pan === pNumber);
        console.log(obj)

        if (obj) {

            let result;
            if (obj.balance > withAmt) {
                result = obj.balance - withAmt;
                console.log(obj.balance + ' and ' + withAmt);
                console.log(result);
            } else {
                alert('not enough money to withdraw')

            }
            document.getElementById('acnumber').value = "";
            document.getElementById('pncrdnumber').value = "";
            document.getElementById('withdrawAmt').value = "";
            document.getElementById('id-6').style.display = "block";
            document.getElementById('Profilname').innerHTML = obj.name;
            document.getElementById('ProfileAccountnumber').innerHTML = obj.account;
            document.getElementById('ProfilePancardnumber').innerHTML = obj.pan;
            document.getElementById('ProfileAccountBalance').innerHTML = result;


        } else {
            alert(' account and pin number not valide!')
        }
    }
});

// Deposit Amount
let depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function (){
    let acdposite = document.getElementById('acdeposite').value;
    let pnddeposite = document.getElementById('pncrddeposite').value;
    let dposite = parseInt(document.getElementById('deposite').value);
    if (!acdposite || !pnddeposite || !dposite) {
        alert('D - fill all the data')
        return false;
    }else{
        let obj = userContainer.find(o => o.account === acdposite, o => o.pan === pnddeposite);
        console.log(obj)

        if (obj) {

            let resltdspt;
            resltdspt = parseInt(obj.balance) + dposite;
            console.log(obj.balance + ' and ' + dposite);
            console.log(resltdspt);
            
            document.getElementById('acdeposite').value = "";
            document.getElementById('pncrddeposite').value = "";
            document.getElementById('deposite').value = "";
            document.getElementById('id-6').style.display = "block";
            document.getElementById('Profilname').innerHTML = obj.name;
            document.getElementById('ProfileAccountnumber').innerHTML = obj.account;
            document.getElementById('ProfilePancardnumber').innerHTML = obj.pan;
            document.getElementById('ProfileAccountBalance').innerHTML = resltdspt;


        } else {
            alert(' account and pin number not valide!')
        }
    }
});

//Check  Balance Pannel
let checkBalanceBtn = document.getElementById('checkBalanceBtn');
checkBalanceBtn.addEventListener('click', function(){
    let checkblc = document.getElementById('accheckblnce').value;
    let checkpnblc = document.getElementById('pncrdcheckblnce').value;
    if (!checkblc || !checkpnblc ) {
        alert('C - fill all the data')
        return false;
    }else{
        let obj = userContainer.find(o => o.account === checkblc, o => o.pan === checkpnblc);
        console.log(obj)

        if (obj) {

            document.getElementById('accheckblnce').value = "";
            document.getElementById('pncrdcheckblnce').value = "";
            document.getElementById('id-6').style.display = "block";
            document.getElementById('Profilname').innerHTML = obj.name;
            document.getElementById('ProfileAccountnumber').innerHTML = obj.account;
            document.getElementById('ProfilePancardnumber').innerHTML = obj.pan;
            document.getElementById('ProfileAccountBalance').innerHTML = obj.balance;


        } else {
            alert(' account and pin number not valide!')
        }
    }
    

    
    
        
    
       
     

    

});