const students = [

    { 
        name: "Samuel" ,
        nota1: 7,
        nota2: 7
    },

    { 
        name: "Leticia",   
        nota1: 5,
        nota2: 4
    },
    
    { 
        name: "Jonas"   ,
        nota1: 10,
        nota2: 9
    },

    { 
        name: "Daniel"   ,
        nota1: 5,
        nota2: 6
    }, 
]

function studentMedia (student) 
{
alert(`
O estudante ${student.name} alcançou a média:
${media=((student.nota1 + student.nota2)/2)}
     `)
}

for (let student of students) {
studentMedia(student)

if(media>=7){
    alert(" aluno aprovado")
}
else{
    alert("aluno reprovado")
}
}