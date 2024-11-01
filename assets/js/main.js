let nom = document.getElementById('name');
let age = document.getElementById('age');
let poste = document.getElementById('Poste');
let genre = document.getElementById('genre');
let education = document.getElementById('education');
let specialisation = document.getElementById('specialisation');
let langues = document.getElementById('langues');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let linkdin = document.getElementById('linkdin');
let feedback = document.getElementById('feedback');

const alert1 = document.getElementById("alert1");

  function saveinfo(){


        
        document.getElementById('name2').value = nom.value ;
        document.getElementById('age2').value = age.value ;
        document.getElementById('Poste2').value = poste.value ;
        document.getElementById('genre2').value = genre.value ;
        document.getElementById('education2').value = education.value ;
        document.getElementById('specialisation2').value = specialisation.value ;
     document.getElementById('langues2').value = langues.value ;
     document.getElementById('email2').value = email.value ;
     document.getElementById('phone2').value = phone.value ;
     document.getElementById('linkdin2').value = linkdin.value ;
     document.getElementById('feedback2').value = feedback.value ;
     alert("Form submitted successfully!");

    }
     
    function invalide(){
      
      
        if(!nom.value || !age.value || !poste.value || !education.value || !specialisation.value || !langues.value || !genre.value ){
            alert1.classList.add("alert-danger");
            alert1.innerHTML = ` <h4 class="alert-heading">warning!</h4>
                <p class="mb-0">fill data required  .</p>`
                return false;
        }
        alert1.classList.remove("alert-danger");
        alert1.innerHTML = ``;
        return true ;
    }
    function invalide1(){
        if(!email.value || !phone.value || !linkdin.value ){
            alert1.classList.add("alert-danger");
            alert1.innerHTML = ` <h4 class="alert-heading">warning!</h4>
                <p class="mb-0">fill data required  .</p>`
                return false ;
        }
        alert1.classList.remove("alert-danger");
        alert1.innerHTML = ``;
        return true ;
    }

    function showSection(sectionNumber) {
        document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
        document.getElementById('section' + sectionNumber).classList.remove('d-none');
    }

    function nextSection(sectionNumber) {
        if (sectionNumber == 2 && invalide()){
            showSection(sectionNumber);
        } if(sectionNumber == 3 && invalide1()){
            showSection(sectionNumber);
        } 
}
function submit(){
    if(feedback.value === ''){
                alert1.classList.add("alert-danger");
                alert1.innerHTML = ` <h4 class="alert-heading">warning!</h4>
                <p class="mb-0">fill data required  .</p>`
                return  ;
                
    }
    showSection(4);

}

    function prevSection(sectionNumber) {
        showSection(sectionNumber);
    }

    function submitForm() {
        submit();

        saveinfo();
    }