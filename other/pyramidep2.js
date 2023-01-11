
// function pyramid(n) {
            
//     for(let i = 0 ; i < n  ; i++){
    
//         str = ''

//             for(let j = 0 ; j < n  ; j ++){
//                if( i + j === n- 3 || i + j === n + 1 ){
//                 //if(  i === j){
                    
//                     str += 'X'
//                }
//             //    else if(i && j !== 2) {   
//             //     str += 'O'
//             //    }
//                else{
//                 str += '-'
//                }

//             }
            
          
            
//             console.log( str)

//     }   

// }

// pyramid(5);


function pyramid(n) {
            
    for(let i = 1 ; i < n -1  ; i++){
    
        str = ''

            for(let j = 0 ; j < n  ; j ++){
                if( i + j === 3 ){
                    str += 'X'
                }else if(  i === j -1){
                    str += 'O'
                }
                else {
                    str += '-'
                }
            }
            
          
            
            console.log( str)

    }   

}

pyramid(5);