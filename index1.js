let activeTab = document.querySelector('.resumedetails');
let education = document.getElementById("eduction");
let experience = document.getElementById("experience");
let name = document.getElementById("name");
let contact = document.getElementById("contact");
let email = document.getElementById("email");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");
education.classList.add('display-no-block');
msg.classList.add('display-no-block');
activeTab.addEventListener("click", function (e) {
    e.preventDefault();
    let node = e.currentTarget.children[0].children[0]
    if (node.innerText === e.target.innerText) {
        education.classList.remove('display-block');
        education.classList.add('display-no-block');
        experience.classList.remove('display-no-block');
        experience.classList.add('display-block');

        e.currentTarget.children[1].children[0].classList.remove('active')
        e.currentTarget.children[1].children[0].classList.add('dark-color')
    }
    else {
        experience.classList.remove('display-block');
        experience.classList.add('display-no-block');
        education.classList.remove('display-no-block');
        education.classList.add('display-block');
        e.currentTarget.children[0].children[0].classList.remove('active')
        e.currentTarget.children[0].children[0].classList.add('dark-color')

    }

    e.target.classList.remove('dark-color');
    e.target.classList.remove('active');
    e.target.classList.add('active');



    console.log("log e".e)
})

btn.addEventListener("click", function (e) {


    let obj = { "Name": "", "Contact": "", "Email": '' };
    obj.Name = name.value;
    obj.Contact = contact.value;

    obj.Email = email.value;
    console.log("name", obj)
    if (obj.Name.length > 0 && obj.Email.length > 0) {
        btn.style.opacity = 0.5;
        fetch("https://profiledetails-8823b.firebaseio.com/Details.json", {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: JSON.stringify(obj)
        }).then(res => {
            console.log("suucess", res)
            msg.classList.remove('display-no-block');
            msg.classList.add('display-block')
        }).catch(err => {
            console.log("err", err)
        }).finally(function () {
            setTimeout(function () {

                contact.value = '';
                email.value = '';
                contact.value = '';
                name.value = '';
                msg.classList.remove('display-block');
                msg.classList.add('display-no-block');
            }, 1000)
            btn.style.opacity = 1;
        });
    }
    else {
        msg.innerText = 'Name/Email (Manadatory field) is missing '
        msg.classList.remove('display-no-block');
        msg.classList.add('display-block');
        setTimeout(function () {

            contact.value = '';
            email.value = '';
            contact.value = '';
            name.value = '';
            msg.classList.remove('display-block');
            msg.classList.add('display-no-block');
        }, 2000)

    }




})
