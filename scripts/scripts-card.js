let tableCards = [
     [' ','Name','User credentials','Last Transcation','Status','End date ','Total Used',' '],    
     ['images/vector.png','images/figma.png','Figma','Visa', 'Itai Bracha', 'Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
     ['https://www.figma.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
     ['images/vector.png','images/xd.png','Adobe XD','Visa','Itai Bracha','Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
     ['https://www.figma.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
     ['images/vector.png','images/mailchimp.png','Mailchimp','Visa','Itai Bracha','Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
     ['https://www.figma.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
     ['images/vector.png','images/x.png','WIX','Visa','Itai Bracha','Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
     ['https://www.figma.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
     ['images/vector.png','images/youtube.png','Youtube','Visa','Itai Bracha','Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
     ['images/num0.png','images/num1.png','images/num2.png','images/num3.png','images/num4.png']
]  

// let tableEcards = [
//     [[1],[2],[3],[4],[5],[6],[7],[8]],
//     [[10],[20],[30],[40],[50],[60],[70],[80]],
//     [[1],[2],[3],[4],[5],[6],[7],[8]],
//     [['1'],['2'],['3'],['4'],['5'],['6'],['7'],['8']]
// ];

// function createTable(tableData) {
//     debugger;    
//     let table = document.createElement('table');
//     let tableBody = document.createElement('tbody');
  
//     tableData.forEach(function(rowData) {
//       let row = document.createElement('tr');
  
//       rowData.forEach(function(cellData) {
//         let cell = document.createElement('td');
//         cell.appendChild(document.createTextNode(cellData));
//         row.appendChild(cell);
//       });
  
//       tableBody.appendChild(row);
//     });

//     table.appendChild(tableBody);

//     let placeForTable = document.getElementById('javaTable');    
//     placeForTable.appendChild(table);
    
// };

// createTable(tableEcards);



// function makeTable(myArray) {
//     let result = "<table border=1>";
//     for(let i = 0; i < myArray.length; i++) {
//         result += "<tr>";
//         for(let j = 0; j < myArray[i].length; j++){
//             result += "<td>"+myArray[i][j]+"</td>";
//         }
//         result += "</tr>";
//     }
//     result += "</table>";

//     return result;
// };
//     let myTable = makeTable(tableEcards);
//     let placeForTable = document.getElementById('javaTable');
//     placeForTable.insertAdjacentHTML('afterbegin', myTable);


     
    
    function createThead(myArray) {
        let theadElement = "<thead>";
        for(let i = 0; i < myArray[0].length; i++){
             
            for(let j = 0; j < myArray[i].length; j++){
                if (i === 0 && j >= 1 && j <= 2) {
                    theadElement += "<th scope=\"col\" colspan=\"2\">"+myArray[i][j]+"</th>";
                } else {
                    theadElement += "<th scope=\"col\">"+myArray[i][j]+"</th>";
                }    
            }
            theadElement += "</tr>";
        }
        theadElement += "</thead>";

        return theadElement;
    }

    function createTbody(myArray) {
        let tbodyElement = "<tbody>";
        for(let i = 0; i < myArray[10].length; i++){
            tbodyElement += "<tr>";
            for(let j = 0; j < myArray[i].length; j++){
                if (j === 0) {
                    tbodyElement += "<th scope=\"row\" rowspan=\"2\">"+myArray[i][j]+"</th>";
                } else if (i % 2 === 1 && j >= 2 && j <= 5) {
                    tbodyElement += "<td>"+myArray[i][j]+"</td>";
                } else {
                    tbodyElement += "<td rowspan=\"2\">"+myArray[i][j]+"</td>";
                }
            }
            tbodyElement += "</tr>";
        }
        tbodyElement += "</tbody>";

        return tbodyElement;
    }

    function createTfoot(myArray) {
        let tfootElement = "<tfoot>";
        for(let i = 0; i >= myArray.length; i++){
            tfootElement += "<tr>";
            for(let j = 0; j < myArray[i].length; j++){
                tfootElement += "<td colspan=\"10\">" +myArray[i][j]+ "</td>";
            }
            tfootElement += "</tr>";    
        }
        tfootElement += "</tfoot>";
        
        return tfootElement;
    }

    function makeTable(myArray) {
        let result = "<table border=1>";
        let x = createThead(myArray);
        let y = createTbody(myArray);
        let z = createTfoot(myArray);
        result = result + x + y + z + "</table>";
    
        return result;
    };
    let myTable = makeTable(tableCards);
    let placeForTable = document.getElementById('javaTable');
    placeForTable.insertAdjacentHTML('afterbegin', myTable);