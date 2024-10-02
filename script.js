//console.log(3 + 3)//6 nei aauxa terminal ma run garda
//alert(3+3) //error aauxa terminal ma run garda
//vvi: tc39.es

//console.log(typeof undefined) => undefined
// console.log(typeof null)=> object

//password generator

/* array bana [abcdad], [1214], [!@#$%^^&*()] esto tinta bana aani password chai random(abs ko 4 ota)+(123 ko 3 ota)+(!@#) ko 2 ta  
nabai kati ota hunxa ni random garde less than(<) use gareera
*/


/*
esto garda null error return garxa kina ki script dom vanda aagadi load vairaxa ra 
element ma halna saki raxaina
document.getElementsByClassName("password_generator_button")[0].addEventListener('click', () => {
    document.getElementById("password_generator").innerHTML = new_password;
})
    */

document.getElementsByClassName("password_generator_button")[0].addEventListener('click', () => {


    //let haru garya password ma hune haru
    let alphabets = ""
    for (let i = 0; i <= 26; i++) {
        alphabets = alphabets + String.fromCharCode(97 + i);//string.fromcharcode converter ho jasle html ko unicode lai tesko respective letters ma convert garxa
        // 97 le a lai correspond garxa,98 le b lai 
    }


    let letters = "123456789";

    let symbols = "!@#$=*_"

    //alphabets+letters+symbols gar ra loop chala jun bata 10 vanda kam ota value linxa ra password banyo
    //let password=alphabets[Math.floor(Math.random() * (26 - 1) + 1)]+letters[Math.floor(Math.random() * ( - 1) + 1)]

    //jodeko password random milauna
    let password_options = letters + symbols;
    let i = 0;
    var password = "";


    /* password lai tanndai ho: => 5 highest kina rakhya vanda password ma ek palta ma duita entity lee raxa so balance garna 
    aani suru ma alphabets ko lagi tyo totalalphabets-1 garya kina ki 27 ota kura xaa alphbets ma ra aaru ko random gareko
    */
    //harek letter ma random ko lagi loop lako
    while (i < Math.floor(Math.random() * (5 - 4) + 4)) {
        password = password + alphabets[Math.floor(Math.random() * ((alphabets.length - 1) - 1) + 1)] + password_options[Math.floor(Math.random() * (password_options.length - 1) + 1)];
        i++
    }



    // esto garya kina ki string immutable hunxan ra(password[0]=password[0].toUppercase()) garera change hudaina
    let new_password = password[0].toUpperCase() + password.slice(1);


    //string is immutable, slice
    // generate password button ma click garda ko funciton


    document.getElementById("password_generator").value = new_password;
})
//copy to clipboard
document.getElementsByClassName("copy_img")[0].addEventListener('click', () => {

    let copy_value = document.getElementById("password_generator").value;
    navigator.clipboard.writeText(copy_value)
})
