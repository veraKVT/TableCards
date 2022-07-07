    let tableDynamic = [{
            chek: 'true',
            imgCompUrl: 'images/figma.png',
            companyData: [{
                companyName: 'Figma',
                companyUrl: 'https://www.figma.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
                }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/xd.png',
            companyData: [{
                companyName: 'Adobe XD',
                companyUrl: 'https://www.adobe.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
            }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{  
            chek: 'true',
            imgCompUrl: 'images/mailchimp.png',
            companyData: [{
                companyName: 'Mailchimp',
                companyUrl: 'https://mailchimp.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
            }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/x.png',
            companyData: [{
                companyName: 'WIX',
                companyUrl: 'https://www.wix.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
            }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/youtube.png',
            companyData: [{
                companyName: 'Youtube',
                companyUrl: 'https://www.youtube.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
            }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        }]


    function createDynamicTable(tableData){
        let myTable = document.createElement('table');
        let tableBody = document.createElement('tbody');        

        // for( let i=0; i < tableData.length; i++){
        //     let tableRows = document.createElement('tr');
        //     for(let key in tableData[i]){
        //         let cellData;
        //         if (key === 'chek'){
        //             cellData = "<td rowspan=\"2\"><input type=\"checkbox\" id=\"check\" value = " + tableData[i][key] + "></td>";
        //         } else if (key === "imgDotsUrl" || key === "imgCompUrl"){
        //             cellData = "<td rowspan=\"2\"><img src=" + tableData[i][key] + "></td>";
        //         } else if (Array.isArray(tableData[i][key]) === true){
        //             for(let name in tableData[i][key][0]){                        
        //                 cellData = "<td>"+tableData[i][key][0][name]+"</td>";
        //             }
        //         } else {
        //             cellData = "<td rowspan = \"2\">"+tableData[i][key]+"</td>";
        //         }
        //         tableRows.innerHTML += cellData;                     
        //     }
        //     tableBody.appendChild(tableRows);
        // }       


        for( let i=0; i < tableData.length; i++){
            let tableRows1 = document.createElement('tr');
            let tableRows2 = document.createElement('tr');
            for(let key in tableData[i]){
                let cellData1;
                let cellData2;
                if (key === 'chek'){
                    cellData1 = "<td rowspan=\"2\"><input type=\"checkbox\" id=\"check\" value = " + tableData[i][key] + "></td>";
                } else if (key === "imgDotsUrl" || key === "imgCompUrl"){
                    cellData1 = "<td rowspan=\"2\"><img src=" + tableData[i][key] + "></td>";
                } else if (Array.isArray(tableData[i][key]) === true){
                    for(let name in tableData[i][key][0]){
                        switch (name){
                            case 'companyName':
                                cellData1 = "<td>"+tableData[i][key][0].companyName +"</td>";
                                break;
                            case 'cardName':
                                cellData1 += "<td>"+tableData[i][key][0].cardName +"</td>";
                                break;
                            case 'userName':
                                cellData1 += "<td>"+tableData[i][key][0].userName +"</td>";
                                break;
                            case 'date':
                                cellData1 += "<td>"+tableData[i][key][0].date +"</td>";
                                break;
                            default:
                                cellData1 += "&nbsp";
                        } 
                    }                    
                } else {
                    cellData1 = "<td rowspan = \"2\">"+tableData[i][key]+"</td>";
                }
                               
                tableRows1.innerHTML += cellData1;
                
                if (Array.isArray(tableData[i][key]) === true){
                    for(let name in tableData[i][key][0]){
                        switch (name){
                            case 'companyUrl':
                                cellData1 = "<td>"+tableData[i][key][0].companyUrl +"</td>";
                                break;
                            case 'cardNum':
                                cellData1 += "<td>"+tableData[i][key][0].cardNum +"</td>";
                                break;
                            case 'userEmail':
                                cellData1 += "<td>"+tableData[i][key][0].userEmail +"</td>";
                                break;
                            case 'sum':
                                cellData1 += "<td>"+tableData[i][key][0].sum +"</td>";
                                break;
                            default:
                                cellData1 += "&nbsp";
                        }
                    }
                }             
                    
                tableRows2.innerHTML += cellData2;             
            }
            tableBody.appendChild(tableRows1);
            tableBody.appendChild(tableRows2);
        } 

        myTable.appendChild(tableBody);
        let placeForTable = document.getElementById("tableObjs");
        placeForTable.appendChild(myTable);            
    }
    

  createDynamicTable(tableDynamic);  





  // let tableCards = [
//      [' ','Name','User credentials','Last Transcation','Status','End date ','Total Used',' '],    
//      ['images/vector.png','images/figma.png','Figma','Visa', 'Itai Bracha', 'Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
//      ['https://www.figma.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
//      ['images/vector.png','images/xd.png','Adobe XD','Visa','Itai Bracha','Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
//      ['https://www.adobe.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
//      ['images/vector.png','images/mailchimp.png','Mailchimp','Visa','Itai Bracha','Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
//      ['https://mailchimp.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
//      ['images/vector.png','images/x.png','WIX','Visa','Itai Bracha','Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
//      ['https://www.wix.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
//      ['images/vector.png','images/youtube.png','Youtube','Visa','Itai Bracha','Jan 2,2022','Done','Jan 12,2022','$783.22','images/3dot.png'],
//      ['https://www.youtube.com/','***** 2468','Itai Bracha31@gmail.com','$783.22'],
//      ['images/num0.png','images/num1.png','images/num2.png','images/num3.png','images/num4.png',' ']
// ]  

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


     
    
    // function createThead(myArray) {
    //     let theadElement = "<thead>";
    //         theadElement += "<tr>";
    //         for(let j = 0; j < myArray[0].length; j++){
    //             if (j >= 1 && j <= 2) {
    //                 theadElement += "<th scope=\"col\" colspan=\"2\">"+myArray[0][j]+"</th>";
    //             } else {
    //                 theadElement += "<th scope=\"col\">"+myArray[0][j]+"</th>";
    //             }    
    //         }
    //         theadElement += "</tr>";
    //         theadElement += "</thead>";

    //     return theadElement;
    // }

    // function createTbody(myArray) {
    //     let tbodyElement = "<tbody>";
    //     for(let i = 1; i < myArray.length - 1; i++){
    //         tbodyElement += "<tr>";            
    //         for(let j = 0; j < myArray[i].length; j++){
    //             let x = myArray[i][j];
    //             if (x[x.length - 2] === 'n' && x[x.length - 1] === 'g'){
    //                  myArray[i][j] = '<img src=\"' + myArray[i][j] + '\" alt=\"\">';
    //             };

    //             if (j === 0 && i % 2 === 1 ) {
    //                 tbodyElement += "<th scope=\"row\" rowspan=\"2\">" + myArray[i][j]+"</th>";
    //             } else if (i % 2 === 1 && (j === 1 || j >= 6)) {
    //                 tbodyElement += "<td rowspan=\"2\">"+myArray[i][j]+"</td>";
    //             } else {
    //                 tbodyElement += "<td>"+myArray[i][j]+"</td>";
    //             }
    //         }        
    //         tbodyElement += "</tr>";
    //     }
    //     tbodyElement += "</tbody>";

    //     return tbodyElement;
    // }

    // function createTfoot(myArray) {
    //     let tfootElement = "<tfoot>";
    //         tfootElement += "<tr>";
    //         for(let j = 0; j < myArray[myArray.length - 1].length; j++){
    //             tfootElement += "<td>" +'<img src=\"' + myArray[[myArray.length - 1]][j] + '\" alt=\"\">'+ "</td>";
    //         }
    //         tfootElement += "</tr>";
    //         tfootElement += "</tfoot>";
        
    //     return tfootElement;
    // }

    // function makeTable(myArray) {
    //     let result = "<table border=0>";
    //     let x = createThead(myArray);
    //     let y = createTbody(myArray);
    //     let z = createTfoot(myArray);
    //     result = result + x + y + z + "</table>";
    
    //     return result;
    // };
    // let myTable = makeTable(tableCards);
    // let placeForTable = document.getElementById('javaTable');
    // placeForTable.insertAdjacentHTML('afterbegin', myTable);}