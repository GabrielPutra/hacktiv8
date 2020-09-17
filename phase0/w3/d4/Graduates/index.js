function graduates(students) {
    let output = {}
    
    for (let i=0; i<students.length; i++){
      let lulus = {}
      let kelas = students[i].class
  
    if(output[kelas] == undefined){
      output[kelas]= []
     
  }
   for (let key in output){
    if (key == kelas && students[i].score >75){
    
      lulus.name = students[i].name
      lulus.score = students[i].score
    }
    
   }
    if(lulus.score == undefined)
    continue
  
    output[kelas].push(lulus)
  }
  return output
  }
  
  
  console.log(
    graduates([
      {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
      },
      {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
      },
      {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
      },
      {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
      }
    ])
  )
  console.log(
    graduates([
      {
        name: 'Rin',
        score: 100,
        class: 'foxes'
      },
      {
        name: 'Saber',
        score: 80,
        class: 'wolves'
      },
      {
        name: 'Gilgamesh',
        score: 30,
        class: 'foxes'
      },
      {
        name: 'Ishtar',
        score: 50,
        class: 'wolves'
      }
    ])
  )
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(
    graduates([
      {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
      },
      {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
      },
      {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
      },
      {
        name: 'Albert',
        score: 71,
        class: 'wolves'
      },
      {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
      }
    ])
  )
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  console.log(graduates([])) //{}
  
  module.exports = graduates
  