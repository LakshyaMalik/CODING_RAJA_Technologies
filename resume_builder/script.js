const addwFIELD = () => {
    console.log('lorem')
    let newN = document.createElement('textarea');
    newN.setAttribute('class','form-control textarea work crew');
    newN.setAttribute('rows','5');
    newN.setAttribute('placeholder','Tell about your Work...');
    
    let weOb = document.getElementById('we');
    let AddBtn = document.getElementById('weAddBtn');


    weOb.insertBefore(newN, AddBtn);
}

const addFIELD = () => {
    console.log('lorem')
    let newN = document.createElement('textarea');
    newN.setAttribute('class', 'form-control textarea acad crea');
    newN.setAttribute('rows', '3');
    newN.setAttribute('placeholder', 'Tell about your Degree');
    
    let weOb = document.getElementById('ed');
    let AddBtn = document.getElementById('edAddBtn');



    weOb.insertBefore(newN, AddBtn);
}

const addpFIELD = () => {
    console.log('lorem')
    let newN = document.createElement('textarea');
    newN.setAttribute('class', 'form-control textarea project proj');
    newN.setAttribute('rows', '3');
    newN.setAttribute('placeholder', 'Tell about your projects');
    
    let weOb = document.getElementById('project');
    let AddBtn = document.getElementById('projectAddBtn');

    weOb.insertBefore(newN, AddBtn);
}

const addSkillsFIELD = () => {
    console.log('lorem')
    let newN = document.createElement('textarea');
    newN.setAttribute('class', 'form-control textarea skills skill');
    newN.setAttribute('rows', '1');
    
    let weOb = document.getElementById('skl');
    let AddBtn = document.getElementById('skillsAddBtn');

    weOb.insertBefore(newN, AddBtn);
}

const addCertificationsFIELD  = () => {
    console.log('lorem')
    let newN = document.createElement('textarea');
    newN.setAttribute('class', 'form-control textarea certificate cert');
    newN.setAttribute('rows', '1');
    
    let weOb = document.getElementById('certifications');
    let AddBtn = document.getElementById('certificationsAddBtn');



    weOb.insertBefore(newN, AddBtn);
}

const removework = () =>{
    let weOb = document.getElementById('we');
    let newN = document.querySelector('.textarea.crew'); 
    
    if (newN) {
        weOb.removeChild(newN);
    }

};

const remove = () =>{
    let weOb = document.getElementById('ed');
    let newN = document.querySelector('.textarea.crea'); 
    
    if (newN) {
        weOb.removeChild(newN);
    }

};

const removeproj = () => {
    removefromform('project' , '.textarea.proj');
}

const removeSkills = () =>{
    removefromform('skl' , '.textarea.skill');
}

const removeCertifications = () =>{
    removefromform('certifications' , '.textarea.cert');
}

const removefromform = (formval , idofit) =>{
    let weOb = document.getElementById(formval);
    let newN = document.querySelector(idofit); 
    
    if (newN) {
        weOb.removeChild(newN);
    }

}


const generateResume = () => {
    let nameField = document.getElementById('nameField').value;

    let nameRes = document.getElementById('nameRes');

    nameRes.innerHTML = nameField;

    document.getElementById('contactRes').innerHTML = document.getElementById('contactField').value;

    document.getElementById('mailRes').innerHTML = document.getElementById('mailField').value;

    document.getElementById('addressRes').innerHTML = document.getElementById('addressField').value;

    document.getElementById('langRes').innerHTML = document.getElementById('langField').value;
    
    document.getElementById('objRes').innerHTML = document.getElementById('objField').value;
    
    document.getElementById('gitRes').innerHTML = document.getElementById('Git').value;
    
    document.getElementById('linkedinRes').innerHTML = document.getElementById('LinkedIn').value;
    
    document.getElementById('devpostRes').innerHTML = document.getElementById('devpost').value;

    writeinresume('work' , 'weRes');
    writeinresume('acad' , 'edRes');
    writeinresume('project' , 'projectRes');
    writeinresume('skills' , 'skillRes');
    writeinresume('certificate' , 'certRes');

    let file = document.getElementById('photoField').files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend = function () {
        document.getElementById('photo').src = reader.result;
    }


}

const writeinresume = (fd, rd) => {
    let wes = document.getElementsByClassName(fd);
    let str = '<ul>';

    for (let e of wes) {
        str += `<li>${e.value}</li>`;
    }

    str += '</ul>';
    document.getElementById(rd).innerHTML = str;

    document.getElementById('fill_Det').style.display='none';
    document.getElementById('resome').style.display='block';
}


const print =()=>{
    window.print();
}